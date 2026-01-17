import PizzaCard from "./PizzaCard";
import { Pizza } from "@/interface/Pizza";

export default function ListPizza({listaPizzas, adicionarAoCarrinho}: { listaPizzas: Pizza[], adicionarAoCarrinho: (produto: Pizza) => void}) {
    return (
        <section className="bg-zinc-950 max-w-7xl mx-auto">
            <div className="px-4 py-6 flex justify-center">
                <h2 className="text-slate-200 text-xl font-bold mb-4 font-serif tracking-wide">As mais pedidas</h2>
            </div>

            <ul className="w-full flex flex-wrap gap-8 justify-center">
                {listaPizzas.map((pizza) => (
                    <li key={pizza.id}>
                        <PizzaCard pizzaCard={pizza} adicionarAoCarrinho={adicionarAoCarrinho} />
                    </li>
                ))}
            </ul>
        </section>
    );
}