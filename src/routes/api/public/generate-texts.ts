import { createFileRoute } from "@tanstack/react-router";

const ICON_LIST = [
  "gear", "shield", "tools", "target", "feather", "check", "alert",
  "star", "ruler", "bolt", "leaf", "diamond", "package", "truck",
] as const;

const TEXT_KEYS = [
  "p2_f1_title", "p2_f1_text",
  "p2_f2_title", "p2_f2_text",
  "p2_f3_title", "p2_f3_text",
  "p2_f4_title", "p2_f4_text",
  "p2_callout_title", "p2_callout_text",
  "p3_title_a", "p3_title_b", "p3_title_c", "p3_title_pill",
  "p3_f1_title", "p3_f1_text",
  "p3_f2_title", "p3_f2_text",
  "p3_f3_title", "p3_f3_text",
  "p3_f4_title", "p3_f4_text",
  "p3_dim1", "p3_dim2", "p3_dim3",
  "p3_callout_title", "p3_callout_text",
  "p4_title_a", "p4_title_b", "p4_title_c", "p4_title_pill",
  "p4_b1_title", "p4_b1_text",
  "p4_b2_title", "p4_b2_text",
  "p4_callout_title", "p4_callout_text",
] as const;

const ICON_KEYS = [
  "p2_ic1", "p2_ic2", "p2_ic3", "p2_ic4",
  "p3_ic1", "p3_ic2", "p3_ic3", "p3_ic4",
  "p4_ic1", "p4_ic2",
] as const;

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

export const Route = createFileRoute("/api/public/generate-texts")({
  server: {
    handlers: {
      OPTIONS: () => new Response(null, { headers: corsHeaders }),
      POST: async ({ request }) => {
        try {
          const { productName, category, extras } = await request.json();
          if (!productName || typeof productName !== "string") {
            return new Response(JSON.stringify({ error: "productName é obrigatório" }), {
              status: 400,
              headers: { ...corsHeaders, "Content-Type": "application/json" },
            });
          }

          const apiKey = process.env.LOVABLE_API_KEY;
          if (!apiKey) {
            return new Response(JSON.stringify({ error: "LOVABLE_API_KEY não configurado" }), {
              status: 500,
              headers: { ...corsHeaders, "Content-Type": "application/json" },
            });
          }

          const systemPrompt = `Você gera textos de marketing para anúncios do Mercado Livre em PT-BR. Use linguagem persuasiva, técnica e objetiva. Para CADA bloco de feature, escolha um ícone da lista que combine com o tema do texto: ${ICON_LIST.join(", ")}.
Sugestão de uso semântico:
- gear: motor, mecanismo, ajustes
- shield: proteção, segurança, garantia
- tools: instalação, ferramentas, manutenção
- target: precisão, foco, mira
- feather: leveza, peso reduzido
- check: aprovado, certificado, qualidade
- alert: atenção, aviso
- star: premium, top, destaque
- ruler: medidas, dimensões
- bolt: potência, energia, rapidez
- leaf: ecológico, natural
- diamond: luxo, alta qualidade
- package: embalagem, conteúdo, kit
- truck: entrega, frete, envio`;

          const userPrompt = `Produto: "${productName}"
Categoria: "${category || "produto"}"
Detalhes extras: "${extras || "nenhum"}"

Gere os textos seguindo as regras:
- Títulos de feature: 1-3 palavras com dois pontos no fim
- Textos de feature: frase curta 6-10 palavras
- Callouts: título 4-6 palavras + frase 8-12 palavras
- p3_title_a / p3_title_b (highlight verde) / p3_title_c em MAIÚSCULAS
- p3_title_pill: valor numérico+unidade (ex: 900KG, 5 ANOS)
- p3_dim1/2/3: dimensões (ex: 60cm)
- p4_title_a/b (highlight verde)/c/pill em MAIÚSCULAS
- Para cada chave de ícone, escolha o nome mais coerente com o texto da feature correspondente.`;

          const properties: Record<string, { type: string; description: string; enum?: readonly string[] }> = {};
          for (const k of TEXT_KEYS) properties[k] = { type: "string", description: k };
          for (const k of ICON_KEYS) properties[k] = { type: "string", enum: ICON_LIST, description: `ícone para ${k}` };

          const required = [...TEXT_KEYS, ...ICON_KEYS];

          const resp = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
            method: "POST",
            headers: {
              Authorization: `Bearer ${apiKey}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              model: "openai/gpt-5-mini",
              messages: [
                { role: "system", content: systemPrompt },
                { role: "user", content: userPrompt },
              ],
              tools: [
                {
                  type: "function",
                  function: {
                    name: "emit_ad_content",
                    description: "Retorna textos e ícones para o anúncio",
                    parameters: {
                      type: "object",
                      properties,
                      required,
                      additionalProperties: false,
                    },
                  },
                },
              ],
              tool_choice: { type: "function", function: { name: "emit_ad_content" } },
            }),
          });

          if (!resp.ok) {
            const txt = await resp.text();
            const status = resp.status === 429 || resp.status === 402 ? resp.status : 500;
            const msg =
              resp.status === 429
                ? "Limite de requisições atingido. Tente novamente em instantes."
                : resp.status === 402
                  ? "Créditos esgotados. Adicione créditos em Settings → Workspace → Usage."
                  : `Erro IA: ${txt.slice(0, 200)}`;
            return new Response(JSON.stringify({ error: msg }), {
              status,
              headers: { ...corsHeaders, "Content-Type": "application/json" },
            });
          }

          const data = await resp.json();
          const call = data?.choices?.[0]?.message?.tool_calls?.[0];
          const argsStr = call?.function?.arguments;
          if (!argsStr) {
            return new Response(JSON.stringify({ error: "Resposta sem tool_call" }), {
              status: 500,
              headers: { ...corsHeaders, "Content-Type": "application/json" },
            });
          }
          const args = JSON.parse(argsStr);
          return new Response(JSON.stringify(args), {
            headers: { ...corsHeaders, "Content-Type": "application/json" },
          });
        } catch (e) {
          return new Response(
            JSON.stringify({ error: e instanceof Error ? e.message : "Erro desconhecido" }),
            { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } },
          );
        }
      },
    },
  },
});