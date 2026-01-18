import { Pizza } from "@/interface/Pizza";
import Image  from "next/image";

export default function PizzaCard({ pizzaCard, adicionarAoCarrinho, editarProduto}: {pizzaCard: Pizza, adicionarAoCarrinho: (produto: Pizza) => void, editarProduto: (produto: Pizza) => void}) {
    return (
        <div 
            onClick={() => editarProduto(pizzaCard)} 
            className="flex gap-2 flex-col bg-zinc-800/40 border p-3 border-zinc-800 rounded-tl-lg rounded-tr-lg overflow-hidden w-96">
            <div className="w-full aspect-square mb-3 overflow-hidden">
                <Image 
                    src={pizzaCard.imagem} 
                    alt={pizzaCard.nome} 
                    width={400} 
                    height={400}
                    quality={75}
                    className="rounded-tr-lg rounded-tl-lg w-full h-full object-cover"
                />
            </div>
            <div className="flex flex-col gap-2">
                <h2 className="text-2xl font-bold italic">{pizzaCard.nome}</h2>
                <div className="flex justify-between items-center mt-6">
                    <p className="text-amber-600 text-2xl font-extrabold">R$ {pizzaCard.preco.toFixed(2)}</p>
                    <button onClick={(e) => {e.stopPropagation(); adicionarAoCarrinho(pizzaCard)}} className="w-14 h-14 rounded-full bg-amber-600 flex items-center justify-center text-zinc-950 active:scale-95 shadow-lg text-4xl font-bold hover:cursor-pointer transition-colors hover:bg-amber-500">
                        +
                    </button>
                </div>
            </div>
        </div>
    );
}