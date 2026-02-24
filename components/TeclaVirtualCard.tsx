export default function TeclaVirtualCard({digitarCaractere, caractere}: {digitarCaractere: (caractere: string) => void, caractere: string}) {

    return (
        <button 
            onClick={() => digitarCaractere(caractere)}
            className="bg-zinc-800 text-white font-bold h-16 rounded-lg shadow-lg hover:bg-zinc-700 transition-colors"
        >
            {caractere}
        </button>
    )
}