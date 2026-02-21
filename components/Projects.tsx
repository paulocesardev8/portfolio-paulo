import Image from "next/image";
import { ArrowUpRight, Github } from "lucide-react";
import { SiNextdotjs, SiReact, SiTypescript, SiTailwindcss, SiGoogleanalytics } from "react-icons/si";

export const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Sintonia Solutions - Plataforma de Vendas",
      description: "Plataforma de alta performance desenvolvida do zero para venda de serviços digitais e mentorias. O foco central do projeto foi unir engenharia de software com inteligência de dados, implementando Server-Side Rendering (SSR) para otimização de Core Web Vitals e integração nativa com APIs de conversão (Meta/GA4) para rastreamento preciso de ROAS.",
      image: "/sintonia.png", // Nome da imagem que você colocou na pasta public
      tech: [
        { name: "Next.js", icon: <SiNextdotjs className="text-white" size={16} /> },
        { name: "React", icon: <SiReact className="text-[#61DAFB]" size={16} /> },
        { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6] bg-white rounded-sm" size={14} /> },
        { name: "Tailwind", icon: <SiTailwindcss className="text-[#06B6D4]" size={16} /> },
        { name: "GA4 API", icon: <SiGoogleanalytics className="text-[#F9AB00]" size={16} /> },
      ],
      liveUrl: "https://sintoniasolutions.com.br",
      githubUrl: "#", // Se tiver repositório público, coloque o link aqui
    },
    // Você pode copiar e colar o bloco acima para adicionar mais projetos no futuro!
  ];

  return (
    <section id="projetos" className="py-24 w-full max-w-6xl mx-auto px-4">
      
      {/* Título da Sessão */}
      <div className="flex flex-col items-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white text-center tracking-tight">
          Projetos em <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">Destaque</span>
        </h2>
        <p className="text-zinc-400 mt-4 text-center max-w-2xl">
          Aplicações reais desenvolvidas com foco em performance, conversão e experiência do usuário.
        </p>
      </div>

      {/* Grid de Projetos */}
      <div className="flex flex-col gap-12">
        {projects.map((project) => (
          <div 
            key={project.id} 
            className="group relative flex flex-col lg:flex-row bg-[#111111] border border-[#222222] rounded-3xl overflow-hidden hover:border-[#444444] transition-colors duration-500 shadow-2xl shadow-black"
          >
            
            {/* Lado Esquerdo: Imagem do Projeto */}
            <div className="relative w-full lg:w-1/2 h-64 sm:h-80 lg:h-auto overflow-hidden bg-zinc-900 border-b lg:border-b-0 lg:border-r border-[#222222]">
              {/* Overlay Escuro para o Hover */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
              <Image
                src={project.image}
                alt={`Print do projeto ${project.title}`}
                fill
                quality={100} // <-- O Segredo da Nitidez Máxima no Next.js
                unoptimized // <-- Opcional: use isso se ainda achar que o Next.js está borrando
                className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-in-out"
              />
            </div>

            {/* Lado Direito: Informações */}
            <div className="w-full lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                {project.title}
              </h3>
              
              <p className="text-[#C1C2D3] leading-relaxed mb-8 text-sm md:text-base">
                {project.description}
              </p>

              {/* Tecnologias Usadas */}
              <div className="flex flex-wrap gap-3 mb-10">
                {project.tech.map((tech, index) => (
                  <span 
                    key={index} 
                    className="flex items-center gap-2 text-xs font-medium px-3 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300"
                  >
                    {tech.icon}
                    {tech.name}
                  </span>
                ))}
              </div>

              {/* Botões de Ação */}
              <div className="flex flex-wrap items-center gap-4 mt-auto">
                <a 
                  href={project.liveUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-bold hover:bg-zinc-200 transition-transform hover:scale-105 duration-300"
                >
                  Ver Projeto Ao Vivo
                  <ArrowUpRight size={18} />
                </a>
                
                {project.githubUrl !== "#" && (
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-zinc-900 border border-zinc-700 text-white px-6 py-3 rounded-full font-bold hover:bg-zinc-800 transition-colors duration-300"
                  >
                    <Github size={18} />
                    Código Fonte
                  </a>
                )}
              </div>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
};