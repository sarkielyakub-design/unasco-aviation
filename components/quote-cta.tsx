import Link from 'next/link'
import { ArrowRight, Phone } from 'lucide-react'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'
import { siteConfig } from '@/lib/site'

export function QuoteCta() {
  return (
    <section className="bg-background py-20 lg:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl bg-primary px-6 py-14 sm:px-12 lg:px-16 lg:py-16">
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
              backgroundSize: '26px 26px',
            }}
            aria-hidden="true"
          />
          <div className="relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <h2 className="text-balance font-display text-3xl font-extrabold tracking-tight text-primary-foreground sm:text-4xl">
                Ready to move your cargo across the world?
              </h2>
              <p className="mt-4 text-pretty text-lg leading-relaxed text-primary-foreground/80">
                Get a tailored quote from our aviation specialists and discover how UNASCO
                delivers speed, security and reliability on every shipment.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <Link
                href="/contact"
                className={cn(
                  buttonVariants({ variant: 'secondary' }),
                  'h-12 gap-2 bg-background px-6 text-base text-foreground hover:bg-background/90',
                )}
              >
                Request a Quote
                <ArrowRight className="size-4" />
              </Link>
              <a
                href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}
                className={cn(
                  buttonVariants({ variant: 'outline' }),
                  'h-12 gap-2 border-primary-foreground/40 bg-transparent px-6 text-base text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground',
                )}
              >
                <Phone className="size-4" />
                Call Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
