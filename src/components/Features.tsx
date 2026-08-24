import SectionHeading from './SectionHeading'
import type { FeatureItem } from '../types/siteContent'

interface FeaturesProps {
  sectionId: string
  aboutAnchorId: string
  items: FeatureItem[]
}

function Features({ sectionId, aboutAnchorId, items }: FeaturesProps) {
  return (
    <section id={sectionId} className="py-5 py-lg-6 section-soft">
      <div className="container">
        <SectionHeading
          eyebrow="Módulos"
          title="Principais Módulos"
          description="Inteligência ambiental para antecipar riscos, orientar decisões estratégicas e transformar sustentabilidade em vantagem competitiva."
          align="center"
        />

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
              <article className="feature-card">
                <span className="feature-index">
                  {String(index + 1).padStart(2, '0')}
                </span>

                <h3 className="feature-title">{item.title}</h3>

                <p className="feature-text">{item.description}</p>

                <ul className="tag-list">
                  {item.resources.map((resource) => (
                    <li key={resource}>{resource}</li>
                  ))}
                </ul>

                <p className="feature-benefit">{item.benefit}</p>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
