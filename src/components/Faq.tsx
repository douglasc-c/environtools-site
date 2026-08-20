import SectionHeading from './SectionHeading'
import type { FaqContent } from '../types/siteContent'

type FaqProps = FaqContent

function Faq({ sectionId, eyebrow, title, description, items }: FaqProps) {
  return (
    <section id={sectionId} className="section-light py-5 py-lg-6">
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-5">
            <SectionHeading
              eyebrow={eyebrow}
              title={title}
              description={description}
            />

            <a className="btn btn-cta" href="#contact">
              Falar com um especialista
            </a>
          </div>

          <div className="col-lg-7">
            <div className="accordion faq-accordion" id="faqAccordion">
              {items.map((item, index) => {
                const itemId = `faq-item-${index}`

                return (
                  <div className="accordion-item" key={item.question}>
                    <h3 className="accordion-header">
                      <button
                        className={`accordion-button${index === 0 ? '' : ' collapsed'}`}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#${itemId}`}
                        aria-expanded={index === 0}
                        aria-controls={itemId}
                      >
                        {item.question}
                      </button>
                    </h3>

                    <div
                      id={itemId}
                      className={`accordion-collapse collapse${index === 0 ? ' show' : ''}`}
                      data-bs-parent="#faqAccordion"
                    >
                      <div className="accordion-body">{item.answer}</div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Faq
