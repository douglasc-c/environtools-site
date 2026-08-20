export interface LinkItem {
  label: string
  href: string
}

export interface DropdownGroup {
  heading: string
  items: LinkItem[]
}

export interface DropdownNavItem {
  type: 'dropdown'
  label: string
  groups: DropdownGroup[]
}

export type NavbarItem = LinkItem | DropdownNavItem

export interface HeroCard {
  title: string
  items: string[]
}

export interface HeroContent {
  badge: string
  title: string
  description: string
  primaryCta: LinkItem
  secondaryCta: LinkItem
  card: HeroCard
}

export interface FeatureItem {
  id: string
  title: string
  description: string
  resources: string[]
  benefit: string
}

export interface FeaturesContent {
  sectionId: string
  aboutAnchorId: string
  items: FeatureItem[]
}

export interface PlanItem {
  name: string
  price: string
  description: string
  features: string[]
  highlight?: boolean
  ctaLabel: string
}

export interface PlansContent {
  sectionId: string
  title: string
  subtitle: string
  items: PlanItem[]
}

export interface AboutStat {
  value: string
  label: string
}

export interface ProcessStep {
  title: string
  description: string
}

export interface ProcessContent {
  sectionId: string
  eyebrow: string
  title: string
  description: string
  steps: ProcessStep[]
}

export interface TestimonialItem {
  quote: string
  author: string
  role: string
}

export interface TestimonialsContent {
  sectionId: string
  eyebrow: string
  title: string
  description: string
  items: TestimonialItem[]
}

export interface FaqItem {
  question: string
  answer: string
}

export interface FaqContent {
  sectionId: string
  eyebrow: string
  title: string
  description: string
  items: FaqItem[]
}

export interface AboutContent {
  sectionId: string
  title: string
  description: string
  values: string[]
  stats: AboutStat[]
}

export interface ContactItem {
  label: string
  value: string
  href: string
}

export interface ContactContent {
  sectionId: string
  badge: string
  title: string
  description: string
  primaryCta: LinkItem
  secondaryCta: LinkItem
  items: ContactItem[]
}

export interface FooterContent {
  sectionId: string
  copyright: string
  backToTop: LinkItem
}

export interface NavbarContent {
  brand: LinkItem
  navItems: NavbarItem[]
  cta: LinkItem
}

export interface SiteContent {
  navbar: NavbarContent
  hero: HeroContent
  features: FeaturesContent
  process: ProcessContent
  plans: PlansContent
  about: AboutContent
  testimonials: TestimonialsContent
  faq: FaqContent
  contact: ContactContent
  footer: FooterContent
}
