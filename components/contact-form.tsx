'use client'

import { useState } from 'react'
import { Send, CheckCircle2 } from 'lucide-react'
import { site } from '@/lib/site'

export function ContactForm() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const subject = encodeURIComponent(
      `Demande projet — ${data.get('company') || data.get('name') || 'Nouveau contact'}`,
    )
    const body = encodeURIComponent(
      `Nom : ${data.get('name')}\nSociété : ${data.get('company')}\nEmail : ${data.get('email')}\nTéléphone : ${data.get('phone')}\n\nBesoin :\n${data.get('message')}`,
    )
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`
    setSent(true)
  }

  if (sent) {
    return (
      <div className="flex flex-col items-center gap-4 rounded-2xl border border-border bg-card p-10 text-center">
        <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-accent/15 text-accent">
          <CheckCircle2 className="h-7 w-7" aria-hidden="true" />
        </span>
        <h3 className="font-serif text-xl font-semibold text-foreground">Merci pour votre message</h3>
        <p className="max-w-sm text-pretty text-sm leading-relaxed text-muted-foreground">
          Votre logiciel de messagerie s&apos;est ouvert avec votre demande pré-remplie. Vous pouvez
          aussi nous écrire directement à{' '}
          <a href={`mailto:${site.email}`} className="font-medium text-primary underline">
            {site.email}
          </a>
          .
        </p>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="mt-2 text-sm font-semibold text-primary hover:underline"
        >
          Envoyer une autre demande
        </button>
      </div>
    )
  }

  const inputClass =
    'w-full rounded-xl border border-border bg-background px-4 py-3 text-base text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20'

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl border border-border bg-card p-6 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-foreground">
            Nom <span className="text-accent">*</span>
          </label>
          <input id="name" name="name" required autoComplete="name" className={inputClass} placeholder="Votre nom" />
        </div>
        <div>
          <label htmlFor="company" className="mb-1.5 block text-sm font-medium text-foreground">
            Société
          </label>
          <input id="company" name="company" autoComplete="organization" className={inputClass} placeholder="Votre société" />
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-foreground">
            Email <span className="text-accent">*</span>
          </label>
          <input id="email" name="email" type="email" required autoComplete="email" className={inputClass} placeholder="vous@societe.com" />
        </div>
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-foreground">
            Téléphone
          </label>
          <input id="phone" name="phone" type="tel" autoComplete="tel" className={inputClass} placeholder="06 12 34 56 78" />
        </div>
      </div>
      <div className="mt-5">
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-foreground">
          Votre besoin ou projet <span className="text-accent">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className={`${inputClass} resize-y`}
          placeholder="Décrivez votre besoin, votre projet ou votre problématique technique…"
        />
      </div>
      <div className="mt-6 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs leading-relaxed text-muted-foreground">
          Toutes les demandes sont traitées de manière confidentielle.
        </p>
        <button
          type="submit"
          className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-base font-semibold text-primary-foreground transition-colors hover:bg-primary/90 sm:w-auto"
        >
          Envoyer ma demande
          <Send className="h-4 w-4" aria-hidden="true" />
        </button>
      </div>
    </form>
  )
}
