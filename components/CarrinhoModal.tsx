import { ItemCarrinho } from "@/interface/ItemCarrinho"
import CarrinhoItemCard from "./CarrinhoItemCard"
import { Ingredientes } from "@/interface/Ingredientes"

export default function CarrinhoModal({itens, fechar, remover, total, todosOsIngredientes, editarProduto, iniciarFinalizacao}: {itens: ItemCarrinho[], fechar: () => void, remover: (produto: ItemCarrinho) => void, total: number, todosOsIngredientes: Ingredientes[], editarProduto: (produto: ItemCarrinho) => void, iniciarFinalizacao: () => void}) {
    return (
        <section className="fixed inset-0 bg-black/80 backdrop-blur-sm z-100 flex justify-end">
            <div className="w-125 bg-zinc-950 h-full border-l border-zinc-900 p-8 flex flex-col animate-in slide-in-from-right duration-300">
                
                <div className="flex justify-between items-center mb-10">
                    <h2 className="text-slate-100 text-4xl font-black uppercase">Meus Pedidos</h2>
                    <button onClick={fechar} className="text-red-700 text-xl font-bold uppercase">
                        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-x-icon lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                    </button>
                </div>


                {itens.length === 0 && (
                    <div className="flex-1 flex items-center justify-center">
                        <p className="text-zinc-500 text-2xl font-bold">Que tal adicionar uma pizza?</p>
                    </div>
                )} 
                
                {itens.length > 0 && (
                    <ul className="flex-1 overflow-y-auto flex flex-col gap-6 custom-scrollbar pb-10">
                        {itens.map((item) => (
                            <li key={item.cartId} className="border-b border-zinc-900">
                                <CarrinhoItemCard
                                    key={item.cartId}
                                    editarProduto={editarProduto}
                                    carrinhoItem={item} 
                                    remover={remover} 
                                    todosOsIngredientes={todosOsIngredientes}
                                />
                            </li>
                        ))}
                    </ul>
                )}

                <div className="mt-auto pt-8 border-t border-zinc-800">
                    <div className="flex justify-between items-center mb-8">
                        <p className="text-zinc-500 text-xl font-bold uppercase">Total</p>
                        <p className=" text-slate-50 text-4xl font-black">R$ {total.toFixed(2).replace('.', ',')}</p>
                    </div>
                    
                    <button 
                        disabled={itens.length === 0}
                        onClick={iniciarFinalizacao}
                        className={`w-full font-black py-6 rounded-2xl text-2xl uppercase shadow-lg transition-all 
                            ${itens.length === 0 
                                ? 'bg-zinc-800 text-zinc-500 cursor-not-allowed opacity-50 shadow-none' 
                                : 'bg-amber-600 text-black shadow-amber-900/20 active:scale-95'}
                            `}>
                        Confirmar e Pagar
                    </button>
                </div>
            </div>
        </section>
    )
}