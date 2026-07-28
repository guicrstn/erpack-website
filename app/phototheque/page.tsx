import type { Metadata } from 'next'
import { PageHero } from '@/components/page-hero'
import { CtaBanner } from '@/components/cta-banner'
import { Gallery, type GalleryItem } from '@/components/gallery'

export const metadata: Metadata = {
  title: 'Photothèque',
  description:
    'Machines, procédés et réalisations : découvrez en images l\u2019univers industriel du packaging plastique accompagné par ERPACK SAS.',
}

const items: GalleryItem[] = [
  { src: '/images/hero-machine.png', alt: 'Machine d\u2019extrusion soufflage', caption: 'Ligne d\u2019extrusion soufflage', wide: true },
  { src: '/images/extrusion-soufflage.png', alt: 'Procédé d\u2019extrusion soufflage', caption: 'Procédé EBM en action' },
  { src: '/images/injection-soufflage.png', alt: 'Préformes et flacons PET', caption: 'Préformes & ISBM' },
  { src: '/images/gallery-bottles.png', alt: 'Flacons plastiques', caption: 'Flaconnage cosmétique & pharmaceutique' },
  { src: '/images/gallery-mold.png', alt: 'Moule de soufflage', caption: 'Outillage de soufflage de précision' },
  { src: '/images/gallery-canisters.png', alt: 'Bidons techniques', caption: 'Bidons & contenants techniques' },
  { src: '/images/conseil.png', alt: 'Ingénieurs sur ligne de production', caption: 'Accompagnement industriel', wide: true },
  { src: '/images/formation.png', alt: 'Formation technique sur machine', caption: 'Formation technique ASB / AOKI' },
  { src: '/images/gallery-line.png', alt: 'Ligne de conditionnement', caption: 'Ligne de conditionnement automatisée' },
]

export default function PhototequePage() {
  return (
    <>
      <PageHero
        eyebrow="Photothèque"
        title="L'univers industriel du packaging plastique"
        description="Machines, procédés et réalisations : quelques images pour illustrer notre savoir-faire."
      />

      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Gallery items={items} />
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
