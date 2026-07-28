import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Phone } from 'lucide-react'
import { site } from '@/lib/site'

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy text-navy-foreground">
      <Image
        src="/images/hero-machine.png"
        alt="Machine d'extrusion soufflage dans une usine moderne"
        fill
        priority
        className="object-cover opacity-30"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-navy/40" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-32">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-accent">
            Agent commercial · {site.partner}
          </span>
          <h1 className="mt-6 text-balance font-serif text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">
            Des solutions industrielles de <span className="italic text-accent">packaging</span>
          </h1>
          <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-navy-foreground/80">
            {site.name}
            {' '}
            met plus de 40 ans d&apos;expertise en extrusion soufflage, injection soufflage et ISBM
            au service de vos projets d&apos;emballage plastique.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/votre-projet"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 text-base font-semibold text-accent-foreground transition-transform hover:scale-[1.02]"
            >
              Parlons de votre projet
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </Link>
            <a
              href={`tel:${site.phoneHref}`}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-base font-semibold text-navy-foreground backdrop-blur transition-colors hover:bg-white/10"
            >
              <Phone className="h-5 w-5" aria-hidden="true" />
              {site.phone}
            </a>
          </div>

          <dl className="mt-14 grid max-w-lg grid-cols-3 gap-6 border-t border-white/10 pt-8">
            {[
              { value: '40+', label: "ans d'expérience" },
              { value: 'ISBM', label: 'extrusion & injection' },
              { value: 'ASB / AOKI', label: 'spécialiste reconnu' },
            ].map((stat) => (
              <div key={stat.label}>
                <dt className="font-serif text-2xl font-semibold text-accent sm:text-3xl">
                  {stat.value}
                </dt>
                <dd className="mt-1 text-sm text-navy-foreground/70">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
