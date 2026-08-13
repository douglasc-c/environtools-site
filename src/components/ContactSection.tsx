interface ContactItem {
  label: string
  value: string
  href: string
}

interface ContactSectionProps {
  sectionId: string
  badge: string
  title: string
  description: string
  primaryCta: {
    label: string
    href: string
  }
  secondaryCta: {
    label: string
    href: string
  }
  items: ContactItem[]
}

function ContactSection({
  sectionId,
  badge,
  title,
  description,
  primaryCta,
  secondaryCta,
}: ContactSectionProps) {
  return (
    <section id={sectionId} className="section-light py-5 py-lg-6">
      <div className="container">
        <div className="row align-items-center g-4">
          <div className="col-lg-6">
            <span className="badge badge-soft mb-3">{badge}</span>
            <h2 className="h1 fw-semibold mb-3">{title}</h2>
            <p className="lead text-muted mb-4">{description}</p>

            <div className="d-flex flex-wrap gap-2 mb-4">
              <a className="btn btn-cta" href={primaryCta.href}>
                {primaryCta.label}
              </a>
              <a className="btn btn-outline-dark" href={secondaryCta.href}>
                {secondaryCta.label}
              </a>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="feature-card p-4 p-lg-5 rounded-4 h-100">
              <h2 className="h4 mb-3">Agende uma demonstração</h2>
              <form className="row g-3">
                <div className="col-md-6">
                  <label className="form-label small text-muted">Nome</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Seu nome"
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label small text-muted">Empresa</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Sua empresa"
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label small text-muted">E-mail</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="seu@email.com"
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label small text-muted">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    className="form-control"
                    placeholder="(11) 99999-9999"
                  />
                </div>

                <div className="col-12">
                  <label className="form-label small text-muted">
                    Data desejada
                  </label>
                  <input type="date" className="form-control" />
                </div>

                <div className="col-12">
                  <label className="form-label small text-muted">
                    Mensagem
                  </label>
                  <textarea
                    className="form-control"
                    rows={3}
                    placeholder="Conte um pouco sobre sua operação e o que você busca resolver."
                  />
                </div>

                <div className="col-12">
                  <button type="submit" className="btn btn-cta w-100">
                    Agendar demonstração
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
