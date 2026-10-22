import type { Metadata } from 'next'
import { PageHero } from '@/components/page-hero'
import { ContactForm } from '@/components/contact-form'
import { site } from '@/lib/site'
import { Check, Lock, Mail, MessagesSquare } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Votre projet',
  description:
    'Développement de packaging, optimisation de process, expertise extrusion et injection soufflage : parlons de votre projet industriel avec ERPACK SAS.',
}

const cases = [
  'Développement d’un nouveau projet de packaging plastique',
  'Optimisation de process de production',
  'Amélioration de productivité et réduction des pertes matière',
  'Expertise extrusion soufflage',
  'Expertise injection soufflage et ISBM',
  'Accompagnement technique sur équipements ASB NISSEI / AOKI',
  'Formation de techniciens, opérateurs et équipes de production',
  'Audit technique et accompagnement industriel',
]

const requiredInfo = [
  'votre nom',
  'votre société',
  'votre adresse e-mail',
  'votre numéro de téléphone',
  'une description de votre besoin ou projet',
]

export default function VotreProjetPage() {
  return (
    <>
      <PageHero
        eyebrow="Votre projet"
        title="Parlons de vous"
        description="Vous développez un nouveau packaging plastique, optimisez une ligne existante ou recherchez une expertise technique en extrusion soufflage, injection soufflage ou ISBM ?"
      />

      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="max-w-3xl text-pretty text-lg leading-relaxed text-foreground">
            {site.name}
            {' '}vous accompagne avec une approche concrète, pragmatique et orientée résultats,
            fondée sur plus de 40 ans d&apos;expérience terrain.
          </p>

          <div className="mt-14 grid gap-12 lg:grid-cols-5 lg:gap-16">
            <div className="flex flex-col gap-12 lg:col-span-2">
              <div>
                <h2 className="font-serif text-2xl font-semibold tracking-tight text-foreground">
                  Quand faire appel à ERPACK SAS ?
                </h2>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  Nous intervenons notamment pour :
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

              <div className="rounded-xl border border-border bg-secondary/50 p-6">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                    <MessagesSquare className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h2 className="font-serif text-xl font-semibold tracking-tight text-foreground">
                    Un échange simple et direct
                  </h2>
                </div>
                <div className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground">
                  <p>
                    Chaque projet industriel présente ses propres contraintes techniques,
                    économiques et organisationnelles.
                  </p>
                  <p>
                    Que votre besoin soit clairement défini ou encore à l&apos;étude, nous
                    privilégions un premier échange simple afin de comprendre votre contexte et
                    d&apos;identifier les pistes les plus pertinentes.
                  </p>
                  <p>
                    Décrivez votre besoin, votre projet ou votre problématique technique, nous vous
                    répondrons dans les meilleurs délais.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="font-serif text-xl font-semibold tracking-tight text-foreground">
                  Vos coordonnées
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Merci de nous transmettre :
                </p>
                <ul className="mt-3 space-y-1.5 text-sm text-foreground">
                  {requiredInfo.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-5 text-sm text-muted-foreground">Écrivez-nous à l&apos;adresse :</p>
                <a
                  href={`mailto:${site.email}`}
                  className="mt-2 inline-flex items-center gap-2 text-base font-semibold text-primary underline-offset-4 hover:underline"
                >
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  {site.email}
                </a>
                <p className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
                  <Lock className="h-3.5 w-3.5" aria-hidden="true" />
                  Toutes les demandes sont traitées de manière confidentielle.
                </p>
              </div>
            </div>

            <div className="lg:col-span-3">
              <div className="lg:sticky lg:top-28">
                <h2 className="mb-6 font-serif text-2xl font-semibold tracking-tight text-foreground">
                  Décrivez votre besoin
                </h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
