import type { Metadata } from 'next'
import { PageHero } from '@/components/page-hero'
import { CtaBanner } from '@/components/cta-banner'
import { FlaskConical, Pill, Apple, Boxes, SprayCan, Factory } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Références',
  description:
    'Secteurs accompagnés et partenaires technologiques d\u2019ERPACK SAS : cosmétique, pharmacie, alimentaire, packaging technique, ASB NISSEI, AOKI et Delta Engineering.',
}

const sectors = [
  { icon: SprayCan, title: 'Cosmétique', text: 'Flaconnage à forte exigence esthétique et qualitative.' },
  { icon: Pill, title: 'Pharmaceutique', text: 'Contenants techniques répondant aux standards du secteur.' },
  { icon: Apple, title: 'Alimentaire', text: 'Emballages performants et conformes aux contraintes de production.' },
  { icon: FlaskConical, title: 'Chimie & technique', text: 'Bidons techniques et contenants spécifiques.' },
  { icon: Boxes, title: 'Packaging industriel', text: 'Emballages industriels optimisés en cadence et matière.' },
  { icon: Factory, title: 'Industrialisation', text: 'Installation et mise en production de lignes complètes.' },
]

const partners = ['Delta Engineering', 'ASB NISSEI', 'AOKI', 'Consilhom']

const stats = [
  { value: '40+', label: "années d'expérience terrain" },
  { value: '4', label: 'pôles d\u2019expertise complémentaires' },
  { value: 'International', label: 'usines installées à l\u2019étranger' },
]

export default function ReferencesPage() {
  return (
    <>
      <PageHero
        eyebrow="Références"
        title="Une expertise reconnue au service de nombreux secteurs"
        description="ERPACK SAS accompagne les industriels du packaging plastique, en France comme à l\u2019international."
      />

      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 text-center sm:grid-cols-3">
            {stats.map((s) => (
              <div key={s.label} className="rounded-2xl border border-border bg-card p-8">
                <p className="font-serif text-4xl font-semibold text-primary">{s.value}</p>
                <p className="mt-2 text-sm text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-20">
            <h2 className="font-serif text-3xl font-semibold tracking-tight text-foreground">
              Secteurs accompagnés
            </h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {sectors.map((sec) => (
                <div
                  key={sec.title}
                  className="rounded-2xl border border-border bg-card p-7 transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
                >
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-primary">
                    <sec.icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold text-foreground">{sec.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{sec.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-20 rounded-3xl bg-secondary/60 p-8 sm:p-12">
            <h2 className="font-serif text-2xl font-semibold tracking-tight text-foreground">
              Partenaires & technologies
            </h2>
            <p className="mt-3 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
              ERPACK SAS est agent commercial de Delta Engineering pour la France et s&apos;appuie
              sur une expertise reconnue des équipements de soufflage de référence.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {partners.map((p) => (
                <span
                  key={p}
                  className="inline-flex items-center rounded-full border border-border bg-card px-5 py-2.5 text-sm font-semibold text-foreground"
                >
                  {p}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaBanner
        title="Rejoignez nos clients accompagnés"
        text="Discutons de votre secteur et de vos contraintes de production pour identifier les meilleures solutions."
      />
    </>
  )
}
