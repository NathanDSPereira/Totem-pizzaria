export default function LocalConsumoModal({fechar, selecionarLocalConsumo}: {fechar: () => void, selecionarLocalConsumo: (local: 'local' | 'viagem') => void}) {
    return (
        <section className="fixed inset-0 bg-black/80 backdrop-blur-sm z-100 flex justify-center items-center">
            <div className="w-1/2 h-3/5 bg-zinc-950 border border-zinc-900 rounded-2xl p-5 animate-in zoom-in duration-300">
                <div className="w-full h-full flex flex-col justify-center">
                    <div className="flex-1">
                        <button onClick={fechar} className="text-red-700 text-xl font-bold uppercase">
                            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-x-icon lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                        </button>
                    </div>
                    
                    <div className="flex-2 flex flex-col gap-10">
                        <div className="flex justify-center items-center mb-10">
                            <h3 className="text-slate-100 text-3xl font-black uppercase">Selecione o local de consumo</h3>
                        </div>
                        
                        <div className="mt-8 flex gap-4">
                            <button 
                                onClick={() => selecionarLocalConsumo('local')}
                                className="flex-1 bg-amber-600 transition-all  text-black font-bold h-40 rounded-xl shadow-lg active:scale-95">
                                <div className="flex flex-col gap-2 justify-center items-center">
                                    <p className="text-lg text-zinc-900 font-bold uppercase">No local</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-utensils-icon lucide-utensils"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/><path d="M7 2v20"/><path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"/></svg>
                                </div>
                            </button>

                            <button 
                                onClick={() => selecionarLocalConsumo('viagem')}
                                className="flex-1 bg-zinc-800 transition-all  text-zinc-500 font-bold h-40 rounded-xl shadow-lg active:scale-95">
                                <div className="flex flex-col gap-2 justify-center items-center">
                                    <p className="text-lg text-zinc-500 font-bold uppercase">Para viagem</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-shopping-bag-icon lucide-shopping-bag"><path d="M16 10a4 4 0 0 1-8 0"/><path d="M3.103 6.034h17.794"/><path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"/></svg>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}