import { Pizza } from "@/interface/Pizza";
import Image  from "next/image";

export default function PizzaCard({ pizzaCard}: {pizzaCard: Pizza}) {
    return (
        <div className="bg-zinc-950/40 border p-3 border-zinc-800 rounded-4xl overflow-hidden">
            <div className="relative w-full h-40 mb-3 overflow-hidden">
                <Image 
                    src={pizzaCard.imagem} 
                    alt={pizzaCard.nome} 
                    width={200} 
                    height={200}
                    quality={75}
                    className="rounded-tr-lg rounded-tl-lg w-full h-full object-cover"
                />
            </div>
            <div className="px-1 text-slate-200 space-y-2">
                <h3 className="font-semibold font-serif text-lg">{pizzaCard.nome}</h3>
                <p className="text-zinc-300 leading-5 mb-5 text-sm">{pizzaCard.descricao}</p>
                <div className="flex w-ful justify-between items-end">
                    <div>
                        <p className="text-amber-600 text-xl font-extrabold">R$ {pizzaCard.preco.toFixed(2)}</p>
                        <p className="text-slate-500 text-sm font-sans">Tamanho: {pizzaCard.tamanho} + {pizzaCard.fatias} fatias</p>
                    </div>
                    
                    <button className="bg-amber-600 active:scale-95 w-10 h-10 flex items-center justify-center text-zinc-950 rounded-full transition-colors shadow-lg hover:cursor-pointer ">
                        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-plus-icon lucide-plus"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
                    </button>
                </div>
            </div>
        </div>
    );
}