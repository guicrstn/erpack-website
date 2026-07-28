import Link from 'next/link'
import { ArrowRight, Mail } from 'lucide-react'
import { site } from '@/lib/site'

export function CtaBanner({
  title = 'Vous avez un projet packaging industriel ?',
  text = 'ERPACK SAS vous accompagne dans l\u2019étude, l\u2019optimisation et la mise en œuvre de vos solutions industrielles.',
}: {
  title?: string
  text?: string
}) {
  return (
    <section className="bg-background pb-20 lg:pb-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-navy px-6 py-14 text-navy-foreground sm:px-12 lg:px-16 lg:py-20">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.12]"
            style={{
              backgroundImage:
                'radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)',
              backgroundSize: '28px 28px',
            }}
            aria-hidden="true"
          />
          <div className="relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <h2 className="text-balance font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
                {title}
              </h2>
              <p className="mt-4 text-pretty leading-relaxed text-navy-foreground/75">{text}</p>
            </div>
            <div className="flex shrink-0 flex-col gap-3 sm:flex-row lg:flex-col">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 text-base font-semibold text-accent-foreground transition-transform hover:scale-[1.02]"
              >
                Nous contacter
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </Link>
              <a
                href={`mailto:${site.email}`}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-base font-semibold text-navy-foreground transition-colors hover:bg-white/10"
              >
                <Mail className="h-5 w-5" aria-hidden="true" />
                {site.email}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
