import type { Metadata } from "next";
import Image from "next/image";
import {
  Building2,
  MapPin,
  PlaneTakeoff,
  CheckCircle2,
  Target,
  Eye,
  Star,
  Globe2,
  BriefcaseBusiness,
  Users,
  ShieldCheck,
  ArrowRight,
  Award,
  Network,
  PackageCheck,
  MonitorCog,
} from "lucide-react";

import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "About UNASCO Aviation Limited",
  description:
    "Discover UNASCO Aviation Limited, our leadership, aviation expertise, cargo operations, strategic partnerships and commitment to professional aviation services.",
};

/* =========================================================
   CORE SERVICES
========================================================= */

const services = [
  {
    title: "Flight Support Services",
    description:
      "Professional support solutions designed to assist airlines, aircraft operators and aviation partners with efficient operations.",
    icon: PlaneTakeoff,
  },
  {
    title: "Flight Operations",
    description:
      "Operational support and coordination delivered with professionalism, efficiency and aviation industry experience.",
    icon: Globe2,
  },
  {
    title: "Airline Management",
    description:
      "Aviation management expertise supporting airline operations, commercial activities and sustainable business development.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Air Cargo Transportation",
    description:
      "Cargo and logistics solutions designed to support efficient movement, coordination and delivery of goods.",
    icon: PackageCheck,
  },
  {
    title: "General Aviation & Air Travel",
    description:
      "Dependable general aviation and air travel support for individuals, organizations and corporate clients.",
    icon: Building2,
  },
  {
    title: "Hajj & Umrah Operations",
    description:
      "Specialized aviation and ground-operation experience supporting Hajj and Umrah travel requirements.",
    icon: Users,
  },
];

/* =========================================================
   CURRENT MANAGEMENT TEAM
========================================================= */

const currentTeam = [
  {
    name: "Mr. Khaled S. Al-Dini",
    role: "Managing Director / CEO",
    image: "/team/khaled-al-dini.jpg",
    fallback: "/about-operations.png",
    description:
      "Experienced aviation professional with extensive airline operations, aviation management and Hajj & Umrah experience.",
  },
  {
    name: "Mr. Hafiz Umar Ballah",
    role: "Executive Director, Marketing",
    image: "/team/hafiz-umar-ballah.jpg",
    fallback: "/about-operations.png",
    description:
      "Responsible for marketing, commercial development, customer relationships and business growth.",
  },
  {
    name: "Alhaji Bagudu M. Shafiyi",
    role: "Director, Cargo Operations",
    image: "/team/bagudu-shafiyi.jpg",
    fallback: "/about-operations.png",
    description:
      "Provides leadership and direction across UNASCO's cargo operations and logistics activities.",
  },
  {
    name: "Mr. Usman K. Kudi",
    role: "Head of Cargo Operations",
    image: "/team/usman-k-kudi.jpg",
    fallback: "/about-operations.png",
    description:
      "Coordinates cargo operations and supports the efficient handling and movement of cargo.",
  },
  {
    name: "Mr. Amir H. Ballah",
    role: "Head of I.T & Communication",
    image: "/team/amir-h-ballah.jpg",
    fallback: "/about-operations.png",
    description:
      "Responsible for information technology, communication systems and digital infrastructure.",
  },
];

/* =========================================================
   OBJECTIVES
========================================================= */

const objectives = [
  "Provide excellent and unique services that meet customer expectations while maximizing shareholder value.",
  "Develop local expertise capable of meeting international aviation industry standards.",
  "Remain a leading provider of flight operation support and travel solutions with professionalism and sound business ethics.",
  "Continuously improve our services while working with strategic local and international partners.",
];

/* =========================================================
   COMPANY DEPARTMENTS
========================================================= */

const departments = [
  "Finance",
  "Operations",
  "Sales & Marketing",
  "Planning & Strategy",
  "Administration & Human Resources",
  "Booking & Reservation",
];

/* =========================================================
   WHY CHOOSE UNASCO
========================================================= */

const strengths = [
  "Experienced Aviation Professionals",
  "Flight Support Services",
  "Air Cargo Transportation",
  "Airline Management",
  "Travel & Tours",
  "Hajj & Umrah Operations",
  "Strategic Industry Partnerships",
  "Customer Satisfaction",
];

