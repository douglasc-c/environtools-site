import type { FeatureItem } from '../types/siteContent'

interface FeaturesProps {
  sectionId: string
  aboutAnchorId: string
  items: FeatureItem[]
}

function Features({ sectionId, aboutAnchorId, items }: FeaturesProps) {
  return (
    <section id={sectionId} className="py-5 section-light">
      <div className="container">
        <div className="mb-4 text-center">
          <span className="badge badge-soft mb-3">Módulos</span>
          <h2 className="h1 fw-semibold">
            Soluções ambientais em um único ecossistema
          </h2>
        </div>

        <div className="row g-4">
          {items.map((item, index) => (
            <div
              className="col-12 col-md-6 col-lg-4"
              id={
                item.id ??
                (index === items.length - 1 ? aboutAnchorId : undefined)
              }
              key={item.id ?? item.title}
            >
              <article className="feature-card h-100 p-4 rounded-4">
                <div className="mb-3">
                  <span className="badge badge-soft">Módulo</span>
                </div>

                <h3 className="h5 mb-2">{item.title}</h3>

                <p className="mb-3 text-muted">
                  <strong>Foco:</strong> {item.description}
                </p>

                <ul className="list-unstyled mb-3 d-grid gap-2">
                  {item.resources.map((resource) => (
                    <li key={resource}>• {resource}</li>
                  ))}
                </ul>

                <p className="mb-0 text-muted">
                  <strong>Benefício:</strong> {item.benefit}
                </p>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
