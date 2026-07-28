import type { Metadata } from 'next'
import { PageHero } from '@/components/page-hero'
import { site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Mentions légales',
  description: 'Mentions légales du site ERPACK SAS.',
}

export default function MentionsLegalesPage() {
  const blocks = [
    {
      title: 'Éditeur du site',
      body: (
        <>
          Le présent site est édité par <strong>{site.name}</strong>, représentée par son Président
          directeur général, {site.president}.
          <br />
          Email : <a href={`mailto:${site.email}`} className="text-primary underline">{site.email}</a>
          <br />
          Téléphone : <a href={`tel:${site.phoneHref}`} className="text-primary underline">{site.phone}</a>
        </>
      ),
    },
    {
      title: 'Activité',
      body: (
        <>
          {site.name} est agent commercial de {site.partner} pour la France et propose une expertise
          en extrusion soufflage, injection soufflage et ISBM, ainsi qu&apos;un accompagnement
          industriel et des formations techniques.
        </>
      ),
    },
    {
      title: 'Propriété intellectuelle',
      body: (
        <>
          L&apos;ensemble des contenus présents sur ce site (textes, images, logos, éléments
          graphiques) est protégé par le droit de la propriété intellectuelle. Toute reproduction,
          représentation ou diffusion, totale ou partielle, sans autorisation préalable est
          interdite.
        </>
      ),
    },
    {
      title: 'Données personnelles',
      body: (
        <>
          Les informations transmises via les formulaires de contact sont utilisées uniquement pour
          répondre à votre demande et sont traitées de manière confidentielle. Conformément à la
          réglementation en vigueur, vous disposez d&apos;un droit d&apos;accès, de rectification et
          de suppression de vos données en écrivant à {site.email}.
        </>
      ),
    },
    {
      title: 'Responsabilité',
      body: (
        <>
          {site.name} met tout en œuvre pour assurer l&apos;exactitude des informations diffusées sur
          ce site, sans toutefois garantir qu&apos;elles soient exemptes d&apos;erreurs ou
          d&apos;omissions.
        </>
      ),
    },
  ]

  return (
    <>
      <PageHero eyebrow="Mentions légales" title="Mentions légales" />

      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-10">
            {blocks.map((b) => (
              <div key={b.title}>
                <h2 className="font-serif text-xl font-semibold text-foreground">{b.title}</h2>
                <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
