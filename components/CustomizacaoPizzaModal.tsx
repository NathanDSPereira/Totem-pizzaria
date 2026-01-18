import { Ingredientes } from "@/interface/Ingredientes"
import { Pizza } from "@/interface/Pizza"

import Image from "next/image"

export default function CustomizacaoPizzaModal({produto, fecharModal, todosOsIngredientes}: {produto: Pizza, fecharModal: () => void, todosOsIngredientes: Ingredientes[]}) {

    const ingredientesAtuais = (produto.ingredientesIds || [])
    .map((id) => todosOsIngredientes.find((ing) => ing.id === id))
    .filter((ing): ing is Ingredientes => Boolean(ing));

    return (
        <div className="fixed inset-0 bg-black z-150 flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 bg-zinc-950 p-12 flex flex-col justify-between items-center border-r border-zinc-800">
                <button onClick={fecharModal} className="self-start flex items-center gap-2 text-red-600 text-xl uppercase font-bold">
                    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-x-icon lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                </button>

                <div className="flex flex-col items-center">
                    <Image 
                        src={produto.imagem} 
                        alt={produto.nome}
                        width={500}
                        height={500}
                        className="w-112.5 h-112.5 object-cover drop-shadow-[0_35px_35px_rgba(255,255,255,0.1)] mb-10" 
                    />
                    <h2 className="text-white text-6xl font-black italic uppercase tracking-tighter text-center">{produto.nome}</h2>
                    <p className="text-zinc-500 text-2xl text-center max-w-md mt-6 leading-relaxed">
                        {produto.descricao}
                    </p>
                    </div>
                    <div className="text-amber-500 text-5xl font-black italic">
                        R$ {produto.preco.toFixed(2)}
                    </div>
                </div>

            <div className="w-full md:w-1/2 bg-black p-12 flex flex-col">
                <h3 className="text-white text-3xl font-bold uppercase mb-10 tracking-widest">Personalize seu pedido</h3>
                
                <ul className="flex-1 overflow-y-auto pr-4 space-y-6 custom-scrollbar">
                    {ingredientesAtuais.map((ing) => (
                        <li key={ing.id} className="bg-zinc-900/50 border border-zinc-800 p-8 rounded-[30px] flex justify-between items-center shadow-lg">
                            <span className="text-white text-3xl font-bold italic uppercase">{ing.nome}</span>
                            
                            <div className="flex items-center gap-8">
                                <button className="w-16 h-16 rounded-2xl bg-zinc-800 flex items-center justify-center text-4xl text-zinc-400 hover:bg-red-500/20 hover:text-red-500 transition-all">
                                    −
                                </button>
                                <span className="text-white text-3xl font-black">1</span>
                                <button className="w-16 h-16 rounded-2xl bg-amber-600 flex items-center justify-center text-4xl text-zinc-950 font-bold">
                                    +
                                </button>
                            </div>
                        </li>
                    ))}

                    <div className="mt-10 p-8 bg-zinc-900 rounded-[30px] border-2 border-dashed border-zinc-700">
                        <p className="text-zinc-500 font-bold mb-4 uppercase">Adicionar Extras</p>
                        <div className="flex justify-between items-center text-white text-2xl font-bold italic">
                            <span>Borda Recheada de Catupiry</span>
                            <span className="text-amber-500">+ R$ 15,00</span>
                        </div>
                    </div>
                </ul>

                <button className="mt-10 w-full bg-amber-600 py-10 rounded-[30px] flex justify-between px-12 items-center hover:scale-[1.02] active:scale-95 transition-all">
                    <span className="text-zinc-950 text-4xl font-black uppercase italic">Adicionar ao Pedido</span>
                    <span className="text-zinc-950 text-4xl font-black">R$ 134,90</span>
                </button>
            </div>
        </div>
    )
}