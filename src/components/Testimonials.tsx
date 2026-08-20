import SectionHeading from './SectionHeading'
import type { TestimonialsContent } from '../types/siteContent'

type TestimonialsProps = TestimonialsContent

function Testimonials({
  sectionId,
  eyebrow,
  title,
  description,
  items,
}: TestimonialsProps) {
  return (
    <section id={sectionId} className="section-soft py-5 py-lg-6">
      <div className="container">
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          description={description}
          align="center"
        />

        <div className="row g-4">
          {items.map((item) => (
            <div className="col-12 col-lg-4" key={item.author}>
              <figure className="testimonial-card h-100">
                <span className="testimonial-mark" aria-hidden="true">
                  &ldquo;
                </span>
                <blockquote className="testimonial-quote">
                  {item.quote}
                </blockquote>
                <figcaption className="testimonial-author">
                  <span className="testimonial-name">{item.author}</span>
                  <span className="testimonial-role">{item.role}</span>
                </figcaption>
              </figure>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
