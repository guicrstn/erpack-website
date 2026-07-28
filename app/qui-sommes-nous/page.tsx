import type { Metadata } from 'next'
import { PageHero } from '@/components/page-hero'
import { CtaBanner } from '@/components/cta-banner'
import { site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Qui sommes-nous',
  description:
    'Découvrez le parcours de Gilles Guichon, fondateur d’ERPACK SAS, et 40 ans d’expertise dédiée à la plasturgie et au packaging plastique.',
}

const timeline = [
  { year: '1978 – 1988', text: 'Dix ans passés chez PRP à Oyonnax, au cœur de la Plastic Vallée.' },
  { year: '1988 – 1994', text: 'Directeur de site chez SPAC Bretagne : fabrication, flaconnage, pharmacie et alimentaire.' },
  { year: '1994 – 2004', text: 'Création et direction générale des Flaconnages azuréens pendant dix ans.' },
  { year: '2004 – 2012', text: 'Création de Plastrade Monaco ; installation d’usines de flaconnage (Maghreb, Pologne, Italie, Roumanie, etc.).' },
  { year: '2012 – 2021', text: 'Directeur de production puis directeur industriel chez Qualiform.' },
  { year: '2021', text: 'Création de la société ERPACK SAS, dont il est l’actuel Président directeur général.' },
]

export default function QuiSommesNousPage() {
  return (
    <>
      <PageHero
        eyebrow="Qui sommes-nous"
        title="Une vocation industrielle dédiée à la plasturgie"
        description="ERPACK SAS s’appuie sur le parcours et l’expertise reconnue de son fondateur, Gilles Guichon."
      />

      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-border bg-card p-8 sm:p-12">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
              <span className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-primary font-serif text-3xl font-semibold text-primary-foreground">
                GG
              </span>
              <div>
                <h2 className="font-serif text-2xl font-semibold text-foreground">
                  {site.president}
                </h2>
                <p className="mt-1 text-sm font-medium uppercase tracking-widest text-primary">
                  Président directeur général
                </p>
              </div>
            </div>
            <p className="mt-8 text-pretty text-lg leading-relaxed text-muted-foreground">
              Né en 1960, originaire de la Plastic Vallée, {site.president}
              {' '}a répondu présent à une
              vocation industrielle naturelle dédiée à la plasturgie. Au fil de plus de quatre
              décennies, il a bâti une expertise pointue du flaconnage et de l&apos;industrialisation
              packaging, de la production à la direction de sites et à l&apos;installation d&apos;usines à
              l&apos;international.
            </p>
          </div>

          <div className="mt-16">
            <h3 className="font-serif text-2xl font-semibold text-foreground">Un parcours industriel</h3>
            <ol className="mt-8 space-y-0">
              {timeline.map((item, i) => (
                <li key={item.year} className="relative flex gap-6 pb-10 last:pb-0">
                  {i !== timeline.length - 1 && (
                    <span className="absolute left-[7px] top-3 h-full w-px bg-border" aria-hidden="true" />
                  )}
                  <span className="relative mt-1.5 h-4 w-4 shrink-0 rounded-full border-2 border-primary bg-background" aria-hidden="true" />
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-widest text-accent">
                      {item.year}
                    </p>
                    <p className="mt-1.5 text-pretty leading-relaxed text-foreground">{item.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <CtaBanner
        title="Mettons cette expertise au service de vos projets"
        text="De l’étude à la mise en production, ERPACK SAS accompagne vos équipes avec une exigence terrain."
      />
    </>
  )
}
