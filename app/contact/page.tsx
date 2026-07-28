import type { Metadata } from 'next'
import { PageHero } from '@/components/page-hero'
import { ContactForm } from '@/components/contact-form'
import { Mail, Phone, ShieldCheck, Clock } from 'lucide-react'
import { site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Contactez ERPACK SAS pour votre projet de packaging plastique industriel. Toutes les demandes sont traitées de manière confidentielle.',
}

export default function ContactPage() {
  const infos = [
    { icon: Mail, label: 'Email', value: site.email, href: `mailto:${site.email}` },
    { icon: Phone, label: 'Téléphone', value: site.phone, href: `tel:${site.phoneHref}` },
    { icon: Clock, label: 'Réponse', value: 'Dans les meilleurs délais', href: undefined },
    { icon: ShieldCheck, label: 'Confidentialité', value: 'Demandes traitées en confiance', href: undefined },
  ]

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Pour nous contacter"
        description="Décrivez votre besoin, votre projet ou votre problématique technique. Nous vous répondrons dans les meilleurs délais."
      />

      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
            <div className="lg:col-span-2">
              <h2 className="font-serif text-2xl font-semibold tracking-tight text-foreground">
                Coordonnées
              </h2>
              <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
                Merci de nous transmettre votre nom, votre société, vos coordonnées et une
                description de votre besoin ou projet.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {infos.map((info) => {
                  const content = (
                    <>
                      <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-secondary text-primary">
                        <info.icon className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <div className="mt-3">
                        <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                          {info.label}
                        </p>
                        <p className="mt-0.5 font-medium text-foreground">{info.value}</p>
                      </div>
                    </>
                  )
                  return info.href ? (
                    <a
                      key={info.label}
                      href={info.href}
                      className="rounded-2xl border border-border bg-card p-5 transition-colors hover:border-primary/40"
                    >
                      {content}
                    </a>
                  ) : (
                    <div key={info.label} className="rounded-2xl border border-border bg-card p-5">
                      {content}
                    </div>
                  )
                })}
              </div>
            </div>

            <div className="lg:col-span-3">
              <h2 className="mb-6 font-serif text-2xl font-semibold tracking-tight text-foreground">
                Écrivez-nous
              </h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
