
export default function Footer( {valorTotal, quantidadeTotal, aoFinalizar}: {valorTotal: number, quantidadeTotal: number, aoFinalizar: () => void
  
}) {
    return (
      <footer className="fixed bottom-0 bg-zinc-900/90 backdrop-blur-md w-full border-t border-zinc-800 h-36 flex justify-between p-10 items-center">
        <div className="flex flex-col gap-1">
          <p className="text-zinc-500 text-xl font-bold uppercase tracking-widest">Quantidade de pedidos</p>
          <div className="flex items-center gap-3">
            <p className="text-orange-500 text-5xl sm:text-3xl md:text-4xl font-black">{quantidadeTotal.toString().padStart(2, '0')}</p>
            <p className="text-slate-100 text-2xl font-bold">Itens</p>
          </div>
        </div>

        <div className="flex items-center gap-8">
          <div>
            <div className="text-right">
              <p className="text-zinc-500 text-xl tracking-wide font-bold uppercase block mb-1">Valor Total</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-black sm:text-2xl md:text-3xl text-orange-500">
                R$ {valorTotal.toFixed(2).replace('.', ',')}
              </p>
            </div>
          </div>

          <button
            onClick={() => aoFinalizar()} 
            className="bg-orange-500 active:bg-orange-600 text-black font-black text-3xl px-6 py-6 rounded-3xl flex items-center gap-4 transition-all active:scale-95 shadow-[0_0_30px_rgba(249,115,22,0.2)]">
            FINALIZAR
          </button>
        </div>
      </footer>
    )
}