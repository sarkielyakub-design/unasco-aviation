import type { Metadata } from 'next'
import { Boxes, ThermometerSnowflake, ShieldCheck, PackageSearch, Timer, Globe2 } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { FeatureSplit, FeatureGrid, ProcessSteps } from '@/components/sections'
import { CargoTracking } from '@/components/cargo-tracking'
import { QuoteCta } from '@/components/quote-cta'

export const metadata: Metadata = {
  title: 'Cargo Services',
  description:
    'Reliable air cargo services from UNASCO Aviation: general cargo, perishables, dangerous goods and time-critical shipments with real-time tracking.',
}

export default function CargoServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Cargo Services"
        title="Air cargo that arrives as promised"
        description="General freight, perishables, pharma and time-critical shipments moved with precision handling and full visibility."
        image="/air-cargo-loading.png"
        imageAlt="Air cargo pallets being loaded into a freighter aircraft"
        breadcrumb="Cargo Services"
      />

      <FeatureSplit
        eyebrow="Air Freight"
        title="Capacity when and where you need it"
        paragraphs={[
          'We combine scheduled belly-hold capacity with dedicated freighter solutions to match your volumes, lanes and deadlines.',
          'Our team manages documentation, customs coordination and special handling so your cargo clears smoothly at every stop.',
        ]}
        bullets={[
          'General and specialised cargo',
          'Temperature-controlled handling',
          'Dangerous goods certified',
          'Door-to-door coordination',
        ]}
        image="/air-cargo-loading.png"
        imageAlt="Cargo containers loaded through the side door of a freighter"
      />

      <FeatureGrid
        eyebrow="Cargo Capabilities"
        title="Specialised handling for every shipment"
        description="From routine freight to sensitive and high-value goods, we apply the right process to protect your cargo."
        variant="muted"
        items={[
          { icon: Boxes, title: 'General Cargo', description: 'Palletised and loose freight moved across our global network.' },
          { icon: ThermometerSnowflake, title: 'Perishables & Pharma', description: 'Cool-chain handling for food, flowers and temperature-sensitive medicine.' },
          { icon: ShieldCheck, title: 'Dangerous Goods', description: 'IATA-compliant acceptance, documentation and handling of hazardous cargo.' },
          { icon: Timer, title: 'Time-Critical', description: 'Next-flight-out and express solutions for urgent shipments.' },
          { icon: Globe2, title: 'Cross-Border', description: 'Customs coordination and paperwork managed end to end.' },
          { icon: PackageSearch, title: 'High-Value & AOG', description: 'Secure handling for valuables and aircraft-on-ground spare parts.' },
        ]}
      />

      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Track & Trace
            </span>
            <h2 className="mt-4 text-balance font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
              Know where your shipment is
            </h2>
            <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
              Enter an air waybill number for a live status update. Try a sample number to see it in action.
            </p>
          </div>
          <CargoTracking />
        </div>
      </section>

      <ProcessSteps
        eyebrow="Shipping Process"
        title="Simple, transparent, on time"
        steps={[
          { title: 'Book', description: 'Request a quote and reserve capacity on the routes you need.' },
          { title: 'Collect', description: 'We pick up, screen and prepare your cargo for uplift.' },
          { title: 'Fly', description: 'Your shipment is loaded, tracked and flown to destination.' },
          { title: 'Deliver', description: 'Customs clearance and final delivery, confirmed with proof.' },
        ]}
      />

      <QuoteCta
        title="Ready to move your cargo?"
        description="Get a fast, competitive quote for your next air freight shipment."
      />
    </>
  )
}
