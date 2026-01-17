import { CalendarDays, Instagram, Mail, MessageCircle, Phone, Star, Timer } from "lucide-react";

export default function Footer() {
    return (
      <footer className="bg-zinc-950 border-t border-zinc-900 py-12 px-4 space-y-8 mb-5 max-w-7xl mx-auto">
        <div className="flex flex-col justify-center items-center gap-2 border-t border-zinc-700 pt-6">
          <h4 className="text-2xl font-serif font-bold text-slate-200 leading-none">
          Duperon Pizzaria
          </h4>
          <p className="text-center text-zinc-500 font-medium text-sm mt-2">
            A verdadeira experiência da pizza artesanal, com ingredientes selecionados e massa de longa fermentação.
          </p>
        </div>

        <ul className="flex flex-col justify-center items-start mx-auto text-slate-200 gap-5 border-t-zinc-700 border-t mt-8 pt-8 md:flex-row md:justify-around px-1">
          <li className="flex justify-center items-center gap-2">
              <Timer 
                size={30} 
                className="text-amber-500 inline-block"
                strokeWidth={1.5}
              />
              <div className="flex flex-col">
                <p className="text-zinc-500 text-sm">Tempo de Entrega</p>
                <p className="text-zinc-200 text-base">20-30 min</p>
              </div>
          </li>
          <li className="flex justify-center items-center gap-2">
            <Star
              size={25} 
              className="text-amber-500 fill-amber-300  inline-block"
              strokeWidth={1.5}
            />
            <div className="flex flex-col">
              <p className="text-zinc-500 text-sm">Avaliações</p>
              <p className="text-zinc-200 text-base">4.8 <span className="text-zinc-500 text-sm">(464)</span></p>
            </div>
          </li>
          <li className="flex justify-center items-center gap-2">
            <CalendarDays 
              size={25} 
              className="text-amber-500 inline-block "
              strokeWidth={1.5}
            />
            <div className="flex flex-col">
              <p className="text-zinc-500 text-sm">Horário de Funcionamento</p>
              <p className="text-zinc-200 text-base">Segunda a Sexta: 18h às 23h</p>
              <p className="text-zinc-500 text-xs">Atendendo Estados Unidos/Uberaba e região</p>
            </div>
          </li>
        </ul>

        <div>
          <div className="border-t border-zinc-800 text-base font-sans text-center font-medium text-slate-200 leading-none mt-10 pt-8 mb-10">
            <h4>Entre em contato conosco!</h4>
          </div>

          <ul className="flex flex-wrap gap-4 justify-center items-center">
            <li className="flex justify-center items-center">
              <a href="https://wa.me/5534997298335?text=Olá!%20Gostaria%20de%20fazer%20um%20pedido." target="_blank" rel="noopener noreferrer" className="flex justify-center items-center  w-32 h-16">
                <button className="flex justify-center items-center cursor-pointer hover:border-amber-500 bg-zinc-900/50 border border-amber-500 text-zinc-300 w-full h-full rounded-2xl text-sm font-bold active:scale-95 transition-all active:border-amber-500">
                  <MessageCircle
                    size={16}
                    className="inline-block mr-2 mb-1"
                    strokeWidth={1.5}
                  />
                  WhatsApp
                </button>
              </a>
            </li>
            <li className="flex justify-center items-center">
              <a className="flex justify-center items-center w-32 h-16" href="https://instagram.com/duperonpizzaria" target="_blank" rel="noopener noreferrer">
                <button className="flex justify-center items-center cursor-pointer hover:border-amber-500 bg-zinc-900/50 border border-zinc-700 text-zinc-300 w-full h-full rounded-2xl text-sm font-bold active:scale-95 transition-all active:border-amber-500">
                  <Instagram
                      size={16}
                      className="inline-block mr-2 mb-1"
                      strokeWidth={1.5}
                    />
                  Instagram
                </button>
              </a>
            </li>
            <li className="flex justify-center items-center">
              <a href="mailto:nathan.pereira@unimeduberaba.com.br" className="flex justify-center items-center w-32 h-16" target="_blank">
                <button className="flex justify-center items-center cursor-pointer hover:border-amber-500 bg-zinc-900/50 border border-zinc-700 text-zinc-300 w-full h-full rounded-2xl text-sm font-bold active:scale-95 transition-all active:border-amber-500">
                  <Mail
                      size={16}
                      className="inline-block mr-2 mb-1"
                      strokeWidth={1.5}
                    />
                  Email
                </button>
              </a>
            </li>
            <li className="flex justify-center items-center">
              <a href="tel:+5534997298335" className="flex justify-center items-center w-32 h-16">
                <button className="flex justify-center items-center cursor-pointer hover:border-amber-500 bg-zinc-900/50 border border-zinc-700 text-zinc-300 w-full h-full rounded-2xl text-sm font-bold active:scale-95 transition-all active:border-amber-500">
                  <Phone
                    size={16}
                    className="inline-block mr-2 mb-1"
                    strokeWidth={1.5}
                  />
                  Telefone
                </button>
              </a>
            </li>
          </ul>
        </div>

        <div className="mt-16 pt-8 border-t border-zinc-900/50 flex flex-col items-center gap-4 text-center">
          <div className="space-y-1">
            <p className="text-zinc-500 text-[10px] uppercase tracking-[0.2em]">
              © 2026 Duperon Pizzaria - Todos os direitos reservados
            </p>
            <p className="text-zinc-600 text-[9px] tracking-widest">
              CNPJ: 00.000.000/0001-00
            </p>
          </div>

          <p className="text-zinc-500 text-[10px] tracking-wide">
            Desenvolvido por <span className="text-zinc-300 font-medium hover:text-amber-500 transition-colors cursor-pointer">Nathan Pereira</span>
          </p>
        </div>
      </footer>
    )
}