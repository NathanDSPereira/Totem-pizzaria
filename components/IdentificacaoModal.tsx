import { useState } from "react";
import TecladoVirtual from "./TecladoVirtual";

export default function IdentificacaoModal({fechar, confirmarIdentificacaoCliente}: {fechar: () => void, confirmarIdentificacaoCliente: (nome: string, telefone: string) => void}) {
    
    const [nome, setNome] = useState("");
    const [telefone, setTelefone] = useState("");
    const [campoFoco, setCampoFoco] = useState<"nome" | "telefone">("nome");

    const digitarCaractere = (caractere: string) => {
        if(campoFoco === "nome") setNome(prev => prev + caractere);
        if(campoFoco === "telefone") setTelefone(prev => prev + caractere);
    }

    return (
        <section className="fixed inset-0 bg-black/80 backdrop-blur-sm z-100 flex justify-center items-center">
            <div className="max-w-[100vw] w-[90vw] max-h-screen h-[90vh] md:h-screen bg-zinc-950 border border-zinc-900 rounded-2xl p-5 animate-in zoom-in duration-300">
                <div className="w-full h-full">
                    <div className="w-full h-full flex flex-col">
                        <div>
                            <button onClick={fechar} className="text-red-700 text-xl font-bold uppercase">
                                <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-x-icon lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                            </button>
                        </div>
                    
                        <div className="flex flex-col justify-center items-center h-full">
                            <div className="flex justify-center items-center mb-11 text-center">
                                <h3 className="letter-spacing-1 text-slate-200 text-3xl font-black uppercase tracking-wide">Quase lá! <span className="text-amber-600">como te avisamos?</span></h3>
                            </div>
                            
                            <div className="flex flex-col items-center justify-center h-full gap-15">
                                <div className="flex w-3/5 gap-10 h-full flex-col justify-center items-center">
                                    <input 
                                        type="text" 
                                        value={nome}
                                        onClick={() => setCampoFoco('nome')}
                                        placeholder="Seu nome..."
                                        className="w-full h-16 bg-zinc-800 border border-zinc-700 rounded-xl p-4 text-slate-200 font-bold text-xl"
                                    />

                                    <input 
                                        type="text" 
                                        value={telefone}
                                        onClick={() => setCampoFoco('telefone')}
                                        placeholder="Seu telefone..."
                                        className="w-full h-16 bg-zinc-800 border border-zinc-700 rounded-xl p-4 text-slate-200 font-bold text-xl"
                                    />
                                </div>

                                <div>
                                    <TecladoVirtual
                                        digitarCaractere={digitarCaractere} 
                                        campoFoco={campoFoco} 
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