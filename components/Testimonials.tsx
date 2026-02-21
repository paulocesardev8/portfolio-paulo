import { Quote, Star } from "lucide-react";

export const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Diretor de Marketing",
      company: "Agência Digital",
      text: "O trabalho do Paulo foi um divisor de águas. Ele não apenas entregou um site extremamente rápido, mas a configuração do GA4 e do Pixel server-side fez com que nossas campanhas tivessem um rastreamento 100% preciso. O ROAS aumentou significativamente.",
      initials: "DM",
      color: "bg-blue-500",
    },
    {
      id: 2,
      name: "Tech Lead",
      company: "Startup SaaS",
      text: "Excelente desenvolvedor Front-end. O domínio que o Paulo tem de Next.js e TypeScript ajudou a escalar nossa plataforma sem perder performance. O código é limpo, bem componentizado e a preocupação dele com Core Web Vitals é um diferencial raro no mercado.",
      initials: "TL",
      color: "bg-purple-500",
    },
    {
      id: 3,
      name: "Empreendedor E-commerce",
      company: "Loja Virtual",
      text: "Contratei o Paulo para otimizar minha página de vendas e os resultados foram imediatos. A velocidade de carregamento caiu pela metade e a inteligência de dados que ele aplicou nas campanhas de Meta Ads diminuiu nosso custo por aquisição (CPA) em 35%.",
      initials: "EE",
      color: "bg-emerald-500",
    },
  ];

  // O Truque Mágico: Duplicamos a lista para criar o efeito de "loop" infinito sem quebrar
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section id="depoimentos" className="py-24 w-full overflow-hidden">
      
      {/* Título da Sessão */}
      <div className="flex flex-col items-center mb-16 px-4">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white text-center tracking-tight">
          O que <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">dizem</span> sobre mim
        </h2>
        <p className="text-zinc-400 mt-4 text-center max-w-2xl">
          Experiências de clientes e parceiros que validam a união entre código de qualidade e foco em conversão.
        </p>
      </div>

      {/* Container do Carrossel com Máscara de Degradê nas bordas */}
      <div className="relative max-w-7xl mx-auto [mask-image:linear-gradient(to_right,transparent,white_15%,white_85%,transparent)]">
        
        {/* Pista de Rolagem */}
        <div className="flex gap-6 w-max animate-infinite-scroll hover:[animation-play-state:paused] py-4">
          
          {duplicatedTestimonials.map((item, index) => (
            <div 
              key={index} 
              className="relative w-[85vw] md:w-[450px] flex-shrink-0 bg-[#111111] border border-[#222222] rounded-3xl p-8 hover:border-[#444444] transition-colors duration-300 flex flex-col cursor-grab active:cursor-grabbing"
            >
              {/* Ícone de Aspas Flutuante */}
              <Quote className="absolute top-6 right-6 text-zinc-800 rotate-180" size={40} />
              
              {/* Estrelinhas */}
              <div className="flex gap-1 mb-6 relative z-10">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-yellow-500 text-yellow-500" />
                ))}
              </div>

              {/* Texto do Depoimento */}
              <p className="text-[#C1C2D3] leading-relaxed mb-8 relative z-10 flex-grow text-sm md:text-base">
                "{item.text}"
              </p>

              {/* Rodapé: Autor */}
              <div className="flex items-center gap-4 mt-auto relative z-10">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg ${item.color}`}>
                  {item.initials}
                </div>
                <div>
                  <h4 className="text-white font-bold">{item.name}</h4>
                  <p className="text-sm text-zinc-500">{item.company}</p>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
      
    </section>
  );
};