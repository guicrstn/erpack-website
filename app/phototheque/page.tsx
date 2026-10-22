import type { Metadata } from 'next'
import { PageHero } from '@/components/page-hero'
import { CtaBanner } from '@/components/cta-banner'
import { Gallery, type GalleryItem } from '@/components/gallery'

export const metadata: Metadata = {
  title: 'Photothèque',
  description:
    'Machines, procédés et réalisations : découvrez en images l\u2019univers industriel du packaging plastique accompagné par ERPACK SAS.',
}

const dir = '/images/phototheque'

const items: GalleryItem[] = [
  { src: `${dir}/01-bouteilles-chaine-1.jpg`, alt: 'Bouteilles plastiques sur une chaîne de production', caption: 'Bouteilles sur chaîne de production' },
  { src: `${dir}/02-bouteilles-chaine-2.jpg`, alt: 'Bouteilles plastiques en sortie de ligne', caption: 'Bouteilles en sortie de ligne' },
  { src: `${dir}/03-bouteilles-chaine-3.jpg`, alt: 'Convoyage de bouteilles plastiques', caption: 'Convoyage de bouteilles' },
  { src: `${dir}/04-Delta-machine-1.jpg`, alt: 'Machine Delta Engineering', caption: 'Delta Engineering', wide: true },
  { src: `${dir}/05-bouteilles-vrac.jpg`, alt: 'Bouteilles plastiques en vrac', caption: 'Bouteilles en vrac' },
  { src: `${dir}/06-Delta-machine-2.jpg`, alt: 'Machine Delta Engineering', caption: 'Delta Engineering' },
  { src: `${dir}/07-Delta-machine-3.jpg`, alt: 'Machine Delta Engineering', caption: 'Delta Engineering', wide: true },
  { src: `${dir}/08-ERPACK-implantation.jpg`, alt: 'Plan d’implantation réalisé par ERPACK', caption: 'Implantation ERPACK', fit: 'contain' },
  { src: `${dir}/09-Magic-EBM-machine-1.jpg`, alt: 'Machine d’extrusion soufflage Magic', caption: 'Magic – extrusion soufflage' },
  { src: `${dir}/10-ASB-machine-2.jpg`, alt: 'Machine d’injection soufflage ASB Nissei', caption: 'ASB Nissei', wide: true },
  { src: `${dir}/11-ASB-machine-3.jpg`, alt: 'Machine d’injection soufflage ASB Nissei', caption: 'ASB Nissei' },
  { src: `${dir}/12-ASB-machine-4.jpg`, alt: 'Machine d’injection soufflage ASB Nissei', caption: 'ASB Nissei', wide: true },
  { src: `${dir}/13-Magic-EBM-machine-5.jpg`, alt: 'Machine d’extrusion soufflage Magic', caption: 'Magic – extrusion soufflage' },
  { src: `${dir}/14-Proxia-plan-1.jpg`, alt: 'Plan d’implantation Proxia', caption: 'Plan Proxia', fit: 'contain' },
  { src: `${dir}/15-Proxia-plan-2.jpg`, alt: 'Plan d’implantation Proxia', caption: 'Plan Proxia', fit: 'contain' },
  { src: `${dir}/16-ASB-catalogue.jpg`, alt: 'Catalogue des machines ASB Nissei', caption: 'Catalogue ASB Nissei', fit: 'contain' },
  { src: `${dir}/17-ASB-machine-1.jpg`, alt: 'Machine d’injection soufflage ASB Nissei', caption: 'ASB Nissei' },
  { src: `${dir}/18-ASB-machine-2.jpg`, alt: 'Machine d’injection soufflage ASB Nissei', caption: 'ASB Nissei' },
  { src: `${dir}/19-ASB-machine-3.jpg`, alt: 'Machine d’injection soufflage ASB Nissei', caption: 'ASB Nissei' },
  { src: `${dir}/20-ASB-Molds.jpg`, alt: 'Moules ASB Nissei', caption: 'Moules ASB Nissei' },
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
