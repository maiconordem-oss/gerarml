import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Loader2, Sparkles, Tag, FileText, ListChecks, Hash, FolderTree } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";
import { CopyButton } from "@/components/CopyButton";
import { gerarAnuncio, type AnuncioGerado } from "@/server/anuncio.functions";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Gerador de Anúncios — Mercado Livre" },
      {
        name: "description",
        content:
          "Cole o título e a descrição do produto e gere automaticamente título otimizado, ficha técnica, descrição e palavras-chave para o Mercado Livre.",
      },
    ],
  }),
});

function Index() {
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [loading, setLoading] = useState(false);
  const [resultado, setResultado] = useState<AnuncioGerado | null>(null);

  const fichaTexto = useMemo(() => {
    if (!resultado) return "";
    return resultado.ficha_tecnica.map((f) => `${f.atributo}: ${f.valor}`).join("\n");
  }, [resultado]);

  const bulletsTexto = useMemo(
    () => (resultado ? resultado.bullets.map((b) => `• ${b}`).join("\n") : ""),
    [resultado],
  );

  const keywordsTexto = useMemo(
    () => (resultado ? resultado.palavras_chave.join(", ") : ""),
    [resultado],
  );

  const onGerar = async () => {
    if (titulo.trim().length < 3 || descricao.trim().length < 10) {
      toast.error("Preencha um título e uma descrição válidos.");
      return;
    }
    setLoading(true);
    setResultado(null);
    try {
      const data = await gerarAnuncio({ data: { titulo, descricao } });
      setResultado(data);
      toast.success("Anúncio gerado!");
    } catch (err) {
      const msg = err instanceof Error ? err.message : "Erro inesperado.";
      toast.error(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Toaster richColors position="top-center" />

      <header
        className="border-b border-border"
        style={{ background: "var(--gradient-hero)" }}
      >
        <div className="mx-auto max-w-6xl px-6 py-10">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-secondary text-secondary-foreground shadow-[var(--shadow-soft)]">
              <Sparkles className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-foreground/70">
                Mercado Livre
              </p>
              <h1 className="text-3xl font-bold text-foreground sm:text-4xl">
                Gerador de Anúncios
              </h1>
            </div>
          </div>
          <p className="mt-3 max-w-2xl text-sm text-foreground/80 sm:text-base">
            Cole o título e a descrição do produto. A IA devolve título otimizado, ficha
            técnica, descrição persuasiva, bullets e palavras-chave — prontos para colar.
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-8">
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Inputs */}
          <Card
            className="border-border shadow-[var(--shadow-soft)]"
            style={{ background: "var(--gradient-card)" }}
          >
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <FileText className="h-5 w-5 text-secondary" />
                Conteúdo bruto
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="mb-2 block text-sm font-medium text-foreground">
                  Título do produto
                </label>
                <Textarea
                  placeholder="Ex.: Fone Bluetooth JBL Tune 510BT Original Sem Fio"
                  value={titulo}
                  onChange={(e) => setTitulo(e.target.value)}
                  className="min-h-[64px] resize-none"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-foreground">
                  Descrição do produto
                </label>
                <Textarea
                  placeholder="Cole aqui a descrição completa: características, marca, modelo, voltagem, garantia, o que vem na caixa..."
                  value={descricao}
                  onChange={(e) => setDescricao(e.target.value)}
                  className="min-h-[280px]"
                />
              </div>
              <Button
                onClick={onGerar}
                disabled={loading}
                className="w-full font-semibold"
                size="lg"
              >
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Gerando…
                  </>
                ) : (
                  <>
                    <Sparkles className="mr-2 h-4 w-4" />
                    Gerar anúncio
                  </>
                )}
              </Button>
            </CardContent>
          </Card>

          {/* Resultado */}
          <div className="space-y-6">
            {!resultado && !loading && (
              <Card className="border-dashed border-border">
                <CardContent className="flex min-h-[420px] flex-col items-center justify-center gap-3 text-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/30">
                    <Sparkles className="h-6 w-6 text-secondary" />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    O resultado estruturado aparecerá aqui.
                  </p>
                </CardContent>
              </Card>
            )}

            {loading && (
              <Card>
                <CardContent className="flex min-h-[420px] flex-col items-center justify-center gap-3 text-center">
                  <Loader2 className="h-8 w-8 animate-spin text-secondary" />
                  <p className="text-sm text-muted-foreground">
                    Analisando e estruturando o anúncio…
                  </p>
                </CardContent>
              </Card>
            )}

            {resultado && <Resultado resultado={resultado} fichaTexto={fichaTexto} bulletsTexto={bulletsTexto} keywordsTexto={keywordsTexto} />}
          </div>
        </div>
      </main>

      <footer className="border-t border-border py-6 text-center text-xs text-muted-foreground">
        Não afiliado ao Mercado Livre. Use as sugestões revisando antes de publicar.
      </footer>
    </div>
  );
}

