import CategoriaCard from "./CategoriaCard";

import { Categoria } from "@/interface/Categoria";

export default function ListCategorias({listaCategorias, selecionarCategoria, categoriaAtiva} : {listaCategorias: Categoria[], selecionarCategoria: (categoriaSlug: string) => void, categoriaAtiva: string}) {
    return (
        <nav className="gap-8 bg-zinc-950 pt-6 border-r border-zinc-900 min-h-screen w-72 self-center">
            <h3 className="text-zinc-500 text-lg font-bold uppercase tracking-widest mb-6 px-4">
                Categorias
            </h3>

            <ul className="flex flex-col gap-5 w-full">
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