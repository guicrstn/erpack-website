import Image from 'next/image'
import Link from 'next/link'
import { Mail, Phone, MapPin } from 'lucide-react'
import { navItems, site } from '@/lib/site'

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-navy text-navy-foreground">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Link
              href="/"
              aria-label={`${site.name} — accueil`}
              className="inline-flex rounded-xl bg-white px-4 py-3 shadow-sm"
            >
              <Image
                src="/images/erpack-logo.png"
                alt={`${site.name} — études réalisations packaging`}
                width={200}
                height={80}
                className="h-14 w-auto"
              />
            </Link>
            <p className="mt-4 max-w-md text-pretty text-sm leading-relaxed text-navy-foreground/70">
              {site.tagline}. Agent commercial de {site.partner}{' '}
              pour la France, ERPACK SAS met
              40 ans d&apos;expertise industrielle au service de vos projets d&apos;emballage plastique.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-navy-foreground/50">
              Navigation
            </h3>
            <ul className="mt-4 space-y-2.5">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-navy-foreground/80 transition-colors hover:text-navy-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/mentions-legales"
                  className="text-sm text-navy-foreground/80 transition-colors hover:text-navy-foreground"
                >
                  Mentions légales
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-navy-foreground/50">
              Contact
            </h3>
            <ul className="mt-4 space-y-3.5">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="flex items-center gap-3 text-sm text-navy-foreground/80 transition-colors hover:text-navy-foreground"
                >
                  <Mail className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${site.phoneHref}`}
                  className="flex items-center gap-3 text-sm text-navy-foreground/80 transition-colors hover:text-navy-foreground"
                >
                  <Phone className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                  {site.phone}
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-navy-foreground/80">
                <MapPin className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                France
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-navy-foreground/50 sm:flex-row">
          <p>© {new Date().getFullYear()} {site.name}. Tous droits réservés.</p>
          <p>Conception industrielle · Packaging plastique</p>
        </div>
      </div>
    </footer>
  )
}
