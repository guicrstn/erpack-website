import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'

const cards = [
  {
    title: 'Extrusion soufflage EBM',
    text: 'Flacons, bidons techniques et emballages industriels : cadence, réduction matière et optimisation énergétique.',
    image: '/images/extrusion-soufflage.png',
  },
  {
    title: 'Injection soufflage & ISBM',
    text: 'Contenants à forte exigence qualitative pour la cosmétique, la pharmacie et l’alimentaire.',
    image: '/images/injection-soufflage.png',
  },
  {
    title: 'Conseil & formation',
    text: 'Audit de production, optimisation process et montée en compétence des équipes sur ASB / AOKI.',
    image: '/images/conseil.png',
  },
]

export function ExpertisePreview() {
  return (
    <section className="bg-secondary/50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              Notre expertise
            </p>
            <h2 className="mt-3 text-balance font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Au cœur des procédés de transformation
            </h2>
          </div>
          <Link
            href="/notre-expertise"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
          >
            Découvrir toute l&apos;expertise
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {cards.map((card) => (
            <Link
              key={card.title}
              href="/notre-expertise"
              className="group overflow-hidden rounded-2xl border border-border bg-card transition-all hover:shadow-xl hover:shadow-navy/5"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="flex items-center justify-between text-lg font-semibold text-foreground">
                  {card.title}
                  <ArrowUpRight className="h-5 w-5 text-primary opacity-0 transition-opacity group-hover:opacity-100" aria-hidden="true" />
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{card.text}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
