import PizzaCard from "./PizzaCard";
import { Pizza } from "@/interface/Pizza";

export default function ListPizza({listaPizzas, adicionarAoCarrinho, abrirCustomizacao, categoriaNome}: { listaPizzas: Pizza[], adicionarAoCarrinho: (produto: Pizza) => void, abrirCustomizacao: (produto: Pizza) => void, categoriaNome: string}) {
    return (
        <section className="bg-zinc-950 mx-auto flex justify-center flex-wrap pt-5">
            <div className="text-slate-100 text-5xl text-center font-bold tracking-wide mb-5">
                <h3>
                    {categoriaNome}
                </h3>
            </div>

            <ul className="w-full flex flex-wrap h-[calc(100vw - 200px)] gap-8 justify-center mt-10 pb-60 overflow-y-auto custom-scrollbar">
                {listaPizzas.map((pizza) => (
                    <li key={pizza.id} className="h-115 w-80 max-w-100">
                        <PizzaCard 
                            pizzaCard={pizza} 
                            adicionarAoCarrinho={adicionarAoCarrinho} 
                            editarProduto={abrirCustomizacao}
                        />
                    </li>
                ))}
            </ul>
        </section>
    );
}