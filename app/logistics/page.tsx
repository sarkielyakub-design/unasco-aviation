import type { Metadata } from 'next'
import { Warehouse, Truck, PackageSearch, Globe2, FileCheck, Boxes } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { FeatureSplit, FeatureGrid, ProcessSteps } from '@/components/sections'
import { QuoteCta } from '@/components/quote-cta'

export const metadata: Metadata = {
  title: 'Logistics',
  description:
    'End-to-end logistics from UNASCO Aviation: warehousing, distribution, freight forwarding and supply chain management across the globe.',
}

export default function LogisticsPage() {
  return (
    <>
      <PageHero
        eyebrow="Logistics"
        title="A supply chain that just works"
        description="Warehousing, distribution and freight forwarding integrated into one accountable, end-to-end logistics service."
        image="/logistics-warehouse.png"
        imageAlt="Modern logistics warehouse with stacked pallets and shelving"
        breadcrumb="Logistics"
      />

      <FeatureSplit
        eyebrow="Warehousing & Distribution"
        title="Storage and fulfilment you can scale"
        paragraphs={[
          'Our warehousing solutions give you secure storage, accurate inventory management and fast order fulfilment close to your customers.',
          'From receiving and put-away to pick, pack and last-mile distribution, we manage the flow so your goods keep moving.',
        ]}
        bullets={[
          'Secure, monitored facilities',
          'Real-time inventory visibility',
          'Pick, pack and fulfilment',
          'Regional distribution networks',
        ]}
        image="/logistics-warehouse.png"
        imageAlt="Warehouse interior with forklift and shelving racks"
        reverse
      />

      <FeatureGrid
        eyebrow="Logistics Capabilities"
        title="One partner for the whole journey"
        description="We connect air, road and warehousing into a single managed service with clear accountability."
        variant="muted"
        items={[
          { icon: Warehouse, title: 'Warehousing', description: 'Short and long-term storage with inventory control and reporting.' },
          { icon: Truck, title: 'Distribution', description: 'Reliable road transport and last-mile delivery across the region.' },
          { icon: Globe2, title: 'Freight Forwarding', description: 'Multimodal forwarding by air, sea and land with a single point of contact.' },
          { icon: FileCheck, title: 'Customs Brokerage', description: 'Clearance, documentation and compliance handled by specialists.' },
          { icon: Boxes, title: 'Project Cargo', description: 'Planning and execution for oversized and complex consignments.' },
          { icon: PackageSearch, title: 'Supply Chain Design', description: 'Network analysis and optimisation to reduce cost and lead times.' },
        ]}
      />

      <ProcessSteps
        eyebrow="Our Approach"
        title="Designed around your goods"
        steps={[
          { title: 'Assess', description: 'We analyse your flows, volumes and service requirements.' },
          { title: 'Design', description: 'A tailored network of warehousing, transport and forwarding is built.' },
          { title: 'Operate', description: 'We run day-to-day operations with real-time visibility.' },
          { title: 'Optimise', description: 'Continuous review drives cost, speed and reliability improvements.' },
        ]}
      />

      <QuoteCta
        title="Let's build your supply chain together"
        description="Speak to our logistics specialists about warehousing, distribution and forwarding."
      />
    </>
  )
}
