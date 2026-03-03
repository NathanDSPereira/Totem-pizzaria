import { useState } from "react";
import TecladoVirtual from "./TecladoVirtual";

export default function IdentificacaoModal({fechar, confirmarIdentificacaoCliente, voltarEtapaFinalizacao}: {fechar: () => void, confirmarIdentificacaoCliente: (nome: string, telefone: string) => void, voltarEtapaFinalizacao: () => void}) {
    
    const [nome, setNome] = useState("");
    const [telefone, setTelefone] = useState("");
    const [campoFoco, setCampoFoco] = useState<"nome" | "telefone">("nome");

    const digitarCaractere = (caractere: string) => {
        if(campoFoco === "nome") setNome(prev => prev + caractere);
        if(campoFoco === "telefone") setTelefone(prev => prev + caractere);
    }

    const apagarCaractere = () => {
        if(campoFoco === "nome") setNome(prev => prev.slice(0, -1));
        if(campoFoco === "telefone") setTelefone(prev => prev.slice(0, -1));
    }

    return (
        <section className="fixed inset-0 bg-black/80 backdrop-blur-sm z-100 flex justify-center items-center">
            <div className="max-w-[100vw] w-[90vw] max-h-[95vh] h-[90vh] md:h-screen bg-zinc-950 border border-zinc-900 rounded-2xl p-5 animate-in zoom-in duration-300">
                <div className="w-full h-full">
                    <div className="w-full h-full flex flex-col">
                        <div className="flex justify-around items-center w-full">
                            <button onClick={fechar} className="text-red-700 text-xl font-bold uppercase">
                                <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-x-icon lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                            </button>

                            <div className="flex justify-center items-center text-center flex-2">
                                <h3 className="letter-spacing-1 text-slate-200 text-3xl font-black uppercase tracking-wide">Quase lá! <span className="text-amber-600">como te avisamos?</span></h3>
                            </div>
                            
                            <button 
                                className="bg-amber-600 text-black shadow-amber-900/20 active:scale-95 font-bold uppercase h-15 w-36 rounded-lg float-right" 
                                onClick={voltarEtapaFinalizacao}>
                                Voltar
                            </button>
                        </div>
                    
                        <div className="flex flex-col items-center h-full w-full">  
                            <div className="flex flex-col h-full w-full justify-around items-center">
                                <div className="flex gap-10 w-3/4 flex-col justify-center items-center mt-5">
                                    <input 
                                        type="text" 
                                        value={nome}
                                        onClick={() => setCampoFoco('nome')}
                                        onFocus={() => setCampoFoco('nome')}
                                        placeholder="Seu nome..."
                                        className="w-full h-16 md:h-14 p-4 bg-zinc-900 border-2 border-zinc-800 rounded-2xl text-xl text-white 
                                                outline-none transition-all focus:border-amber-500"
                                    />

                                    <input 
                                        type="text"
                                        value={telefone}
                                        placeholder="Seu telefone..."
                                        onFocus={() => setCampoFoco("telefone")}
                                        onClick={() => setCampoFoco('telefone')}
                                        className="w-full h-16 md:h-14 p-4 bg-zinc-900 border-2 border-zinc-800 rounded-2xl text-xl text-white 
                                                outline-none transition-all focus:border-amber-500"
                                    />

                                </div>

                                <div className="w-3/5 md:w-1/2">
                                    <TecladoVirtual
                                        digitarCaractere={digitarCaractere} 
                                        campoFoco={campoFoco}
                                        apagarCaractere={apagarCaractere}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}