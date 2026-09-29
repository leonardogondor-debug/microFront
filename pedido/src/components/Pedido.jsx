import { useEffect, useState } from 'react';
// Escuta os eventos do Cardapio e mantem a lista de itens e o total.
export default function Pedido() {
    const [itens, setItens] = useState([]);

    useEffect(() => {
        // Chamada quando o Cardapio dispara "adicionarPedido".
        function handleAdicionar(evento) {
            setItens((atual) => [...atual, evento.detail]);
        }
         // Chamada quando o Cardapio dispara "adicionarRemover".
        function handleRemover(evento) {
            setItens((atual) => {
                //  Procura só a PRIMEIRA ocorrência do produto (remove uma unidade por clique).
                const index = atual.findIndex(i => i.nome === evento.detail.nome);
                if (index !== -1) {
                    const novo = [...atual];
                    novo.splice(index, 1);
                    return novo;
                }
                return atual;
            });
        }
        // Registra os listeners globais (comunicação entre micros)
        window.addEventListener('adicionarPedido', handleAdicionar);
        window.addEventListener('removerPedido', handleRemover);
        // Remove os listeners ao desmontar o componente
        return () => {
            window.removeEventListener('adicionarPedido', handleAdicionar);
            window.removeEventListener('removerPedido', handleRemover);
        };
    }, []);
    // Soma o preço de todos os itens
    const total = itens.reduce((soma, item) => soma + item.preco, 0);

    return (
        <div className="font-sans">
            <h2 className='text-2xl text-center bg-black text-white'>Meu Pedido</h2>
            {itens.length === 0 ? (
                <p>Nenhum item adicionado ainda.</p>
            ) : (
                <ul>
                    {itens.map((item, i) => (
                        <li className='text-lg p-4 m-2 border-2 border-black rounded' key={i}>
                            {item.nome} — R$ {item.preco.toFixed(2)}
                        </li>
                    ))}
                </ul>
            )}
            <strong className='m-2 text-xl'>Total: R$ {total.toFixed(2)}</strong>
        </div>
    );
}