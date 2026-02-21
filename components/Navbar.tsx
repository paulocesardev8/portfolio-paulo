import { ReactNode } from "react";

export const Navbar = () => {
  return (
    <div className="fixed top-8 inset-x-0 mx-auto max-w-fit z-50">
      <nav className="flex items-center justify-center gap-6 px-8 py-4 bg-zinc-950/50 backdrop-blur-md border border-white/10 rounded-full shadow-lg shadow-black/50">
        <a href="#sobre" className="text-sm text-zinc-400 hover:text-white transition-colors font-medium">
          Sobre
        </a>
        <a href="#experiencia" className="text-sm text-zinc-400 hover:text-white transition-colors font-medium">
          Experiência
        </a>
        <a href="#projetos" className="text-sm text-zinc-400 hover:text-white transition-colors font-medium">
          Projetos
        </a>
        <a href="#contato" className="text-sm text-zinc-400 hover:text-white transition-colors font-medium">
          Contato
        </a>
      </nav>
    </div>
  );
};