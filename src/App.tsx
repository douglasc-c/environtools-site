import { Navigate, Route, Routes } from 'react-router-dom'

import './App.css'
import About from './components/About'
import ContactSection from './components/ContactSection'
import Features from './components/Features'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import { siteContent } from './data/siteContent'
import ModulePage from './pages/ModulePage'
import PlansPage from './pages/PlansPage'

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
        <Features
          sectionId={siteContent.features.sectionId}
          aboutAnchorId={siteContent.features.aboutAnchorId}
          items={siteContent.features.items}
        />
        <About
          sectionId={siteContent.about.sectionId}
          title={siteContent.about.title}
          description={siteContent.about.description}
          values={siteContent.about.values}
          stats={siteContent.about.stats}
        />
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
        copyright={siteContent.footer.copyright}
        backToTop={siteContent.footer.backToTop}
      />
    </div>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/plans" element={<PlansPage />} />
      <Route path="/modules/:moduleId" element={<ModulePage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App
