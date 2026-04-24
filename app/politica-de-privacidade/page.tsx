import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de Privacidade | Sintonia Solutions",
  description: "Política de privacidade e uso de dados da Sintonia Solutions, em conformidade com a LGPD.",
};

export default function PoliticaDePrivacidade() {
  return (
    <main className="min-h-screen bg-[#0c0c0c] text-white px-6 py-16 max-w-3xl mx-auto">
      <Link
        href="/"
        className="text-sm text-orange-500 hover:text-orange-400 mb-10 inline-block"
      >
        ← Voltar ao início
      </Link>

      <h1 className="text-3xl font-bold mb-2">Política de Privacidade</h1>
      <p className="text-zinc-400 text-sm mb-10">Última atualização: abril de 2025</p>

      <div className="space-y-8 text-zinc-300 leading-relaxed">

        <section>
          <h2 className="text-lg font-semibold text-white mb-2">1. Quem somos</h2>
          <p>
            A <strong className="text-white">Sintonia Solutions</strong> (CNPJ: 50.815.689/0001-80) é uma empresa de consultoria e mentoria
            em tráfego pago, administrada por Paulo Cesar. Este site tem como objetivo apresentar
            nossos serviços e facilitar o contato com interessados em mentoria particular ou no
            programa Ciclo 90 Dias.
          </p>
          <p className="mt-2">
            Para dúvidas sobre esta política, entre em contato pelo e-mail:{" "}
            <a href="mailto:paulo.pereira.jr.s@gmail.com" className="text-orange-500 hover:underline">
              paulo.pereira.jr.s@gmail.com
            </a>
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-white mb-2">2. Dados coletados</h2>
          <p>Coletamos dados de navegação de forma automática quando você acessa este site, incluindo:</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Endereço IP e localização aproximada</li>
            <li>Tipo de dispositivo, navegador e sistema operacional</li>
            <li>Páginas visitadas e tempo de permanência</li>
            <li>Origem do acesso (pesquisa, anúncio, link direto)</li>
            <li>Cliques em botões e interações com a página</li>
          </ul>
          <p className="mt-2">
            Não coletamos nome, e-mail ou telefone diretamente neste site. O contato ocorre via
            WhatsApp, de forma voluntária pelo usuário.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-white mb-2">3. Ferramentas de rastreamento</h2>
          <p>Este site utiliza as seguintes tecnologias de rastreamento:</p>

          <div className="mt-3 space-y-3">
            <div>
              <p className="font-medium text-white">Meta Pixel (Facebook/Instagram)</p>
              <p className="text-sm mt-1">
                Utilizado para medir a efetividade dos anúncios veiculados nas plataformas Meta
                (Facebook e Instagram) e para criação de públicos personalizados. Os dados são
                processados pela Meta Platforms, Inc. conforme sua{" "}
                <a
                  href="https://www.facebook.com/privacy/policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-500 hover:underline"
                >
                  Política de Privacidade
                </a>.
              </p>
            </div>

            <div>
              <p className="font-medium text-white">Google Analytics 4 (GA4)</p>
              <p className="text-sm mt-1">
                Utilizado para análise de comportamento de navegação, origem de tráfego e
                desempenho das páginas. Os dados são processados pelo Google LLC conforme sua{" "}
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-500 hover:underline"
                >
                  Política de Privacidade
                </a>.
              </p>
            </div>

            <div>
              <p className="font-medium text-white">Google Tag Manager</p>
              <p className="text-sm mt-1">
                Plataforma de gerenciamento de tags utilizada para controlar a implementação
                das ferramentas acima de forma centralizada.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-white mb-2">4. Finalidade do uso dos dados</h2>
          <p>Os dados coletados são utilizados exclusivamente para:</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Mensurar o desempenho das campanhas de marketing</li>
            <li>Melhorar a experiência de navegação no site</li>
            <li>Criar públicos para veiculação de anúncios relevantes</li>
            <li>Entender o comportamento dos visitantes para otimização de conteúdo</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-white mb-2">5. Base legal (LGPD)</h2>
          <p>
            O tratamento de dados realizado por este site fundamenta-se no{" "}
            <strong className="text-white">legítimo interesse</strong> do controlador (Art. 7º, IX
            da Lei 13.709/2018 — LGPD) para fins de marketing e análise de desempenho, e no{" "}
            <strong className="text-white">consentimento</strong> do usuário ao continuar navegando
            no site após a ciência desta política.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-white mb-2">6. Compartilhamento de dados</h2>
          <p>
            Os dados de navegação são compartilhados com Meta Platforms e Google LLC exclusivamente
            para as finalidades descritas acima. Não vendemos, cedemos ou compartilhamos dados
            pessoais com terceiros para outros fins.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-white mb-2">7. Seus direitos</h2>
          <p>Conforme a LGPD, você tem direito a:</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Confirmar a existência de tratamento de seus dados</li>
            <li>Acessar os dados que possuímos sobre você</li>
            <li>Solicitar a correção de dados incompletos ou incorretos</li>
            <li>Solicitar a exclusão dos seus dados</li>
            <li>Revogar o consentimento a qualquer momento</li>
            <li>Opor-se ao tratamento realizado com base no legítimo interesse</li>
          </ul>
          <p className="mt-2">
            Para exercer qualquer um desses direitos, entre em contato:{" "}
            <a href="mailto:paulo.pereira.jr.s@gmail.com" className="text-orange-500 hover:underline">
              paulo.pereira.jr.s@gmail.com
            </a>
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-white mb-2">8. Cookies</h2>
          <p>
            Este site utiliza cookies de terceiros (Meta e Google) para as finalidades descritas
            acima. Você pode gerenciar ou bloquear cookies nas configurações do seu navegador,
            porém isso pode afetar o funcionamento de algumas funcionalidades.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-white mb-2">9. Alterações nesta política</h2>
          <p>
            Esta política pode ser atualizada periodicamente. Recomendamos a revisão ocasional
            desta página. A data da última atualização sempre estará indicada no topo do documento.
          </p>
        </section>

      </div>

      <div className="mt-12 pt-8 border-t border-zinc-800 text-center text-zinc-500 text-sm">
        © {new Date().getFullYear()} Sintonia Solutions. Todos os direitos reservados.
      </div>
    </main>
  );
}
