import { Fragment, useEffect, useRef, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

import brandLogo from '../assets/logo.svg'
import type { LinkItem, NavbarItem } from '../types/siteContent'

interface NavbarProps {
  brand: LinkItem
  navItems: NavbarItem[]
  cta: LinkItem
}

function isDropdownItem(
  item: NavbarItem,
): item is Extract<NavbarItem, { type: 'dropdown' }> {
  return 'type' in item && item.type === 'dropdown'
}

function Navbar({ brand, navItems, cta }: NavbarProps) {
  const [isHidden, setIsHidden] = useState(false)
  const lastScrollPosition = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition = window.scrollY
      const isScrollingDown = currentScrollPosition > lastScrollPosition.current

      setIsHidden(isScrollingDown && currentScrollPosition > 80)
      lastScrollPosition.current = currentScrollPosition
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`smart-header${isHidden ? ' smart-header-hidden' : ''}`}>
      <nav className="navbar navbar-expand-lg py-0">
        <div className="container nav-surface">
          <Link
            className="navbar-brand fw-semibold tracking-tight d-flex align-items-center gap-2"
            to={brand.href}
          >
            <img
              src={brandLogo}
              alt={`${brand.label} logo`}
              className="brand-logo"
            />
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNav"
            aria-controls="mainNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="mainNav">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0 align-items-lg-center">
              {navItems.map((item) => {
                if (isDropdownItem(item)) {
                  return (
                    <li className="nav-item dropdown" key={item.label}>
                      <a
                        className="nav-link dropdown-toggle"
                        href="#modules"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        {item.label}
                      </a>

                      <ul className="dropdown-menu">
                        {item.groups.map((group, groupIndex) => (
                          <Fragment key={group.heading}>
                            <li>
                              <h6 className="dropdown-header">
                                {group.heading}
                              </h6>
                            </li>

                            {group.items.map((groupItem) => (
                              <li key={groupItem.href}>
                                <Link
                                  className="dropdown-item"
                                  to={groupItem.href}
                                >
                                  {groupItem.label}
                                </Link>
                              </li>
                            ))}

                            {groupIndex < item.groups.length - 1 ? (
                              <li>
                                <hr className="dropdown-divider" />
                              </li>
                            ) : null}
                          </Fragment>
                        ))}
                      </ul>
                    </li>
                  )
                }

                return (
                  <li className="nav-item" key={item.href}>
                    {item.href.includes('#') ? (
                      <Link className="nav-link" to={item.href}>
                        {item.label}
                      </Link>
                    ) : (
                      <NavLink
                        className={({ isActive }) =>
                          `nav-link${isActive ? ' active' : ''}`
                        }
                        to={item.href}
                        end
                      >
                        {item.label}
                      </NavLink>
                    )}
                  </li>
                )
              })}
            </ul>

            <Link className="btn btn-pill-outline" to={cta.href}>
              {cta.label}
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
