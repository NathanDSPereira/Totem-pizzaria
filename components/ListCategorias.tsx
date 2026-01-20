import CategoriaCard from "./CategoriaCard";

import { Categoria } from "@/interface/Categoria";

export default function ListCategorias({listaCategorias, selecionarCategoria, categoriaAtiva} : {listaCategorias: Categoria[], selecionarCategoria: (categoriaSlug: string, categoriaNome: string) => void, categoriaAtiva: string}) {
    return (
        <nav className="bg-zinc-950 border-r border-zinc-900 h-screen w-72 max-w-72 flex flex-col pt-8 pb-10">
            <h3 className="text-zinc-500 text-lg font-bold uppercase flex justify-center W-full tracking-widest mb-5 px-4">
                Categorias
            </h3>

            <ul className="flex-1 overflow-y-auto custom-scrollbar p-4 pb-40 space-y-4">
                {listaCategorias.map((categoria) => (
                    <li key={categoria.id} className="w-full">
                        <CategoriaCard 
                            key={categoria.id} 
                            categoria={categoria} 
                            aoSerSelecionado={selecionarCategoria} 
                            exibirCategoriaAtiva={categoria.slug == categoriaAtiva}
                        />
                    </li>
                ))}
            </ul>
        </nav>
    )
}