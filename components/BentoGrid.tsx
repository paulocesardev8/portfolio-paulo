import { ReactNode } from "react";

export const BentoGrid = ({ children }: { children: ReactNode }) => {
  return (
    // Aumentamos o tamanho máximo para caber mais blocos e ficar imponente
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-8 max-w-6xl mx-auto p-4 auto-rows-[minmax(180px,auto)]">
      {children}
    </div>
  );
};

export const BentoItem = ({ 
  children, 
  className, 
  title 
}: { 
  children: ReactNode; 
  className?: string;
  title?: string;
}) => {
  return (
    <div className={`
      relative overflow-hidden rounded-3xl border border-white/[0.1] 
      group/bento hover:shadow-2xl hover:shadow-purple-500/10 transition duration-300 
      flex flex-col space-y-4 p-6 lg:p-8
      bg-[rgb(4,7,29)] bg-[linear-gradient(90deg,rgba(4,7,29,1),0%,rgba(12,14,35,1),100%)]
      ${className}
    `}>
      {/* Aqui está o segredo do John: A div inteira move para a direita no hover */}
      <div className="group-hover/bento:translate-x-2 transition duration-300 relative z-10 flex flex-col h-full justify-center">
        {title && (
          <div className="font-sans text-xl lg:text-2xl font-bold text-white mb-3">
            {title}
          </div>
        )}
        <div className="font-sans font-light text-sm md:text-base text-[#C1C2D3] leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
};