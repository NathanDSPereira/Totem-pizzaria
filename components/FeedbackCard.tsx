import { Feedback } from "@/interface/Categoria";
import { Star } from "lucide-react";
import Image from "next/image";

export default function FeedbackCard({feedback}: {feedback: Feedback}) {
    return (
        <section className="bg-zinc-900 w-full h-full p-5 rounded-3xl flex flex-col justify-between shadow-lg">
            <div className="pr-4 pt-3 mb-4 border-b border-zinc-800 flex-1 overflow-hidden">
                <p className="italic text-zinc-300">&quot;{feedback.comentario}&quot;</p>
            </div>
            <div className="flex flex-col gap-1">
                <div>
                    {
                        Array.from({length: feedback.estrelas}).map((_, index) => (
                            <Star
                                key={index}
                                size={16} 
                                className="text-amber-500 fill-amber-500  inline-block mr-1 mb-1" 
                            />
                        ))}
                </div>
                <div className="flex items-center justify-baseline gap-3 pb-3">
                    <Image 
                        src={feedback.urlImagem}
                        alt="nome do usuario"
                        width={40}
                        height={30}
                        className="rounded-full object-cover w-10 h-10 p-0.5"
                    />
                    <h4 className="font-bold text-slate-300">{feedback.nome}</h4>
                </div>
            </div>
        </section>
    );
}