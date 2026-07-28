import type { Metadata } from 'next'
import { PageHero } from '@/components/page-hero'
import { ContactForm } from '@/components/contact-form'
import { Check } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Votre projet',
  description:
    'Développement de packaging, optimisation de process, expertise extrusion et injection soufflage : parlons de votre projet industriel avec ERPACK SAS.',
}

const cases = [
  'Développement d\u2019un nouveau projet de packaging plastique',
  'Optimisation de process de production',
  'Amélioration de productivité et réduction des pertes matière',
  'Expertise extrusion soufflage',
  'Expertise injection soufflage et ISBM',
  'Accompagnement technique sur équipements ASB NISSEI / AOKI',
  'Formation de techniciens, opérateurs et équipes de production',
  'Audit technique et accompagnement industriel',
]

export default function VotreProjetPage() {
  return (
    <>
      <PageHero
        eyebrow="Votre projet"
        title="Parlons de vous"
        description="Un besoin clairement défini ou encore à l\u2019étude ? Nous privilégions un premier échange simple, pragmatique et orienté résultats."
      />

      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
            <div className="lg:col-span-2">
              <h2 className="font-serif text-2xl font-semibold tracking-tight text-foreground">
                Quand faire appel à ERPACK SAS ?
              </h2>
              <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
                Vous développez un nouveau packaging plastique, optimisez une ligne existante ou
                recherchez une expertise technique en extrusion soufflage, injection soufflage ou
                ISBM ? Nous intervenons notamment pour :
              </p>
              <ul className="mt-6 space-y-3">
                {cases.map((c) => (
                  <li key={c} className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                      <Check className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <span className="text-sm leading-relaxed text-foreground">{c}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-3">
              <h2 className="mb-6 font-serif text-2xl font-semibold tracking-tight text-foreground">
                Décrivez votre besoin
              </h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
