import { Link } from 'react-router-dom'

import type { LinkItem } from '../types/siteContent'

interface FooterProps {
  sectionId: string
  copyright: string
  backToTop: LinkItem
}

function Footer({ sectionId, copyright, backToTop }: FooterProps) {
  return (
    <footer id={sectionId} className="border-top py-4">
      <div className="container d-flex flex-column flex-md-row gap-2 justify-content-between align-items-md-center">
        <small className="text-muted">{copyright}</small>
        <Link className="link-dark text-decoration-none" to={backToTop.href}>
          {backToTop.label}
        </Link>
      </div>
    </footer>
  )
}

export default Footer
