import { ItemCarrinho } from "@/interface/ItemCarrinho";
import { useState } from "react";

export default function SelecionarQuantidadeExclusaoModal({confirmar, produtoARetirarCarrinho}: {confirmar: (quantidade: number) => void, produtoARetirarCarrinho: ItemCarrinho}) {

    const [quantidade, setQuantidade] = useState<number>(1);
    
    const limiteMaximo = produtoARetirarCarrinho.quantidadeCarrinho

    return (
        <section className="fixed insert-0 bg-black/40 backdrop-blur-sm z-300 w-full h-full flex items-center justify-center p-4">
            <div className="bg-zinc-950 border border-zinc-800 p-10 rounded-4xl shadow-2xl max-w-[70vw] w-[50vw] max-h-[70vh] h-[50vh] flex flex-col items-center">
                <div className="w-full h-full flex flex-col justify-around">
                    <div className="flex items-center justify-center text-center mb-5">
                        <h3 className="text-zinc-400 text-4xl font-bold tracking-tighter mb-2">
                            Selecione a quantidade que deseja excluir
                        </h3>
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