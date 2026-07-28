'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

export type GalleryItem = {
  src: string
  alt: string
  caption: string
  wide?: boolean
}

export function Gallery({ items }: { items: GalleryItem[] }) {
  const [active, setActive] = useState<number | null>(null)

  const close = useCallback(() => setActive(null), [])
  const next = useCallback(
    () => setActive((i) => (i === null ? i : (i + 1) % items.length)),
    [items.length],
  )
  const prev = useCallback(
    () => setActive((i) => (i === null ? i : (i - 1 + items.length) % items.length)),
    [items.length],
  )

  useEffect(() => {
    if (active === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowRight') next()
      if (e.key === 'ArrowLeft') prev()
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [active, close, next, prev])

  return (
    <>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:gap-5">
        {items.map((item, i) => (
          <button
            key={item.src}
            type="button"
            onClick={() => setActive(i)}
            className={`group relative aspect-[4/3] overflow-hidden rounded-2xl border border-border bg-card ${
              item.wide ? 'col-span-2' : ''
            }`}
            aria-label={`Agrandir : ${item.caption}`}
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 50vw, 33vw"
            />
            <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy/80 to-transparent p-4 text-left text-sm font-medium text-navy-foreground opacity-0 transition-opacity group-hover:opacity-100">
              {item.caption}
            </span>
          </button>
        ))}
      </div>

      {active !== null && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-navy/90 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            className="absolute right-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-navy-foreground transition-colors hover:bg-white/20"
            aria-label="Fermer"
          >
            <X className="h-6 w-6" />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              prev()
            }}
            className="absolute left-3 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-navy-foreground transition-colors hover:bg-white/20 sm:left-6"
            aria-label="Image précédente"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              next()
            }}
            className="absolute right-3 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-navy-foreground transition-colors hover:bg-white/20 sm:right-6"
            aria-label="Image suivante"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          <figure className="max-h-full w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
            <div className="relative aspect-[3/2] w-full overflow-hidden rounded-2xl">
              <Image
                src={items[active].src}
                alt={items[active].alt}
                fill
                className="object-contain"
                sizes="100vw"
              />
            </div>
            <figcaption className="mt-4 text-center text-sm text-navy-foreground/80">
              {items[active].caption}
            </figcaption>
          </figure>
        </div>
      )}
    </>
  )
}
