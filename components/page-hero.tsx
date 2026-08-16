import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

export function PageHero({
  title,
  subtitle,
  breadcrumb,
}: {
  title: string
  subtitle: string
  breadcrumb: string
}) {
  return (
    <section className="relative overflow-hidden bg-foreground pt-16 lg:pt-20">
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
          backgroundSize: '28px 28px',
        }}
        aria-hidden="true"
      />
      <div
        className="absolute -right-24 -top-24 size-96 rounded-full bg-primary/25 blur-3xl"
        aria-hidden="true"
      />
      <div className="relative mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <nav
          className="flex items-center gap-1.5 text-sm text-background/60"
          aria-label="Breadcrumb"
        >
          <Link href="/" className="transition-colors hover:text-primary">
            Home
          </Link>
          <ChevronRight className="size-4" aria-hidden="true" />
          <span className="text-background/90">{breadcrumb}</span>
        </nav>
        <h1 className="mt-4 max-w-3xl text-balance font-display text-4xl font-extrabold tracking-tight text-background sm:text-5xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-background/70">
          {subtitle}
        </p>
      </div>
    </section>
  )
}
