export default function Toast({toast}: {toast: {message: string; visible: boolean}}) {
    if (!toast.visible) return null;

    return (
        <div className={`fixed top-5 right-5 z-300 transition-all duration-500 transform w-75 h-24
            ${toast.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}>
            <div className="bg-amber-600 text-zinc-950 w-full h-full rounded-2xl shadow-2xl flex items-center justify-center gap-1 border-2 border-amber-400">
                <p className="text-md font-black uppercase italic tracking-tight text-center">{toast.message}</p>
            </div>
        </div>
    )
} 