export default function AboutPage() {
  return (
    <>
      {/* =====================================================
          HERO
      ====================================================== */}

      <PageHero
        breadcrumb="About UNASCO"
        title="Connecting Aviation, Cargo, People & Possibilities"
        subtitle="UNASCO Aviation Limited provides professional aviation, flight support, cargo, logistics, travel and Hajj & Umrah solutions through experienced leadership, strategic relationships and a commitment to operational excellence."
      />

      {/* =====================================================
          COMPANY PROFILE
      ====================================================== */}

      <section className="relative overflow-hidden bg-white py-24 lg:py-32">

        <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />

        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-orange-200/20 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">

          {/* IMAGE */}

          <div className="relative">

            <div className="group overflow-hidden rounded-[2rem] shadow-2xl">

              <Image
                src="/about-operations.png"
                alt="UNASCO Aviation Operations"
                width={900}
                height={700}
                priority
                className="h-[520px] w-full object-cover transition duration-700 group-hover:scale-105"
              />

            </div>

            {/* REGISTRATION CARD */}

            <div className="absolute -bottom-8 left-6 rounded-3xl border bg-white/95 p-6 shadow-2xl backdrop-blur sm:left-10">

              <div className="flex items-center gap-4">

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">

                  <Building2 className="h-7 w-7" />

                </div>

                <div>

                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                    Corporate Registration
                  </p>

                  <p className="mt-1 text-2xl font-bold text-primary">
                    RC 8207934
                  </p>

                  <p className="text-xs text-muted-foreground">
                    Incorporated 27 January 2025
                  </p>

                </div>

              </div>

            </div>

          </div>

          {/* CONTENT */}

          <div>

            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
              Company Profile
            </span>

            <h2 className="mt-5 text-4xl font-bold leading-tight tracking-tight sm:text-5xl">

              Your Trusted
              <span className="text-primary"> Aviation,</span>

              <br />

              Cargo & Logistics Partner

            </h2>

            <p className="mt-6 text-lg leading-8 text-muted-foreground">

              UNASCO Aviation Limited is an Air Travel and Aviation General
              Support Services Company incorporated under the laws of the
              Federal Republic of Nigeria as a Private Limited Liability
              Company.

            </p>

            <p className="mt-5 text-lg leading-8 text-muted-foreground">

              The company specializes in Flight Support Services, Flight
              Operations, Airline Management, Air Cargo Transportation,
              General Aviation & Air Travel Services and Hajj & Umrah
              Operations.

            </p>

            {/* LOCATION */}

            <div className="mt-10 space-y-4">

              <div className="flex gap-4 rounded-2xl border bg-slate-50 p-5">

                <MapPin className="mt-1 h-6 w-6 shrink-0 text-primary" />

                <div>

                  <h4 className="font-semibold">
                    Head Office
                  </h4>

                  <p className="mt-1 text-muted-foreground">
                    No. 7 Bompai Road, Kano State, Nigeria
                  </p>

                </div>

              </div>

              <div className="flex gap-4 rounded-2xl border bg-slate-50 p-5">

                <PlaneTakeoff className="mt-1 h-6 w-6 shrink-0 text-primary" />

                <div>

                  <h4 className="font-semibold">
                    Operational Presence
                  </h4>

                  <p className="mt-1 text-muted-foreground">
                    Kano • Abuja • Minna • Lagos
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          CEO MESSAGE
      ====================================================== */}

      <section className="relative overflow-hidden bg-slate-950 py-24 lg:py-32">

        <div className="absolute -left-40 top-0 h-[500px] w-[500px] rounded-full bg-primary/20 blur-3xl" />

        <div className="absolute -bottom-40 right-0 h-[500px] w-[500px] rounded-full bg-orange-500/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6">

          <div className="grid items-center gap-16 lg:grid-cols-[420px_1fr]">

            {/* CEO PHOTO */}

            <div className="relative">

              <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-2xl">

                <Image
                  src="/team/khaled-al-dini.jpg"
                  alt="Mr. Khaled S. Al-Dini - Managing Director and CEO"
                  width={700}
                  height={850}
                  className="aspect-[4/5] w-full object-cover"
                />

              </div>

              <div className="absolute -bottom-6 left-6 right-6 rounded-2xl border border-white/10 bg-white/10 p-5 shadow-xl backdrop-blur-xl">

                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
                  Managing Director / CEO
                </p>

                <h3 className="mt-1 text-xl font-bold text-white">
                  Mr. Khaled S. Al-Dini
                </h3>

              </div>

            </div>

            {/* MESSAGE */}

            <div className="text-white">

              <span className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-400">
                Message From Our CEO
              </span>

              <h2 className="mt-5 text-4xl font-bold leading-tight sm:text-5xl">

                Experience That
                <span className="text-orange-400">
                  {" "}
                  Inspires Our Future
                </span>

              </h2>

              <div className="mt-8 space-y-6 text-lg leading-8 text-white/70">

                <p>
                  Aviation is built on trust, discipline, experience and
                  strong relationships. At UNASCO Aviation Limited, we are
                  committed to bringing these values together to create
                  dependable aviation and travel solutions for our clients
                  and partners.
                </p>

                <p>
                  Mr. Khaled S. Al-Dini began his aviation career at a very
                  young age while still in secondary school, undertaking
                  airport-related work during school vacations. His passion
                  for aviation continued throughout his academic and
                  professional journey.
                </p>

                <p>
                  After graduating with a degree in Computer Science from
                  King Abdul-Aziz University in Jeddah, Saudi Arabia, he
                  had already developed substantial experience in airline
                  operations and subsequently served with major aviation
                  and travel organizations.
                </p>

                <p>
                  His professional experience includes airline operations,
                  airport services, ground handling, charter aviation and
                  Hajj & Umrah operations, with experience involving
                  organizations such as Saudi Arabian Airlines, Emirates
                  Airlines, Malaysian Airlines, Philippine Airlines,
                  National Air Services and Flynas.
                </p>

              </div>

              <div className="mt-10 border-l-4 border-orange-400 pl-6">

                <p className="text-xl font-semibold leading-8 text-white">

                  Our ambition is to build UNASCO into a respected aviation
                  organization that creates lasting value for customers,
                  partners, employees and the wider aviation industry.

                </p>

              </div>

              <div className="mt-8 flex items-center gap-3 text-sm text-white/50">

                <Award className="h-5 w-5 text-orange-400" />

                <span>
                  Aviation leadership built on decades of experience
                </span>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          CEO SUCCESS STORY
      ====================================================== */}

      <section className="bg-white py-24 lg:py-32">

        <div className="mx-auto max-w-7xl px-6">

          <div className="mx-auto max-w-3xl text-center">

            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
              Leadership Experience
            </span>

            <h2 className="mt-5 text-4xl font-bold sm:text-5xl">
              A Proven Aviation Journey
            </h2>

            <p className="mt-6 text-lg leading-8 text-muted-foreground">

              The experience behind UNASCO is supported by years of airline
              operations, aviation management, Hajj & Umrah operations and
              commercial aviation experience.

            </p>

          </div>

          <div className="mt-16 grid gap-8 lg:grid-cols-3">

            <div className="rounded-3xl border bg-slate-50 p-8 transition hover:-translate-y-2 hover:border-primary hover:shadow-xl">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">

                <PlaneTakeoff className="h-7 w-7" />

              </div>

              <h3 className="mt-6 text-2xl font-bold">
                Airline Operations
              </h3>

              <p className="mt-4 leading-7 text-muted-foreground">

                Experience across airline operations, airport services,
                ground handling, commercial activities and operational
                management.

              </p>

            </div>

            <div className="rounded-3xl border bg-slate-50 p-8 transition hover:-translate-y-2 hover:border-primary hover:shadow-xl">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">

                <Users className="h-7 w-7" />

              </div>

              <h3 className="mt-6 text-2xl font-bold">
                Hajj & Umrah Operations
              </h3>

              <p className="mt-4 leading-7 text-muted-foreground">

                Extensive experience in Hajj and Umrah operations and
                passenger ground-operation activities across multiple
                countries.

              </p>

            </div>

            <div className="rounded-3xl border bg-slate-50 p-8 transition hover:-translate-y-2 hover:border-primary hover:shadow-xl">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">

                <BriefcaseBusiness className="h-7 w-7" />

              </div>

              <h3 className="mt-6 text-2xl font-bold">
                Aviation Management
              </h3>

              <p className="mt-4 leading-7 text-muted-foreground">

                Experience in operational procedures, standards, commercial
                activities, manpower planning, cost control and station
                development.

              </p>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          CORE SERVICES
      ====================================================== */}

      <section className="bg-slate-50 py-24 lg:py-32">

        <div className="mx-auto max-w-7xl px-6">

          <div className="mx-auto max-w-3xl text-center">

            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
              Our Services
            </span>

            <h2 className="mt-5 text-4xl font-bold sm:text-5xl">

              Aviation Solutions
              <span className="text-primary">
                {" "}
                Built Around Excellence
              </span>

            </h2>

            <p className="mt-6 text-lg leading-8 text-muted-foreground">

              Professional aviation, cargo, logistics and travel support
              designed around the needs of our customers and partners.

            </p>

          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {services.map((service) => {

              const Icon = service.icon;

              return (
                <div
                  key={service.title}
                  className="group rounded-3xl border bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-primary hover:shadow-2xl"
                >

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-white">

                    <Icon className="h-7 w-7" />

                  </div>

                  <h3 className="mt-6 text-xl font-bold">
                    {service.title}
                  </h3>

                  <p className="mt-4 leading-7 text-muted-foreground">
                    {service.description}
                  </p>

                  <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-primary">

                    Learn More

                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />

                  </div>

                </div>
              );
            })}

          </div>

        </div>

      </section>

      {/* =====================================================
          MISSION VISION QUALITY
      ====================================================== */}

      <section className="relative overflow-hidden bg-white py-24 lg:py-32">

        <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />

        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6">

          <div className="mx-auto max-w-3xl text-center">

            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
              Our Foundation
            </span>

            <h2 className="mt-5 text-4xl font-bold sm:text-5xl">

              Mission, Vision &
              <span className="text-primary"> Quality</span>

            </h2>

            <p className="mt-6 text-lg leading-8 text-muted-foreground">

              Everything we do is driven by professionalism, operational
              excellence, continuous improvement and strong relationships
              with our customers and partners.

            </p>

          </div>

          <div className="mt-16 grid gap-8 lg:grid-cols-3">

            {/* MISSION */}

            <div className="rounded-3xl border bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:border-primary hover:shadow-2xl">

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">

                <Target className="h-8 w-8" />

              </div>

              <h3 className="mt-6 text-2xl font-bold">
                Our Mission
              </h3>

              <p className="mt-5 leading-8 text-muted-foreground">

                To deliver qualitative and efficient services that satisfy
                our customers by engaging qualified, experienced and highly
                motivated professionals while working together with our
                strategic partners to build UNASCO Aviation Limited into a
                leading aviation organization serving Nigeria, Africa and
                the international market.

              </p>

            </div>

            {/* VISION */}

            <div className="rounded-3xl border bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:border-primary hover:shadow-2xl">

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">

                <Eye className="h-8 w-8" />

              </div>

              <h3 className="mt-6 text-2xl font-bold">
                Our Vision
              </h3>

              <p className="mt-5 leading-8 text-muted-foreground">

                To become a world player in the aviation industry by
                working together with our local and international partners
                to build a viable and sustainable future that creates
                success for our customers, shareholders and employees.

              </p>

            </div>

            {/* QUALITY */}

            <div className="rounded-3xl border bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:border-primary hover:shadow-2xl">

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">

                <Star className="h-8 w-8" />

              </div>

              <h3 className="mt-6 text-2xl font-bold">
                Our Quality
              </h3>

              <p className="mt-5 leading-8 text-muted-foreground">

                We value healthy business relationships and customer
                expectations. We continually improve our work processes,
                procedures and service quality while reducing waste in
                vital resources, cost and time.

              </p>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          OBJECTIVES
      ====================================================== */}

      <section className="bg-slate-50 py-24">

        <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">

          <div>

            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
              Our Objectives
            </span>

            <h2 className="mt-5 text-4xl font-bold sm:text-5xl">

              Driving Excellence
              <br />
              Every Day

            </h2>

            <p className="mt-6 text-lg leading-8 text-muted-foreground">

              Our objectives guide how we operate, develop our people,
              serve our customers and build strategic relationships.

            </p>

          </div>

          <div className="space-y-5">

            {objectives.map((objective) => (

              <div
                key={objective}
                className="flex gap-4 rounded-2xl border bg-white p-6 shadow-sm transition hover:border-primary hover:shadow-xl"
              >

                <CheckCircle2 className="mt-1 h-6 w-6 shrink-0 text-primary" />

                <p className="leading-7 text-muted-foreground">
                  {objective}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* =====================================================
          COMPANY STRUCTURE
      ====================================================== */}

      <section className="bg-white py-24 lg:py-32">

        <div className="mx-auto max-w-7xl px-6">

          <div className="mx-auto max-w-3xl text-center">

            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
              Organization
            </span>

            <h2 className="mt-5 text-4xl font-bold sm:text-5xl">
              Company Structure
            </h2>

            <p className="mt-6 text-lg leading-8 text-muted-foreground">

              UNASCO operates through specialized functions working
              together to deliver aviation, cargo, logistics and travel
              solutions.

            </p>

          </div>

          <div className="mt-16 flex justify-center">

            <div className="rounded-3xl bg-primary px-12 py-7 text-center text-white shadow-2xl">

              <Users className="mx-auto mb-3 h-8 w-8" />

              <h3 className="text-2xl font-bold">
                MANAGEMENT
              </h3>

            </div>

          </div>

          <div className="mx-auto mt-10 grid max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-3">

            {departments.map((department) => (

              <div
                key={department}
                className="rounded-2xl border bg-slate-50 p-7 text-center transition-all hover:-translate-y-1 hover:border-primary hover:bg-white hover:shadow-xl"
              >

                <h3 className="font-bold">
                  {department}
                </h3>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* =====================================================
          CURRENT MANAGEMENT TEAM
      ====================================================== */}

      <section className="bg-slate-950 py-24 lg:py-32">

        <div className="mx-auto max-w-7xl px-6">

          <div className="mx-auto max-w-3xl text-center text-white">

            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-400">
              Our Current Team
            </span>

            <h2 className="mt-5 text-4xl font-bold sm:text-5xl">

              Leadership & Management

            </h2>

            <p className="mt-6 text-lg leading-8 text-white/60">

              Meet the current professionals responsible for leading,
              developing and supporting UNASCO Aviation Limited.

            </p>

          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

            {currentTeam.map((member) => (

              <div
                key={member.name}
                className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 transition-all duration-500 hover:-translate-y-2 hover:border-primary/50 hover:bg-white/10"
              >

                <div className="relative aspect-[4/5] overflow-hidden bg-slate-800">

                  <Image
                    src={member.image}
                    alt={`${member.name} - ${member.role}`}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />

                  <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                  <div className="absolute bottom-5 left-5 right-5">

                    <span className="inline-flex rounded-full bg-primary px-4 py-2 text-xs font-semibold text-white">

                      {member.role}

                    </span>

                  </div>

                </div>

                <div className="p-7">

                  <h3 className="text-xl font-bold text-white">
                    {member.name}
                  </h3>

                  <p className="mt-2 font-semibold text-orange-400">
                    {member.role}
                  </p>

                  <p className="mt-4 text-sm leading-7 text-white/60">
                    {member.description}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* =====================================================
          STRATEGIC COLLABORATIONS
      ====================================================== */}

      <section className="bg-white py-24 lg:py-32">

        <div className="mx-auto max-w-7xl px-6">

          <div className="grid items-center gap-16 lg:grid-cols-2">

            {/* COLLABORATION IMAGE */}

            <div className="relative overflow-hidden rounded-[2rem] border bg-slate-50 shadow-2xl">

              <Image
                src="/company/collaborations.jpg"
                alt="UNASCO Aviation strategic collaborations"
                width={1000}
                height={700}
                className="h-auto w-full object-cover transition duration-700 hover:scale-105"
              />

            </div>

            {/* CONTENT */}

            <div>

              <span className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
                Strategic Collaborations
              </span>

              <h2 className="mt-5 text-4xl font-bold sm:text-5xl">

                Strong Connections.
                <span className="text-primary">
                  {" "}
                  Bigger Possibilities.
                </span>

              </h2>

              <p className="mt-6 text-lg leading-8 text-muted-foreground">

                UNASCO Aviation Limited recognizes that strong aviation
                businesses are built through strategic partnerships,
                professional relationships and reliable industry networks.

              </p>

              <p className="mt-5 leading-8 text-muted-foreground">

                Our collaboration network extends across aviation,
                airline, cargo, travel, Hajj & Umrah, financial and
                institutional environments, helping us create better
                opportunities and stronger solutions for our customers.

              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">

                {[
                  "Airline Relationships",
                  "Cargo Networks",
                  "Travel Partnerships",
                  "Hajj & Umrah Networks",
                  "Government Relationships",
                  "International Connections",
                ].map((item) => (

                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-xl border bg-slate-50 p-4"
                  >

                    <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />

                    <span className="text-sm font-medium">
                      {item}
                    </span>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          DIGITAL & OPERATIONAL CAPABILITY
      ====================================================== */}

      <section className="bg-slate-50 py-24">

        <div className="mx-auto max-w-7xl px-6">

          <div className="mx-auto max-w-3xl text-center">

            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
              Our Capability
            </span>

            <h2 className="mt-5 text-4xl font-bold sm:text-5xl">

              Experience Meets
              <span className="text-primary"> Modern Operations</span>

            </h2>

          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">

            <div className="rounded-3xl border bg-white p-8 shadow-sm">

              <ShieldCheck className="h-10 w-10 text-primary" />

              <h3 className="mt-6 text-xl font-bold">
                Professional Standards
              </h3>

              <p className="mt-4 leading-7 text-muted-foreground">

                We continuously improve our processes and procedures to
                deliver dependable and professional services.

              </p>

            </div>

            <div className="rounded-3xl border bg-white p-8 shadow-sm">

              <Network className="h-10 w-10 text-primary" />

              <h3 className="mt-6 text-xl font-bold">
                Industry Network
              </h3>

              <p className="mt-4 leading-7 text-muted-foreground">

                Strategic relationships help connect our operations with
                partners and opportunities across the aviation industry.

              </p>

            </div>

            <div className="rounded-3xl border bg-white p-8 shadow-sm">

              <MonitorCog className="h-10 w-10 text-primary" />

              <h3 className="mt-6 text-xl font-bold">
                Modern Communication
              </h3>

              <p className="mt-4 leading-7 text-muted-foreground">

                Our commitment to technology and communication supports
                efficient coordination across our operations.

              </p>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          WHY CHOOSE UNASCO
      ====================================================== */}

      <section className="bg-white py-24">

        <div className="mx-auto max-w-7xl px-6">

          <div className="text-center">

            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
              Why Choose UNASCO
            </span>

            <h2 className="mt-5 text-4xl font-bold sm:text-5xl">

              Built on Experience.
              <span className="text-primary">
                {" "}
                Driven by Excellence.
              </span>

            </h2>

          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

            {strengths.map((item) => (

              <div
                key={item}
                className="group rounded-3xl bg-primary p-8 text-center text-white transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >

                <CheckCircle2 className="mx-auto h-10 w-10 text-orange-300 transition group-hover:scale-110" />

                <h3 className="mt-5 font-semibold">
                  {item}
                </h3>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* =====================================================
          CALL TO ACTION
      ====================================================== */}

      <section className="relative overflow-hidden bg-primary py-24 lg:py-32">

        <div className="absolute inset-0 bg-[url('/about-operations.png')] bg-cover bg-center opacity-10" />

        <div className="relative mx-auto max-w-5xl px-6 text-center text-white">

          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-300">
            Let's Work Together
          </span>

          <h2 className="mt-5 text-4xl font-bold sm:text-6xl">

            Your Journey Starts
            <br />
            With the Right Aviation Partner.

          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/80">

            Whether you require flight support, cargo transportation,
            airline management, travel management, Hajj & Umrah
            operations or logistics solutions, UNASCO Aviation Limited
            is ready to support you.

          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">

            <a
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 font-semibold text-primary shadow-xl transition hover:-translate-y-1 hover:shadow-2xl"
            >

              Contact UNASCO

              <ArrowRight className="h-5 w-5" />

            </a>

            <a
              href="/services"
              className="inline-flex items-center gap-2 rounded-xl border border-white/50 px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-primary"
            >

              Explore Services

            </a>

          </div>

        </div>

      </section>
    </>
  );
}