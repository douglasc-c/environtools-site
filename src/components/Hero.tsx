import { CheckIcon } from './Icon'
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
    <section className="hero-block">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-7">
            <span className="hero-badge mb-4">{badge}</span>
            <h1 className="hero-title text-balance">{title}</h1>
            <p className="hero-lead">{description}</p>
            <div className="d-flex flex-column flex-sm-row gap-3">
              <a className="btn btn-accent btn-lg" href={primaryCta.href}>
                {primaryCta.label}
              </a>
              <a className="btn btn-ghost btn-lg" href={secondaryCta.href}>
                {secondaryCta.label}
              </a>
            </div>
          </div>

          <div className="col-lg-5">
            <div className="hero-card">
              <h2 className="hero-card-title">{card.title}</h2>
              <ul className="hero-card-list">
                {card.items.map((item) => (
                  <li key={item}>
                    <span className="check-bullet">
                      <CheckIcon />
                    </span>
                    <span>{item}</span>
                  </li>
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
