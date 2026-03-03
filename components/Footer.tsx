import { ArrowUpRight } from "lucide-react";
import { SiGithub, SiInstagram, SiLinkedin, SiWhatsapp } from "react-icons/si";

export const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10 px-4 border-t border-white/5 bg-[#050505]">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        
        {/* Call to Action Final */}
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 text-center tracking-tight">
          Vamos construir algo <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">incrível</span> juntos?
        </h2>
        <p className="text-zinc-400 mb-10 text-center max-w-xl text-sm md:text-base">
          Estou sempre aberto a novas oportunidades, projetos desafiadores e conversas sobre tecnologia e growth.
        </p>
        
        <a 
          href="mailto: paulo.pereira.jr.s@gmail.com" // <-- COLOQUE SEU EMAIL AQUI
          className="group flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-zinc-200 transition-all hover:scale-105 duration-300 shadow-lg shadow-white/10"
        >
          Me mande um e-mail
          <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </a>

        {/* Linha Divisória Elegante */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent my-16" />

        {/* Parte Inferior: Copyright e Redes Sociais */}
        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-zinc-500 text-sm">
            © {new Date().getFullYear()} Paulo Cesar. Todos os direitos reservados.
          </p>

          {/* Links Sociais com efeito Glow nas cores originais */}
          <div className="flex items-center gap-4">
            <a 
              href="https://github.com/paulocesardev8" // <-- COLOQUE SEU GITHUB AQUI
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-3 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-white hover:shadow-[0_0_15px_rgba(255,255,255,0.3)] transition-all duration-300"
            >
              <SiGithub size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/paulo-cesar-tech-mkt/" // <-- COLOQUE SEU LINKEDIN AQUI
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-3 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-[#0A66C2] hover:border-[#0A66C2] hover:shadow-[0_0_15px_rgba(10,102,194,0.4)] transition-all duration-300"
            >
              <SiLinkedin size={20} />
            </a>
            <a 
              href="https://wa.me/5519999376802" // <-- SEU WHATSAPP
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-3 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-[#25D366] hover:border-[#25D366] hover:shadow-[0_0_15px_rgba(37,211,102,0.4)] transition-all duration-300"
            >
              <SiWhatsapp size={20} />
            </a>
                        <a 
              href="https://www.instagram.com/sintoniasolutions/" // <-- SEU INSTAGRAM
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-3 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-[#a731aa] hover:shadow-[0_0_15px_rgba(37,211,102,0.4)] transition-all duration-300"
            >
              <SiInstagram size={20} />
            </a>  
          </div>
        </div>
        
      </div>
    </footer>
  );
};