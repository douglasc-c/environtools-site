import { Fragment } from 'react'
import { Link } from 'react-router-dom'

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
  return (
    <header>
      <nav className="navbar navbar-expand-lg nav-surface border-bottom">
        <div className="container py-2">
          <Link
            className="navbar-brand fw-semibold tracking-tight"
            to={brand.href}
          >
            {brand.label}
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
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
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
                    <Link className="nav-link" to={item.href}>
                      {item.label}
                    </Link>
                  </li>
                )
              })}
              <li className="nav-item ms-lg-2">
                <Link className="btn btn-cta" to={cta.href}>
                  {cta.label}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
