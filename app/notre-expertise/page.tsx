import type { Metadata } from 'next'
import Image from 'next/image'
import { PageHero } from '@/components/page-hero'
import { CtaBanner } from '@/components/cta-banner'
import { Check } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Notre expertise',
  description:
    'Extrusion soufflage EBM, injection soufflage et ISBM, conseil industriel et formation technique : l\u2019expertise plasturgie d\u2019ERPACK SAS.',
}

const sections = [
  {
    id: 'extrusion-soufflage',
    tag: 'EBM',
    title: 'Extrusion soufflage',
    image: '/images/extrusion-soufflage.png',
    paragraphs: [
      'L\u2019extrusion soufflage est au cœur de nombreuses applications industrielles : flacons, bidons techniques, emballages industriels et contenants spécifiques.',
      'Nous accompagnons nos clients dans le choix des solutions adaptées à leurs contraintes de production : cadence, géométrie des pièces, réduction matière, qualité de soufflage, optimisation énergétique et évolutivité des équipements.',
    ],
  },
  {
    id: 'injection-soufflage',
    tag: 'ISBM',
    title: 'Injection soufflage',
    image: '/images/injection-soufflage.png',
    paragraphs: [
      'Les procédés d\u2019injection soufflage et d\u2019ISBM exigent une maîtrise technique élevée, tant sur les aspects machines que sur les paramètres process. Ils sont particulièrement adaptés aux contenants à forte exigence qualitative : cosmétique, pharmaceutique, alimentaire ou packaging technique.',
    ],
    list: [
      'Analyse de faisabilité',
      'Choix technologique',
      'Optimisation des cycles de production',
      'Amélioration de la qualité produit',
      'Montée en cadence',
      'Accompagnement lors des mises en production',
    ],
    listNote:
      'Grâce à une expertise reconnue sur les équipements ASB NISSEI et AOKI, nous transformons une technologie complexe en solution industrielle fiable et rentable.',
  },
  {
    id: 'conseil',
    tag: 'Sur mesure',
    title: 'Conseil & accompagnement industriel',
    image: '/images/conseil.png',
    paragraphs: [
      'Chaque projet industriel est unique. ERPACK SAS privilégie une approche d\u2019accompagnement sur mesure, fondée sur l\u2019écoute, l\u2019analyse technique et la recherche d\u2019efficacité opérationnelle.',
    ],
    list: [
      'Étude technique',
      'Audit de production',
      'Optimisation process',
      'Amélioration de productivité',
      'Réduction des pertes matière',
      'Assistance au démarrage',
    ],
  },
  {
    id: 'formation',
    tag: 'Savoir-faire',
    title: 'Formation technique',
    image: '/images/formation.png',
    paragraphs: [
      'La transmission du savoir-faire fait partie intégrante de notre mission. Nous proposons des formations destinées aux équipes de production, techniciens, responsables industriels et opérateurs.',
      'Notre expertise historique sur les équipements ASB / AOKI constitue un atout différenciant : pédagogie concrète, orientée machine, process et résolution de problèmes.',
    ],
  },
]

export default function NotreExpertisePage() {
  return (
    <>
      <PageHero
        eyebrow="Notre expertise"
        title="Au cœur des procédés de transformation des matières plastiques"
        description="Depuis plus de 40 ans, une approche concrète, orientée résultats et performance industrielle."
      />

      <section className="bg-background">
        {sections.map((section, i) => (
          <div
            key={section.id}
            id={section.id}
            className={i % 2 === 1 ? 'bg-secondary/50' : 'bg-background'}
          >
            <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
              <div className="grid items-center gap-12 lg:grid-cols-2">
                <div className={i % 2 === 1 ? 'lg:order-last' : ''}>
                  <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
                    <Image
                      src={section.image}
                      alt={section.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </div>
                <div>
                  <span className="inline-flex rounded-full bg-accent/15 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-accent">
                    {section.tag}
                  </span>
                  <h2 className="mt-4 font-serif text-3xl font-semibold tracking-tight text-foreground">
                    {section.title}
                  </h2>
                  {section.paragraphs.map((p) => (
                    <p key={p} className="mt-4 text-pretty leading-relaxed text-muted-foreground">
                      {p}
                    </p>
                  ))}
                  {section.list && (
                    <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                      {section.list.map((li) => (
                        <li key={li} className="flex items-start gap-2.5">
                          <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                          <span className="text-sm text-foreground">{li}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  {section.listNote && (
                    <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">
                      {section.listNote}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      <div className="bg-background pt-16 lg:pt-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-balance font-serif text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            Une expertise indépendante, pragmatique et orientée résultats
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Parce qu&apos;un bon conseil industriel ne se mesure pas au discours, mais aux résultats
            obtenus. ERPACK SAS aide ses clients à sécuriser leurs investissements, améliorer leurs
            performances et réussir leurs projets industriels.
          </p>
        </div>
      </div>

      <CtaBanner />
    </>
  )
}
