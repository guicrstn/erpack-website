'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Phone } from 'lucide-react'
import { cn } from '@/lib/utils'
import { navItems, site } from '@/lib/site'

export function SiteHeader() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href)

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full border-b transition-colors duration-300',
        scrolled
          ? 'border-border bg-background/90 backdrop-blur-md'
          : 'border-transparent bg-background',
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:h-20 lg:px-8">
        <Link href="/" className="group flex items-center gap-3" aria-label={`${site.name} — accueil`}>
          <span className="flex h-10 w-10 items-center justify-center rounded-md bg-primary text-primary-foreground font-serif text-lg font-semibold">
            E
          </span>
          <span className="flex flex-col leading-none">
            <span className="text-lg font-semibold tracking-tight text-foreground">
              {site.name}
            </span>
            <span className="hidden text-[11px] font-medium uppercase tracking-widest text-muted-foreground sm:block">
              Plasturgie · Packaging
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Menu principal">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'rounded-md px-3 py-2 text-sm font-medium transition-colors',
                isActive(item.href)
                  ? 'text-primary'
                  : 'text-muted-foreground hover:text-foreground',
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={`tel:${site.phoneHref}`}
            className="hidden items-center gap-2 rounded-full bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 lg:inline-flex"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            Nous contacter
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-md text-foreground lg:hidden"
            aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={open}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4 sm:px-6" aria-label="Menu mobile">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'rounded-md px-3 py-3 text-base font-medium transition-colors',
                  isActive(item.href)
                    ? 'bg-secondary text-primary'
                    : 'text-foreground hover:bg-secondary',
                )}
              >
                {item.label}
              </Link>
            ))}
            <a
              href={`tel:${site.phoneHref}`}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-4 py-3 text-base font-semibold text-primary-foreground"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              {site.phone}
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
