import { Briefcase, Calendar, Download, LineChart, Users, Settings, Activity } from "lucide-react";
import { SiNextdotjs, SiReact, SiTypescript, SiTailwindcss, SiGoogleanalytics, SiMeta, SiGoogleads } from "react-icons/si";

// Função mágica que pega o nome da tecnologia e devolve o ícone com a cor oficial
const getTechIcon = (tech: string) => {
  switch (tech) {
    case "Next.js": return <SiNextdotjs className="text-white" size={14} />;
    case "React": return <SiReact className="text-[#61DAFB]" size={14} />;
    case "TypeScript": return <SiTypescript className="text-[#3178C6] bg-white rounded-sm" size={12} />;
    case "Tailwind CSS": return <SiTailwindcss className="text-[#06B6D4]" size={14} />;
    case "GA4": 
    case "Web Analytics": return <SiGoogleanalytics className="text-[#F9AB00]" size={14} />;
    case "Meta API":
    case "Meta Ads": return <SiMeta className="text-[#0668E1]" size={14} />;
    case "Google Ads": return <SiGoogleads className="text-[#F4B400]" size={14} />;
    case "CRO": return <Activity className="text-emerald-400" size={14} />;
    case "Data Analysis": return <LineChart className="text-orange-400" size={14} />;
    case "Gestão de Equipes": return <Users className="text-purple-400" size={14} />;
    case "Controle de Qualidade": return <Settings className="text-pink-400" size={14} />;
    default: return <LineChart className="text-blue-400" size={14} />; // Ícone padrão
  }
};

export const Experience = () => {
  const experiences = [
    {
      id: 1,
      role: "Desenvolvedor Front-End & Growth Engineer",
      company: "Sintonia Solutions",
      date: "2023 - Atual",
      description: "Desenvolvimento de aplicações web de alta performance utilizando Next.js (App Router), React e TypeScript. Criação de Plataformas de Venda e Landing Pages com foco em CRO e SEO Técnico. Implementação avançada de rastreamento server-side.",
      tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "GA4", "Meta API", "Web Analytics", "Reporting", "Google Ads", "Meta Ads", "Performance Marketing", "CRO", "Data Analysis"],
    },
    {
      id: 2,
      role: "Gestor Estrategista de Tráfego & Dados",
      company: "DOOP Comunicação",
      date: "2024 - Atual",
      description: "Planejamento e execução de campanhas de alta performance em Google Ads e Meta Ads. Análise técnica de dados para otimização de ROI. Colaboração direta com times de desenvolvimento para implementação de tags e melhorias de conversão (CRO).",
      tech: ["Google Ads", "Meta Ads", "Data Analysis", "CRO", "Web Analytics", "Reporting"],
    },
    {
      id: 3,
      role: "Analista de Marketing / Gestor de Tráfego",
      company: "Grupo Viviani",
      date: "Jun 2024 - Dez 2024",
      description: "Estruturação de campanhas digitais orientadas a performance, criação de dashboards analíticos e elaboração de relatórios estratégicos para stakeholders.",
      tech: ["Performance Marketing", "Google Ads", "Meta Ads", "Web Analytics", "Reporting"],
    },
    {
      id: 4,
      role: "Transição de Carreira & Background Analítico",
      company: "PQ Corporation | Silva e Barbosa",
      date: "2016 - 2023",
      description: "Forte base em processos, controle de qualidade e gestão de equipes construída em laboratórios físico-químicos e liderança operacional. Experiência fundamental para o desenvolvimento do meu atual perfil analítico e orientado a dados na tecnologia.",
      tech: ["Gestão de Equipes", "Controle de Qualidade", "Análise de Processos"],
    },
  ];

  return (
    <section id="experiencia" className="py-24 w-full max-w-5xl mx-auto px-4">
      
      <div className="flex flex-col items-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white text-center tracking-tight">
          Minha <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">Jornada</span>
        </h2>
        <p className="text-zinc-400 mt-4 text-center max-w-2xl">
          Uma trajetória de evolução constante, unindo a visão analítica de dados com a engenharia de software focada em negócios.
        </p>
      </div>

      <div className="relative border-l border-zinc-800/80 ml-3 md:ml-6 space-y-12">
        {experiences.map((exp) => (
          <div key={exp.id} className="relative pl-8 md:pl-12 group">
            
            {/* Bolinha da Timeline */}
            <div className="absolute -left-[21px] top-1 h-10 w-10 rounded-full bg-[#0a0a0a] border border-zinc-800 flex items-center justify-center group-hover:border-purple-500 group-hover:shadow-[0_0_15px_rgba(168,85,247,0.4)] transition-all duration-300">
              <Briefcase size={18} className="text-zinc-400 group-hover:text-purple-400 transition-colors" />
            </div>

            <div className="bg-[#111111] border border-[#222222] rounded-2xl p-6 md:p-8 hover:border-[#444444] transition-colors duration-300 hover:shadow-2xl hover:shadow-purple-500/5">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white">{exp.role}</h3>
                  <p className="text-lg text-purple-400 font-medium">{exp.company}</p>
                </div>
                <div className="flex items-center gap-2 text-zinc-400 text-sm bg-zinc-900/80 border border-zinc-800 px-3 py-1.5 rounded-full w-fit">
                  <Calendar size={14} />
                  <span>{exp.date}</span>
                </div>
              </div>
              
              <p className="text-[#C1C2D3] leading-relaxed mb-6">
                {exp.description}
              </p>

              {/* Tags de Tecnologias COM ÍCONES */}
              <div className="flex flex-wrap gap-2 md:gap-3">
                {exp.tech.map((item, index) => (
                  <span 
                    key={index} 
                    className="flex items-center gap-1.5 text-xs md:text-sm font-medium px-3 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 hover:border-zinc-600 hover:text-white transition-colors cursor-default"
                  >
                    {getTechIcon(item)}
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 flex justify-center">
        <a 
          href="/CV_Paulo_Cesar_FrontEnd_React.pdf"
          download
          className="group flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-zinc-200 transition-colors duration-300 shadow-lg shadow-white/10 hover:shadow-white/20"
        >
          <Download size={20} className="group-hover:-translate-y-1 transition-transform" />
          Baixar Currículo (PDF)
        </a>
      </div>
    </section>
  );
};