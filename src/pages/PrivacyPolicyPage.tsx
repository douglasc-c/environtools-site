import { Link } from 'react-router-dom'

import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { siteContent } from '../data/siteContent'

function PrivacyPolicyPage() {
  const today = new Date().toLocaleDateString('pt-BR')

  return (
    <div className="app-shell d-flex flex-column min-vh-100">
      <Navbar
        brand={siteContent.navbar.brand}
        navItems={siteContent.navbar.navItems}
        cta={siteContent.navbar.cta}
      />

      <main className="flex-grow-1">
        <section className="page-hero py-5 py-lg-6">
          <div className="container">
            <div className="row g-4">
              <div className="col-lg-8">
                <span className="badge badge-soft mb-3">Legal</span>
                <h1 className="display-5 fw-semibold mb-3">
                  Política de Privacidade
                </h1>
                <p className="lead text-muted mb-4">
                  Esta política descreve como coletamos, usamos e protegemos os
                  dados pessoais tratados pela EnvironTools em seus canais
                  digitais.
                </p>
                <p className="text-muted mb-0">Última atualização: {today}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section-light py-5">
          <div className="container">
            <div className="row g-4">
              <div className="col-12">
                <div className="feature-card h-100">
                  <h2 className="h4 mb-3">1. Dados coletados</h2>
                  <p className="text-muted mb-0">
                    Podemos coletar dados informados por você em formulários,
                    como nome, e-mail, empresa e telefone, além de dados de
                    navegação para métricas de uso e melhoria da experiência.
                  </p>
                </div>
              </div>

              <div className="col-12">
                <div className="feature-card h-100">
                  <h2 className="h4 mb-3">2. Finalidade do tratamento</h2>
                  <p className="text-muted mb-0">
                    Utilizamos os dados para responder contatos, agendar
                    demonstrações, enviar comunicações relacionadas aos nossos
                    serviços e aprimorar o desempenho da plataforma.
                  </p>
                </div>
              </div>

              <div className="col-12">
                <div className="feature-card h-100">
                  <h2 className="h4 mb-3">3. Compartilhamento de dados</h2>
                  <p className="text-muted mb-0">
                    Não comercializamos dados pessoais. O compartilhamento pode
                    ocorrer apenas com operadores e parceiros essenciais para a
                    operação, sempre com obrigações de confidencialidade e
                    segurança.
                  </p>
                </div>
              </div>

              <div className="col-12">
                <div className="feature-card h-100">
                  <h2 className="h4 mb-3">4. Seus direitos</h2>
                  <p className="text-muted mb-0">
                    Você pode solicitar confirmação de tratamento, acesso,
                    correção, anonimização, portabilidade e exclusão de dados,
                    nos termos da LGPD, por meio dos nossos canais de contato.
                  </p>
                </div>
              </div>

              <div className="col-12">
                <div className="feature-card h-100">
                  <h2 className="h4 mb-3">5. Segurança e retenção</h2>
                  <p className="text-muted mb-0">
                    Adotamos medidas técnicas e administrativas para proteger os
                    dados contra acessos não autorizados. Os dados são mantidos
                    pelo prazo necessário para cumprir finalidades legais,
                    regulatórias e contratuais.
                  </p>
                </div>
              </div>

              <div className="col-12">
                <div className="feature-card h-100">
                  <h2 className="h4 mb-3">6. Contato</h2>
                  <p className="text-muted mb-4">
                    Em caso de dúvidas sobre esta política ou sobre tratamento
                    de dados pessoais, entre em contato com nosso time.
                  </p>
                  <div className="d-flex flex-wrap gap-2">
                    <a
                      className="btn btn-cta"
                      href="mailto:contato@environtools.com.br"
                    >
                      contato@environtools.com.br
                    </a>
                    <Link className="btn btn-ghost btn-ghost-dark" to="/">
                      Voltar para home
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer
        sectionId={siteContent.footer.sectionId}
        brand={siteContent.navbar.brand}
        description={siteContent.about.description}
        navItems={siteContent.navbar.navItems}
        contactItems={siteContent.contact.items}
        copyright={siteContent.footer.copyright}
        backToTop={siteContent.footer.backToTop}
      />
    </div>
  )
}

export default PrivacyPolicyPage
