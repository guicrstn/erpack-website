import { Award, Wrench, Route, HardHat } from 'lucide-react'

const items = [
  {
    icon: Award,
    title: 'Une expertise industrielle éprouvée',
    text: 'Plus de quarante ans d’expérience dans les technologies de soufflage et d’industrialisation packaging.',
  },
  {
    icon: Wrench,
    title: 'Spécialiste ASB / AOKI',
    text: 'Une expertise reconnue sur les équipements ASB et AOKI pour l’optimisation, la formation et l’accompagnement technique.',
  },
  {
    icon: Route,
    title: 'Accompagnement de projets',
    text: 'De l’étude initiale à la mise en production, nous accompagnons vos équipes à chaque étape.',
  },
  {
    icon: HardHat,
    title: 'Une approche terrain',
    text: 'Des solutions concrètes orientées performance, cadence, qualité et réduction des coûts industriels.',
  },
]

export function Why() {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Pourquoi ERPACK SAS ?
          </p>
          <h2 className="mt-3 text-balance font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            L&apos;expertise plasturgie au service de votre performance
          </h2>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <div
              key={item.title}
              className="group rounded-2xl border border-border bg-card p-7 transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <item.icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-lg font-semibold text-foreground">{item.title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
