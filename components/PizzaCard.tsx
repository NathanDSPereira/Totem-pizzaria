import { Pizza } from "@/interface/Pizza";
import Image from "next/image";

export default function PizzaCard({ pizzaCard, adicionarAoCarrinho, editarProduto}: { pizzaCard: Pizza, adicionarAoCarrinho: (pizza: Pizza) => void, editarProduto: (pizza: Pizza) => void}) {
  return (
    <div
        onClick={() => editarProduto(pizzaCard)} 
        className="bg-zinc-900/50 border h-100 w-80 max-w-100 border-zinc-800 backdrop-blur-sm p-2 text-slate-200 rounded-lg overflow-hidden transition-all active:scale-[0.97]">
        <div className="relative w-full h-1/2 mb-4 overflow-hidden rounded-tr-lg rounded-br-sm rounded-bl-sm rounded-tl-lg">
            <Image 
            src={pizzaCard.imagem} 
            alt={pizzaCard.nome} 
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition-transform duration-500 hover:scale-110"
            />
        </div>

        <div className="px-1 h-1/2 flex flex-col justify-between">
            <h3 className="font-bold text-2xl text-slate-50 tracking-wide">
                {pizzaCard.nome}
            </h3>        
        
            <div className="flex w-full py-10 justify-between items-end pt-2">
                <div>
                    <p className="text-amber-500 text-2xl flex items-center font-black">
                        <p className="text-sm font-medium mr-1 text-amber-600">R$</p>
                        {pizzaCard.preco.toFixed(2).replace('.', ',')}
                    </p>
                </div>
            
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        adicionarAoCarrinho(pizzaCard)
                    }}
                    className="bg-amber-600 active:scale-90 hover:bg-amber-500 w-24 h-16 flex items-center justify-center text-zinc-950 rounded-2xl transition-all shadow-[0_0_20px_rgba(217,119,6,0.2)]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14"/><path d="M12 5v14"/>
                    </svg>
                </button>
            </div>
        </div>
    </div>
  );
}