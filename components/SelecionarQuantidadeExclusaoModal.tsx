import { ItemCarrinho } from "@/interface/ItemCarrinho";
import { useState } from "react";

export default function SelecionarQuantidadeExclusaoModal({confirmar, produtoARetirarCarrinho, setProdutoARetirarCarrinho}: {confirmar: (quantidade: number) => void, produtoARetirarCarrinho: ItemCarrinho, setProdutoARetirarCarrinho: (state: null) => void}) {

    const [quantidade, setQuantidade] = useState<number>(1);
    
    const limiteMaximo = produtoARetirarCarrinho.quantidadeCarrinho;

    const fecharModal = () => {
        setProdutoARetirarCarrinho(null);
    }

    return (
        <section className="fixed insert-0 bg-black/40 backdrop-blur-sm z-300 w-full h-full flex items-center justify-center p-4">
            <div className="bg-zinc-950 border border-zinc-800 rounded-4xl shadow-2xl max-w-[70vw] w-[50vw] max-h-[70vh] h-[50vh] flex flex-col items-center">
                <div className="w-full h-full flex flex-col gap-15 pb-6">
                    <div className="p-4">
                        <div className="w-full">
                            <button onClick={() => fecharModal()} className="text-red-700 text-xl font-bold uppercase">
                                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-x-icon lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                            </button>
                        </div>
                        <div className="flex items-center justify-center text-center mb-5">
                            <h3 className="text-zinc-400 text-4xl font-bold tracking-tighter mb-2">
                                Selecione a quantidade que deseja excluir
                            </h3>
                        </div>
                    </div>

                    <div className="flex items-center justify-center gap-10">
                        <button 
                            onClick={() => {
                                setQuantidade(Math.max(1, quantidade - 1))
                            }}
                            className="w-20 h-20 rounded-2xl bg-zinc-900 border border-zinc-800 text-5xl text-zinc-300 active:scale-90 transition-all">
                            -
                        </button>

                        <p className="text-5xl font-black text-slate-100 text-center">
                            {quantidade}
                        </p>

                        <button 
                            onClick={() => {
                                setQuantidade(Math.min(limiteMaximo, quantidade + 1))
                            }}
                            className="w-20 h-20 rounded-2xl bg-amber-600 text-5xl text-zinc-950 active:scale-90 transition-all">
                            +
                        </button>
                    </div>

                    <div className="flex items-center justify-center">
                        <button
                            onClick={() => confirmar(quantidade)} 
                            className="w-80 h-20 font-bold rounded-2xl bg-amber-600 text-3xl text-zinc-950 active:scale-90 transition-all">
                            Confirmar
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}