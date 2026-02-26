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
        <section className="grid grid-cols-6 gap-3 w-full max-w-4xl mx-auto max-h-[45vh] overflow-hidden">
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