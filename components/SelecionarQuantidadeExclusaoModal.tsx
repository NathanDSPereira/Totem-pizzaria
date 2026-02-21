import { ItemCarrinho } from "@/interface/ItemCarrinho";
import { useState } from "react";

export default function SelecionarQuantidadeExclusaoModal({confirmar, produtoARetirarCarrinho, setProdutoARetirarCarrinho}: {confirmar: (quantidade: number) => void, produtoARetirarCarrinho: ItemCarrinho, setProdutoARetirarCarrinho: (state: null) => void}) {

    const [quantidade, setQuantidade] = useState<number>(1);
    
    const limiteMaximo = produtoARetirarCarrinho.quantidadeCarrinho;

    const fecharModal = () => {
        setProdutoARetirarCarrinho(null);
    }

    return (
        <section className="fixed insert-0 bg-black/40 backdrop-blur-sm z-300 w-full h-full flex items-center justify-center">
            <div className="bg-zinc-950 border border-zinc-800 rounded-4xl shadow-2xl max-w-[90vw] w-[70vw] max-h-[90vh] h-[70vh] flex flex-col items-center">
                <div className="w-full h-full flex flex-col justify-center pb-6">
                    <div className="pt-8 pl-5 mb-4">
                        <div className="w-full">
                            <button onClick={() => fecharModal()} className="text-red-700 text-xl font-bold uppercase">
                                <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-x-icon lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                            </button>
                        </div>
                    </div>

                    <div className="flex flex-2 items-center justify-center flex-col gap-20">
                        <div className="mb-5 text-center">
                            <h3 className="text-slate-200 text-4xl font-bold letter-spacing tracking-wide mb-2">
                                Selecione a quantidade que deseja excluir
                            </h3>
                        </div>

                        <div className="flex justify-around gap-10 items-center">
                            <button 
                                onClick={() => {
                                    setQuantidade(Math.max(1, quantidade - 1))
                                }}
                                className="w-36 h-36 rounded-2xl bg-zinc-900 border border-zinc-800 text-6xl text-zinc-300 active:scale-90 transition-all">
                                -
                            </button>

                            <p className="text-6xl font-black text-slate-100 text-center">
                                {quantidade}
                            </p>

                            <button 
                                onClick={() => {
                                    setQuantidade(Math.min(limiteMaximo, quantidade + 1))
                                }}
                                className="w-36 h-36 rounded-2xl bg-amber-600 text-6xl text-zinc-950 active:scale-90 transition-all">
                                +
                            </button>
                        </div>

                        <div className="mb-10">
                            <button
                                onClick={() => confirmar(quantidade)} 
                                className="w-80 h-32 font-bold rounded-2xl bg-amber-600 text-4xl text-zinc-950 active:scale-90 transition-all">
                                Confirmar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}