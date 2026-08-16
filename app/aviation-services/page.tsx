import type { Metadata } from 'next'
import { PlaneTakeoff, ShieldCheck, Gauge, Headphones, Compass, Clock } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { FeatureSplit, FeatureGrid, ProcessSteps } from '@/components/sections'
import { QuoteCta } from '@/components/quote-cta'

export const metadata: Metadata = {
  title: 'Aviation Services',
  description:
    'UNASCO Aviation delivers aircraft charter, ground handling, flight support and technical services with uncompromising safety standards.',
}

export default function AviationServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Aviation Services"
        title="Full-spectrum aviation support"
        description="From aircraft charter and ground handling to flight operations support, we keep your fleet moving safely and on schedule."
        image="/aviation-ground-handling.png"
        imageAlt="Ground handling crew servicing a parked aircraft on the tarmac"
        breadcrumb="Aviation Services"
      />

      <FeatureSplit
        eyebrow="Charter & Leasing"
        title="Aircraft charter and ACMI solutions"
        paragraphs={[
          'Whether you need additional lift for a peak season or a dedicated aircraft for a long-term contract, our charter and ACMI (Aircraft, Crew, Maintenance and Insurance) solutions scale to your operation.',
          'We coordinate the aircraft, qualified crew, maintenance and insurance so you can focus on serving your customers.',
        ]}
        bullets={[
          'Passenger and cargo charter',
          'ACMI and wet-lease agreements',
          'Ad-hoc and long-term contracts',
          'Global route flexibility',
        ]}
        image="/hero-cargo-aircraft.png"
        imageAlt="Cargo freighter aircraft on the tarmac at golden hour"
      />

      <FeatureGrid
        eyebrow="Core Capabilities"
        title="Aviation services built around safety"
        description="Every service line is delivered under strict safety management systems and international civil aviation standards."
        variant="muted"
        items={[
          {
            icon: PlaneTakeoff,
            title: 'Aircraft Charter',
            description: 'On-demand passenger and cargo charter with flexible scheduling and global reach.',
          },
          {
            icon: Compass,
            title: 'Flight Operations',
            description: 'Flight planning, dispatch, permits and slot coordination handled end to end.',
          },
          {
            icon: ShieldCheck,
            title: 'Ground Handling',
            description: 'Ramp services, passenger handling and load control at partner airports.',
          },
          {
            icon: Gauge,
            title: 'Technical Support',
            description: 'Line maintenance coordination and engineering support to maximise availability.',
          },
          {
            icon: Clock,
            title: 'On-Time Performance',
            description: 'Proactive monitoring and rapid recovery planning to protect your schedule.',
          },
          {
            icon: Headphones,
            title: 'Operations Desk',
            description: 'A 24/7 operations desk that stays with your flight from planning to arrival.',
          },
        ]}
      />

      <ProcessSteps
        eyebrow="How We Work"
        title="A clear path from request to wheels-up"
        steps={[
          { title: 'Consultation', description: 'We map your requirements, routes and timelines with a dedicated account lead.' },
          { title: 'Planning', description: 'Aircraft, crew, permits and handling are confirmed and documented.' },
          { title: 'Execution', description: 'Our operations desk manages the flight in real time from start to finish.' },
          { title: 'Debrief', description: 'We review performance and refine future operations together.' },
        ]}
      />

      <QuoteCta
        title="Need aviation support you can rely on?"
        description="Talk to our aviation team about charter, handling and flight operations tailored to your needs."
      />
    </>
  )
}
