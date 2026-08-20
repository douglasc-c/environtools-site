import { CheckIcon } from './Icon'
import SectionHeading from './SectionHeading'

interface AboutProps {
  sectionId: string
  title: string
  description: string
  values: string[]
  stats: Array<{ value: string; label: string }>
}

function About({ sectionId, title, description, values, stats }: AboutProps) {
  return (
    <section id={sectionId} className="py-5 py-lg-6 section-light">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-6">
            <SectionHeading
              eyebrow="Sobre nós"
              title={title}
              description={description}
            />

            <ul className="value-list">
              {values.map((value) => (
                <li key={value}>
                  <span className="check-bullet">
                    <CheckIcon />
                  </span>
                  <span>{value}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-lg-6">
            <div className="about-panel">
              {stats.map((stat) => (
                <div className="stat-item" key={stat.label}>
                  <div className="stat-value">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
