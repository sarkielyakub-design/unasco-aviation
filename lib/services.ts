import { Boxes, Globe2, PlaneTakeoff, Truck, Warehouse, MoonStar } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export type Service = {
  icon: LucideIcon
  title: string
  description: string
  href: string
}

export const services: Service[] = [
  {
    icon: PlaneTakeoff,
    title: 'Aviation Services',
    description:
      'Ground handling, aircraft charter, ramp support and technical services delivered to international safety standards.',
    href: '/aviation-services',
  },
  {
    icon: Boxes,
    title: 'Air Cargo Freight',
    description:
      'Fast, secure movement of general, perishable and special cargo across 120+ global destinations.',
    href: '/cargo-services',
  },
  {
    icon: Truck,
    title: 'Logistics & Distribution',
    description:
      'Integrated road, sea and air logistics with real-time visibility from origin to final mile.',
    href: '/logistics',
  },
  {
    icon: Warehouse,
    title: 'Warehousing',
    description:
      'Bonded, temperature-controlled and general storage with modern inventory management.',
    href: '/logistics',
  },
  {
    icon: Globe2,
    title: 'Freight Forwarding',
    description:
      'Global customs clearance, documentation and multimodal forwarding handled end to end.',
    href: '/logistics',
  },
  {
    icon: MoonStar,
    title: 'Hajj & Umrah',
    description:
      'Dedicated pilgrimage travel with flights, visa support, accommodation and guided logistics.',
    href: '/hajj-umrah',
  },
]
