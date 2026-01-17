import { Categoria } from "@/interface/Categoria";

export default function CategoriaCard( {categoria, aoSerSelecionado, exibirCategoriaAtiva }: {categoria: Categoria, aoSerSelecionado: (categoriaSlug: string) => void, exibirCategoriaAtiva: boolean}) {

    function selecionarCategoria() {
        console.log(`Categoria selecionada: ${categoria.slug}`);
        aoSerSelecionado(categoria.slug);
    }

    return (
        <button 
            onClick={selecionarCategoria} 
            className={`bg-zinc-950 rounded shadow-md p-4 border-b w-full ${exibirCategoriaAtiva ? 'border-amber-500' : 'border-slate-800'} active:bg-zinc-900 active:border-amber-500 flex flex-col items-center gap-2`}>

            <p className="text-2xl">{categoria.icon}</p>
            <h3 className="text-2xl font-semibold text-slate-900 dark:text-slate-50">{categoria.nome}</h3>
        </button>
    )
}