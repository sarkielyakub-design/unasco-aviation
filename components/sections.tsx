import Image from 'next/image'
import { CheckCircle2 } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  className,
}: {
  eyebrow: string
  title: string
  description?: string
  align?: 'center' | 'left'
  className?: string
}) {
  return (
    <div
      className={cn(
        align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl',
        className,
      )}
    >
      <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
        {eyebrow}
      </span>
      <h2 className="mt-4 text-balance font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
          {description}
        </p>
      )}
    </div>
  )
}

export function FeatureSplit({
  eyebrow,
  title,
  paragraphs,
  bullets,
  image,
  imageAlt,
  reverse = false,
}: {
  eyebrow: string
  title: string
  paragraphs: string[]
  bullets?: string[]
  image: string
  imageAlt: string
  reverse?: boolean
}) {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div className={cn('overflow-hidden rounded-2xl', reverse && 'lg:order-2')}>
          <Image
            src={image || '/placeholder.svg'}
            alt={imageAlt}
            width={720}
            height={560}
            className="h-full w-full object-cover"
          />
        </div>
        <div className={cn(reverse && 'lg:order-1')}>
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            {eyebrow}
          </span>
          <h2 className="mt-4 text-balance font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            {title}
          </h2>
          <div className="mt-5 space-y-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            {paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          {bullets && (
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {bullets.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
                  <span className="text-sm leading-relaxed text-foreground/80">{item}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  )
}

export type FeatureItem = {
  icon: LucideIcon
  title: string
  description: string
}

export function FeatureGrid({
  eyebrow,
  title,
  description,
  items,
  variant = 'default',
}: {
  eyebrow: string
  title: string
  description?: string
  items: FeatureItem[]
  variant?: 'default' | 'muted'
}) {
  return (
    <section className={cn('py-20 lg:py-28', variant === 'muted' ? 'bg-secondary' : 'bg-background')}>
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={eyebrow} title={title} description={description} />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.title}
                className="rounded-2xl border border-border bg-background p-8"
              >
                <span className="flex size-12 items-center justify-center rounded-lg bg-accent text-primary">
                  <Icon className="size-6" aria-hidden="true" />
                </span>
                <h3 className="mt-5 font-display text-lg font-bold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export function ProcessSteps({
  eyebrow,
  title,
  description,
  steps,
}: {
  eyebrow: string
  title: string
  description?: string
  steps: { title: string; description: string }[]
}) {
  return (
    <section className="bg-secondary py-20 lg:py-28">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={eyebrow} title={title} description={description} />
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <div key={step.title} className="relative rounded-2xl border border-border bg-background p-8">
              <span className="font-display text-4xl font-extrabold text-accent-foreground/25">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-3 font-display text-lg font-bold text-foreground">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
