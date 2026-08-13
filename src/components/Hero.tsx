import type { HeroCard, LinkItem } from '../types/siteContent'

interface HeroProps {
  badge: string
  title: string
  description: string
  primaryCta: LinkItem
  secondaryCta: LinkItem
  card: HeroCard
}

function Hero({
  badge,
  title,
  description,
  primaryCta,
  secondaryCta,
  card,
}: HeroProps) {
  return (
    <section className="hero-block py-5 py-lg-6">
      <div className="container">
        <div className="row align-items-center g-4 g-lg-5">
          <div className="col-lg-7">
            <span className="badge badge-soft mb-3">{badge}</span>
            <h1 className="display-4 fw-semibold mb-3 text-balance">{title}</h1>
            <p className="lead text-muted mb-4">{description}</p>
            <div className="d-flex flex-column flex-sm-row gap-2">
              <a className="btn btn-cta btn-lg" href={primaryCta.href}>
                {primaryCta.label}
              </a>
              <a
                className="btn btn-outline-dark btn-lg"
                href={secondaryCta.href}
              >
                {secondaryCta.label}
              </a>
            </div>
          </div>

          <div className="col-lg-5">
            <div className="hero-card p-4 p-lg-5 rounded-4 shadow-sm">
              <h2 className="h5 mb-3">{card.title}</h2>
              <ul className="list-unstyled m-0 d-grid gap-2">
                {card.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
