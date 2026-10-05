import type { Metadata } from "next";
import Image from "next/image";

import {
  Warehouse,
  Truck,
  PackageSearch,
  Globe2,
  FileCheck,
  Boxes,
  ChevronRight,
} from "lucide-react";

import { FeatureSplit } from "@/components/sections";
import { QuoteCta } from "@/components/quote-cta";

export const metadata: Metadata = {
  title: "Logistics | UNASCO Aviation Limited",
  description:
    "End-to-end logistics from UNASCO Aviation: warehousing, distribution, freight forwarding and supply chain management across the globe.",
};

const MAROON = "#561923";
const MAROON_LIGHT = "#7A2330";
const MAROON_SOFT = "#F2C6CC";
const MAROON_DARK = "#3D1118";

export default function LogisticsPage() {
  return (
    <>
      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative overflow-hidden bg-[#561923] py-24 lg:py-32">
        {/* Background glow */}
        <div className="absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#7A2330]/60 blur-[120px]" />

        <div className="absolute -right-40 top-10 h-[500px] w-[500px] rounded-full bg-[#3D1118]/80 blur-[120px]" />

        <div className="absolute bottom-[-180px] left-1/3 h-[420px] w-[420px] rounded-full bg-[#C9828D]/10 blur-[120px]" />

        {/* Decorative circles */}
        <div className="pointer-events-none absolute right-0 top-0 h-full w-1/3 opacity-10">
          <div className="absolute right-20 top-20 h-64 w-64 rounded-full border border-white/30" />
          <div className="absolute right-[-80px] top-40 h-96 w-96 rounded-full border border-white/20" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm">
            <a
              href="/"
              className="text-white transition hover:text-[#F2C6CC]"
            >
              Home
            </a>

            <ChevronRight className="h-4 w-4 text-[#F2C6CC]" />

            <span className="font-medium text-white">
              Logistics
            </span>
          </div>

          <div className="mt-12 max-w-5xl">
            {/* Eyebrow */}
            <span className="inline-flex rounded-full border border-[#C9828D]/50 bg-white/5 px-5 py-2.5 text-sm font-semibold uppercase tracking-[0.22em] text-white backdrop-blur-sm">
              Logistics
            </span>

            {/* Main heading */}
            <h1 className="mt-7 text-5xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
              A supply chain that just works
            </h1>

            {/* Accent */}
            <div className="mt-8 h-1.5 w-28 rounded-full bg-[#C9828D]" />

            {/* Description */}
            <p className="mt-8 max-w-4xl text-lg leading-8 text-white sm:text-xl">
              Warehousing, distribution and freight forwarding integrated
              into one accountable, end-to-end logistics service.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          WAREHOUSING & DISTRIBUTION
      ====================================================== */}

      <section className="bg-white py-24 lg:py-32">
        <FeatureSplit
          eyebrow="Warehousing & Distribution"
          title="Storage and fulfilment you can scale"
          paragraphs={[
            "Our warehousing solutions give you secure storage, accurate inventory management and fast order fulfilment close to your customers.",
            "From receiving and put-away to pick, pack and last-mile distribution, we manage the flow so your goods keep moving.",
          ]}
          bullets={[
            "Secure, monitored facilities",
            "Real-time inventory visibility",
            "Pick, pack and fulfilment",
            "Regional distribution networks",
          ]}
          image="/logistics-warehouse.png"
          imageAlt="Warehouse interior with forklift and shelving racks"
          reverse
        />
      </section>

      {/* =====================================================
          LOGISTICS CAPABILITIES
      ====================================================== */}

      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-[#561923]">
              Logistics Capabilities
            </span>

            <h2 className="mt-5 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              One partner for the{" "}
              <span className="text-[#561923]">
                whole journey
              </span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              We connect air, road and warehousing into a single managed
              service with clear accountability.
            </p>
          </div>

          {/* Capability cards */}
          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Warehouse,
                title: "Warehousing",
                description:
                  "Short and long-term storage with inventory control and reporting.",
              },
              {
                icon: Truck,
                title: "Distribution",
                description:
                  "Reliable road transport and last-mile delivery across the region.",
              },
              {
                icon: Globe2,
                title: "Freight Forwarding",
                description:
                  "Multimodal forwarding by air, sea and land with a single point of contact.",
              },
              {
                icon: FileCheck,
                title: "Customs Brokerage",
                description:
                  "Clearance, documentation and compliance handled by specialists.",
              },
              {
                icon: Boxes,
                title: "Project Cargo",
                description:
                  "Planning and execution for oversized and complex consignments.",
              },
              {
                icon: PackageSearch,
                title: "Supply Chain Design",
                description:
                  "Network analysis and optimisation to reduce cost and lead times.",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group rounded-3xl border border-[#7A2330]/50 bg-[#561923] p-8 text-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:bg-[#7A2330] hover:shadow-2xl"
                >
                  {/* Icon */}
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#7A2330] text-[#F2C6CC]">
                    <Icon className="h-7 w-7 transition duration-300 group-hover:scale-110" />
                  </div>

                  {/* Title */}
                  <h3 className="mt-6 text-xl font-bold text-white">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-4 leading-7 text-white">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          LOGISTICS OPERATIONS
      ====================================================== */}

      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            {/* Image */}
            <div className="relative overflow-hidden rounded-[2rem] bg-[#561923] p-3 shadow-2xl">
              <div className="relative overflow-hidden rounded-[1.6rem]">
                <Image
                  src="/logistics-warehouse.png"
                  alt="Modern logistics warehouse with stacked pallets and shelving"
                  width={1000}
                  height={750}
                  className="h-[520px] w-full object-cover transition duration-700 hover:scale-105"
                />

                {/* Image overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#3D1118]/90 via-transparent to-transparent" />

                {/* Overlay card */}
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="rounded-2xl border border-white/10 bg-[#561923]/95 p-6 text-white backdrop-blur-md">
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#7A2330]">
                        <Warehouse className="h-6 w-6 text-[#F2C6CC]" />
                      </div>

                      <div>
                        <h3 className="text-xl font-bold text-white">
                          Professional Logistics Operations
                        </h3>

                        <p className="mt-1 text-sm text-white">
                          Secure storage and reliable movement from origin
                          to destination.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div>
              <span className="text-sm font-semibold uppercase tracking-[0.25em] text-[#561923]">
                Integrated Logistics
              </span>

              <h2 className="mt-5 text-4xl font-bold leading-tight tracking-tight text-gray-900 sm:text-5xl">
                Keep your goods moving with{" "}
                <span className="text-[#561923]">
                  confidence
                </span>
              </h2>

              <p className="mt-6 text-lg leading-8 text-gray-600">
                Our logistics services connect warehousing, transport,
                freight forwarding and supply chain activities into one
                coordinated operation. The result is better visibility,
                accountability and control across your supply chain.
              </p>

              {/* Operations cards */}
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  {
                    icon: Warehouse,
                    title: "Warehousing",
                    text: "Secure storage, inventory control and fulfilment support.",
                  },
                  {
                    icon: Truck,
                    title: "Distribution",
                    text: "Reliable movement of goods across regional and local networks.",
                  },
                  {
                    icon: Globe2,
                    title: "Forwarding",
                    text: "Air, sea and land freight coordination through one point of contact.",
                  },
                  {
                    icon: PackageSearch,
                    title: "Supply Chain",
                    text: "Better planning, visibility and optimisation across your network.",
                  },
                ].map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="rounded-2xl border border-[#7A2330]/30 bg-[#561923] p-5 text-white transition hover:bg-[#7A2330]"
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#7A2330] text-[#F2C6CC]">
                          <Icon className="h-5 w-5" />
                        </div>

                        <div>
                          <h3 className="font-bold text-white">
                            {item.title}
                          </h3>

                          <p className="mt-1 text-sm leading-6 text-white">
                            {item.text}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          SUPPLY CHAIN VISIBILITY
      ====================================================== */}

      <section className="bg-[#561923] py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-[#F2C6CC]">
              Supply Chain Management
            </span>

            <h2 className="mt-5 text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Visibility and control at{" "}
              <span className="text-[#F2C6CC]">
                every stage
              </span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-white">
              From warehouse receipt to final delivery, our approach keeps
              your goods, information and operations connected.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                number: "01",
                title: "Receive",
                description:
                  "Goods are received, checked and recorded accurately into the operation.",
              },
              {
                number: "02",
                title: "Store",
                description:
                  "Products are securely stored with inventory visibility and control.",
              },
              {
                number: "03",
                title: "Move",
                description:
                  "Transport and forwarding are coordinated around your delivery requirements.",
              },
              {
                number: "04",
                title: "Deliver",
                description:
                  "Goods reach their destination with reliable delivery coordination.",
              },
            ].map((step) => (
              <div
                key={step.number}
                className="rounded-3xl border border-white/10 bg-[#7A2330] p-8 text-white shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full border-4 border-[#561923] bg-[#C9828D] text-lg font-extrabold text-[#561923]">
                  {step.number}
                </div>

                <h3 className="mt-7 text-2xl font-bold text-white">
                  {step.title}
                </h3>

                <p className="mt-4 leading-7 text-white">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          OUR APPROACH
      ====================================================== */}

      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-[#561923]">
              Our Approach
            </span>

            <h2 className="mt-5 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Designed around{" "}
              <span className="text-[#561923]">
                your goods
              </span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              We build logistics operations around the actual needs of your
              business, your goods and your customers.
            </p>
          </div>

          <div className="relative mt-16">
            {/* Connector line */}
            <div className="absolute left-[12%] right-[12%] top-8 hidden h-px bg-[#561923]/20 lg:block" />

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  number: "01",
                  title: "Assess",
                  description:
                    "We analyse your flows, volumes and service requirements.",
                },
                {
                  number: "02",
                  title: "Design",
                  description:
                    "A tailored network of warehousing, transport and forwarding is built.",
                },
                {
                  number: "03",
                  title: "Operate",
                  description:
                    "We run day-to-day operations with real-time visibility.",
                },
                {
                  number: "04",
                  title: "Optimise",
                  description:
                    "Continuous review drives cost, speed and reliability improvements.",
                },
              ].map((step) => (
                <div
                  key={step.number}
                  className="relative rounded-3xl border border-[#7A2330]/20 bg-[#561923] p-8 text-white shadow-lg transition duration-300 hover:-translate-y-2 hover:bg-[#7A2330] hover:shadow-2xl"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-full border-4 border-[#561923] bg-[#C9828D] text-lg font-extrabold text-[#561923]">
                    {step.number}
                  </div>

                  <h3 className="mt-7 text-2xl font-bold text-white">
                    {step.title}
                  </h3>

                  <p className="mt-4 leading-7 text-white">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          LOGISTICS ADVANTAGES
      ====================================================== */}

      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-[#561923]">
              Why Choose UNASCO
            </span>

            <h2 className="mt-5 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Logistics built around{" "}
              <span className="text-[#561923]">
                reliability
              </span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              We combine logistics expertise, operational coordination and
              responsive customer support to keep your supply chain moving.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Warehouse,
                title: "Secure Storage",
                description:
                  "Professional warehousing solutions designed around security, organisation and inventory control.",
              },
              {
                icon: Truck,
                title: "Reliable Transport",
                description:
                  "Coordinated road transportation and last-mile delivery across the region.",
              },
              {
                icon: Globe2,
                title: "Global Coordination",
                description:
                  "Freight forwarding and logistics coordination across international supply chains.",
              },
              {
                icon: PackageSearch,
                title: "Better Visibility",
                description:
                  "Clear operational visibility helps you make faster and better supply chain decisions.",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-3xl bg-[#561923] p-8 text-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:bg-[#7A2330] hover:shadow-2xl"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#7A2330] text-[#F2C6CC]">
                    <Icon className="h-7 w-7" />
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-white">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ====================================================== */}

      <section className="bg-white py-20">
        <div className="mx-auto max-w-5xl rounded-[2rem] bg-[#561923] px-8 py-16 text-center shadow-2xl sm:px-12 lg:px-16">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Let&apos;s build your supply chain together
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/90">
            Speak to our logistics specialists about warehousing, distribution and forwarding.
          </p>

          <a
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-base font-semibold text-[#561923] transition hover:bg-[#F2C6CC]"
          >
            Talk to an expert
            <ChevronRight className="h-4 w-4" />
          </a>
        </div>
      </section>
    </>
  );
}