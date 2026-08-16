import type { Metadata } from 'next'
import Link from 'next/link'
import { MoonStar, Plane, BedDouble, Users, ShieldCheck, Headphones } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { FeatureGrid } from '@/components/sections'
import { QuoteCta } from '@/components/quote-cta'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Hajj & Umrah',
  description:
    'Comfortable, well-organised Hajj and Umrah travel packages from UNASCO Aviation with flights, accommodation and guided support.',
}

const packages = [
  {
    name: 'Umrah Essential',
    price: 'From $1,890',
    tag: 'Most popular',
    features: ['Return flights', '3-star hotels in Makkah & Madinah', 'Airport transfers', 'Group guide'],
  },
  {
    name: 'Umrah Premium',
    price: 'From $2,750',
    tag: 'Comfort',
    features: ['Return flights', '5-star hotels near the Haram', 'Private transfers', 'Dedicated group leader'],
  },
  {
    name: 'Hajj Package',
    price: 'From $6,400',
    tag: 'Seasonal',
    features: ['Return flights', 'Full board accommodation', 'Mina & Arafat logistics', 'Experienced scholars'],
  },
]

export default function HajjUmrahPage() {
  return (
    <>
      <PageHero
        eyebrow="Hajj & Umrah"
        title="A sacred journey, thoughtfully arranged"
        description="Let us handle the flights, accommodation and logistics so you can focus on your pilgrimage with peace of mind."
        image="/hajj-umrah.png"
        imageAlt="Pilgrims in white ihram garments near the Kaaba in Mecca"
        breadcrumb="Hajj & Umrah"
      />

      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Travel Packages
            </span>
            <h2 className="mt-4 text-balance font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
              Choose the package that suits you
            </h2>
            <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
              Every package includes flights, vetted accommodation and on-the-ground support. Prices are per pilgrim.
            </p>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {packages.map((pkg, i) => (
              <div
                key={pkg.name}
                className={`flex flex-col rounded-2xl border p-8 ${
                  i === 1 ? 'border-primary bg-accent/40 shadow-sm' : 'border-border bg-background'
                }`}
              >
                <span className="inline-flex w-fit items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                  {pkg.tag}
                </span>
                <h3 className="mt-4 font-display text-xl font-bold text-foreground">{pkg.name}</h3>
                <p className="mt-2 font-display text-3xl font-extrabold text-foreground">{pkg.price}</p>
                <ul className="mt-6 flex-1 space-y-3">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm leading-relaxed text-foreground/80">
                      <MoonStar className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Button asChild className="mt-8 w-full" variant={i === 1 ? 'default' : 'outline'}>
                  <Link href="/contact">Enquire now</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FeatureGrid
        eyebrow="What's Included"
        title="Everything taken care of"
        description="We plan each journey around comfort, safety and spiritual focus."
        variant="muted"
        items={[
          { icon: Plane, title: 'Flights', description: 'Convenient scheduled flights with trusted airline partners.' },
          { icon: BedDouble, title: 'Accommodation', description: 'Hand-picked hotels close to the holy sites in Makkah and Madinah.' },
          { icon: Users, title: 'Group Guides', description: 'Experienced guides and scholars to support you throughout.' },
          { icon: ShieldCheck, title: 'Visa Support', description: 'Assistance with visa processing and required documentation.' },
          { icon: Headphones, title: '24/7 Assistance', description: 'On-the-ground support team available at all times.' },
          { icon: MoonStar, title: 'Guided Rituals', description: 'Clear guidance through each step of Hajj and Umrah rites.' },
        ]}
      />

      <QuoteCta
        title="Begin your journey with us"
        description="Speak with our pilgrimage travel team to plan your Hajj or Umrah."
        primaryLabel="Enquire about a package"
      />
    </>
  )
}
