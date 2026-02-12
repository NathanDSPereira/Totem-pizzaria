export default function Toast({toast}: {toast: {message: string; visible: boolean, id: number, type: string}}) {

    const colorClasses = {
        success: 'bg-amber-600 text-zinc-950',
        error: 'bg-red-900 text-white',
        info: 'bg-zinc-700 text-slate-200',
    }

    return (
        <div 
            key={toast.id}
            className={`fixed top-5 right-5 z-300 transition-all duration-500 ease-out transform w-72 h-24
            ${toast.visible 
                ? 'opacity-100 translate-y-0 scale-100' 
                : 'opacity-0 -translate-y-5 scale-90 pointer-events-none'}`}>
            
            <div className={`${colorClasses[toast.type as keyof typeof colorClasses]} w-full h-full rounded-2xl shadow-2xl flex items-center justify-center p-4`}>
                <p className="text-lg font-black italic tracking-tight text-center leading-normal">
                    {toast.message}
                </p>
            </div>
        </div>
    )
} 