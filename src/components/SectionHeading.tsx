interface SectionHeadingProps {
  eyebrow: string
  title: string
  description?: string
  align?: 'start' | 'center'
  tone?: 'light' | 'dark'
}

function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'start',
  tone = 'light',
}: SectionHeadingProps) {
  const alignmentClass = align === 'center' ? 'text-center mx-auto' : ''

  return (
    <div
      className={`section-heading section-heading-${tone} ${alignmentClass}`.trim()}
    >
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="section-title text-balance">{title}</h2>
      {description ? <p className="section-lead">{description}</p> : null}
    </div>
  )
}

export default SectionHeading
