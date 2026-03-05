import { useState } from "react";
import TecladoVirtual from "./TecladoVirtual";

export default function IdentificacaoModal({fechar, confirmarIdentificacaoCliente, voltarEtapaFinalizacao}: {fechar: () => void, confirmarIdentificacaoCliente: (nome: string, telefone: string) => void, voltarEtapaFinalizacao: () => void}) {
    
    const [nome, setNome] = useState("");
    const [telefone, setTelefone] = useState("");
    const [campoFoco, setCampoFoco] = useState<"nome" | "telefone">("nome");

    const nomeValido = nome.trim().length > 3;
    const telefoneValido = telefone.replace(/\D/g, '').length >= 11; // Considera válido se tiver pelo menos 10 dígitos
    const podeConfirmar = nomeValido && telefoneValido;

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
                                className="bg-zinc-700 text-slate-200 shadow-amber-900/20 active:scale-95 font-bold uppercase h-12 w-32 rounded-lg float-right" 
                                onClick={voltarEtapaFinalizacao}>
                                Voltar
                            </button>
                        </div>
                    
                        <div className="flex flex-col items-center h-full w-full">  
                            <div className="flex flex-col h-full w-full justify-around items-center relative">
                                <div className="flex gap-10 w-3/4 flex-col justify-center items-center mt-5">
                                    <input 
                                        type="text" 
                                        value={nome}
                                        inputMode="none"
                                        onClick={() => setCampoFoco('nome')}
                                        onFocus={() => setCampoFoco('nome')}
                                        placeholder="Seu nome..."
                                        className={nomeValido ? 
                                                    `w-full h-16 md:h-14 p-4 bg-zinc-900 border-2 border-green-800 rounded-2xl text-xl text-white 
                                                outline-none transition-all focus:border-amber-500` : 
                                                    `w-full h-16 md:h-14 p-4 bg-zinc-900 border-2 border-zinc-500 rounded-2xl text-xl text-white 
                                                outline-none transition-all focus:border-amber-500`
                                            }
                                    />

                                    <input 
                                        type="text"
                                        value={telefone}
                                        inputMode="none"
                                        placeholder="Seu telefone..."
                                        onFocus={() => setCampoFoco("telefone")}
                                        onClick={() => setCampoFoco('telefone')}
                                        className={telefoneValido ? 
                                                    `w-full h-16 md:h-14 p-4 bg-zinc-900 border-2 border-green-800 rounded-2xl text-xl text-white 
                                                outline-none transition-all focus:border-amber-500` : 
                                                    `w-full h-16 md:h-14 p-4 bg-zinc-900 border-2 border-zinc-500 rounded-2xl text-xl text-white 
                                                outline-none transition-all focus:border-amber-500`
                                        }
                                    />

                                </div>

                                <div className="w-3/5 md:w-1/2">
                                    <TecladoVirtual
                                        digitarCaractere={digitarCaractere} 
                                        campoFoco={campoFoco}
                                        apagarCaractere={apagarCaractere}
                                    />
                                </div>

                                <div className="w-full flex justify-end absolute bottom-1">
                                    <button 
                                        disabled={!podeConfirmar}
                                        onClick={() => confirmarIdentificacaoCliente(nome, telefone)}
                                        className={
                                                podeConfirmar ?
                                                `bg-amber-600 text-black shadow-amber-900/20 active:scale-95 font-bold uppercase h-16 w-50 md:h-15 rounded-lg float-right text-2xl` :
                                                `bg-zinc-600 text-gray-400 shadow-none active:scale-100 font-bold uppercase h-15 w-40 md:h-14 rounded-lg float-right`
                                        }>
                                        {podeConfirmar ? "Confirmar" : "Preencha os campos"}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}