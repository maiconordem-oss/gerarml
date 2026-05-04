import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const InputSchema = z.object({
  titulo: z.string().min(3).max(500),
  descricao: z.string().min(10).max(8000),
});

export type AnuncioGerado = {
  titulo_otimizado: string;
  categoria_sugerida: string;
  descricao_formatada: string;
  ficha_tecnica: { atributo: string; valor: string }[];
  bullets: string[];
  palavras_chave: string[];
};

const SYSTEM_PROMPT = `Você é um especialista em criar anúncios de alta conversão para o Mercado Livre Brasil.
Receberá um título e uma descrição brutos de um produto. Sua tarefa é extrair e gerar informações estruturadas, prontas para preencher um anúncio.

Regras:
- Título otimizado: até 60 caracteres, formato "Marca + Modelo + Características-chave + Diferencial". Sem emojis, sem caracteres especiais, sem CAIXA ALTA exagerada.
- Categoria sugerida: caminho mais provável no Mercado Livre (ex: "Eletrônicos > Áudio > Fones de Ouvido").
- Descrição formatada: texto persuasivo em português brasileiro, com seções claras (Sobre o produto, Principais características, O que vem na caixa, Garantia). Use quebras de linha simples — sem markdown.
- Ficha técnica: 5 a 12 pares atributo/valor extraídos ou inferidos com segurança (Marca, Modelo, Cor, Material, Dimensões, Peso, Voltagem etc.). Não invente dados sensíveis.
- Bullets: 5 a 7 destaques curtos (até 80 caracteres cada), focados em benefício.
- Palavras-chave: 8 a 15 termos de busca relevantes para SEO no ML, em letras minúsculas.
- Se faltar informação, deixe o campo vazio em vez de inventar.`;

export const gerarAnuncio = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => InputSchema.parse(data))
  .handler(async ({ data }): Promise<AnuncioGerado> => {
    const apiKey = process.env.LOVABLE_API_KEY;
    if (!apiKey) throw new Error("LOVABLE_API_KEY não configurada.");

    const userPrompt = `TÍTULO BRUTO:\n${data.titulo}\n\nDESCRIÇÃO BRUTA:\n${data.descricao}`;

    const tool = {
      type: "function",
      function: {
        name: "gerar_anuncio_ml",
        description: "Retorna o conteúdo estruturado de um anúncio do Mercado Livre.",
        parameters: {
          type: "object",
          properties: {
            titulo_otimizado: { type: "string", description: "Título de até 60 caracteres." },
            categoria_sugerida: { type: "string", description: "Caminho de categoria do ML." },
            descricao_formatada: { type: "string", description: "Descrição completa pronta para colar." },
            ficha_tecnica: {
              type: "array",
              items: {
                type: "object",
                properties: {
                  atributo: { type: "string" },
                  valor: { type: "string" },
                },
                required: ["atributo", "valor"],
                additionalProperties: false,
              },
            },
            bullets: { type: "array", items: { type: "string" } },
            palavras_chave: { type: "array", items: { type: "string" } },
          },
          required: [
            "titulo_otimizado",
            "categoria_sugerida",
            "descricao_formatada",
            "ficha_tecnica",
            "bullets",
            "palavras_chave",
          ],
          additionalProperties: false,
        },
      },
    };

    const resp = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-3-flash-preview",
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          { role: "user", content: userPrompt },
        ],
        tools: [tool],
        tool_choice: { type: "function", function: { name: "gerar_anuncio_ml" } },
      }),
    });

    if (resp.status === 429) {
      throw new Error("Muitas requisições em pouco tempo. Tente novamente em instantes.");
    }
    if (resp.status === 402) {
      throw new Error("Créditos de IA esgotados. Adicione créditos em Settings → Workspace → Usage.");
    }
    if (!resp.ok) {
      const t = await resp.text();
      console.error("AI gateway error:", resp.status, t);
      throw new Error("Erro ao gerar anúncio. Tente novamente.");
    }

    const json = await resp.json();
    const call = json?.choices?.[0]?.message?.tool_calls?.[0];
    const args = call?.function?.arguments;
    if (!args) throw new Error("Resposta da IA sem dados estruturados.");

    const parsed = JSON.parse(args) as AnuncioGerado;
    return parsed;
  });