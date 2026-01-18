import PizzaCard from "./PizzaCard";
import { Pizza } from "@/interface/Pizza";

export default function ListPizza({listaPizzas, adicionarAoCarrinho, abrirCustomizacao}: { listaPizzas: Pizza[], adicionarAoCarrinho: (produto: Pizza) => void, abrirCustomizacao: (produto: Pizza) => void}) {
    return (
        <section className="bg-zinc-950 max-w-7xl mx-auto">
            <ul className="w-full flex flex-wrap gap-8 justify-center mt-10">
                {listaPizzas.map((pizza) => (
                    <li key={pizza.id}>
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