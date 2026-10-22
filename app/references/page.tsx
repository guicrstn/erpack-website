import type { Metadata } from 'next'
import Image from 'next/image'
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

const partnerPresentations = [
  {
    name: 'ASB NISSEI',
    title: 'Injection soufflage bi-orientation en une étape',
    text: 'Constructeur japonais de référence, ASB NISSEI conçoit des machines d’injection soufflage bi-orientation (ISBM) en une étape : la préforme est injectée puis soufflée sur la même machine. Une technologie idéale pour les flacons PET de haute qualité esthétique, en cosmétique, pharmacie et alimentaire.',
    tags: ['ISBM 1 étape', 'PET', 'Cosmétique', 'Pharmacie'],
    image: '/images/injection-soufflage.png',
    alt: 'Préformes et bouteilles PET transparentes issues d’une ligne d’injection soufflage',
  },
  {
    name: 'AOKI',
    title: 'Le savoir-faire japonais de l’ISBM compact',
    text: 'Pionnier de l’injection soufflage bi-orientation en une étape, AOKI propose des machines compactes et précises, particulièrement adaptées aux petites et moyennes séries, aux pots et flacons à col large et aux contenants à parois fines.',
    tags: ['ISBM 1 étape', 'Col large', 'Petites séries'],
    image: '/images/partner-aoki.png',
    alt: 'Plateau rotatif d’une machine d’injection soufflage avec pots et flacons PET',
  },
  {
    name: 'Consilhom',
    title: 'Formation et certification en plasturgie',
    text: 'Organisme de formation spécialisé en plasturgie, Consilhom accompagne la montée en compétences des équipes : conduite d’équipement, réglage, coordination de ligne et management. Les formations, certifiantes (CQP / CCP), peuvent être réalisées directement dans vos locaux.',
    tags: ['CQP / CCP', 'Réglage', 'Conduite de ligne', 'Sur site'],
    image: '/images/formation.png',
    alt: 'Formateur expliquant un pupitre de commande de machine à des opérateurs',
  },
]

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
        description="ERPACK SAS accompagne les industriels du packaging plastique, en France comme à l’international."
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

            <article className="mt-12 overflow-hidden rounded-2xl border border-border bg-card">
              <div className="grid items-center gap-8 p-6 sm:p-10 lg:grid-cols-2">
                <div className="flex flex-col gap-4">
                  <p className="text-xs font-semibold uppercase tracking-widest text-accent">
                    Delta Engineering
                  </p>
                  <h3 className="font-serif text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                    Ensacheuses automatiques DB100 · DB112 · DB122 · DB142
                  </h3>
                  <p className="text-pretty leading-relaxed text-muted-foreground">
                    Les modèles DB100, DB112, DB122 et DB142 forment une gamme d’ensacheuses
                    entièrement automatiques pour bouteilles vides. Le choix du modèle dépend des
                    dimensions de sac dont vous avez besoin : chaque modèle réalise des sacs dans une
                    plage de dimensions différente.
                  </p>
                  <ul className="flex flex-wrap gap-2" aria-label="Modèles disponibles">
                    {['DB100', 'DB112', 'DB122', 'DB142'].map((model) => (
                      <li
                        key={model}
                        className="rounded-md bg-secondary px-3 py-1 font-mono text-sm font-semibold text-primary"
                      >
                        {model}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-col gap-4">
                  <Image
                    src="/images/delta-ensacheuse-1.png"
                    alt="Ensacheuse automatique Delta Engineering, vue de trois quarts avec convoyeur d’entrée"
                    width={560}
                    height={310}
                    className="h-auto w-full"
                  />
                  <Image
                    src="/images/delta-ensacheuse-2.png"
                    alt="Ensacheuse automatique Delta Engineering, modèle grand format avec dérouleur de film"
                    width={695}
                    height={374}
                    className="h-auto w-full"
                  />
                </div>
              </div>
            </article>

            {partnerPresentations.map((partner, index) => (
              <article
                key={partner.name}
                className="mt-8 overflow-hidden rounded-2xl border border-border bg-card"
              >
                <div className="grid items-center gap-8 p-6 sm:p-10 lg:grid-cols-2">
                  <div
                    className={`flex flex-col gap-4 ${index % 2 === 0 ? 'lg:order-2' : ''}`}
                  >
                    <p className="text-xs font-semibold uppercase tracking-widest text-accent">
                      {partner.name}
                    </p>
                    <h3 className="font-serif text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                      {partner.title}
                    </h3>
                    <p className="text-pretty leading-relaxed text-muted-foreground">
                      {partner.text}
                    </p>
                    <ul className="flex flex-wrap gap-2" aria-label={`Points clés ${partner.name}`}>
                      {partner.tags.map((tag) => (
                        <li
                          key={tag}
                          className="rounded-md bg-secondary px-3 py-1 text-sm font-semibold text-primary"
                        >
                          {tag}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                    <Image
                      src={partner.image}
                      alt={partner.alt}
                      fill
                      sizes="(min-width: 1024px) 560px, 100vw"
                      className="object-cover"
                    />
                  </div>
                </div>
              </article>
            ))}
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
