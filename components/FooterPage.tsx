
export default function Footer( {valorTotal, quantidadeTotal}: {valorTotal: number, quantidadeTotal: number}) {
    return (
      <footer className="fixed bottom-0 left-0 right-0 bg-zinc-900/90 backdrop-blur-md border-t border-zinc-800 p-8 flex justify-between items-center px-16">
        <div className="flex flex-col">
          <span className="text-zinc-500 text-sm font-bold uppercase tracking-widest">Quantidade de pedidos</span>
          <div className="flex items-center gap-3">
            <span className="text-orange-500 text-5xl font-black">{quantidadeTotal.toString().padStart(2, '0')}</span>
            <span className="text-white text-2xl font-bold">Itens</span>
          </div>
        </div>

        <div className="flex items-center gap-16">
          <div className="text-right">
            <span className="text-zinc-500 text-sm font-bold uppercase block mb-1">Valor Total</span>
            <span className="text-white text-4xl font-black text-orange-500">
              R$ {valorTotal.toFixed(2).replace('.', ',')}
            </span>
          </div>

          <button className="bg-orange-500 active:bg-orange-600 text-black font-black text-2xl px-6 py-6 rounded-3xl flex items-center gap-4 transition-all active:scale-95 shadow-[0_0_30px_rgba(249,115,22,0.2)]">
            FINALIZAR
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-move-right-icon lucide-move-right"><path d="M18 8L22 12L18 16"/><path d="M2 12H22"/></svg>
          </button>
        </div>
      </footer>
    )
}