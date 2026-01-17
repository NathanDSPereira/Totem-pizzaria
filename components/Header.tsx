import Image from 'next/image';

export default function Header() {
  return (
    <header className="relative h-80 w-full overflow-hidden md:h-96 lg:h-125">
      <div className="absolute inset-0">
        <Image 
          src="/images/pizza-tela-inicial.webp" 
          alt="Pizza Artesanal da Pizzaria Duperon"
          fill
          className="object-cover brightness-50"
          priority
          sizes='100vw'
          fetchPriority='high'
        />
        <div className="absolute inset-0 bg-linear-to-t from-zinc-950 via-transparent to-black/20" />
      </div>

      <div className="relative z-10 flex flex-col justify-center h-full p-6">
        <div className="flex items-center gap-2 mb-3">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
          </span>
          <span className="text-green-400 text-xs font-bold uppercase tracking-wider">
            Aberto agora
          </span>
        </div>

        <h1 className="text-4xl font-serif font-bold text-slate-200 leading-none">
          Duperon Pizzaria
        </h1>
        <p className="text-zinc-300 font-medium text-sm mt-2">
          Pizzaria Artesanal • Unidade Abadia
        </p>

        <div className="flex gap-4 mt-4">
          <div className="flex items-center gap-1 text-zinc-300 text-xs">
            <span>⭐</span>
            <span className="font-bold text-white">4.9</span>
            <span>(464)</span>
          </div>
          <div className="flex items-center gap-1 text-zinc-300 text-xs border-l border-zinc-700 pl-4">
            <span>⏱️</span>
            <span className="text-white">20-30 min</span>
          </div>
        </div>
      </div>
    </header>
  );
}