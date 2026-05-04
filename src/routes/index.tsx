import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Modelo de Anúncios — Mercado Livre" },
      {
        name: "description",
        content:
          "Gerador de fotos de anúncio para o Mercado Livre — capa, destaques, garantia e mais.",
      },
    ],
  }),
});

function Index() {
  // The full app lives as a self-contained HTML in /public/anuncios/index.html
  // (React + Babel via CDN, original scripts preserved). Redirect there.
  useEffect(() => {
    window.location.replace("/anuncios/index.html");
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#ECECEC",
        fontFamily: "system-ui, sans-serif",
        color: "#4A4A4A",
        fontSize: 14,
      }}
    >
      Abrindo o gerador…
    </div>
  );
}