function Resultado({
  resultado,
  fichaTexto,
  bulletsTexto,
  keywordsTexto,
}: {
  resultado: AnuncioGerado;
  fichaTexto: string;
  bulletsTexto: string;
  keywordsTexto: string;
}) {
  return (
    <div className="space-y-4">
      <Card className="shadow-[var(--shadow-soft)]">
        <CardHeader className="flex flex-row items-start justify-between gap-2 space-y-0">
          <CardTitle className="flex items-center gap-2 text-base">
            <Tag className="h-4 w-4 text-secondary" />
            Título otimizado
            <Badge variant="secondary" className="ml-2 font-mono text-[10px]">
              {resultado.titulo_otimizado.length}/60
            </Badge>
          </CardTitle>
          <CopyButton text={resultado.titulo_otimizado} />
        </CardHeader>
        <CardContent>
          <p className="rounded-md bg-muted p-3 text-sm font-medium text-foreground">
            {resultado.titulo_otimizado}
          </p>
        </CardContent>
      </Card>

      <Card className="shadow-[var(--shadow-soft)]">
        <CardHeader className="flex flex-row items-start justify-between gap-2 space-y-0">
          <CardTitle className="flex items-center gap-2 text-base">
            <FolderTree className="h-4 w-4 text-secondary" />
            Categoria sugerida
          </CardTitle>
          <CopyButton text={resultado.categoria_sugerida} />
        </CardHeader>
        <CardContent>
          <p className="text-sm text-foreground">{resultado.categoria_sugerida}</p>
        </CardContent>
      </Card>

      <Card className="shadow-[var(--shadow-soft)]">
        <CardHeader className="flex flex-row items-start justify-between gap-2 space-y-0">
          <CardTitle className="flex items-center gap-2 text-base">
            <ListChecks className="h-4 w-4 text-secondary" />
            Ficha técnica
          </CardTitle>
          <CopyButton text={fichaTexto} />
        </CardHeader>
        <CardContent>
          <div className="overflow-hidden rounded-md border border-border">
            {resultado.ficha_tecnica.map((f, i) => (
              <div
                key={`${f.atributo}-${i}`}
                className="grid grid-cols-[140px_1fr] gap-3 border-b border-border bg-card px-3 py-2 text-sm last:border-0 even:bg-muted/40"
              >
                <span className="font-medium text-muted-foreground">{f.atributo}</span>
                <span className="text-foreground">{f.valor}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="shadow-[var(--shadow-soft)]">
        <CardHeader className="flex flex-row items-start justify-between gap-2 space-y-0">
          <CardTitle className="flex items-center gap-2 text-base">
            <Sparkles className="h-4 w-4 text-secondary" />
            Bullets de destaque
          </CardTitle>
          <CopyButton text={bulletsTexto} />
        </CardHeader>
        <CardContent>
          <ul className="space-y-1.5">
            {resultado.bullets.map((b, i) => (
              <li key={i} className="flex gap-2 text-sm text-foreground">
                <span className="text-secondary">•</span>
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <Card className="shadow-[var(--shadow-soft)]">
        <CardHeader className="flex flex-row items-start justify-between gap-2 space-y-0">
          <CardTitle className="flex items-center gap-2 text-base">
            <FileText className="h-4 w-4 text-secondary" />
            Descrição formatada
          </CardTitle>
          <CopyButton text={resultado.descricao_formatada} />
        </CardHeader>
        <CardContent>
          <pre className="max-h-[360px] overflow-auto whitespace-pre-wrap rounded-md bg-muted p-3 text-sm leading-relaxed text-foreground font-sans">
            {resultado.descricao_formatada}
          </pre>
        </CardContent>
      </Card>

      <Card className="shadow-[var(--shadow-soft)]">
        <CardHeader className="flex flex-row items-start justify-between gap-2 space-y-0">
          <CardTitle className="flex items-center gap-2 text-base">
            <Hash className="h-4 w-4 text-secondary" />
            Palavras-chave SEO
          </CardTitle>
          <CopyButton text={keywordsTexto} />
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-1.5">
            {resultado.palavras_chave.map((k, i) => (
              <Badge key={i} variant="outline" className="bg-primary/30 text-foreground">
                {k}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
}
