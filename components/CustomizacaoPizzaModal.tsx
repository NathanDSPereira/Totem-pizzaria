import { Ingredientes } from "@/interface/Ingredientes"
import { Pizza } from "@/interface/Pizza"

import Image from "next/image"

export default function CustomizacaoPizzaModal({produto, fecharModal, todosOsIngredientes}: {produto: Pizza, fecharModal: () => void, todosOsIngredientes: Ingredientes[]}) {

    const ingredientesAtuais = (produto.ingredientesIds || [])
    .map((id) => todosOsIngredientes.find((ing) => ing.id === id))
    .filter((ing): ing is Ingredientes => Boolean(ing));

    return (
        <div className="fixed inset-0 bg-black/80 z-200 flex flex-col items-center justify-center md:flex-row w-full">
            <div className="w-full max-w-[90vw] h-full max-h-[90vh] bg-zinc-950 border border-zinc-800 rounded-[40px] shadow-2xl overflow-hidden flex flex-col md:flex-row">
                <div className="w-full md:w-5/12 bg-zinc-950 p-4 flex flex-col justify-between items-center border-r border-zinc-800">
                    <button onClick={fecharModal} className="self-start flex items-center gap-2 text-red-600 text-xl uppercase font-bold">
                        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-x-icon lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                    </button>

                    <div className="flex flex-col items-center">
                        <Image 
                            src={produto.imagem} 
                            alt={produto.nome}
                            width={230}
                            height={220}
                            className="md:w-80 md:h-80 object-contain drop-shadow-[0_35px_35px_rgba(255,255,255,0.1)]"
                        />
                        <h2 className="text-white text-4xl font-black italic uppercase tracking-tighter text-center">{produto.nome}</h2>
                        <p className="text-zinc-500 text-2xl text-center max-w-md mt-6 leading-relaxed">
                            {produto.descricao}
                        </p>
                    </div>
                    <div className="text-amber-500 text-4xl font-black italic">
                        R$ {produto.preco.toFixed(2)}
                    </div>
                </div>

                <div className="w-full md:w-7/12 bg-zinc-950 p-12 flex flex-col">
                    <div className="flex justify-center items-center">
                        <h3 className="text-white text-2xl font-bold uppercase mb-10 tracking-widest">Personalize seu pedido</h3>
                    </div>
                    
                    <ul className="flex-1 overflow-y-auto space-y-4 custom-scrollbar">
                        {ingredientesAtuais.map((ing) => (
                            <li key={ing.id} className="bg-zinc-900/50 border border-zinc-800 p-5 rounded-3xl flex justify-between items-center shadow-lg">
                                <p className="text-white text-2xl font-bold italic uppercase">{ing.nome}</p>
                                
                                <div className="flex items-center gap-8">
                                    <button className="w-16 h-16 rounded-2xl bg-zinc-800 flex items-center justify-center text-4xl text-zinc-400 hover:bg-red-500/20 hover:text-red-500 transition-all">
                                        −
                                    </button>
                                    <p className="text-white text-3xl font-black">1</p>
                                    <button className="w-16 h-16 rounded-2xl bg-amber-600 flex items-center justify-center text-4xl text-zinc-950 font-bold">
                                        +
                                    </button>
                                </div>
                            </li>
                        ))}

                        <div className="mt-10 p-4 bg-zinc-900 rounded-3xl border-2 border-dashed border-zinc-700">
                            <p className="text-zinc-500 font-bold mb-4 uppercase">Adicionar Extras</p>
                            <div className="flex justify-between items-center text-white text-2xl font-bold italic">
                                <p>Borda Recheada de Catupiry</p>
                                <p className="text-amber-500">+ R$ 15,00</p>
                            </div>
                        </div>
                    </ul>

                    <button className="mt-10 bg-amber-600 h-30 p-4 rounded-3xl flex justify-between w-full items-center active:scale-95 transition-all">
                        <p className="text-zinc-950 text-3xl font-black uppercase italic">Adicionar</p>
                        <p className="text-zinc-950 text-3xl font-black">R$ 134,90</p>
                    </button>
                </div>
            </div>
        </div>
    )
}