import { Ingredientes } from "@/interface/Ingredientes";
import { ItemCarrinho } from "@/interface/ItemCarrinho";

export default function CarrinhoItemCard({carrinhoItem, remover, todosOsIngredientes} : {carrinhoItem: ItemCarrinho, remover: (produto: ItemCarrinho) => void, todosOsIngredientes: Ingredientes[]}) {

    const nomeIngredientesRemovidos = carrinhoItem.removidos.map((id) => 
        todosOsIngredientes.find((ing) => ing.id === id)?.nome    
    ).filter(Boolean);

    const nomeIngredientesExtras = Object.keys(carrinhoItem.extras).map(id => {
        const ingrediente = todosOsIngredientes.find((ing) => ing.id === Number(id))
        const quantidade = carrinhoItem.extras[id as unknown as keyof typeof carrinhoItem.extras]
        return ingrediente ? `${quantidade} x ${ingrediente.nome}` : null;
    }).filter(Boolean)

    const temModificacao = nomeIngredientesExtras.length > 0 || nomeIngredientesRemovidos.length > 0

    return (
        <div key={carrinhoItem.id} className="flex justify-between items-center border-b border-zinc-900 pb-6">
            <div className="flex flex-col">
                <p className="text-slate-100 font-bold text-xl">{carrinhoItem.quantidadeCarrinho} x {carrinhoItem.nome}
                </p>
                {temModificacao ? (
                    <div className="italic mt-1 mb-2">
                        {nomeIngredientesRemovidos.length > 0 && (
                            <span className="text-slate-400 block">Sem: {nomeIngredientesRemovidos.join(', ')}
                            </span>
                        )}
                        {nomeIngredientesExtras.length > 0 && (
                            <span className="text-slate-400 block">Extras: {nomeIngredientesExtras.join(', ')}
                            </span>
                        )}
                    </div>
                ) : (
                    <span className="text-zinc-500 italic block">Receita Original</span>
                )
                }
                
                <p className="text-orange-500 font-bold text-xl">R$ {(carrinhoItem.precoTotal * carrinhoItem.quantidadeCarrinho).toFixed(2).replace('.', ',')}</p>
            </div>
            <button 
                onClick={() => remover(carrinhoItem)}
                className="bg-red-500/10 text-red-500 p-3 rounded-xl hover:bg-red-500 transition-colors"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-x-icon lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
            </button>
        </div>

    )
}