import Image from 'next/image'
import { Check } from 'lucide-react'

const domains = [
  'Optimisation de cadence sur ligne de soufflage',
  'Accompagnement au démarrage d’équipements industriels',
  'Formation technique d’opérateurs et de régleurs',
  'Réduction des pertes matière et optimisation process',
  'Audit technique et accompagnement à l’industrialisation',
  'Expertise dédiée aux équipements ASB NISSEI / AOKI',
]

export function Domains() {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative order-last aspect-[4/3] overflow-hidden rounded-3xl lg:order-first">
            <Image
              src="/images/gallery-line.png"
              alt="Ligne de production de packaging plastique"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              Domaines d&apos;intervention
            </p>
            <h2 className="mt-3 text-balance font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Des interventions concrètes, orientées résultats
            </h2>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              Nous intervenons au cœur des problématiques industrielles, avec une approche
              pragmatique directement applicable en environnement de production.
            </p>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {domains.map((d) => (
                <li key={d} className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                    <Check className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <span className="text-sm leading-relaxed text-foreground">{d}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
