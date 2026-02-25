import TeclaVirtualCard from "./TeclaVirtualCard"

export default function TecladoVirtual({digitarCaractere, campoFoco}: {digitarCaractere: (caractere: string) => void, campoFoco: string}) {
    const caracteresNumeros = [
        "1", "2", "3",
        "4", "5", "6",
        "7", "8", "9",
        "*", "0", "#"
    ]

    const caracteresLetras = [
        "A", "B", "C",
        "D", "E", "F",
        "G", "H", "I",
        "J", "K", "L",
        "M", "N", "O",
        "P", "Q", "R",
        "S", "T", "U",
        "V", "W", "X",
        "Y", "Z"
    ]

    return (
        <section className="w-full max-w-2/3 mt-10 flex flex-wrap gap-4 justify-center">
            {campoFoco === "telefone" ? (
                caracteresNumeros.map(caractere => (
                    <TeclaVirtualCard 
                        key={caractere}
                        digitarCaractere={() => digitarCaractere(caractere)}
                        caractere={caractere}
                    />
                ))
            ) : (
                caracteresLetras.map(caractere => (
                    <TeclaVirtualCard 
                        key={caractere}
                        digitarCaractere={() => digitarCaractere(caractere)}
                        caractere={caractere}
                    />
                ))
            )}
        </section>
    )
}