import { useState } from 'react'
import { Link } from 'react-router-dom'

import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { siteContent } from '../data/siteContent'

// const modulePricing = [
//   {
//     name: 'Gestão de Resíduos (com integração SINIR)',
//     price: 'R$ 350,00/mês',
//   },
//   { name: 'Gestão de Documentos', price: 'R$ 250,00/mês' },
//   { name: 'Monitoramento Ambiental', price: 'R$ 250,00/mês' },
//   {
//     name: 'Aspectos e Impactos Ambientais',
//     price: 'R$ 250,00/mês',
//   },
//   { name: 'Produtos Químicos', price: 'R$ 200,00/mês' },
//   {
//     name: 'Não Conformidades & Plano de Ação',
//     price: 'R$ 150,00/mês',
//   },
//   { name: 'Ocorrências Ambientais', price: 'R$ 150,00/mês' },
// ]

const companyPlans = [
  {
    name: 'Starter',
    description:
      'Ideal para pequenas empresas que precisam organizar os requisitos básicos de conformidade.',
    features: [
      'Escolha de até 3 módulos',
      '1 usuário incluso',
      'R$ 790,00/mês',
      'Setup de R$ 3.500,00',
      'Módulo adicional: R$ 250,00/mês',
    ],
    highlight: false,
  },
  {
    name: 'Professional',
    description:
      'Para indústrias de médio porte que buscam controle integrado da operação e resíduos.',
    features: [
      'Escolha de até 5 módulos',
      '5 usuários inclusos',
      'R$ 1.450,00/mês',
      'Setup de R$ 5.000,00',
      'Módulo adicional: R$ 250,00/mês',
    ],
    highlight: true,
  },
  {
    name: 'Enterprise',
    description:
      'Para grandes corporações com alta complexidade e necessidade de governança contínua.',
    features: [
      'Todos os 7 módulos inclusos',
      '15 usuários inclusos',
      'R$ 2.200,00/mês',
      'Setup de R$ 6.500,00',
      'Usuário extra: R$ 30,00 a R$ 70,00/mês',
    ],
    highlight: false,
  },
]

const consultantPlans = [
  {
    name: 'Consultor Solo',
    description:
      'Para o profissional autônomo que está estruturando e digitalizando sua carteira.',
    features: [
      'Até 3 empresas (CNPJs) geridas',
      'Todos os 7 módulos liberados',
      '1 usuário da consultoria',
      'R$ 390,00/mês',
      'Onboarding/setup de R$ 1.500,00',
    ],
    highlight: false,
  },
  {
    name: 'Consultoria Pro',
    description:
      'Para assessorias médias em expansão que precisam de escala e trabalho em equipe.',
    features: [
      'Até 10 empresas (CNPJs) geridas',
      'Todos os 7 módulos liberados',
      '3 usuários da consultoria',
      'R$ 890,00/mês',
      'Onboarding/setup de R$ 2.500,00',
    ],
    highlight: true,
  },
  {
    name: 'Consultoria Master',
    description:
      'Para grandes assessorias e consultorias consolidadas no mercado.',
    features: [
      'Até 25 empresas (CNPJs) geridas',
      'Todos os 7 módulos liberados',
      '6 usuários da consultoria',
      'R$ 1.790,00/mês',
      'Onboarding/setup de R$ 4.000,00',
      'Cliente extra: R$ 80,00/mês por CNPJ',
    ],
    highlight: false,
  },
]

type PricingPlan = (typeof companyPlans)[number]

function PlanCard({ plan }: { plan: PricingPlan }) {
  return (
    <div
      className={`plan-card feature-card h-100${
        plan.highlight ? ' plan-card-highlight' : ''
      }`}
    >
      <div className="plan-card-header d-flex justify-content-between align-items-start">
        <div>
          <span className="plan-card-kicker">Plano</span>
          <h3 className="h4 mb-0">{plan.name}</h3>
        </div>
        {plan.highlight ? (
          <span className="badge badge-soft">Popular</span>
        ) : null}
      </div>

      <p className="plan-card-description text-muted">{plan.description}</p>

      <ul className="plan-card-features list-unstyled d-grid gap-2 mb-4">
        {plan.features.map((feature) => (
          <li key={feature}>
            <span aria-hidden="true">+</span>
            {feature}
          </li>
        ))}
      </ul>

      <a
        className="btn btn-cta w-100"
        href="mailto:contato@environtools.com.br"
      >
        Falar com especialista
      </a>
    </div>
  )
}

