import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string
  title: string
  description?: string
}) {
  return (
    <section className="relative overflow-hidden bg-navy text-navy-foreground">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)',
          backgroundSize: '32px 32px',
        }}
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <nav aria-label="Fil d'ariane" className="mb-6 flex items-center gap-1.5 text-sm text-navy-foreground/60">
          <Link href="/" className="transition-colors hover:text-navy-foreground">
            Accueil
          </Link>
          <ChevronRight className="h-4 w-4" aria-hidden="true" />
          <span className="text-navy-foreground/90">{eyebrow}</span>
        </nav>
        <p className="text-sm font-semibold uppercase tracking-widest text-accent">{eyebrow}</p>
        <h1 className="mt-3 max-w-3xl text-balance font-serif text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-navy-foreground/75">
            {description}
          </p>
        )}
      </div>
    </section>
  )
}
