import type { Metadata } from "next";
import Image from "next/image";

import {
  Boxes,
  ThermometerSnowflake,
  ShieldCheck,
  PackageSearch,
  Timer,
  Globe2,
  PlaneTakeoff,
  FileCheck2,
  Truck,
  Warehouse,
  Scale,
  Headphones,
} from "lucide-react";

import { PageHero } from "@/components/page-hero";

import {
  FeatureSplit,
  FeatureGrid,
  ProcessSteps,
} from "@/components/sections";

import { CargoTracking } from "@/components/cargo-tracking";

import { QuoteCta } from "@/components/quote-cta";

export const metadata: Metadata = {
  title: "Cargo Services | UNASCO Aviation Limited",
  description:
    "Reliable air cargo services from UNASCO Aviation: general cargo, perishables, dangerous goods and time-critical shipments with real-time tracking.",
};

const MAROON = "#561923";
const MAROON_LIGHT = "#7A2330";
const MAROON_SOFT = "#F2C6CC";
const MAROON_DARK = "#3D1118";

export default function CargoServicesPage() {
  return (
    <>
      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative overflow-hidden bg-[#561923] text-white">
        <PageHero
          title="Air cargo that arrives as promised"
          subtitle="General freight, perishables, pharma and time-critical shipments moved with precision handling and full visibility."
          breadcrumb="Cargo Services"
        />
      </section>

      {/* =====================================================
          AIR FREIGHT
      ====================================================== */}

      <section className="bg-white py-24 lg:py-32">
        <FeatureSplit
          eyebrow="Air Freight"
          title="Capacity when and where you need it"
          paragraphs={[
            "We combine scheduled belly-hold capacity with dedicated freighter solutions to match your volumes, lanes and deadlines.",
            "Our team manages documentation, customs coordination and special handling so your cargo clears smoothly at every stop.",
          ]}
          bullets={[
            "General and specialised cargo",
            "Temperature-controlled handling",
            "Dangerous goods certified",
            "Door-to-door coordination",
          ]}
          image="/air-cargo-loading.png"
          imageAlt="Cargo containers loaded through the side door of a freighter"
        />
      </section>

      {/* =====================================================
          CARGO CAPABILITIES
      ====================================================== */}

      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-[#561923]">
              Cargo Capabilities
            </span>

            <h2 className="mt-5 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Specialised handling for{" "}
              <span className="text-[#561923]">
                every shipment
              </span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              From routine freight to sensitive and high-value goods, we apply
              the right process to protect your cargo.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Boxes,
                title: "General Cargo",
                description:
                  "Palletised and loose freight moved across our global network.",
              },
              {
                icon: ThermometerSnowflake,
                title: "Perishables & Pharma",
                description:
                  "Cool-chain handling for food, flowers and temperature-sensitive medicine.",
              },
              {
                icon: ShieldCheck,
                title: "Dangerous Goods",
                description:
                  "IATA-compliant acceptance, documentation and handling of hazardous cargo.",
              },
              {
                icon: Timer,
                title: "Time-Critical",
                description:
                  "Next-flight-out and express solutions for urgent shipments.",
              },
              {
                icon: Globe2,
                title: "Cross-Border",
                description:
                  "Customs coordination and paperwork managed end to end.",
              },
              {
                icon: PackageSearch,
                title: "High-Value & AOG",
                description:
                  "Secure handling for valuables and aircraft-on-ground spare parts.",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group rounded-3xl border border-[#7A2330]/50 bg-[#561923] p-8 text-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:bg-[#7A2330] hover:shadow-2xl"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#7A2330] text-[#F2C6CC]">
                    <Icon className="h-7 w-7 transition duration-300 group-hover:scale-110" />
                  </div>

                  <h3 className="mt-6 text-xl font-bold">
                    {item.title}
                  </h3>

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
          CARGO OPERATIONS
      ====================================================== */}

      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div className="relative overflow-hidden rounded-[2rem] bg-[#561923] p-3 shadow-2xl">
              <div className="relative overflow-hidden rounded-[1.6rem]">
                <Image
                  src="/air-cargo-loading.png"
                  alt="UNASCO Aviation cargo handling operations"
                  width={1000}
                  height={750}
                  className="h-[520px] w-full object-cover transition duration-700 hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#3D1118]/90 via-transparent to-transparent" />

                <div className="absolute bottom-8 left-8 right-8">
                  <div className="rounded-2xl border border-white/10 bg-[#561923]/90 p-6 text-white backdrop-blur-md">
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#7A2330]">
                        <Boxes className="h-6 w-6 text-[#F2C6CC]" />
                      </div>

                      <div>
                        <h3 className="text-xl font-bold">
                          Professional Cargo Handling
                        </h3>

                        <p className="mt-1 text-sm text-white/65">
                          Secure cargo handling from acceptance through
                          delivery.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <span className="text-sm font-semibold uppercase tracking-[0.25em] text-[#561923]">
                Cargo Operations
              </span>

              <h2 className="mt-5 text-4xl font-bold leading-tight tracking-tight text-gray-900 sm:text-5xl">
                Every shipment handled with{" "}
                <span className="text-[#561923]">
                  precision
                </span>
              </h2>

              <p className="mt-6 text-lg leading-8 text-gray-600">
                Our cargo operations are designed around security, speed,
                visibility and careful handling. From acceptance and
                documentation to loading and final delivery, every stage is
                coordinated to keep your shipment moving.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  {
                    icon: FileCheck2,
                    title: "Documentation",
                    text: "Accurate cargo documentation and operational coordination.",
                  },
                  {
                    icon: Warehouse,
                    title: "Cargo Handling",
                    text: "Organised handling and preparation before aircraft uplift.",
                  },
                  {
                    icon: Scale,
                    title: "Load Management",
                    text: "Careful cargo preparation and weight coordination.",
                  },
                  {
                    icon: Truck,
                    title: "Final Delivery",
                    text: "Door-to-door coordination and delivery support.",
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
                          <h3 className="font-bold">{item.title}</h3>

                          <p className="mt-1 text-sm leading-6 text-white/70">
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
          TRACK & TRACE
      ====================================================== */}

      <section className="bg-[#561923] py-24 lg:py-32">
        <div className="mx-auto w-full max-w-5xl px-6">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-[#F2C6CC]">
              Track & Trace
            </span>

            <h2 className="mt-5 text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Know where your shipment is
            </h2>

            <p className="mt-6 text-lg leading-8 text-white/70">
              Enter an air waybill number for a live status update. Try a
              sample number to see it in action.
            </p>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white p-4 shadow-2xl sm:p-8">
            <CargoTracking />
          </div>
        </div>
      </section>

      {/* =====================================================
          WHY UNASCO CARGO
      ====================================================== */}

      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-[#561923]">
              Why Choose UNASCO
            </span>

            <h2 className="mt-5 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Cargo solutions built around{" "}
              <span className="text-[#561923]">
                your business
              </span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              We combine aviation expertise, operational coordination and
              responsive customer support to make cargo movement simpler and
              more dependable.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: ShieldCheck,
                title: "Secure Handling",
                description:
                  "Cargo is handled with security and operational discipline throughout the journey.",
              },
              {
                icon: Timer,
                title: "Time Sensitive",
                description:
                  "Solutions designed around your deadlines, schedules and delivery requirements.",
              },
              {
                icon: Globe2,
                title: "Global Reach",
                description:
                  "Cargo coordination across routes, airports and international destinations.",
              },
              {
                icon: Headphones,
                title: "Dedicated Support",
                description:
                  "Professional assistance from booking through shipment completion.",
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

                  <h3 className="mt-6 text-xl font-bold">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-white/70">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          SHIPPING PROCESS
      ====================================================== */}

      <section className="bg-[#561923] py-24 lg:py-32 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <ProcessSteps
            eyebrow="Shipping Process"
            title="Simple, transparent, on time"
            steps={[
              {
                title: "Book",
                description:
                  "Request a quote and reserve capacity on the routes you need.",
              },
              {
                title: "Collect",
                description:
                  "We pick up, screen and prepare your cargo for uplift.",
              },
              {
                title: "Fly",
                description:
                  "Your shipment is loaded, tracked and flown to destination.",
              },
              {
                title: "Deliver",
                description:
                  "Customs clearance and final delivery, confirmed with proof.",
              },
            ]}
          />
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ====================================================== */}

      <section className="bg-white py-20">
        <QuoteCta />
      </section>
    </>
  );
}