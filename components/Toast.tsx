export default function Toast({toast}: {toast: {message: string; visible: boolean}}) {
    if (!toast.visible) return null;

    return (
    <div className={`fixed top-5 right-5 z-300 transition-all duration-500 ease-out transform w-72 h-20
        ${toast.visible 
            ? 'opacity-100 translate-y-0 scale-100' 
            : 'opacity-0 -translate-y-5 scale-90 pointer-events-none'}`}>
        
        <div className="bg-amber-600 text-zinc-950 w-full h-full rounded-2xl shadow-2xl flex items-center justify-center p-4 border-2 ">
            <p className="text-sm font-black italic tracking-tight text-center leading-tight">
                {toast.message}
            </p>
        </div>
    </div>
)
} 