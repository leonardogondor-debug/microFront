// Lista de produtos e botões que avisam o Pedido via eventos globais.
export default function Cardapio() {

    const produtos = [
        { nome: "Maçã", descricao: "Fruta fresca e crocante", preco: 3.5 },
        { nome: "Pão", descricao: "Fonte de fibras e energia", preco: 6.0 },
        { nome: "Queijo", descricao: "Queijo macio e saboroso", preco: 25.0 },
        { nome: "Arroz", descricao: "Grãos selecionados e soltinhos", preco: 18.0 },
        { nome: "Tomate", descricao: "Legume rico em vitaminas", preco: 4.2 }
    ];
    return (
        <>
            <h2 className="text-4xl text-center p-4 bg-black text-white">Cardapio</h2>
            <ul>
                {
                    produtos.map((p, index) => (
                        <li key={index} className="font-sans text-lg p-4 m-2 border-2 border-black rounded lg:flex lg:flex-row lg:justify-between items-center">
                            <div className="p-4">
                                <strong>{p.nome}</strong> - {p.descricao}
                                <span> | R$ {p.preco.toFixed(2)}</span>
                            </div>
                            <div className="mr-3">
                                {/* Comunicação entre micros: dispara eventos globais o pedido escuta esses eventos e adiciona ou remove o item da lista.*/}
                                <button className="w-full lg:w-30 bg-green-500 hover:bg-green-700 pt-2 pb-2 m-2 border-2 border-black rounded" onClick={() => {
                                    window.dispatchEvent(new CustomEvent("adicionarPedido", { detail: p }))
                                }}>Adicionar</button>
                                <button className="w-full lg:w-30 bg-red-500 hover:bg-red-700 pt-2 pb-2 m-2 border-2 border-black rounded" onClick={() => {
                                    window.dispatchEvent(new CustomEvent("removerPedido", { detail: p }))
                                }}>Remover</button>
                            </div>
                        </li>
                    ))
                }
            </ul >
        </>
    )
}

