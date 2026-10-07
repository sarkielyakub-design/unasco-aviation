import type { Metadata } from "next";
import Image from "next/image";

import {
  PlaneTakeoff,
  Headphones,
  Compass,
  BriefcaseBusiness,
  PackageCheck,
  Globe2,
  Users,
  Building2,
  ChevronRight,
  TrendingUp,
  Megaphone,
  Handshake,
  BarChart3,
  Target,
  Radio,
  MapPin,
  CheckCircle2,
  ArrowRight,
  Network,
  BadgeCheck,
} from "lucide-react";

import { QuoteCta } from "@/components/quote-cta";

export const metadata: Metadata = {
  title: "General Sales Agent | UNASCO Aviation Limited",
  description:
    "UNASCO Aviation Limited provides professional General Sales Agent services for airlines, supporting passenger and cargo sales, market development, airline representation, commercial coordination and customer relationships.",
};

const gsaServices = [
  {
    icon: PlaneTakeoff,
    title: "Airline Representation",
    description:
      "Professional representation of airline brands in assigned markets, helping airlines establish a strong commercial presence and build trusted local relationships.",
  },
  {
    icon: TrendingUp,
    title: "Sales Development",
    description:
      "Dedicated sales activities designed to increase passenger and cargo revenue, expand market reach and develop sustainable commercial opportunities.",
  },
  {
    icon: Globe2,
    title: "Market Development",
    description:
      "Local market intelligence, route development and commercial strategies designed around the opportunities and requirements of each market.",
  },
  {
    icon: Users,
    title: "Passenger Sales",
    description:
      "Support for passenger sales channels, travel agencies, corporate accounts and other commercial partners to strengthen airline distribution.",
  },
  {
    icon: PackageCheck,
    title: "Cargo Sales",
    description:
      "Commercial support for cargo sales, freight forwarders, cargo agents and logistics partners to help grow airline cargo business.",
  },
  {
    icon: Headphones,
    title: "Customer & Agency Support",
    description:
      "Professional communication and support for travel partners, corporate customers, agencies and other airline stakeholders.",
  },
];

const commercialServices = [
  {
    icon: Megaphone,
    title: "Sales & Marketing",
    description:
      "Targeted airline sales and marketing campaigns designed to increase awareness, generate demand and strengthen the airline's market position.",
  },
  {
    icon: Handshake,
    title: "Agency Relationships",
    description:
      "Development and management of relationships with travel agencies, corporate accounts, tour operators and strategic commercial partners.",
  },
  {
    icon: BarChart3,
    title: "Performance Reporting",
    description:
      "Structured sales reporting, market feedback and commercial performance insights to support informed airline decision-making.",
  },
  {
    icon: Target,
    title: "Revenue Growth",
    description:
      "Commercial initiatives focused on identifying new opportunities, improving sales performance and supporting sustainable revenue growth.",
  },
];

const marketAreas = [
  {
    icon: Building2,
    title: "Airline Market Entry",
    description:
      "Helping airlines establish and develop their commercial presence when entering or expanding within a new market.",
  },
  {
    icon: Network,
    title: "Distribution Network",
    description:
      "Connecting airline services with travel agencies, corporate clients, cargo partners and other relevant distribution channels.",
  },
  {
    icon: Radio,
    title: "Brand Visibility",
    description:
      "Supporting airline visibility through professional communication, market engagement and targeted commercial activities.",
  },
  {
    icon: MapPin,
    title: "Local Market Intelligence",
    description:
      "Providing practical market information and feedback to help airline partners understand commercial opportunities.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Corporate Accounts",
    description:
      "Developing relationships with businesses and organizations that generate valuable passenger and travel demand.",
  },
  {
    icon: PackageCheck,
    title: "Cargo Partnerships",
    description:
      "Building relationships with cargo agents, freight forwarders and logistics companies to develop cargo opportunities.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Market Assessment",
    description:
      "We understand the airline, route, target market, commercial objectives and competitive environment.",
  },
  {
    number: "02",
    title: "Commercial Strategy",
    description:
      "We develop a practical sales and marketing approach aligned with the airline's objectives and market opportunity.",
  },
  {
    number: "03",
    title: "Market Activation",
    description:
      "Our team engages agencies, corporate clients, cargo partners and other commercial stakeholders.",
  },
  {
    number: "04",
    title: "Sales Execution",
    description:
      "We actively support sales generation, customer relationships, distribution and commercial activities.",
  },
  {
    number: "05",
    title: "Reporting & Growth",
    description:
      "Performance is reviewed through structured reporting, market feedback and continuous commercial improvement.",
  },
];

