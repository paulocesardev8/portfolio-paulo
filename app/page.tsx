import type { Metadata } from "next";
import Image from "next/image";
import CarrosselAulas from "@/components/CarrosselAulas";

export const metadata: Metadata = {
  title: "Sintonia Solutions | Tráfego Pago com Método",
  description: "Pare de anunciar no improviso. Mentoria particular e acompanhamento de 90 dias com Paulo Cesar.",
};

const WA_1x1 = "https://wa.me/5519987358774?text=Ol%C3%A1%20Paulo!%20Quero%20saber%20mais%20sobre%20a%20mentoria%201x1.";
const WA_90D = "https://wa.me/5519987358774?text=Ol%C3%A1%20Paulo!%20Quero%20saber%20mais%20sobre%20o%20Ciclo%2090%20Dias.";
const WA_GERAL = "https://wa.me/5519987358774?text=Ol%C3%A1%20Paulo!%20Vim%20pelo%20site%20e%20tenho%20uma%20d%C3%BAvida.";

const depoimentos = [
  { nome: "Nani", nicho: "Terapeuta Holística", hora: "14:32", texto: "O Paulo clareou o caminho para meus anúncios. Antes eu não sabia nem por onde começar! 🙏", foto: "/depoimentos/nani.png" },
  { nome: "Renata", nicho: "Imobiliária", hora: "09:17", texto: "Eu não entendia de jeito nenhum, até o Paulo me explicar o passo a passo. Agora faz sentido tudo!", foto: "/depoimentos/renata.png" },
  { nome: "Tom", nicho: "Fisioterapeuta", hora: "16:45", texto: "Contratei agências e não tive o resultado que o Paulo me trouxe. Simples assim.", foto: "/depoimentos/tom.png" },
  { nome: "Vinicius", nicho: "Agência de Viagens", hora: "11:08", texto: "Além da paciência, o Paulo sabe o que está fazendo! Recomendo demais 👏", foto: "/depoimentos/vinicius_cap_av.png" },
  { nome: "Ana Flávia", nicho: "E-commerce", hora: "15:43", texto: "Vale demais cada centavo, o Paulo é super atencioso, realmente tira todas as dúvidas! ❤️", foto: "/depoimentos/ana_flavia_-_vendas.png" },
  { nome: "Guilherme", nicho: "Adestrador", hora: "10:22", texto: "Os colegas de profissão que me desculpem, mas trabalhar com o Paulo é muito bom. Sabe explicar, tem paciência pra ensinar e traz clareza!", foto: "/depoimentos/guilherme_-_adestrador.png" },
  { nome: "Leandro", nicho: "Peças para Frigorífico", hora: "13:55", texto: "Eu estava com dificuldades para melhorar a comunicação do meu negócio, o Paulo foi cirúrgico no que precisava! É diferenciado!", foto: "/depoimentos/leandro.png" },
  { nome: "Flávia", nicho: "Terapeuta", hora: "17:15", texto: "Sua aula é maravilhosa! Tudo é importante, mas você Paulo é sensacional! Direto no ponto! 🙏", foto: "/depoimentos/flavia.png" },
  { nome: "Ronald", nicho: "Loja de Roupas", hora: "17:30", texto: "Sem sombra de dúvidas, que energia esse rapaz tem. Muito bom o comprometimento e entrega do Paulo! 🔥", foto: null },
];

