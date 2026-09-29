# Sistema de Pedidos com Micro Frontends

Aplicacao de pedidos dividiva em tres projetos independentes integrados com **Webpack Module Federation** ('@module-federation/nextjs-mf') e **Next.js 13 (Pages Rouster)**.

## Como rodar

Em cada pasta (`cardapio`, `pedido` e `container`), em terminais separados:

```bash
npm install
npm run dev
```

Ordem recomendada: **cardapio - pedido - container**, pois o container carrega os micros em tempo de execução a partir das portas 3001 e 3002.

Depois acesse:
```bash
http://localhost:3000.
```

## Como se comunicam os micros

A comunicação é feita por **eventos globais no navegador**:

1. O **Cardapio** dispara `window.dispatchEvent(new CustomEvent("adicionarPedido", { detail: produto }))`
  (ou `"removerPedido"`).

2. O **Pedido** escuta esses eventos com `window.addEventListener` e atualiza a sua lista.

Como ambos rodam na mesma página (`window`), o evento chega sem nenhuma dependencia direta entre os projetos.

## Tecnologias

ext.js 13.4.19 (Pages Router), React 18.2, Module Federation (nextjs-mf 8.8.38), Tailwind CSS 4.