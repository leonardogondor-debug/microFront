# Container App

Aplicação principal (prta **3000**) apenas carrega e organiza os micros frontends **Cardápio** e **Pedido**.

## Como rodar

```bash
npm install
npm run dev
```

Acesse aqui:
```bash
http://localhost:3000.
```

> Os micros `cardapio` (3001) e `pedido` (3002) precisam estar rodando, senão os componentes não aparecem.

## Como funciona

- O `next.config.js` configura o Module Federation com os `remotes`:
- `cardapio` → `http://localhost:3001/_next/static/chunks/remoteEntry.js`
- `pedido` → `http://localhost:3002/_next/static/chunks/remoteEntry.js`
- Em `src/pages/index.js` os micros são importados com `React.lazy` e envolvidos
em `Suspense` (com mensagem de carregamento). A renderização acontece apenas
no cliente, pois os componentes dependem de `window`.