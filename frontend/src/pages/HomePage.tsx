import { PageLayout } from '../components/layout/PageLayout'
import { Hero } from '../components/sections/Hero'
import { Skills } from '../components/sections/Skills'
import { FeaturedProjects } from '../components/sections/projects/FeaturedProjects'
import { About } from '../components/sections/About'
import { CallToAction } from '../components/sections/CallToAction'

export function HomePage() {
  return (
    <PageLayout>
      <Hero />
      <Skills />
      <FeaturedProjects />
      <About teaser />
      <CallToAction />
    </PageLayout>
  )
}
