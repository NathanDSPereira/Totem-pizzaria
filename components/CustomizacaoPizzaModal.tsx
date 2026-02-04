'use client'
import { Ingredientes } from "@/interface/Ingredientes"
import { ItemCarrinho } from "@/interface/ItemCarrinho";
import { Pizza } from "@/interface/Pizza"

import Image from "next/image"
import { useMemo, useState } from "react";

export default function CustomizacaoPizzaModal({
    produto, 
    fecharModal, 
    todosOsIngredientes, 
    adicionarAoCarrinho, 
    gerarCartId, 
    mostrarToast
}: {
    produto: Pizza | ItemCarrinho, 
    fecharModal: () => void, todosOsIngredientes: Ingredientes[], 
    adicionarAoCarrinho: (pizza: Pizza | ItemCarrinho, cartIdAntigo?: string) => void, 
    gerarCartId: (produtoId: string, extras: Record<number, number>, removidos: number[]) => string, 
    mostrarToast: (message: string) => void
}) {

    const ingredientesQuePodemRemover = todosOsIngredientes.filter((ing) => 
        produto.ingredientesIds?.includes(ing.id) && ing.podeRemover
    )

    const ingredientesQuePodemAdicionar = todosOsIngredientes.filter((ing) => 
        ing.podeAdicionar
    )

    const [ingredientesRemovidos, setIngredientesRemovidos] = useState<number[]>(() => {
        return ('removidos' in produto) ? produto.removidos : [];
    });

    const [ingredientesExtras, setIngredientesExtras] = useState<Record<string, number>>(() => {
        return ('extras' in produto) ? produto.extras : {};
    })

    const removerIngrediente = (id: number) => {
        setIngredientesExtras((itens) => {
            const novoEstado = {...itens};
            delete novoEstado[id];
            return novoEstado;
        })

        setIngredientesRemovidos((ingredientesAnteriores) => {
            if(ingredientesAnteriores.includes(id)) return ingredientesAnteriores
            return [...ingredientesAnteriores, id]
        });
    }

    const manterIngrediente = (id: number) => {
        setIngredientesRemovidos((ingredientesNaLista) => {
            return ingredientesNaLista.filter((ingItem) => ingItem !== id);
        })
    }

    const adicionarExtra = ((id: number) => {

        manterIngrediente(id)

        setIngredientesExtras((anteriores) => ({
            ...anteriores,
            [id] : (anteriores[id] || 0) + 1
        }))
    })

    const diminuirExtra = (id: number) => {
        setIngredientesExtras((anteriores) => {
            const quantidadeAtual  = anteriores[id] || 0;

            if(quantidadeAtual <= 1) {
                const novoEstado = {...anteriores}
                delete novoEstado[id]
                return novoEstado
            }

            return {
                ...anteriores,
                [id]: quantidadeAtual - 1
            }
        })
    }

    const valorTotalExtra = useMemo(() => {
        const listaExtras = Object.entries(ingredientesExtras);
         
        return listaExtras.reduce((soma, [idItem, quantidadeItem]) => {
            const id = Number(idItem);

            if(ingredientesRemovidos.includes(id)) {
                return soma;
            }

            const dadosDoIngrediente = todosOsIngredientes.find((item) => item.id == id);
            const precoUnitario = dadosDoIngrediente?.preco || 0;

            return soma + (precoUnitario * quantidadeItem);
        }, 0)

    }, [ingredientesExtras, ingredientesRemovidos, todosOsIngredientes]);

    const adicionarPizzaPersonalizada = () => {
        const idUnico = gerarCartId(produto.id, ingredientesExtras, ingredientesRemovidos)

        const cartIdAntigo = ('cartId' in produto) ? produto.cartId : undefined;

        const pizzaModificada : ItemCarrinho = {
            ...produto,
            cartId: idUnico,
            precoTotal: precoProdutoFinal,
            removidos: ingredientesRemovidos,
            extras: ingredientesExtras,
            quantidadeCarrinho: ('quantidadeCarrinho' in produto) ? produto.quantidadeCarrinho : 1
        }

        adicionarAoCarrinho(pizzaModificada, cartIdAntigo)
        mostrarToast(`${produto.nome} adicionada ao carrinho!`);
        fecharModal();
    }

    const precoProdutoFinal = produto.preco + valorTotalExtra


    return (
        <section className="fixed inset-0 h-screen bg-black/80 z-200 flex justify-center items-center w-full mx-auto my-auto">
            
            <div className="w-full mx-auto sm:overflow-y-auto custom-scrollbar my-auto max-w-[90vw] h-full max-h-[90vh] bg-zinc-950 border border-zinc-800 rounded-[40px] shadow-2xl overflow-hidden flex flex-col">

                <div className="border-b lg:border-b-0 sm:border-r sm:pb border-zinc-800 p-8 grid grid-cols-1">
                    <button onClick={fecharModal} className="self-start flex items-center gap-2 text-red-600 text-xl uppercase font-bold">
                        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-x-icon lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                    </button>

                    <div className="flex justify-center items-center pt-5">
                        <h3 className="text-slate-400 text-2xl font-bold uppercase mb-11 tracking-widest">Personalize seu pedido</h3>
                    </div>

                    <div className="flex flex-col gap-4 items-center">
                        <Image 
                            src={produto.imagem} 
                            alt={produto.nome}
                            width={230}
                            height={220}
                            className="md:w-80 sm:mb-5 md:h-80 object-contain drop-shadow-[0_35px_35px_rgba(255,255,255,0.1)]"
                        />
                        <h2 className="text-slate-100 text-4xl font-black italic uppercase tracking-tighter text-center">{produto.nome}</h2>
                        <p className="text-zinc-500 text-2xl text-center max-w-md leading-relaxed">
                            {produto.descricao}
                        </p>
                        <p className="text-amber-500 text-4xl font-black italic">
                            R$ {produto.preco.toFixed(2).replace('.', ',')}
                        </p>
                    </div>
                </div>

                <div className="w-full bg-zinc-950 md:mt-20 p-12 flex flex-col">
                    
                    <ul className="flex-1 flex flex-col gap-4 mt-10 mb-30">
                        <div className="flex justify-center items-center">
                            <h4 className="text-slate-200 text-xl font-bold uppercase mb-11 tracking-widest">Ingredientes Padrão</h4>
                        </div>
                        {ingredientesQuePodemRemover.map((ing) => {
                            const itemRemovido = ingredientesRemovidos.includes(ing.id)
                            
                            return (
                                <li key={ing.id} className="bg-zinc-900/50 border border-zinc-800 p-5 rounded-3xl flex justify-between items-center shadow-lg">
                                    <p className="text-slate-50 text-xl font-bold italic uppercase">{ing.nome}</p>
                                    
                                    <div className="flex items-center gap-8">
                                        <button 
                                            disabled={itemRemovido}
                                            onClick={() => removerIngrediente(ing.id)} 
                                            className={`text-center w-32 h-16 rounded-xl active:scale-95 font-semibold flex items-center justify-center text-2xl transition-all 
                                                    ${itemRemovido ? 
                                                        'bg-red-950/30 text-zinc-700 cursor-not-allowed' : 
                                                        'bg-zinc-800 text-zinc-200'
                                                    }`}>
                                            Remover
                                        </button>
                                        <button 
                                            disabled={!itemRemovido}
                                            onClick={() => manterIngrediente(ing.id)} 
                                            className={`text-center w-32 h-16 rounded-xl active:scale-95 flex items-center justify-center text-2xl font-semibold transition-all
                                                ${!itemRemovido ?
                                                        'bg-red-950/30 text-zinc-700 cursor-not-allowed' : 
                                                        'bg-amber-600 text-zinc-950 '
                                                }`}>
                                            Manter
                                        </button>
                                    </div>
                                </li>
                            )
                        })}
                    </ul>

                    <ul className="flex-1 flex flex-col gap-4 mb-10">
                        <div className="flex justify-center items-center">
                            <h4 className="text-slate-200 text-xl font-bold uppercase mb-11 tracking-widest">Adicionar Extras</h4>
                        </div>
                        
                        {ingredientesQuePodemAdicionar.map((ing) => {
                            const itemRemovido = ingredientesRemovidos.includes(ing.id)
                            const quantidadeExtra = ingredientesExtras[ing.id] || 0

                            return (
                                <li key={ing.id} className={`bg-zinc-900/50 border border-zinc-800 p-5 rounded-3xl flex justify-between items-center shadow-lg ${itemRemovido ? 'opacity-20 grayscale pointer-events-none': 'opacity-100'}`}>
                                    <div className="flex gap-4">
                                        <p className="text-slate-50 text-xl font-bold italic uppercase">R$ {ing.preco.toFixed(2).replace('.', ',')}</p>
                                        <p className="text-slate-50 text-xl font-bold italic uppercase">-</p>
                                        <p className="text-slate-50 text-xl font-bold italic uppercase">{ing.nome}</p>
                                    </div>

                                    <div className="flex items-center gap-8">
                                        <button 
                                            disabled={itemRemovido || quantidadeExtra === 0}
                                            onClick={() => diminuirExtra(ing.id)}
                                            className="w-16 h-16 rounded-2xl bg-zinc-800 flex items-center justify-center text-4xl text-zinc-400 active:scale-90 transition-all">
                                            −
                                        </button>
                                        <p className="text-slate-100 text-3xl font-black">{quantidadeExtra}</p>
                                        <button
                                            onClick={() => adicionarExtra(ing.id)}
                                            className="w-16 h-16 rounded-2xl bg-amber-600 flex items-center justify-center text-4xl text-zinc-950 font-bold active:scale-90 transition-all">
                                            +
                                        </button>
                                    </div>
                                </li>
                            )
                        })}
                    </ul>

                    <div className="flex justify-center items-center"> 
                        <button 
                            onClick={adicionarPizzaPersonalizada}
                            className="mt-10 bg-amber-600 h-30 p-10 rounded-3xl max-w-4/5 flex justify-between w-full items-center active:scale-95 transition-all">
                            <p className="text-zinc-950 text-3xl font-black uppercase italic">Adicionar por</p>
                            <p className="text-zinc-950 text-3xl font-black">
                                R$ {precoProdutoFinal.toFixed(2).replace('.', ',')}
                            </p>
                        </button>
                    </div>
                    
                    <div className="flex gap-4 items-center justify-end mt-15">
                        <p className="text-slate-300 text-2xl font-black">
                            Preço extras:
                        </p>
                        <p className="text-slate-300 text-3xl font-black">
                            R$ {valorTotalExtra.toFixed(2).replace('.', ',')}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}