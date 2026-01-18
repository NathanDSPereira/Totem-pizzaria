import { Pizza } from "@/interface/Pizza"

export default function CarrinhoModal({itens, fechar, remover, total}: {itens: Pizza[], fechar: () => void, remover: (id: string) => void, total: number}) {
    return (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-100 flex justify-end">
            <div className="w-125 bg-zinc-950 h-full border-l border-zinc-900 p-8 flex flex-col animate-in slide-in-from-right duration-300">
                
                <div className="flex justify-between items-center mb-10">
                    <h2 className="text-white text-3xl font-black uppercase">Meus Pedidos</h2>
                    <button onClick={fechar} className="text-red-700 text-xl font-bold uppercase">
                        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-x-icon lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                    </button>
                </div>

                <ul className="flex-1 overflow-y-auto flex flex-col gap-6">
                    {itens.map((item) => (
                        <li key={item.id} className="flex justify-between items-center border-b border-zinc-900 pb-6">
                            <div className="flex flex-col">
                                <span className="text-white font-bold text-lg">{item.quantidade}x {item.nome}</span>
                                <span className="text-orange-500 font-bold">R$ {(item.preco * item.quantidade).toFixed(2).replace('.', ',')}</span>
                            </div>
                            <button 
                                onClick={() => remover(item.id)}
                                className="bg-red-500/10 text-red-500 p-3 rounded-xl hover:bg-red-500 hover:text-white transition-colors"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-x-icon lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                            </button>
                        </li>
                    ))}
                </ul>

                <div className="mt-auto pt-8 border-t border-zinc-800">
                    <div className="flex justify-between items-center mb-8">
                        <span className="text-zinc-500 text-xl font-bold uppercase">Total</span>
                        <span className=" text-slate-50 text-4xl font-black">R$ {total.toFixed(2).replace('.', ',')}</span>
                    </div>
                    
                    <button className="w-full bg-amber-600 text-black font-black py-6 rounded-2xl text-2xl uppercase shadow-lg shadow-amber-900/20 active:scale-95 transition-all">
                        Confirmar e Pagar
                    </button>
                </div>
            </div>
        </div>
    )
}