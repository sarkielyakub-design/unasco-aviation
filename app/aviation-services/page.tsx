import type { Metadata } from "next";
import Image from "next/image";

import {
  PlaneTakeoff,
  ShieldCheck,
  Gauge,
  Headphones,
  Compass,
  Clock,
  BriefcaseBusiness,
  PackageCheck,
  Globe2,
  Users,
  Building2,
} from "lucide-react";

import { PageHero } from "@/components/page-hero";

import {
  FeatureSplit,
  FeatureGrid,
  ProcessSteps,
} from "@/components/sections";

import { QuoteCta } from "@/components/quote-cta";

export const metadata: Metadata = {
  title: "Aviation Services | UNASCO Aviation Limited",
  description:
    "UNASCO Aviation Limited provides professional aircraft charter, ACMI, flight operations, ground handling, cargo, technical and aviation support services.",
};

export default function AviationServicesPage() {
  return (
    <>
      {/* =====================================================
          HERO
      ====================================================== */}

      <PageHero
        title="Full-spectrum aviation support"
        subtitle="From aircraft charter and ground handling to flight operations support, we keep your fleet moving safely, efficiently and on schedule."
        breadcrumb="Aviation Services"
      />

      {/* =====================================================
          CHARTER & LEASING
      ====================================================== */}

      <FeatureSplit
        eyebrow="Charter & Leasing"
        title="Aircraft charter and ACMI solutions"
        paragraphs={[
          "Whether you need additional lift for a peak season or a dedicated aircraft for a long-term contract, our charter and ACMI (Aircraft, Crew, Maintenance and Insurance) solutions scale to your operation.",
          "We coordinate the aircraft, qualified crew, maintenance and insurance so you can focus on serving your customers.",
        ]}
        bullets={[
          "Passenger and cargo charter",
          "ACMI and wet-lease agreements",
          "Ad-hoc and long-term contracts",
          "Global route flexibility",
        ]}
        image="/hero-cargo-aircraft.png"
        imageAlt="Cargo freighter aircraft on the tarmac at golden hour"
      />

      {/* =====================================================
          CORE CAPABILITIES
      ====================================================== */}

      <FeatureGrid
        eyebrow="Core Capabilities"
        title="Aviation services built around safety"
        description="Every service line is delivered with a strong focus on safety, operational reliability, efficiency and professional aviation standards."
        variant="muted"
        items={[
          {
            icon: PlaneTakeoff,
            title: "Aircraft Charter",
            description:
              "On-demand passenger and cargo charter with flexible scheduling and global reach.",
          },
          {
            icon: Compass,
            title: "Flight Operations",
            description:
              "Flight planning, dispatch, permits and slot coordination handled end to end.",
          },
          {
            icon: ShieldCheck,
            title: "Ground Handling",
            description:
              "Ramp services, passenger handling and load control at partner airports.",
          },
          {
            icon: Gauge,
            title: "Technical Support",
            description:
              "Line maintenance coordination and engineering support to maximise aircraft availability.",
          },
          {
            icon: Clock,
            title: "On-Time Performance",
            description:
              "Proactive monitoring and rapid recovery planning to protect your schedule.",
          },
          {
            icon: Headphones,
            title: "Operations Desk",
            description:
              "A 24/7 operations desk that stays with your flight from planning to arrival.",
          },
        ]}
      />

      {/* =====================================================
          ADDITIONAL AVIATION SERVICES
      ====================================================== */}

      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-[#561923]">
              Additional Support
            </span>

            <h2 className="mt-5 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              More than just{" "}
              <span className="text-[#561923]">flight operations</span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              UNASCO Aviation combines operational coordination, commercial
              support and aviation expertise to provide dependable solutions
              for airlines, aircraft operators, cargo clients and aviation
              partners.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {/* Airline Management */}
            <div className="group rounded-3xl border border-[#7A2330]/50 bg-[#561923] p-8 text-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:bg-[#7A2330] hover:shadow-2xl">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#7A2330] text-[#F2C6CC]">
                <BriefcaseBusiness className="h-7 w-7 transition group-hover:scale-110" />
              </div>

              <h3 className="mt-6 text-xl font-bold">Airline Management</h3>

              <p className="mt-4 text-sm leading-7 text-white/70">
                Professional management and operational support for aviation
                activities, commercial operations and sustainable business
                development.
              </p>
            </div>

            {/* Air Cargo */}
            <div className="group rounded-3xl border border-[#7A2330]/50 bg-[#561923] p-8 text-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:bg-[#7A2330] hover:shadow-2xl">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#7A2330] text-[#F2C6CC]">
                <PackageCheck className="h-7 w-7 transition group-hover:scale-110" />
              </div>

              <h3 className="mt-6 text-xl font-bold">Air Cargo</h3>

              <p className="mt-4 text-sm leading-7 text-white/70">
                Cargo transportation and operational coordination designed to
                support reliable movement and delivery of goods.
              </p>
            </div>

            {/* Global Coordination */}
            <div className="group rounded-3xl border border-[#7A2330]/50 bg-[#561923] p-8 text-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:bg-[#7A2330] hover:shadow-2xl">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#7A2330] text-[#F2C6CC]">
                <Globe2 className="h-7 w-7 transition group-hover:scale-110" />
              </div>

              <h3 className="mt-6 text-xl font-bold">Global Coordination</h3>

              <p className="mt-4 text-sm leading-7 text-white/70">
                Aviation support coordinated across routes, airports, partners
                and operational requirements.
              </p>
            </div>

            {/* Professional Teams */}
            <div className="group rounded-3xl border border-[#7A2330]/50 bg-[#561923] p-8 text-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:bg-[#7A2330] hover:shadow-2xl">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#7A2330] text-[#F2C6CC]">
                <Users className="h-7 w-7 transition group-hover:scale-110" />
              </div>

              <h3 className="mt-6 text-xl font-bold">Professional Teams</h3>

              <p className="mt-4 text-sm leading-7 text-white/70">
                Experienced aviation professionals supporting your operation
                with discipline, communication and operational focus.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          HOW WE WORK
      ====================================================== */}

      <ProcessSteps
        eyebrow="How We Work"
        title="A clear path from request to wheels-up"
        steps={[
          {
            title: "Consultation",
            description:
              "We map your requirements, routes and timelines with a dedicated account lead.",
          },
          {
            title: "Planning",
            description:
              "Aircraft, crew, permits and handling are confirmed and documented.",
          },
          {
            title: "Execution",
            description:
              "Our operations desk manages the flight in real time from start to finish.",
          },
          {
            title: "Debrief",
            description:
              "We review performance and refine future operations together.",
          },
        ]}
      />

      {/* =====================================================
          SAFETY & RELIABILITY
      ====================================================== */}

      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div>
              <span className="text-sm font-semibold uppercase tracking-[0.25em] text-[#561923]">
                Safety & Reliability
              </span>

              <h2 className="mt-5 text-4xl font-bold leading-tight tracking-tight text-gray-900 sm:text-5xl">
                Safety comes first in{" "}
                <span className="text-[#561923]">every operation</span>
              </h2>

              <p className="mt-6 text-lg leading-8 text-gray-600">
                Aviation operations require discipline, coordination and
                attention to detail. Our approach places safety, reliability
                and operational efficiency at the centre of every service we
                provide.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  "Safety-focused operational procedures",
                  "Professional flight coordination",
                  "Experienced aviation personnel",
                  "Proactive operational monitoring",
                  "Reliable communication with aviation partners",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-4 rounded-2xl border border-[#7A2330]/40 bg-[#561923] p-5 text-white transition hover:bg-[#7A2330]"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#7A2330]">
                      <ShieldCheck className="h-5 w-5 text-[#F2C6CC]" />
                    </div>

                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[2rem] bg-[#561923] p-3 shadow-2xl">
              <div className="relative overflow-hidden rounded-[1.6rem]">
                <Image
                  src="/aviation-ground-handling.png"
                  alt="UNASCO Aviation ground handling operations"
                  width={1000}
                  height={700}
                  className="h-[520px] w-full object-cover transition duration-700 hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#3D1118]/80 via-transparent to-transparent" />

                <div className="absolute bottom-8 left-8 right-8">
                  <div className="rounded-2xl border border-white/10 bg-[#561923]/90 p-6 text-white backdrop-blur-md">
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#7A2330]">
                        <PlaneTakeoff className="h-6 w-6 text-[#F2C6CC]" />
                      </div>

                      <div>
                        <h3 className="text-xl font-bold">
                          Operational Excellence
                        </h3>

                        <p className="mt-1 text-sm text-white/65">
                          Professional aviation support from planning to
                          completion.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          SERVICE AREAS
      ====================================================== */}

      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-[#561923]">
              Service Areas
            </span>

            <h2 className="mt-5 text-4xl font-bold text-gray-900 sm:text-5xl">
              Supporting aviation{" "}
              <span className="text-[#561923]">
                wherever you operate
              </span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              From passenger movements to cargo operations, our aviation
              services are designed to support different operational
              requirements with flexibility and professionalism.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Passenger Aviation",
                description:
                  "Charter and aviation support for passenger movements, corporate travel and special operations.",
                icon: Users,
              },
              {
                title: "Cargo Aviation",
                description:
                  "Cargo charter, transportation coordination and operational support for cargo movements.",
                icon: PackageCheck,
              },
              {
                title: "Airport Operations",
                description:
                  "Ground handling coordination, airport services and operational support.",
                icon: Building2,
              },
              {
                title: "Flight Coordination",
                description:
                  "Planning, permits, slots, dispatch coordination and operational monitoring.",
                icon: Compass,
              },
              {
                title: "Airline Support",
                description:
                  "Commercial and operational support for airlines and aviation partners.",
                icon: BriefcaseBusiness,
              },
              {
                title: "Special Operations",
                description:
                  "Flexible aviation solutions designed around unique operational requirements.",
                icon: PlaneTakeoff,
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group rounded-3xl border border-[#7A2330]/50 bg-[#561923] p-8 text-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:bg-[#7A2330] hover:shadow-2xl"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#7A2330] text-[#F2C6CC]">
                    <Icon className="h-7 w-7 transition group-hover:scale-110" />
                  </div>

                  <h3 className="mt-6 text-xl font-bold">{item.title}</h3>

                  <p className="mt-4 leading-7 text-white/70">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ====================================================== */}

      <QuoteCta />
    </>
  );
}