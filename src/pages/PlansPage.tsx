import { Link } from 'react-router-dom'

import Navbar from '../components/Navbar'
import { siteContent } from '../data/siteContent'

const modulePricing = [
  { name: 'Gestão de Resíduos', price: 'R$ 350,00 - R$ 550,00' },
  { name: 'Gestão de Documentos', price: 'R$ 250,00 - R$ 350,00' },
  { name: 'Monitoramento Ambiental', price: 'R$ 250,00 - R$ 550,00' },
  { name: 'Produtos Químicos', price: 'R$ 200,00 - R$ 400,00' },
  { name: 'Não Conformidades', price: 'R$ 150,00 - R$ 250,00' },
  { name: 'Ocorrências Ambientais', price: 'R$ 150,00 - R$ 250,00' },
  {
    name: 'Aspectos e Impactos Ambientais',
    price: 'R$ 250,00 - R$ 350,00',
  },
]

const plans = [
  {
    name: 'Starter',
    description:
      'Ideal para pequenas empresas ou consultorias que precisam organizar o essencial.',
    modules: 'Até 3 módulos',
    users: '1 usuário incluso',
    monthly: 'R$ 790,00',
    implementation: 'R$ 3.500,00',
    highlight: false,
  },
  {
    name: 'Professional',
    description:
      'A opção principal para empresas de médio porte que precisam de integração completa e visibilidade operacional.',
    modules: 'Até 6 módulos',
    users: '5 usuários inclusos',
    monthly: 'R$ 1.450,00',
    implementation: 'R$ 5.000,00',
    highlight: true,
  },
  {
    name: 'Enterprise',
    description:
      'Para grandes corporações com múltiplas unidades ou alta complexidade.',
    modules: 'Todos os 7 módulos inclusos',
    users: '15 usuários inclusos',
    monthly: 'R$ 2.200,00 - R$ 2.800,00',
    implementation: 'R$ 6.500,00',
    highlight: false,
  },
]

const salesStrategies = [
  'Módulo extra do Starter: se o cliente quiser o 4º módulo sem migrar para o Professional, cobre R$ 250,00/mês por módulo adicional.',
  'Desconto anual: ofereça 10% a 25% de desconto para pagamento anual à vista, melhorando o caixa e reduzindo a evasão.',
]

function PlansPage() {
  return (
    <div className="app-shell d-flex flex-column min-vh-100">
      <Navbar
        brand={siteContent.navbar.brand}
        navItems={siteContent.navbar.navItems}
        cta={siteContent.navbar.cta}
      />

      <main className="flex-grow-1">
        <section className="hero-block py-5 py-lg-6">
          <div className="container">
            <div className="row align-items-center g-4">
              <div className="col-lg-8">
                <span className="badge badge-soft mb-3">Precificação</span>
                <h1 className="display-5 fw-semibold mb-3">
                  Planos e precificação
                </h1>
                <p className="lead text-muted mb-4">
                  Estruturas flexíveis para empresas que precisam de
                  conformidade ambiental, rastreabilidade e controle
                  operacional.
                </p>
                <div className="d-flex flex-wrap gap-2">
                  <Link className="btn btn-cta" to="/">
                    Voltar para home
                  </Link>
                  <a className="btn btn-outline-dark" href="#pricing">
                    Ver precificação
                  </a>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="hero-card p-4 rounded-4 shadow-sm">
                  <h2 className="h5 mb-3">Investimento geral</h2>
                  <ul className="list-unstyled d-grid gap-2 mb-0">
                    <li>Por usuário: R$ 30,00 - R$ 70,00</li>
                    <li>Implementação: R$ 3.500,00 - R$ 6.500,00</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="pricing" className="py-5">
          <div className="container">
            <div className="text-center mb-5">
              <h2 className="h1 fw-semibold mb-3">Precificação por módulo</h2>
              <p
                className="text-muted mx-auto mb-0"
                style={{ maxWidth: '700px' }}
              >
                Cada módulo recebe um valor conforme a complexidade operacional,
                as integrações e a quantidade de usuários.
              </p>
            </div>

            <div className="row g-4">
              {modulePricing.map((item) => (
                <div className="col-12 col-md-6 col-lg-4" key={item.name}>
                  <div className="feature-card h-100 p-4 rounded-4">
                    <h3 className="h5 mb-3">{item.name}</h3>
                    <div className="display-6 fw-semibold">{item.price}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-light py-5">
          <div className="container">
            <div className="text-center mb-5">
              <span className="badge badge-soft mb-3">Planos</span>
              <h2 className="h1 fw-semibold mb-3">Pacotes</h2>
            </div>

            <div className="row g-4">
              {plans.map((plan) => (
                <div className="col-12 col-lg-4" key={plan.name}>
                  <div
                    className={`h-100 p-4 rounded-4 border ${
                      plan.highlight
                        ? 'feature-card border-primary shadow-sm'
                        : 'feature-card'
                    }`}
                  >
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <h3 className="h4 mb-0">{plan.name}</h3>
                      {plan.highlight ? (
                        <span className="badge badge-soft">Popular</span>
                      ) : null}
                    </div>

                    <p className="text-muted mb-4">{plan.description}</p>

                    <ul className="list-unstyled d-grid gap-2 mb-4">
                      <li>• {plan.modules}</li>
                      <li>• {plan.users}</li>
                      <li>• Monthly value: {plan.monthly}</li>
                      <li>• Implementation: {plan.implementation}</li>
                    </ul>

                    <button type="button" className="btn btn-cta w-100">
                      Escolher {plan.name}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-5">
          <div className="container">
            <div className="feature-card p-4 p-lg-5 rounded-4">
              <h2 className="h1 fw-semibold mb-4">Estratégias de venda</h2>

              <div className="row g-4">
                {salesStrategies.map((strategy) => (
                  <div className="col-12 col-lg-6" key={strategy}>
                    <div className="border rounded-4 p-4 h-100">
                      <p className="mb-0 text-muted">{strategy}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default PlansPage
