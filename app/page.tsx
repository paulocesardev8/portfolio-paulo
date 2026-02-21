import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { BentoGrid, BentoItem } from "@/components/BentoGrid";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Testimonials } from "@/components/Testimonials";
import { ArrowUpRight, Send } from "lucide-react";
import {
  SiNextdotjs, SiReact, SiTypescript, SiTailwindcss,
  SiGoogleanalytics, SiMeta
} from "react-icons/si";
import { TbDeviceAnalytics } from "react-icons/tb";




// --- DADOS DAS TAGS DO FUNDO (Adicionei mais linhas para preencher bem) ---
const row1 = ["Next.js", "React", "TypeScript", "Tailwind CSS", "Front-end", "UX/UI Design", "Figma", "Vercel"];
const row2 = ["Growth Hacking", "GA4", "Google Tag Manager", "Meta Ads", "Google Ads", "CRO", "SEO Técnico"];
const row3 = ["JavaScript", "Node.js", "API Integration", "Performance", "Server-side Tracking", "E-commerce"];
const row4 = ["Estratégia", "Liderança", "Data Analysis", "Looker Studio", "BigQuery", "A/B Testing"];
const row5 = ["Web Analytics", "React Query", "Framer Motion", "Git", "GitHub", "Metodologias Ágeis"];

