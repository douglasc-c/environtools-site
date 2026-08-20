import SectionHeading from './SectionHeading'

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
  items,
}: ContactSectionProps) {
  return (
    <section id={sectionId} className="section-dark py-5 py-lg-6">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-6">
            <SectionHeading
              eyebrow={badge}
              title={title}
              description={description}
              tone="dark"
            />

            <div className="d-flex flex-wrap gap-3">
              <a className="btn btn-accent" href={primaryCta.href}>
                {primaryCta.label}
              </a>
              <a
                className="btn btn-ghost"
                href={secondaryCta.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {secondaryCta.label}
              </a>
            </div>

            <ul className="contact-list">
              {items.map((item) => (
                <li key={item.label}>
                  <a href={item.href}>
                    <span className="contact-label">{item.label}</span>
                    <span className="contact-value">{item.value}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-lg-6">
            <div className="contact-card">
              <h2 className="h4 mb-4">Agende uma demonstração</h2>
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
                </div>{' '}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