const benefits = [
  "Professional airline representation",
  "Dedicated sales and commercial support",
  "Strong travel agency relationships",
  "Passenger and cargo market development",
  "Local market intelligence",
  "Corporate account development",
  "Sales and marketing coordination",
  "Structured performance reporting",
];

export default function GeneralSalesAgentPage() {
  return (
    <>
      {/* =========================================================
          HERO
      ========================================================== */}

      <section className="relative overflow-hidden bg-[#561923] py-24 lg:py-32">
        {/* Animated background glows */}

        <div className="absolute -left-40 -top-40 h-[520px] w-[520px] animate-pulse rounded-full bg-[#7A2330]/60 blur-[120px]" />

        <div className="absolute -right-40 top-20 h-[500px] w-[500px] animate-pulse rounded-full bg-[#3D1118]/80 blur-[120px] [animation-delay:1.5s]" />

        <div className="absolute bottom-[-220px] left-1/3 h-[450px] w-[450px] animate-pulse rounded-full bg-[#C9828D]/10 blur-[120px] [animation-delay:3s]" />

        {/* Decorative animated rings */}

        <div className="pointer-events-none absolute right-10 top-20 hidden h-72 w-72 animate-[spin_25s_linear_infinite] rounded-full border border-white/10 lg:block" />

        <div className="pointer-events-none absolute right-28 top-36 hidden h-40 w-40 animate-[spin_18s_linear_infinite_reverse] rounded-full border border-[#C9828D]/20 lg:block" />

        <div className="pointer-events-none absolute bottom-16 left-16 hidden h-5 w-5 animate-bounce rounded-full bg-[#C9828D] lg:block" />

        <div className="pointer-events-none absolute bottom-28 left-32 hidden h-3 w-3 animate-ping rounded-full bg-white/60 lg:block" />

        <div className="relative mx-auto max-w-7xl px-6">
          {/* Breadcrumb */}

          <div className="flex items-center gap-2 text-sm text-white">
            <a
              href="/"
              className="text-white transition hover:text-[#F2C6CC]"
            >
              Home
            </a>

            <ChevronRight className="h-4 w-4 text-[#F2C6CC]" />

            <span className="font-medium text-white">
              General Sales Agent
            </span>
          </div>

          {/* Hero content */}

          <div className="relative mt-12 grid items-center gap-16 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="max-w-4xl">
              <span className="inline-flex animate-pulse rounded-full border border-[#C9828D]/50 bg-white/5 px-5 py-2.5 text-sm font-semibold uppercase tracking-[0.22em] text-white backdrop-blur-sm">
                General Sales Agent
              </span>

              <h1 className="mt-7 text-5xl font-extrabold leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-7xl">
                Representing airlines.
                <br />
                <span className="text-[#F2C6CC]">
                  Growing markets.
                </span>
              </h1>

              <div className="mt-8 h-1.5 w-28 animate-pulse rounded-full bg-[#C9828D]" />

              <p className="mt-8 max-w-3xl text-lg leading-8 text-white sm:text-xl">
                UNASCO Aviation provides professional General Sales Agent
                services that connect airlines with passengers, travel
                agencies, corporate clients, cargo partners and commercial
                opportunities.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="/contact"
                  className="group inline-flex items-center gap-2 rounded-xl bg-white px-7 py-4 font-semibold text-[#561923] shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
                >
                  Partner With UNASCO
                  <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </a>

                <a
                  href="#gsa-services"
                  className="group inline-flex items-center gap-2 rounded-xl border border-white/40 px-7 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-[#561923]"
                >
                  Explore GSA Services
                  <ChevronRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            </div>

            {/* Hero image */}

            <div className="relative mx-auto w-full max-w-md">
              <div className="absolute -inset-5 animate-pulse rounded-[2.5rem] bg-[#C9828D]/10 blur-2xl" />

              <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#3D1118] p-3 shadow-2xl">
                <div className="relative overflow-hidden rounded-[2rem]">
                  <Image
                    src="/hero-cargo-aircraft.png"
                    alt="UNASCO Aviation airline representation"
                    width={900}
                    height={700}
                    className="h-[430px] w-full object-cover transition duration-700 hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#3D1118] via-[#561923]/20 to-transparent" />

                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="rounded-2xl border border-white/10 bg-[#561923]/95 p-5 text-white backdrop-blur-xl">
                      <div className="flex items-center gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#7A2330]">
                          <PlaneTakeoff className="h-6 w-6 text-[#F2C6CC]" />
                        </div>

                        <div>
                          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#F2C6CC]">
                            Airline Representation
                          </p>

                          <h3 className="mt-1 text-xl font-bold text-white">
                            Your Airline. Our Market.
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          INTRODUCTION
      ========================================================== */}

      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div>
              <span className="text-sm font-semibold uppercase tracking-[0.25em] text-[#561923]">
                Your Local Commercial Partner
              </span>

              <h2 className="mt-5 text-4xl font-bold leading-tight tracking-tight text-gray-900 sm:text-5xl">
                A stronger airline presence in{" "}
                <span className="text-[#561923]">every market</span>
              </h2>

              <p className="mt-6 text-lg leading-8 text-gray-600">
                A successful airline needs more than routes and aircraft. It
                needs strong market relationships, effective sales channels,
                professional representation and continuous commercial
                engagement.
              </p>

              <p className="mt-5 text-lg leading-8 text-gray-600">
                UNASCO Aviation works as a professional General Sales Agent,
                supporting airline partners with local commercial activities,
                passenger and cargo sales, market development, agency
                relationships and customer engagement.
              </p>

              <div className="mt-8 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#561923]">
                  <BadgeCheck className="h-6 w-6 text-[#F2C6CC]" />
                </div>

                <span className="font-semibold text-gray-900">
                  Professional representation with a commercial focus
                </span>
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {[
                {
                  value: "01",
                  title: "Representation",
                  text: "Professional local representation for airline partners.",
                },
                {
                  value: "02",
                  title: "Sales",
                  text: "Passenger and cargo sales development.",
                },
                {
                  value: "03",
                  title: "Relationships",
                  text: "Strong agency and corporate relationships.",
                },
                {
                  value: "04",
                  title: "Growth",
                  text: "Market development and revenue opportunities.",
                },
              ].map((item) => (
                <div
                  key={item.value}
                  className="group rounded-3xl border border-[#7A2330]/50 bg-[#561923] p-7 text-white shadow-lg transition-all duration-500 hover:-translate-y-3 hover:bg-[#7A2330] hover:shadow-2xl"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-4xl font-extrabold text-[#F2C6CC]/30 transition-colors duration-300 group-hover:text-white/30">
                      {item.value}
                    </span>

                    <div className="h-2 w-2 animate-ping rounded-full bg-[#F2C6CC]" />
                  </div>

                  <h3 className="mt-8 text-xl font-bold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-3 leading-7 text-white">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          GSA SERVICES
      ========================================================== */}

      <section
        id="gsa-services"
        className="bg-white py-24 lg:py-32"
      >
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-[#561923]">
              GSA Services
            </span>

            <h2 className="mt-5 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Complete{" "}
              <span className="text-[#561923]">
                airline representation
              </span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              Our General Sales Agent services are designed to help airline
              partners establish, manage and grow their commercial presence
              in the markets we serve.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {gsaServices.map((service, index) => {
              const Icon = service.icon;

              return (
                <div
                  key={service.title}
                  className="group relative overflow-hidden rounded-3xl border border-[#7A2330]/50 bg-[#561923] p-8 text-white shadow-lg transition-all duration-500 hover:-translate-y-3 hover:bg-[#7A2330] hover:shadow-2xl"
                >
                  <div className="absolute right-6 top-5 text-5xl font-black text-white/5 transition duration-500 group-hover:text-white/10">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-[#7A2330] text-[#F2C6CC] transition-all duration-500 group-hover:rotate-6 group-hover:scale-110">
                    <Icon className="h-7 w-7" />
                  </div>

                  <h3 className="relative mt-7 text-xl font-bold text-white">
                    {service.title}
                  </h3>

                  <p className="relative mt-4 leading-7 text-white">
                    {service.description}
                  </p>

                  <div className="mt-7 flex items-center gap-2 text-sm font-semibold text-[#F2C6CC] transition group-hover:text-white">
                    Learn More
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-2" />
                  </div>

                  <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#C9828D] transition-all duration-500 group-hover:w-full" />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          COMMERCIAL SUPPORT
      ========================================================== */}

      <section className="relative overflow-hidden bg-[#561923] py-24 lg:py-32">
        <div className="absolute -left-48 top-0 h-[500px] w-[500px] rounded-full bg-[#7A2330]/60 blur-[120px]" />

        <div className="absolute -right-48 bottom-0 h-[500px] w-[500px] rounded-full bg-[#C9828D]/10 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div>
              <span className="text-sm font-semibold uppercase tracking-[0.25em] text-[#F2C6CC]">
                Commercial Support
              </span>

              <h2 className="mt-5 text-4xl font-bold leading-tight text-white sm:text-5xl">
                Turning airline{" "}
                <span className="text-[#F2C6CC]">
                  opportunities into growth
                </span>
              </h2>

              <p className="mt-6 text-lg leading-8 text-white">
                Our commercial team works closely with airline partners to
                develop sales opportunities, strengthen distribution, engage
                the travel trade and improve market visibility.
              </p>

              <div className="mt-10 space-y-4">
                {commercialServices.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="group flex gap-4 rounded-2xl border border-[#7A2330]/70 bg-[#3D1118]/70 p-5 text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#7A2330]"
                    >
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#7A2330] text-[#F2C6CC] transition group-hover:scale-110">
                        <Icon className="h-6 w-6" />
                      </div>

                      <div>
                        <h3 className="font-bold text-white">
                          {item.title}
                        </h3>

                        <p className="mt-1 text-sm leading-6 text-white">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* =====================================================
                UPDATED COMMERCIAL IMAGE
                public/hero-cargo-aircraft.png
            ====================================================== */}

            <div className="relative">
              <div className="absolute -inset-5 rounded-[2.5rem] bg-[#C9828D]/10 blur-2xl" />

              <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#3D1118] p-3 shadow-2xl">
                <div className="relative overflow-hidden rounded-[2rem]">
                  <Image
                    src="/hero-cargo-aircraft.png"
                    alt="UNASCO Aviation airline commercial operations"
                    width={1000}
                    height={700}
                    className="h-[560px] w-full object-cover transition duration-700 hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#3D1118] via-[#561923]/20 to-transparent" />

                  <div className="absolute left-6 right-6 top-6">
                    <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-[#561923]/90 p-4 text-white backdrop-blur-md">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#7A2330]">
                          <BarChart3 className="h-5 w-5 text-[#F2C6CC]" />
                        </div>

                        <span className="font-semibold text-white">
                          Commercial Performance
                        </span>
                      </div>

                      <div className="h-3 w-3 animate-pulse rounded-full bg-[#C9828D]" />
                    </div>
                  </div>

                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="rounded-2xl border border-white/10 bg-[#561923]/95 p-6 text-white backdrop-blur-md">
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#F2C6CC]">
                        GSA Advantage
                      </p>

                      <h3 className="mt-2 text-2xl font-bold text-white">
                        One trusted commercial partner.
                      </h3>

                      <p className="mt-2 leading-7 text-white">
                        Local knowledge, airline expertise and strong
                        commercial relationships working together.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          MARKET DEVELOPMENT
      ========================================================== */}

      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-[#561923]">
              Market Development
            </span>

            <h2 className="mt-5 text-4xl font-bold text-gray-900 sm:text-5xl">
              Building the{" "}
              <span className="text-[#561923]">
                right commercial connections
              </span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              We connect airline partners with the people, businesses and
              commercial channels that matter in the market.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {marketAreas.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group rounded-3xl border border-[#7A2330]/50 bg-[#561923] p-8 text-white shadow-lg transition-all duration-500 hover:-translate-y-3 hover:bg-[#7A2330] hover:shadow-2xl"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#7A2330] text-[#F2C6CC] transition-all duration-500 group-hover:rotate-6 group-hover:scale-110">
                    <Icon className="h-7 w-7" />
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-4 leading-7 text-white">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          HOW WE WORK
      ========================================================== */}

      <section className="relative overflow-hidden bg-white py-24 lg:py-32">
        <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-[#C9828D]/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-[#561923]">
              Our GSA Process
            </span>

            <h2 className="mt-5 text-4xl font-bold text-gray-900 sm:text-5xl">
              From{" "}
              <span className="text-[#561923]">
                market entry to growth
              </span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              A structured commercial approach designed to give airline
              partners clear visibility, strong execution and continuous
              market development.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-5">
            {processSteps.map((step, index) => (
              <div
                key={step.number}
                className="group relative rounded-3xl border border-[#7A2330]/50 bg-[#561923] p-7 text-white shadow-lg transition-all duration-500 hover:-translate-y-3 hover:bg-[#7A2330] hover:shadow-2xl"
              >
                <div className="flex items-center justify-between">
                  <span className="text-4xl font-black text-[#F2C6CC]">
                    {step.number}
                  </span>

                  {index < processSteps.length - 1 && (
                    <ChevronRight className="hidden h-5 w-5 text-[#F2C6CC]/40 lg:block" />
                  )}
                </div>

                <h3 className="mt-8 text-xl font-bold text-white">
                  {step.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-white">
                  {step.description}
                </p>

                <div className="mt-6 h-1 w-10 rounded-full bg-[#C9828D] transition-all duration-500 group-hover:w-full" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          WHY UNASCO
      ========================================================== */}

      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div className="relative overflow-hidden rounded-[2rem] bg-[#561923] p-3 shadow-2xl">
              <div className="relative overflow-hidden rounded-[1.6rem]">
                <Image
                  src="/about-operations.png"
                  alt="UNASCO Aviation professional operations"
                  width={1000}
                  height={700}
                  className="h-[560px] w-full object-cover transition duration-700 hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#3D1118]/90 via-transparent to-transparent" />

                <div className="absolute bottom-7 left-7 right-7">
                  <div className="rounded-2xl border border-white/10 bg-[#561923]/95 p-6 text-white backdrop-blur-md">
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#7A2330]">
                        <Handshake className="h-6 w-6 text-[#F2C6CC]" />
                      </div>

                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#F2C6CC]">
                          Strategic Partnership
                        </p>

                        <h3 className="mt-1 text-xl font-bold text-white">
                          Growing together.
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <span className="text-sm font-semibold uppercase tracking-[0.25em] text-[#561923]">
                Why Choose UNASCO
              </span>

              <h2 className="mt-5 text-4xl font-bold leading-tight text-gray-900 sm:text-5xl">
                A GSA partner focused on{" "}
                <span className="text-[#561923]">
                  commercial success
                </span>
              </h2>

              <p className="mt-6 text-lg leading-8 text-gray-600">
                UNASCO Aviation combines aviation knowledge, commercial
                relationships and professional market support to help airline
                partners strengthen their presence and grow their business.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {benefits.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-2xl border border-[#7A2330]/40 bg-[#561923] p-4 text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#7A2330] hover:shadow-lg"
                  >
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-[#F2C6CC]" />

                    <span className="text-sm font-medium text-white">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          AIRLINE PARTNER CTA
      ========================================================== */}

      <section className="relative overflow-hidden bg-[#561923] py-24 lg:py-32">
        <div className="absolute -left-40 -top-40 h-[500px] w-[500px] animate-pulse rounded-full bg-[#7A2330]/60 blur-[120px]" />

        <div className="absolute -bottom-40 -right-40 h-[500px] w-[500px] animate-pulse rounded-full bg-[#C9828D]/10 blur-[120px] [animation-delay:2s]" />

        <div className="relative mx-auto max-w-5xl px-6 text-center text-white">
          <div className="mx-auto flex h-16 w-16 animate-pulse items-center justify-center rounded-2xl bg-[#7A2330]">
            <PlaneTakeoff className="h-8 w-8 text-[#F2C6CC]" />
          </div>

          <span className="mt-8 block text-sm font-semibold uppercase tracking-[0.25em] text-[#F2C6CC]">
            Airline Partnership
          </span>

          <h2 className="mt-5 text-4xl font-bold text-white sm:text-6xl">
            Put your airline in{" "}
            <span className="text-[#F2C6CC]">
              the right hands.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white">
            Whether you are entering a new market, expanding your network,
            developing passenger sales or growing cargo business, UNASCO
            Aviation can provide professional General Sales Agent support
            tailored to your commercial objectives.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 font-semibold text-[#561923] shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              Contact Our GSA Team
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </a>

            <a
              href="/"
              className="group inline-flex items-center gap-2 rounded-xl border border-white/50 px-8 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-[#561923]"
            >
              Back to UNASCO
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </section>

      {/* =========================================================
          FINAL QUOTE CTA
      ========================================================== */}

      <QuoteCta />
    </>
  );
}