// Função atualizada para tags mais unidas
const TagRow = ({ tags, direction }: { tags: string[], direction: "left" | "right" }) => {
  const duplicatedTags = [...tags, ...tags, ...tags]; 
  const animationClass = direction === "left" ? "animate-scroll-left" : "animate-scroll-right";

  return (
    <div className="flex overflow-hidden select-none w-full">
      {/* Diminuí o gap de 4 para 2, e o py para deixar as linhas mais coladas */}
      <div className={`flex gap-2 items-center flex-shrink-0 ${animationClass} py-1`}>
        {duplicatedTags.map((tag, index) => (
          <span
            key={index}
            // Reduzi o padding interno (px-4 py-1.5) e o texto para ficar mais delicado e junto
            className="px-4 py-1.5 rounded-full bg-[#0a0a0a]/90 border border-white/5 text-zinc-600 font-medium text-xs md:text-sm whitespace-nowrap"
          >
            # {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] overflow-x-hidden relative">
      <Navbar />

      {/* --- SESSÃO HERO --- */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center px-4 pt-24 overflow-hidden">

        {/* === CAMADA 1: O FUNDO RESTRITO À FOTO (z-0) === */}
        {/* O segredo: Colocamos o bloco todo preso no topo e usamos uma máscara [mask-image] para criar um "buraco" visível apenas no centro */}
        <div className="absolute top-10 md:top-16 left-0 right-0 h-[350px] md:h-[450px] z-0 flex flex-col justify-center gap-2 opacity-100 pointer-events-none [mask-image:radial-gradient(circle_at_center,black_40%,transparent_80%)]">
          <TagRow tags={row1} direction="left" />
          <TagRow tags={row2} direction="right" />
          <TagRow tags={row3} direction="left" />
          <TagRow tags={row4} direction="right" />
          <TagRow tags={row5} direction="left" />
        </div>

        {/* === CAMADA 2: O CONTEÚDO PRINCIPAL (z-20) === */}
        <div className="relative z-20 flex flex-col items-center text-center mt-10">
          
          {/* A FOTO HERO */}
          {/* Aumentei as medidas para w-48/h-48 no celular e w-64/h-64 no desktop */}
          <div className="relative w-48 h-48 md:w-64 md:h-64 mb-10 rounded-full p-1 bg-gradient-to-tr from-purple-600 via-blue-500 to-purple-600 animate-spin-slow shadow-2xl shadow-purple-500/20">
            <div className="bg-[#0a0a0a] rounded-full p-[2px] w-full h-full overflow-hidden">
                <Image
                src="/paulo cesar front end analista de marketing python AI.png" 
                alt="Paulo Cesar"
                width={256} // Aumentei o tamanho base do Next Image
                height={256}
                quality={100}
                priority 
                className="rounded-full object-cover w-full h-full hover:scale-105 transition-transform duration-500"
                />
            </div>
          </div>

          {/* TEXTOS (Mantidos com um leve ajuste de espaçamento) */}
          <p className="uppercase tracking-[0.2em] text-xs md:text-sm text-blue-400 mb-4 font-bold bg-blue-500/10 px-4 py-2 rounded-full border border-blue-500/20 shadow-lg shadow-blue-500/10">
            Arquitetura Front-end & Inteligência de Dados
          </p>
          
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-6 text-white tracking-tighter leading-none drop-shadow-2xl">
            PAULO <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-400">CESAR </span><span className="text-blue-500">.</span>
          </h1>
          
          <p className="text-lg md:text-2xl text-zinc-400 max-w-2xl font-light">
            Transformando linhas de código em <strong className="text-white font-semibold">resultados de negócio</strong> escaláveis.
          </p>

           <div className="flex flex-wrap justify-center gap-4 mt-10">
              <a href="#projetos" className="px-8 py-3 bg-white text-black rounded-full font-bold hover:bg-zinc-200 hover:scale-105 transition-all">Ver Projetos</a>
              <a href="#contato" className="px-8 py-3 bg-zinc-900 text-white border border-zinc-800 rounded-full font-bold hover:bg-zinc-800 hover:scale-105 transition-all">Contato</a>
           </div>
        </div>
      </section>


      {/* --- RESTANTE DO SITE (Bento Grid, etc...) --- */}
      <div className="py-20 px-4 relative z-20 bg-[#050505]">
        <BentoGrid>
        {/* Card 1: Sobre */}
        <BentoItem className="md:col-span-2" title="Sobre mim">
          <p className="text-lg leading-relaxed">
            Tenho um perfil híbrido e orientado a resultados. Construo aplicações web modernas, integrando SEO técnico e ferramentas avançadas de análise (GA4, GTM, Meta API) para garantir rastreamento preciso e traduzir objetivos de negócio em soluções escaláveis.
          </p>
        </BentoItem>

        {/* Card 2: Tech Stack */}
        <BentoItem title="Tech Stack">
          <ul className="space-y-4">
            <li className="flex items-center gap-3 group">
              <SiNextdotjs className="text-white group-hover:scale-110 transition-transform" size={22} />
              <span>Next.js</span>
            </li>
            <li className="flex items-center gap-3 group">
              <SiReact className="text-[#61DAFB] group-hover:scale-110 transition-transform animate-[spin_10s_linear_infinite]" size={22} />
              <span>React</span>
            </li>
            <li className="flex items-center gap-3 group">
              <SiTypescript className="text-[#3178C6] bg-white rounded-sm group-hover:scale-110 transition-transform" size={20} />
              <span>TypeScript</span>
            </li>
            <li className="flex items-center gap-3 group">
              <SiTailwindcss className="text-[#06B6D4] group-hover:scale-110 transition-transform" size={22} />
              <span>Tailwind CSS</span>
            </li>
          </ul>
        </BentoItem>

        {/* Card 3: Experiência Resumida */}
        <BentoItem className="md:col-span-2" title="Foco Atual">
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="bg-purple-500/10 p-3 rounded-xl border border-purple-500/20">
                  <SiNextdotjs className="text-purple-400" size={24} />
              </div>
              <div>
                <h4 className="text-white font-bold text-lg">Desenvolvedor Front-End & Growth</h4>
                <p className="text-sm text-purple-300 mb-1">Sintonia Solutions | 2023 - Atual</p>
                <p className="text-[#C1C2D3] text-sm">Desenvolvimento de plataformas de alta conversão, unindo performance web (Core Web Vitals) com inteligência de dados (Server-side Tracking).</p>
              </div>
            </div>
          </div>
        </BentoItem>

        {/* Card 4: Growth & Data */}
        <BentoItem title="Growth & Data">
          <ul className="space-y-4">
            <li className="flex items-center gap-3 group">
              <SiGoogleanalytics className="text-[#F9AB00] group-hover:scale-110 transition-transform" size={22} />
              <span>Google Analytics 4</span>
            </li>
            <li className="flex items-center gap-3 group">
              <SiMeta className="text-[#0668E1] group-hover:scale-110 transition-transform" size={22} />
              <span>Meta Ads & Pixel API</span>
            </li>
            <li className="flex items-center gap-3 group">
              <TbDeviceAnalytics className="text-emerald-400 group-hover:scale-110 transition-transform" size={24} />
              <span>Server-side Tracking</span>
            </li>
          </ul>
        </BentoItem>
        
        {/* Card 6: CTA WhatsApp */}
        <BentoItem className="flex items-center justify-center text-center md:col-span-3 bg-[linear-gradient(to_right,rgba(121,9,109,0.2),rgba(0,212,255,0.2))]! border-purple-500/30!">
          <div className="flex flex-col items-center justify-center h-full w-full py-6">
            <h3 className="text-3xl font-bold text-white mb-4">Pronto para escalar seu negócio?</h3>
            <p className="mb-8 text-zinc-300 max-w-xl">Vamos unir engenharia e dados para construir sua próxima plataforma de vendas.</p>
            <a
              href="https://wa.me/5519999376802"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-3 w-auto bg-[linear-gradient(120deg,#79096d,45%,#00d4ff,55%,#79096d)] bg-[length:200%_100%] animate-shimmer text-white px-8 py-4 rounded-full font-bold shadow-xl shadow-purple-500/20 hover:scale-[1.02] transition-transform"
            >
              <Send size={20} />
              Falar comigo pelo WhatsApp
            </a>
          </div>
        </BentoItem>
      </BentoGrid>
      </div>

      <Experience />
      <Projects />
      <Testimonials />

    </main>
  );
}