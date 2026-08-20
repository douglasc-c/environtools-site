import { Link } from 'react-router-dom'

import brandLogo from '../assets/logo.svg'
import type { ContactItem, LinkItem, NavbarItem } from '../types/siteContent'

interface FooterProps {
  sectionId: string
  brand: LinkItem
  description: string
  navItems: NavbarItem[]
  contactItems: ContactItem[]
  copyright: string
  backToTop: LinkItem
}

function isDropdownItem(
  item: NavbarItem,
): item is Extract<NavbarItem, { type: 'dropdown' }> {
  return 'type' in item && item.type === 'dropdown'
}

function toFlatLinks(navItems: NavbarItem[]): LinkItem[] {
  return navItems.flatMap((item) => {
    if (isDropdownItem(item)) {
      return item.groups.flatMap((group) => group.items)
    }

    return [item]
  })
}

function Footer({
  sectionId,
  brand,
  description,
  navItems,
  contactItems,
  copyright,
  backToTop,
}: FooterProps) {
  const links = toFlatLinks(navItems)
  const half = Math.ceil(links.length / 2)

  return (
    <footer id={sectionId} className="site-footer">
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-4">
            <Link className="d-inline-flex mb-3" to={brand.href}>
              <img
                src={brandLogo}
                alt={`${brand.label} logo`}
                className="brand-logo"
              />
            </Link>
            <p className="mb-0">{description}</p>
          </div>

          <div className="col-6 col-lg-3">
            <h3>Navegação</h3>
            <ul className="footer-links">
              {links.slice(0, half).map((link) => (
                <li key={link.href}>
                  <Link to={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-6 col-lg-2">
            <h3>Módulos</h3>
            <ul className="footer-links">
              {links.slice(half).map((link) => (
                <li key={link.href}>
                  <Link to={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-lg-3">
            <h3>Contato</h3>
            <ul className="footer-links">
              {contactItems.map((item) => (
                <li key={item.label}>
                  <a href={item.href}>{item.value}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer-bottom d-flex flex-column flex-md-row gap-2 justify-content-between align-items-md-center">
          <span>{copyright}</span>
          <Link className="footer-top-link" to={backToTop.href}>
            {backToTop.label}
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
