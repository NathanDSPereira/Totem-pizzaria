export default function TeclaVirtualCard({digitarCaractere, caractere}: {digitarCaractere: (caractere: string) => void, caractere: string}) {

    return (
        <button 
            onClick={() => digitarCaractere(caractere)}
            className="
                bg-zinc-800 text-slate-300 text-3xl md:text-2xl font-bold h-full min-h-10 aspect-square w-full rounded-lg shadow-lg hover:bg-zinc-700 transition-all active:scale-90"
        >
            {caractere}
        </button>
    )
}