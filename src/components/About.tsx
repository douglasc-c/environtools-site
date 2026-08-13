interface AboutProps {
  sectionId: string
  title: string
  description: string
  values: string[]
  stats: Array<{ value: string; label: string }>
}

function About({ sectionId, title, description, values, stats }: AboutProps) {
  return (
    <section id={sectionId} className="py-5 py-lg-6">
      <div className="container">
        <div className="row align-items-center g-4">
          <div className="col-lg-6">
            <span className="badge badge-soft mb-3">Sobre nós</span>
            <h2 className="h1 fw-semibold mb-3">{title}</h2>
            <p className="lead text-muted mb-4">{description}</p>

            <ul className="list-unstyled d-grid gap-2 mb-0">
              {values.map((value) => (
                <li key={value}>• {value}</li>
              ))}
            </ul>
          </div>

          <div className="col-lg-6">
            <div className="row g-3">
              {stats.map((stat) => (
                <div className="col-12 col-sm-4 col-lg-12" key={stat.label}>
                  <div className="feature-card h-100 p-4 rounded-4">
                    <div className="display-6 fw-semibold mb-2">
                      {stat.value}
                    </div>
                    <div className="text-muted">{stat.label}</div>
                  </div>
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