function PlansPage() {
  const [audience, setAudience] = useState<'company' | 'consultant'>('company')
  const activePlans = audience === 'company' ? companyPlans : consultantPlans

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
            <div className="row align-items-center g-4">
              <div className="col-lg-8">
                <span className="badge badge-soft mb-3">Precificação</span>
                <h1 className="display-5 fw-semibold mb-3">
                  Planos e precificação
                </h1>
                <p className="lead text-muted mb-4">
                  Estruturas flexíveis para empresas e consultorias que precisam
                  de conformidade ambiental, rastreabilidade e controle
                  operacional.
                </p>
                <div className="d-flex flex-wrap gap-2">
                  <Link className="btn btn-cta" to="/">
                    Voltar para home
                  </Link>
                  <a className="btn btn-ghost btn-ghost-dark" href="#pricing">
                    Ver precificação
                  </a>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="pricing-hero-note">
                  <span className="pricing-hero-note-label">Investimento</span>
                  <strong>Do essencial ao ecossistema completo</strong>
                  <p>
                    Escolha entre planos para sua própria operação ou para uma
                    carteira de clientes ambientais.
                  </p>
                  <a href="#pricing">
                    Comparar planos <span aria-hidden="true">-&gt;</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="pricing" className="section-light py-5">
          <div className="container">
            <div className="plans-section-heading text-center mb-5">
              <span className="badge badge-soft mb-3">Planos</span>
              <h2 className="h1 fw-semibold mb-3">Escolha o modelo ideal</h2>
              <p className="text-muted mb-0">
                Compare os pacotes e encontre a estrutura certa para o seu
                momento.
              </p>
            </div>

            <button
              className={`pricing-toggle ${
                audience === 'consultant' ? 'is-consultant' : ''
              }`}
              type="button"
              role="switch"
              aria-checked={audience === 'consultant'}
              aria-label="Alternar entre planos para empresas e consultores"
              onClick={() =>
                setAudience((currentAudience) =>
                  currentAudience === 'company' ? 'consultant' : 'company',
                )
              }
            >
              <span>Empresas</span>
              <span className="pricing-toggle-track" aria-hidden="true">
                <span className="pricing-toggle-thumb" />
              </span>
              <span>Consultores</span>
            </button>

            <div className="text-center mb-4">
              <h2 className="h3 fw-semibold mb-2">
                {audience === 'company'
                  ? 'Planos para empresas finais'
                  : 'Planos para consultores e assessorias ambientais'}
              </h2>
              <p className="text-muted mb-4">
                {audience === 'company'
                  ? 'Para indústrias, comércios e prestadores que gerenciam suas próprias unidades e operações ambientais.'
                  : 'Para profissionais e equipes que gerenciam múltiplos clientes a partir de um painel centralizado.'}
              </p>
            </div>

            <div className="row g-4">
              {activePlans.map((plan) => (
                <div className="col-12 col-lg-4" key={plan.name}>
                  <PlanCard plan={plan} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* <section className="py-5">
          <div className="container">
            <div className="text-center mb-5">
              <span className="badge badge-soft mb-3">Referência avulsa</span>
              <h2 className="h1 fw-semibold mb-3">Valores por módulo</h2>
              <p
                className="text-muted mx-auto mb-0"
                style={{ maxWidth: '700px' }}
              >
                Contrate módulos individuais fora dos pacotes conforme a
                necessidade da sua operação.
              </p>
            </div>

            <div className="row g-4">
              {modulePricing.map((item) => (
                <div className="col-12 col-md-6 col-lg-4" key={item.name}>
                  <div className="feature-card h-100">
                    <h3 className="h5 mb-3">{item.name}</h3>
                    <div className="display-6 fw-semibold">{item.price}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section> */}
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

export default PlansPage
