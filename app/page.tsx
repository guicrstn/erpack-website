import { Hero } from '@/components/home/hero'
import { Why } from '@/components/home/why'
import { ExpertisePreview } from '@/components/home/expertise-preview'
import { Domains } from '@/components/home/domains'
import { CtaBanner } from '@/components/cta-banner'

export default function HomePage() {
  return (
    <>
      <Hero />
      <Why />
      <ExpertisePreview />
      <Domains />
      <CtaBanner />
    </>
  )
}
