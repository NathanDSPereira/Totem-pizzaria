import TeclaVirtualCard from "./TeclaVirtualCard"

export default function TecladoVirtual({digitarCaractere, campoFoco}: {digitarCaractere: (caractere: string) => void, campoFoco: string}) {
    const caracteresNumeros = [
        "1", "2", "3",
        "4", "5", "6",
        "7", "8", "9",
        "*", "0", "#"
    ]

    const linha1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
    const linha2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
    const linha3 = ["Z", "X", "C", "V", "B", "N", "M"];


    return (
        // <section className="flex justify-center w-full">
        //     <div className="grid grid-cols-6 md:grid-cols-10 gap-3 w-full mx-auto max-w-4xl max-h-[50vh] overflow-hidden">
        //         {campoFoco === "telefone" ? (
        //             caracteresNumeros.map(caractere => (
        //                 <TeclaVirtualCard 
        //                     key={caractere}
        //                     digitarCaractere={() => digitarCaractere(caractere)}
        //                     caractere={caractere}
        //                 />
        //             ))
        //         ) : (
        //             caracteresLetras.map(caractere => (
        //                 <TeclaVirtualCard 
        //                     key={caractere}
        //                     digitarCaractere={() => digitarCaractere(caractere)}
        //                     caractere={caractere}
        //                 />
        //             ))
        //         )}
        //     </div>
        // </section>

        <section className="flex flex-col gap-2 w-full max-w-6xl mx-auto">
             {campoFoco === "telefone" ? (
                    caracteresNumeros.map(caractere => (
                        <TeclaVirtualCard 
                            key={caractere}
                            digitarCaractere={() => digitarCaractere(caractere)}
                            caractere={caractere}
                        />
                    ))
                ) : (
                    <div className="flex flex-col gap-2 w-full max-w-6xl mx-auto">
                        <div className="flex justify-center gap-1 md:gap-2">
                            {linha1.map((l) => (
                                <TeclaVirtualCard 
                                    key={l} 
                                    caractere={l} 
                                    digitarCaractere={digitarCaractere} />
                                ))}
                        </div>

                        <div className="flex justify-center gap-1 md:gap-2">
                            {linha2.map((l) => (
                                <TeclaVirtualCard 
                                    key={l} 
                                    caractere={l} 
                                    digitarCaractere={digitarCaractere} />
                                ))}
                        </div>

                        <div className="flex justify-center gap-1 md:gap-2">
                            {linha3.map((l) => (
                                <TeclaVirtualCard 
                                    key={l} 
                                    caractere={l} 
                                    digitarCaractere={digitarCaractere} />
                                ))}
                            
                            <TeclaVirtualCard caractere="⌫" digitarCaractere={() => digitarCaractere("⌫")} />
                        </div>
                    </div>  
                )}
        </section>
    )
}