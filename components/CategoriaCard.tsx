import { Categoria } from "@/interface/Categoria";

export default function CategoriaCard( {categoria, aoSerSelecionado, exibirCategoriaAtiva }: {categoria: Categoria, aoSerSelecionado: (categoriaSlug: string, categoriaNome: string) => void, exibirCategoriaAtiva: boolean}) {

    function selecionarCategoria() {
        console.log(`Categoria selecionada: ${categoria.slug}`);
        aoSerSelecionado(categoria.slug, categoria.nome);
    }

    return (
        <button 
            onClick={selecionarCategoria} 
            className={`w-full p-6 rounded-2xl flex justify-center items-center gap-4 transition-all duration-200 active:scale-95 
                ${exibirCategoriaAtiva 
                ? 'bg-amber-600 text-zinc-950 font-black shadow-[0_0_20px_rgba(245,158,11,0.4)] border-l-8 border-white' 
                : 'bg-zinc-900 text-zinc-400 font-bold border-l-8 border-transparent'
                }`}>
            <div>
                <p className="text-2xl">{categoria.icon}</p>
                <h3 className="text-2xl font-semibold text-slate-50">{categoria.nome}</h3>
            </div>
        </button>
    )
}