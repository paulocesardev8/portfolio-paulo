import { Award, ExternalLink } from "lucide-react";

export const Certifications = () => {
  const certs = [
    {
      id: 1,
      name: "Ciência de Dados e Cybersecurity (240h)",
      issuer: "Descomplica Faculdade Digital",
      year: "2025",
      link: "/certificados/dados-cybersecurity.pdf", // Ajustaremos isso no próximo passo
    },
    {
      id: 2,
      name: "Cloud Computing (160h)",
      issuer: "Descomplica Faculdade Digital",
      year: "2024",
      link: "/certificados/cloud-computing.pdf",
    },
    {
      id: 3,
      name: "Microsoft Copilot AI (29h)",
      issuer: "DIO & Microsoft",
      year: "2024",
      link: "/certificados/microsoft-copilot.pdf",
    },
    {
      id: 4,
      name: "Programming and Communication (240h)",
      issuer: "Descomplica Faculdade Digital",
      year: "2024",
      link: "/certificados/programming-communication.pdf",
    },
    {
      id: 5,
      name: "Developer Thinking (160h)",
      issuer: "Descomplica Faculdade Digital",
      year: "2024",
      link: "/certificados/developer-thinking.pdf",
    },
    {
      id: 6,
      name: "Formação Lógica de Programação (41h)",
      issuer: "DIO",
      year: "2024",
      link: "/certificados/formacao-logica.pdf",
    },
    {
      id: 7,
      name: "GFT Start #6 - Lógica de Programação (47h)",
      issuer: "DIO & GFT",
      year: "2024",
      link: "/certificados/gft-start.pdf",
    },
    {
      id: 8,
      name: "Formação Python Fundamentals (26h)",
      issuer: "DIO",
      year: "2024",
      link: "/certificados/python-fundamentals.pdf",
    },
    {
      id: 9,
      name: "Modelling Data Developer (240h)",
      issuer: "Descomplica Faculdade Digital",
      year: "2025",
      link: "/certificados/modelling-data-developer.pdf",
    },
    {
      id: 10,
      name: "Disruptive Tecnologies (160h)",
      issuer: "Descomplica Faculdade Digital",
      year: "2025",
      link: "/certificados/disruptive-tecnologies.pdf",
    },
    {
      id: 11,
      name: "Business Applications DS (160h)",
      issuer: "Descomplica Faculdade Digital",
      year: "2025",
      link: "/certificados/business-applications-ds.pdf",
    },
  ];

  return (
    <section id="certificados" className="py-20 w-full max-w-6xl mx-auto px-4">
      
      <div className="flex flex-col items-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white text-center tracking-tight">
          Licenças e <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">Certificações</span>
        </h2>
        <p className="text-zinc-400 mt-4 text-center max-w-2xl">
          Especializações acadêmicas e técnicas que fundamentam a minha base analítica e de desenvolvimento.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certs.map((cert) => (
          <div 
            key={cert.id} 
            className="group relative bg-[#111111]/50 border border-[#222222] rounded-3xl p-8 hover:border-[#444444] hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 flex flex-col"
          >
            <div className="bg-white/5 w-14 h-14 rounded-full flex items-center justify-center mb-6 group-hover:bg-blue-500/10 group-hover:scale-110 transition-all duration-300">
              <Award className="text-zinc-400 group-hover:text-blue-400 transition-colors" size={28} />
            </div>
            
            <h3 className="text-xl font-bold text-white mb-2 leading-tight">
              {cert.name}
            </h3>
            
            <p className="text-sm text-zinc-400 mb-8 flex-grow">
              Emissor: <span className="text-zinc-300 font-medium">{cert.issuer}</span>
            </p>

            <div className="flex items-center justify-between mt-auto pt-5 border-t border-white/5">
              <span className="text-xs font-bold text-zinc-400 bg-zinc-900 border border-zinc-800 px-3 py-1.5 rounded-full">
                {cert.year}
              </span>
              
              {/* Só exibe o botão se houver um link preenchido diferente de "#" */}
              {cert.link !== "#" && (
                <a 
                  href={cert.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-sm text-blue-400 hover:text-blue-300 transition-colors font-medium group/link"
                >
                  Ver Credencial 
                  <ExternalLink size={14} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};