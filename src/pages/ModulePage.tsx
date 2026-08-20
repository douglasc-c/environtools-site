import { Link, useParams } from 'react-router-dom'

import Navbar from '../components/Navbar'
import { siteContent } from '../data/siteContent'

function ModulePage() {
  const { moduleId } = useParams()

  const module = siteContent.features.items.find((item) => item.id === moduleId)

  if (!module) {
    return (
      <div className="app-shell d-flex flex-column min-vh-100">
        <Navbar
          brand={siteContent.navbar.brand}
          navItems={siteContent.navbar.navItems}
          cta={siteContent.navbar.cta}
        />

        <main className="flex-grow-1 page-hero py-5 py-lg-6">
          <div className="container">
            <div className="col-lg-8">
              <span className="badge badge-soft mb-3">
                Módulo não encontrado
              </span>
              <h1 className="h2 mb-3">Este módulo ainda não foi criado.</h1>
              <p className="text-muted mb-4">
                Volte para a página inicial e escolha outro módulo da
                plataforma.
              </p>
              <Link className="btn btn-cta" to="/">
                Voltar para home
              </Link>
            </div>
          </div>
        </main>
      </div>
    )
  }

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
                <span className="badge badge-soft mb-3">Módulo</span>
                <h1 className="display-5 fw-semibold mb-3">{module.title}</h1>
                <p className="lead text-muted mb-4">{module.description}</p>
                <div className="d-flex flex-wrap gap-2">
                  <Link className="btn btn-cta" to="/">
                    Voltar ao início
                  </Link>
                  <a className="btn btn-ghost btn-ghost-dark" href="/#features">
                    Ver todos os módulos
                  </a>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="panel-card p-4">
                  <h2 className="h5 mb-3">Benefício principal</h2>
                  <p className="mb-0 text-muted">{module.benefit}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-5">
          <div className="container">
            <div className="row g-4">
              <div className="col-lg-7">
                <div className="feature-card h-100">
                  <h2 className="h4 mb-3">Recursos principais</h2>
                  <ul className="list-unstyled d-grid gap-2 mb-0">
                    {module.resources.map((resource) => (
                      <li key={resource}>• {resource}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="col-lg-5">
                <div className="feature-card h-100">
                  <h2 className="h4 mb-3">Como esse módulo ajuda</h2>
                  <p className="mb-0 text-muted">{module.benefit}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default ModulePage