export default function Home() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,400&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        :root {
          --bg: #0c0c0c; --bg2: #141414; --bg3: #1a1a1a; --border: #252525;
          --accent: #E8621A; --accent2: #d05515;
          --accent-dim: rgba(232,98,26,0.12); --accent-border: rgba(232,98,26,0.25);
          --text: #f2f2f2; --muted: #888; --card: #131313;
          --wpp-bg: #0d1117; --wpp-header: #161b22; --wpp-bubble: #1c2a1c;
          --wpp-green: #25d366; --wpp-tick: #53bdeb;
        }
        html { scroll-behavior: smooth; }
        body { background: var(--bg); color: var(--text); font-family: 'DM Sans', sans-serif; font-size: 16px; line-height: 1.7; overflow-x: hidden; }
        h1,h2,h3,h4 { font-family: 'Syne', sans-serif; line-height: 1.15; letter-spacing: -0.02em; }
        .container { max-width: 1100px; margin: 0 auto; padding: 0 24px; }

        nav { position: fixed; top: 0; left: 0; right: 0; z-index: 100; border-bottom: 1px solid var(--border); background: rgba(12,12,12,0.94); backdrop-filter: blur(14px); }
        .nav-inner { display: flex; align-items: center; justify-content: space-between; height: 64px; max-width: 1100px; margin: 0 auto; padding: 0 24px; }
        .logo { display: flex; align-items: center; gap: 10px; text-decoration: none; }
        .logo-text { font-family: 'Syne', sans-serif; font-weight: 800; font-size: 18px; color: var(--text); letter-spacing: -0.03em; }
        .logo-text span { color: var(--accent); }
        .nav-cta { background: var(--accent); color: #fff; font-family: 'Syne', sans-serif; font-weight: 700; font-size: 13px; padding: 9px 20px; border-radius: 6px; text-decoration: none; transition: background 0.2s; }
        .nav-cta:hover { background: var(--accent2); }

        .hero { min-height: 100vh; display: flex; align-items: center; padding: 120px 0 80px; position: relative; overflow: hidden; }
        .hero::before { content: ''; position: absolute; top: -150px; right: -150px; width: 500px; height: 500px; background: radial-gradient(circle, rgba(232,98,26,0.07) 0%, transparent 70%); pointer-events: none; }
        .hero .container { position: relative; z-index: 1; }
        .hero-badge { display: inline-flex; align-items: center; gap: 8px; background: var(--accent-dim); border: 1px solid var(--accent-border); border-radius: 100px; padding: 6px 14px; font-size: 13px; color: var(--accent); margin-bottom: 28px; font-weight: 500; }
        .hero-badge::before { content: ''; width: 7px; height: 7px; background: var(--accent); border-radius: 50%; animation: pulse 2s infinite; }
        @keyframes pulse { 0%,100% { opacity:1; transform:scale(1); } 50% { opacity:0.5; transform:scale(0.8); } }
        .hero h1 { font-size: clamp(38px, 5.5vw, 68px); font-weight: 800; margin-bottom: 24px; max-width: 780px; }
        .hero h1 em { font-style: normal; color: var(--accent); }
        .hero-sub { font-size: 18px; color: var(--muted); max-width: 540px; margin-bottom: 40px; font-weight: 300; }
        .hero-actions { display: flex; gap: 14px; flex-wrap: wrap; }
        .hero-stats { display: flex; gap: 48px; margin-top: 64px; padding-top: 48px; border-top: 1px solid var(--border); flex-wrap: wrap; }
        .stat-num { font-family: 'Syne', sans-serif; font-size: 36px; font-weight: 800; color: var(--accent); line-height: 1; margin-bottom: 4px; }
        .stat-label { font-size: 13px; color: var(--muted); }

        .btn-primary { display: inline-flex; align-items: center; gap: 8px; background: var(--accent); color: #fff; font-family: 'Syne', sans-serif; font-weight: 700; font-size: 15px; padding: 14px 28px; border-radius: 8px; text-decoration: none; transition: all 0.2s; }
        .btn-primary:hover { background: var(--accent2); transform: translateY(-1px); }
        .btn-ghost { display: inline-flex; align-items: center; gap: 8px; border: 1px solid var(--border); color: var(--text); font-family: 'Syne', sans-serif; font-weight: 600; font-size: 15px; padding: 14px 28px; border-radius: 8px; text-decoration: none; transition: all 0.2s; }
        .btn-ghost:hover { border-color: var(--accent); color: var(--accent); }

        section { padding: 96px 0; }
        .section-tag { font-size: 12px; font-weight: 600; letter-spacing: 0.12em; text-transform: uppercase; color: var(--accent); margin-bottom: 14px; display: flex; align-items: center; gap: 10px; }
        .section-tag::before { content: ''; width: 24px; height: 2px; background: var(--accent); }
        .section-title { font-size: clamp(26px, 4vw, 42px); font-weight: 800; margin-bottom: 14px; }
        .section-sub { font-size: 17px; color: var(--muted); max-width: 500px; font-weight: 300; }
        .divisor { height: 1px; background: var(--border); }

        .dor-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px; margin-top: 48px; }
        .dor-card { background: var(--card); border: 1px solid var(--border); border-radius: 12px; padding: 28px; transition: border-color 0.2s; }
        .dor-card:hover { border-color: rgba(232,98,26,0.2); }
        .dor-x { color: #ff4444; font-size: 16px; margin-bottom: 12px; }
        .dor-card p { font-size: 15px; color: var(--muted); line-height: 1.6; }

        .paulo-section { background: var(--bg2); border-top: 1px solid var(--border); border-bottom: 1px solid var(--border); }
        .paulo-inner { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center; }
        .paulo-img-wrap { position: relative; border-radius: 16px; overflow: hidden; aspect-ratio: 1; max-width: 420px; border: 1px solid var(--border); }
        .paulo-accent { position: absolute; bottom: 0; left: 0; right: 0; height: 4px; background: var(--accent); }
        .paulo-tag { display: inline-block; background: var(--accent-dim); border: 1px solid var(--accent-border); border-radius: 6px; padding: 4px 12px; font-size: 12px; color: var(--accent); font-weight: 600; margin-bottom: 20px; letter-spacing: 0.06em; text-transform: uppercase; }
        .paulo-text h2 { font-size: clamp(28px, 3.5vw, 40px); font-weight: 800; margin-bottom: 20px; }
        .paulo-text h2 em { font-style: normal; color: var(--accent); }
        .paulo-text p { font-size: 16px; color: var(--muted); line-height: 1.75; margin-bottom: 16px; font-weight: 300; }
        .paulo-items { list-style: none; margin: 24px 0 32px; }
        .paulo-items li { font-size: 15px; padding: 10px 0; border-bottom: 1px solid var(--border); display: flex; align-items: center; gap: 12px; color: var(--text); }
        .paulo-items li::before { content: '→'; color: var(--accent); font-weight: 700; flex-shrink: 0; }

        .metodo-steps { display: flex; flex-direction: column; margin-top: 56px; max-width: 680px; }
        .step { display: flex; gap: 24px; padding: 28px 0; border-bottom: 1px solid var(--border); }
        .step:last-child { border-bottom: none; }
        .step-num { font-family: 'Syne', sans-serif; font-size: 13px; font-weight: 700; color: var(--accent); min-width: 32px; padding-top: 2px; }
        .step h3 { font-size: 18px; font-weight: 700; margin-bottom: 6px; }
        .step p { font-size: 14px; color: var(--muted); line-height: 1.6; }

        .ofertas-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 24px; margin-top: 56px; }
        .oferta-card { background: var(--card); border: 1px solid var(--border); border-radius: 16px; padding: 36px; display: flex; flex-direction: column; transition: border-color 0.2s; }
        .oferta-card:hover { border-color: var(--accent-border); }
        .oferta-card.destaque { border-color: rgba(232,98,26,0.35); background: linear-gradient(135deg, #141414 0%, #1a0f0a 100%); position: relative; }
        .oferta-badge { position: absolute; top: -1px; right: 28px; background: var(--accent); color: #fff; font-family: 'Syne', sans-serif; font-weight: 700; font-size: 11px; letter-spacing: 0.08em; text-transform: uppercase; padding: 5px 12px; border-radius: 0 0 8px 8px; }
        .oferta-icon { font-size: 28px; margin-bottom: 20px; }
        .oferta-card h3 { font-size: 22px; font-weight: 700; margin-bottom: 10px; }
        .oferta-desc { font-size: 14px; color: var(--muted); margin-bottom: 24px; line-height: 1.6; flex: 1; font-weight: 300; }
        .oferta-lista { list-style: none; margin-bottom: 28px; }
        .oferta-lista li { font-size: 14px; color: var(--muted); padding: 8px 0; border-bottom: 1px solid var(--border); display: flex; align-items: center; gap: 10px; }
        .oferta-lista li::before { content: '✓'; color: var(--accent); font-weight: 700; flex-shrink: 0; }
        .preco-wrap { margin-bottom: 8px; }
        .preco-de { font-size: 14px; color: var(--muted); text-decoration: line-through; margin-bottom: 2px; }
        .preco-val { font-family: 'Syne', sans-serif; font-size: 32px; font-weight: 800; line-height: 1; }
        .preco-info { font-size: 13px; color: var(--muted); margin-top: 4px; margin-bottom: 8px; }
        .upsell-box { background: rgba(232,98,26,0.06); border: 1px solid var(--accent-border); border-radius: 8px; padding: 12px 14px; margin-bottom: 20px; }
        .upsell-label { font-size: 11px; color: var(--accent); font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 4px; }
        .upsell-text { font-size: 13px; color: var(--muted); line-height: 1.5; }

        .dep-section-bg {
          background: radial-gradient(circle at 20px 20px, rgba(255,255,255,0.015) 1px, transparent 1px), radial-gradient(circle at 60px 60px, rgba(255,255,255,0.01) 1px, transparent 1px);
          background-size: 80px 80px; background-color: var(--wpp-bg);
          border-top: 1px solid #1a2a1a; border-bottom: 1px solid #1a2a1a;
        }
        .dep-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 16px; margin-top: 56px; }
        .dep-wpp { background: rgba(255,255,255,0.02); border: 1px solid #1e2d1e; border-radius: 12px; overflow: hidden; }
        .dep-wpp-header { background: var(--wpp-header); border-bottom: 1px solid #1e2d1e; padding: 12px 16px; display: flex; align-items: center; gap: 10px; }
        .dep-avatar { width: 40px; height: 40px; border-radius: 50%; overflow: hidden; background: #1a2e1a; flex-shrink: 0; display: flex; align-items: center; justify-content: center; border: 2px solid #2a3d2a; }
        .dep-avatar img { width: 100%; height: 100%; object-fit: cover; }
        .dep-avatar-text { font-family: 'Syne', sans-serif; font-weight: 700; font-size: 15px; color: var(--wpp-green); }
        .dep-nome { font-family: 'Syne', sans-serif; font-weight: 600; font-size: 14px; color: var(--wpp-green); }
        .dep-nicho { font-size: 12px; color: #666; }
        .dep-online { width: 8px; height: 8px; background: var(--wpp-green); border-radius: 50%; margin-left: auto; flex-shrink: 0; }
        .dep-wpp-body { padding: 16px; background: var(--wpp-bg) url('/fundo%20whatsapp.png') repeat; background-size: auto; }
        .dep-bubble { background: var(--wpp-bubble); border-radius: 0 10px 10px 10px; padding: 10px 14px 8px; position: relative; display: inline-block; max-width: 100%; }
        .dep-bubble::before { content: ''; position: absolute; top: 0; left: -7px; width: 0; height: 0; border-style: solid; border-width: 0 8px 8px 0; border-color: transparent var(--wpp-bubble) transparent transparent; }
        .dep-texto { font-size: 14px; color: #e9e9e9; line-height: 1.55; }
        .dep-hora-row { display: flex; align-items: center; justify-content: flex-end; gap: 4px; margin-top: 5px; }
        .dep-hora { font-size: 11px; color: #666; }
        .dep-tick { font-size: 13px; color: var(--wpp-tick); }

        .aulas-section { background: var(--bg2); border-top: 1px solid var(--border); border-bottom: 1px solid var(--border); }

        .cta-final { background: var(--bg2); border-top: 1px solid var(--border); border-bottom: 1px solid var(--border); text-align: center; padding: 100px 0; }
        .cta-final h2 { font-size: clamp(28px, 4vw, 50px); font-weight: 800; margin-bottom: 16px; max-width: 600px; margin-left: auto; margin-right: auto; }
        .cta-final h2 em { font-style: normal; color: var(--accent); }
        .cta-final p { color: var(--muted); font-size: 17px; margin-bottom: 40px; font-weight: 300; }
        .cta-actions { display: flex; gap: 14px; justify-content: center; flex-wrap: wrap; }

        footer { padding: 40px 0; border-top: 1px solid var(--border); }
        .footer-inner { display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 16px; }
        .footer-text { font-size: 13px; color: var(--muted); }
        .footer-links { display: flex; gap: 24px; }
        .footer-links a { font-size: 13px; color: var(--muted); text-decoration: none; transition: color 0.2s; }
        .footer-links a:hover { color: var(--accent); }

        @media (max-width: 768px) {
          .paulo-inner { grid-template-columns: 1fr; gap: 40px; }
          .paulo-img-wrap { max-width: 100%; }
        }
        @media (max-width: 640px) {
          .hero-stats { gap: 28px; }
          .hero-actions, .cta-actions { flex-direction: column; }
          .footer-inner { flex-direction: column; text-align: center; }
        }
      `}</style>

      <nav>
        <div className="nav-inner">
          <a href="/" className="logo">
            <Image src="/logo.png" alt="Sintonia Solutions" width={32} height={32} />
            <span className="logo-text">Sintonia<span>.</span></span>
          </a>
          <a href={WA_GERAL} className="nav-cta" target="_blank" rel="noopener noreferrer">Falar com Paulo</a>
        </div>
      </nav>

      <section className="hero">
        <div className="container">
          <div className="hero-badge">Vagas abertas — Ciclo 90 Dias</div>
          <h1>Pare de rodar anúncio<br /><em>no improviso.</em></h1>
          <p className="hero-sub">Mentoria particular ou acompanhamento de 90 dias com método real. Tráfego que converte — do zero à escala.</p>
          <div className="hero-actions">
            <a href={WA_90D} className="btn-primary" target="_blank" rel="noopener noreferrer">Quero o Ciclo 90 Dias</a>
            <a href={WA_1x1} className="btn-ghost" target="_blank" rel="noopener noreferrer">Mentoria 1:1</a>
          </div>
          <div className="hero-stats">
            <div><div className="stat-num">90</div><div className="stat-label">dias de acompanhamento</div></div>
            <div><div className="stat-num">12</div><div className="stat-label">encontros ao vivo</div></div>
            <div><div className="stat-num">10</div><div className="stat-label">vagas por turma</div></div>
            <div><div className="stat-num">+8</div><div className="stat-label">nichos atendidos</div></div>
          </div>
        </div>
      </section>

      <div className="divisor" />

      <section>
        <div className="container">
          <div className="section-tag">O problema</div>
          <h2 className="section-title">Você reconhece alguma dessas situações?</h2>
          <p className="section-sub">A maioria de quem anuncia online passa por isso — e não precisa passar.</p>
          <div className="dor-grid">
            {[
              "Investe em anúncios todo mês mas não sabe o que está funcionando.",
              "Já tentou agência, curso e ainda não saiu do lugar.",
              "Tem produto bom mas não consegue transformar clique em venda.",
              "Cria campanha, ela para de funcionar e você não sabe por quê.",
              "Sente que está jogando dinheiro fora sem direção.",
              "Nunca teve alguém olhando especificamente pra sua conta.",
            ].map((dor, i) => (
              <div key={i} className="dor-card">
                <div className="dor-x">✗</div>
                <p>{dor}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divisor" />

      <section className="paulo-section">
        <div className="container">
          <div className="paulo-inner">
            <div className="paulo-img-wrap">
              <Image src="/paulo.jpg" alt="Paulo Cesar — Gestor de Tráfego" fill style={{objectFit:'cover'}} />
              <div className="paulo-accent" />
            </div>
            <div className="paulo-text">
              <div className="paulo-tag">Quem é Paulo</div>
              <h2>Gestor de tráfego e<br /><em>desenvolvedor front-end.</em></h2>
              <p>Trabalho na intersecção entre tráfego pago e tecnologia — além de montar sua campanha, entendo o funil completo: do anúncio ao pixel, do criativo à landing page.</p>
              <p>Já gerenciei campanhas em imóveis, saúde, educação, e-commerce e serviços locais. Não ensino teoria — ensino o que aplico todo dia com clientes reais.</p>
              <ul className="paulo-items">
                <li>Meta Ads e Google Ads com estrutura de funil</li>
                <li>Server-side tracking (Meta Pixel + GA4)</li>
                <li>Desenvolvimento de landing pages de alta conversão</li>
                <li>Análise e otimização com dados reais</li>
              </ul>
              <a href={WA_GERAL} className="btn-primary" target="_blank" rel="noopener noreferrer">Falar com Paulo</a>
            </div>
          </div>
        </div>
      </section>

      <div className="divisor" />

      <section>
        <div className="container">
          <div className="section-tag">O método</div>
          <h2 className="section-title">Tráfego é raciocínio,<br />não mágica.</h2>
          <p className="section-sub">A estrutura que aplico em todos os negócios que acompanho.</p>
          <div className="metodo-steps">
            {[
              { titulo: "Diagnóstico da conta", desc: "Antes de qualquer coisa, entendemos o que está funcionando e o que está drenando seu orçamento." },
              { titulo: "Estrutura de campanha", desc: "Configuração blindada — reconhecimento, engajamento e conversão com hierarquia correta." },
              { titulo: "Teste de criativos e públicos", desc: "Método científico pra descobrir o que converte sem queimar budget à toa." },
              { titulo: "Análise e otimização", desc: "Leitura semanal das métricas que importam. Decisão baseada em dado, não em achismo." },
              { titulo: "Escala com segurança", desc: "Quando a campanha prova que funciona, escalamos com critério — sem perder o que estava convertendo." },
            ].map((step, i) => (
              <div key={i} className="step">
                <div className="step-num">0{i + 1}</div>
                <div><h3>{step.titulo}</h3><p>{step.desc}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divisor" />

      <section>
        <div className="container">
          <div className="section-tag">Como trabalhar comigo</div>
          <h2 className="section-title">Duas formas de evoluir.</h2>
          <p className="section-sub">Escolha o formato que faz mais sentido pra onde você está agora.</p>
          <div className="ofertas-grid">
            <div className="oferta-card">
              <div className="oferta-icon">⚡</div>
              <h3>Mentoria Particular 1:1</h3>
              <p className="oferta-desc">Uma hora comigo, focada 100% no seu negócio. Análise da conta, diagnóstico e plano de ação. Sem enrolação.</p>
              <ul className="oferta-lista">
                <li>Análise ao vivo da sua conta</li>
                <li>Plano de ação personalizado</li>
                <li>Pacote de 5h com desconto</li>
              </ul>
              <div className="preco-wrap">
                <div className="preco-de">De R$197/hora</div>
                <div className="preco-val">R$147<span style={{fontSize:'16px',fontWeight:400,color:'var(--muted)'}}>/hora</span></div>
              </div>
              <div className="upsell-box">
                <div className="upsell-label">+ Gravação e ata — R$18</div>
                <div className="upsell-text">Receba o resumo completo da sessão por escrito e o vídeo para revisar quando quiser.</div>
              </div>
              <div className="preco-info">Pacote 5 horas — R$597 (gravação + ata incluídos)</div>
              <a href={WA_1x1} className="btn-ghost" target="_blank" rel="noopener noreferrer" style={{justifyContent:'center'}}>Agendar minha hora</a>
            </div>
            <div className="oferta-card destaque">
              <div className="oferta-badge">Recomendado</div>
              <div className="oferta-icon">🎯</div>
              <h3>Ciclo 90 Dias</h3>
              <p className="oferta-desc">12 semanas de acompanhamento real. Encontros ao vivo toda semana, ajuste contínuo e grupo exclusivo da turma.</p>
              <ul className="oferta-lista">
                <li>12 encontros ao vivo (1/semana)</li>
                <li>Correções e ajustes personalizados</li>
                <li>Aplicação prática — sem teoria solta</li>
                <li>Gravações de todos os encontros</li>
                <li>Grupo exclusivo da turma</li>
                <li>IA aplicada no processo</li>
                <li>Bônus: gravação do Aulão de 4h</li>
              </ul>
              <div className="preco-val">R$197<span style={{fontSize:'16px',fontWeight:400,color:'var(--muted)'}}>/mês</span></div>
              <div className="preco-info">ou R$497 à vista · apenas 10 vagas por turma</div>
              <a href={WA_90D} className="btn-primary" target="_blank" rel="noopener noreferrer" style={{justifyContent:'center'}}>Garantir minha vaga</a>
            </div>
          </div>
        </div>
      </section>

      <div className="divisor" />

      <section className="dep-section-bg">
        <div className="container">
          <div className="section-tag">Resultados reais</div>
          <h2 className="section-title">O que dizem quem<br />passou pela mentoria.</h2>
          <p className="section-sub">Mensagens reais de alunos reais.</p>
          <div className="dep-grid">
            {depoimentos.map((d, i) => (
              <div key={i} className="dep-wpp">
                <div className="dep-wpp-header">
                  <div className="dep-avatar">
                    {d.foto
                      ? <Image src={d.foto} alt={d.nome} width={40} height={40} style={{objectFit:'cover'}} />
                      : <span className="dep-avatar-text">{d.nome[0]}</span>
                    }
                  </div>
                  <div>
                    <div className="dep-nome">{d.nome}</div>
                    <div className="dep-nicho">{d.nicho}</div>
                  </div>
                  <div className="dep-online" />
                </div>
                <div className="dep-wpp-body">
                  <div className="dep-bubble">
                    <p className="dep-texto">{d.texto}</p>
                    <div className="dep-hora-row">
                      <span className="dep-hora">{d.hora}</span>
                      <span className="dep-tick">✓✓</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="aulas-section">
        <div className="container">
          <div className="section-tag">Dentro da mentoria</div>
          <h2 className="section-title">Como é na prática.</h2>
          <p className="section-sub" style={{marginBottom: '48px'}}>Capturas reais das sessões ao vivo — mão na massa, sem enrolação.</p>
        </div>
        <CarrosselAulas />
      </section>

      <section className="cta-final">
        <div className="container">
          <h2>Pronto pra parar de<br /><em>adivinhar?</em></h2>
          <p>Me chama no WhatsApp. Em 2 perguntas eu te digo qual caminho faz mais sentido pra você.</p>
          <div className="cta-actions">
            <a href={WA_90D} className="btn-primary" target="_blank" rel="noopener noreferrer">Ciclo 90 Dias</a>
            <a href={WA_1x1} className="btn-ghost" target="_blank" rel="noopener noreferrer">Mentoria 1:1</a>
          </div>
        </div>
      </section>

      <footer>
        <div className="container">
          <div className="footer-inner">
            <div className="footer-text">© 2026 Sintonia Solutions · Paulo Cesar</div>
            <div className="footer-links">
              <a href="/politica-de-privacidade">Política de Privacidade</a>
              <a href={WA_GERAL} target="_blank" rel="noopener noreferrer">WhatsApp</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}