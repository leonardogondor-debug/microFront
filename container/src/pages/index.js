import { lazy, Suspense, useEffect, useState } from "react";

// O import() só é executado quando o componente é renderizado.
const Cardapio = lazy(() => import("cardapio/Cardapio"));
const Pedido = lazy(() => import("pedido/Pedido"));

export default function Home() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <main>
      <section>
        {/* Suspense mostra o fallback enquanto o micro é baixado da porta 3001 */}
        <Suspense fallback={<p className="p-4 text-center">Carregando cardápio...</p>}>
          <Cardapio />
        </Suspense>
      </section>

      <section>
        {/* O mesmo para o micro Pedido (porta 3002) */}
        <Suspense fallback={<p className="p-4 text-center">Carregando pedido...</p>}>
          <Pedido />
        </Suspense>
      </section>
    </main>
  );
}