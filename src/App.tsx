import { Navigate, Route, Routes } from 'react-router-dom'

import './App.css'
import About from './components/About'
import ContactSection from './components/ContactSection'
import Faq from './components/Faq'
import Features from './components/Features'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Process from './components/Process'
import StatsBand from './components/StatsBand'
import Testimonials from './components/Testimonials'
import { siteContent } from './data/siteContent'
import ModulePage from './pages/ModulePage'
import PlansPage from './pages/PlansPage'
import { Analytics } from '@vercel/analytics/react'

function HomePage() {
  return (
    <div className="app-shell d-flex flex-column min-vh-100">
      <Navbar
        brand={siteContent.navbar.brand}
        navItems={siteContent.navbar.navItems}
        cta={siteContent.navbar.cta}
      />

      <main className="flex-grow-1" id="home">
        <Hero
          badge={siteContent.hero.badge}
          title={siteContent.hero.title}
          description={siteContent.hero.description}
          primaryCta={siteContent.hero.primaryCta}
          secondaryCta={siteContent.hero.secondaryCta}
          card={siteContent.hero.card}
        />
        <StatsBand stats={siteContent.about.stats} />
        <Features
          sectionId={siteContent.features.sectionId}
          aboutAnchorId={siteContent.features.aboutAnchorId}
          items={siteContent.features.items}
        />
        <Process {...siteContent.process} />
        <About
          sectionId={siteContent.about.sectionId}
          title={siteContent.about.title}
          description={siteContent.about.description}
          values={siteContent.about.values}
          stats={siteContent.about.stats}
        />
        <Testimonials {...siteContent.testimonials} />
        <Faq {...siteContent.faq} />
        <ContactSection
          sectionId={siteContent.contact.sectionId}
          badge={siteContent.contact.badge}
          title={siteContent.contact.title}
          description={siteContent.contact.description}
          primaryCta={siteContent.contact.primaryCta}
          secondaryCta={siteContent.contact.secondaryCta}
          items={siteContent.contact.items}
        />
      </main>

      <Footer
        sectionId={siteContent.footer.sectionId}
        brand={siteContent.navbar.brand}
        description={siteContent.about.description}
        navItems={siteContent.navbar.navItems}
        contactItems={siteContent.contact.items}
        copyright={siteContent.footer.copyright}
        backToTop={siteContent.footer.backToTop}
      />
    </div>
  )
}

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/plans" element={<PlansPage />} />
        <Route path="/modules/:moduleId" element={<ModulePage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Analytics />
    </>
  )
}

export default App
