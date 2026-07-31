import { useEffect, useState } from 'react'
import { PageLayout } from '../components/layout/PageLayout'
import { Reveal } from '../components/layout/Reveal'
import { Hero } from '../components/sections/Hero'
import { StackGrid } from '../components/sections/StackGrid'
import { ProjectList } from '../components/sections/ProjectList'
import { CasePanel } from '../components/sections/CasePanel'
import { Timeline } from '../components/sections/Timeline'
import { About } from '../components/sections/About'
import { Contact } from '../components/sections/Contact'
import { PROJECT_CASES } from '../lib/projectCases'

export function HomePage() {
  const [filter, setFilter] = useState(0)
  const [caseId, setCaseId] = useState<string | null>(null)
  const [timelineStep, setTimelineStep] = useState(4)

  function stepCase(direction: 1 | -1) {
    setCaseId((current) => {
      const index = PROJECT_CASES.findIndex((p) => p.id === current)
      if (index === -1) return current
      const next = (index + direction + PROJECT_CASES.length) % PROJECT_CASES.length
      return PROJECT_CASES[next].id
    })
  }

  useEffect(() => {
    if (!caseId) return

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') setCaseId(null)
      if (event.key === 'ArrowRight') stepCase(1)
      if (event.key === 'ArrowLeft') stepCase(-1)
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [caseId])

  return (
    <PageLayout>
      <Hero />
      <Reveal>
        <StackGrid onFilter={setFilter} />
      </Reveal>
      <Reveal>
        <ProjectList filter={filter} onFilterChange={setFilter} onOpenCase={setCaseId} />
      </Reveal>
      <Reveal>
        <Timeline step={timelineStep} onStepChange={setTimelineStep} />
      </Reveal>
      <Reveal>
        <About />
      </Reveal>
      <Reveal>
        <Contact />
      </Reveal>
      <CasePanel caseId={caseId} onClose={() => setCaseId(null)} onStep={stepCase} />
    </PageLayout>
  )
}
