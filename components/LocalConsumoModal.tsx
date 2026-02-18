export default function LocalConsumoModal({fechar}: {fechar: () => void}) {
    return (
        <section className="fixed inset-0 bg-black/80 backdrop-blur-sm z-100 flex justify-center items-center">

            <div className="w-125 bg-zinc-950 h-auto border border-zinc-900 p-8 flex flex-col animate-in zoom-in duration-300">
                <div className="flex justify-between items-center mb-10">
                    <h2 className="text-slate-100 text-3xl font-black uppercase">Local de Consumo</h2>

                    <button onClick={fechar} className="text-red-700 text-xl font-bold uppercase">

                        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-x-icon lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                    </button>
                </div>

                <p className="text-zinc-500 text-xl font-bold">Deseja consumir no local ou levar para viagem?</p>
                
                <div className="mt-8 flex gap-4">
                    <button className="flex-1 bg-amber-600 text-black font-bold py-4 rounded-xl shadow-lg active:scale-95">
                        No Local
                    </button>
                    <button className="flex-1 bg-zinc-800 text-zinc-500 font-bold py-4 rounded-xl shadow-lg active:scale-95">
                        Viagem
                    </button>
                </div>
            </div>
        </section>
    )
}