import { Carattere } from "next/font/google";
import TeclaVirtualCard from "./TeclaVirtualCard"

export default function TecladoVirtual({digitarCaractere, campoFoco, apagarCaractere}: {digitarCaractere: (caractere: string) => void, campoFoco: string, apagarCaractere: () => void}) {

    const numerosLinha1 = ["1", "2", "3"];
    const numerosLinha2 = ["4", "5", "6"];
    const numerosLinha3 = ["7", "8", "9"];
    const numerosLinha4 = ["0", "⌫"];

    const linha1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
    const linha2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
    const linha3 = ["Z", "X", "C", "V", "B", "N", "M"];


    return (
        <section className="flex flex-col gap-2 w-full max-w-6xl mx-auto">
                {campoFoco === "telefone" ? (
                    <div className="flex flex-col w-full md:w-1/2 max-w-100 mt-4 mx-auto">
                        <div className="flex flex-col md:w-3/5 w-full mx-auto gap-3">
                            <div className="flex justify-center gap-1 md:gap-2">
                                {numerosLinha1.map((caractere) => (
                                    <TeclaVirtualCard 
                                        key={caractere}
                                        caractere={caractere}
                                        digitarCaractere={() => digitarCaractere(caractere)}
                                        apagarCaractere={apagarCaractere}
                                    />
                                ))}
                            </div>

                            <div className="flex justify-center gap-1 md:gap-2">
                                {numerosLinha2.map((caractere) => (
                                    <TeclaVirtualCard 
                                        key={caractere}
                                        caractere={caractere}
                                        digitarCaractere={() => digitarCaractere(caractere)}
                                        apagarCaractere={apagarCaractere}
                                    />
                                ))}
                            </div>

                            <div className="flex justify-center gap-1 md:gap-2">
                                {numerosLinha3.map((caractere) => (
                                    <TeclaVirtualCard 
                                        key={caractere}
                                        caractere={caractere}
                                        digitarCaractere={() => digitarCaractere(caractere)}
                                        apagarCaractere={apagarCaractere}
                                    />
                                ))}
                            </div>

                            <div className="flex justify-center gap-1 md:gap-2">
                                {numerosLinha4.map((caractere) => (
                                    <TeclaVirtualCard 
                                        key={caractere}
                                        caractere={caractere}
                                        digitarCaractere={() => digitarCaractere(caractere)}
                                        apagarCaractere={apagarCaractere}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="flex flex-col gap-2 w-full max-w-6xl mx-auto">
                        <div className="flex justify-center gap-1 md:gap-2">
                            {linha1.map((l) => (
                                <TeclaVirtualCard 
                                    key={l} 
                                    caractere={l} 
                                    digitarCaractere={digitarCaractere} 
                                    apagarCaractere={apagarCaractere}
                                />
                                ))}
                        </div>

                        <div className="flex justify-center gap-1 md:gap-2">
                            {linha2.map((l) => (
                                <TeclaVirtualCard 
                                    key={l} 
                                    caractere={l} 
                                    digitarCaractere={digitarCaractere} 
                                    apagarCaractere={apagarCaractere}
                                />
                                ))}
                        </div>

                        <div className="flex justify-center gap-1 md:gap-2">
                            {linha3.map((l) => (
                                <TeclaVirtualCard 
                                    key={l} 
                                    caractere={l} 
                                    digitarCaractere={digitarCaractere} 
                                    apagarCaractere={apagarCaractere}
                                />
                                ))}
                            
                            <TeclaVirtualCard caractere="⌫" digitarCaractere={() => digitarCaractere("⌫")} apagarCaractere={apagarCaractere} />
                        </div>
                    </div>  
                )}
        </section>
    )
}