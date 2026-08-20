import SectionHeading from './SectionHeading'
import type { ProcessContent } from '../types/siteContent'

type ProcessProps = ProcessContent

function Process({
  sectionId,
  eyebrow,
  title,
  description,
  steps,
}: ProcessProps) {
  return (
    <section id={sectionId} className="section-dark py-5 py-lg-6">
      <div className="container">
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          description={description}
          align="center"
          tone="dark"
        />

        <div className="row g-4">
          {steps.map((step, index) => (
            <div className="col-12 col-md-6 col-lg-3" key={step.title}>
              <article className="process-step h-100">
                <span className="process-step-index">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="process-step-title">{step.title}</h3>
                <p className="process-step-text">{step.description}</p>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Process
