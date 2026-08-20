'use client'

import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowRight,
  CheckCircle2,
  Globe2,
  Hotel,
  Plane,
  ShieldCheck,
  Users,
  MapPin,
  CalendarDays,
  Star,
} from 'lucide-react'

export default function HajjUmrahPage() {
  return (
    <main className="min-h-screen bg-white text-black">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative min-h-[720px] overflow-hidden bg-[#12080A] text-white">

        <Image
          src="/hajj-umrah/kaaba.jpg"
          alt="Kaaba in Makkah, Saudi Arabia"
          fill
          priority
          className="object-cover"
        />

        {/* Hero overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#12080A]/95 via-[#12080A]/75 to-[#12080A]/35" />

        {/* Decorative glow */}
        <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-[#7A2330]/30 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#7A2330]/20 blur-3xl" />

        <div className="relative z-10 mx-auto flex min-h-[720px] max-w-7xl items-center px-6 py-32 lg:px-8">

          <div className="max-w-4xl">

            {/* Badge */}
            <div
              className="
                inline-flex items-center gap-2
                rounded-full border border-white/20
                bg-black/20 px-5 py-2.5
                text-sm font-semibold text-white
                backdrop-blur-xl
                animate-[fadeInUp_.7s_ease-out]
              "
            >
              <MapPin className="h-4 w-4 text-[#C9828D]" />
              Makkah • Madinah • Saudi Arabia
            </div>

            {/* Heading */}
            <h1
              className="
                mt-7
                text-5xl font-bold tracking-tight
                sm:text-6xl
                lg:text-8xl
                animate-[fadeInUp_.9s_ease-out]
              "
            >
              Your Journey to
              <span className="block text-[#C9828D]">
                the Holy Lands.
              </span>
            </h1>

            <p
              className="
                mt-7 max-w-2xl
                text-lg leading-8
                text-white/75
                lg:text-xl
                animate-[fadeInUp_1.1s_ease-out]
              "
            >
              Professional Hajj and Umrah travel support from UNASCO
              Aviation Limited, helping pilgrims plan their journey to
              Makkah and Madinah with confidence.
            </p>

            <div
              className="
                mt-10 flex flex-wrap gap-4
                animate-[fadeInUp_1.2s_ease-out]
              "
            >

              <Link
                href="#packages"
                className="
                  group inline-flex h-13 items-center gap-3
                  rounded-full bg-[#7A2330]
                  px-7 font-semibold text-white
                  shadow-xl shadow-black/30
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:bg-[#8F2B3A]
                "
              >
                View Packages

                <ArrowRight
                  className="
                    h-4 w-4
                    transition-transform
                    group-hover:translate-x-1
                  "
                />
              </Link>

              <Link
                href="/contact"
                className="
                  inline-flex h-13 items-center
                  rounded-full
                  border border-white/30
                  bg-white/10
                  px-7 font-semibold
                  text-white
                  backdrop-blur-md
                  transition-all duration-300
                  hover:bg-white
                  hover:text-black
                "
              >
                Contact UNASCO
              </Link>

            </div>

            {/* Trust points */}
            <div className="mt-12 flex flex-wrap gap-x-8 gap-y-4 text-sm text-white/80">

              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-[#C9828D]" />
                Professional Travel Support
              </div>

              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-[#C9828D]" />
                Makkah & Madinah
              </div>

              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-[#C9828D]" />
                2027 Hajj Programme
              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          INTRO
      ===================================================== */}

      <section className="bg-white py-24 lg:py-32">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">

            <div>

              <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#7A2330]">
                Pilgrimage Travel
              </p>

              <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
                A journey of faith deserves careful planning.
              </h2>

              <div className="mt-6 h-1 w-20 rounded-full bg-[#7A2330]" />

              <p className="mt-7 max-w-xl text-lg leading-8 text-neutral-600">
                UNASCO provides organized Hajj and Umrah travel support for
                individuals, families and pilgrimage groups travelling to
                Saudi Arabia.
              </p>

              <p className="mt-5 max-w-xl text-lg leading-8 text-neutral-600">
                Our pilgrimage services are designed around dependable
                coordination, professional travel support and a comfortable
                journey from departure to the Holy Lands.
              </p>

            </div>

            {/* Madinah image */}
            <div className="group relative overflow-hidden rounded-[2rem] shadow-2xl">

              <Image
                src="/hajj-umrah/madinah.jpg"
                alt="Madinah, Saudi Arabia"
                width={1200}
                height={800}
                className="
                  h-[480px] w-full object-cover
                  transition-transform duration-700
                  group-hover:scale-105
                "
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6 text-white">

                <p className="text-sm font-medium uppercase tracking-[0.2em] text-white/70">
                  Saudi Arabia
                </p>

                <h3 className="mt-1 text-2xl font-bold">
                  Madinah
                </h3>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          PACKAGES
      ===================================================== */}

      <section
        id="packages"
        className="bg-[#F7F5F5] py-24 lg:py-32"
      >

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="mx-auto max-w-3xl text-center">

            <div className="inline-flex items-center gap-2 rounded-full bg-[#7A2330]/10 px-4 py-2 text-sm font-bold text-[#7A2330]">
              <Star className="h-4 w-4" />
              UNASCO PILGRIMAGE PACKAGES
            </div>

            <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
              Hajj & Umrah Packages
            </h2>

            <p className="mt-5 text-lg leading-8 text-neutral-600">
              Choose your pilgrimage programme and speak with our team for
              the complete itinerary, availability and package details.
            </p>

          </div>


          <div className="mt-16 grid gap-8 lg:grid-cols-2">

            {/* =================================================
                UMRAH
            ================================================= */}

            <div
              className="
                group relative overflow-hidden
                rounded-[2rem]
                border border-neutral-200
                bg-white
                shadow-lg
                transition-all duration-500
                hover:-translate-y-2
                hover:shadow-2xl
              "
            >

              {/* Image */}
              <div className="relative h-72 overflow-hidden">

                <Image
                  src="/hajj-umrah/umrah.jpg"
                  alt="Umrah pilgrimage in Makkah"
                  fill
                  className="
                    object-cover
                    transition-transform duration-700
                    group-hover:scale-105
                  "
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                <div className="absolute left-6 top-6 rounded-full bg-white px-4 py-2 text-sm font-bold text-[#7A2330]">
                  UMRAH
                </div>

                <div className="absolute bottom-6 left-6 text-white">

                  <p className="text-sm text-white/70">
                    Pilgrimage Programme
                  </p>

                  <h3 className="mt-1 text-3xl font-bold">
                    Umrah Package
                  </h3>

                </div>

              </div>


              {/* Content */}
              <div className="p-8">

                <div className="flex items-end justify-between gap-4">

                  <div>

                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-neutral-400">
                      Starting From
                    </p>

                    <p className="mt-1 text-4xl font-bold text-[#7A2330]">
                      ₦2.5M
                    </p>

                  </div>

                  <div className="rounded-xl bg-neutral-100 px-4 py-3 text-right">

                    <p className="text-xs text-neutral-500">
                      Destination
                    </p>

                    <p className="font-bold">
                      Saudi Arabia
                    </p>

                  </div>

                </div>


                <div className="my-7 h-px bg-neutral-200" />


                <div className="space-y-4">

                  <PackagePoint text="Umrah travel programme" />
                  <PackagePoint text="Professional pilgrimage support" />
                  <PackagePoint text="Travel coordination" />
                  <PackagePoint text="Makkah & Madinah journey support" />

                </div>


                <Link
                  href="/contact"
                  className="
                    mt-8 flex h-13 w-full
                    items-center justify-center gap-2
                    rounded-xl
                    bg-[#7A2330]
                    font-semibold text-white
                    transition-all duration-300
                    hover:bg-[#8F2B3A]
                    hover:shadow-lg
                  "
                >
                  Enquire About Umrah
                  <ArrowRight className="h-4 w-4" />
                </Link>

              </div>

            </div>


            {/* =================================================
                HAJJ 2027
            ================================================= */}

            <div
              className="
                group relative overflow-hidden
                rounded-[2rem]
                border-2 border-[#7A2330]/30
                bg-white
                shadow-xl
                transition-all duration-500
                hover:-translate-y-2
                hover:shadow-2xl
              "
            >

              {/* Recommended */}
              <div className="absolute right-6 top-6 z-20 rounded-full bg-[#7A2330] px-4 py-2 text-xs font-bold uppercase tracking-wide text-white shadow-lg">
                Hajj 2027
              </div>


              {/* Image */}
              <div className="relative h-72 overflow-hidden">

                <Image
                  src="/hajj-umrah/hajj.jpg"
                  alt="Hajj pilgrimage in Saudi Arabia"
                  fill
                  className="
                    object-cover
                    transition-transform duration-700
                    group-hover:scale-105
                  "
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

                <div className="absolute bottom-6 left-6 text-white">

                  <p className="text-sm text-white/70">
                    2027 Pilgrimage Programme
                  </p>

                  <h3 className="mt-1 text-3xl font-bold">
                    Hajj Package
                  </h3>

                </div>

              </div>


              {/* Content */}
              <div className="p-8">

                <div className="flex items-end justify-between gap-4">

                  <div>

                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-neutral-400">
                      Deposit From
                    </p>

                    <p className="mt-1 text-4xl font-bold text-[#7A2330]">
                      ₦5M
                    </p>

                  </div>

                  <div className="rounded-xl bg-[#7A2330]/10 px-4 py-3 text-right">

                    <div className="flex items-center gap-2">

                      <CalendarDays className="h-4 w-4 text-[#7A2330]" />

                      <p className="font-bold text-[#7A2330]">
                        2027
                      </p>

                    </div>

                    <p className="mt-1 text-xs text-neutral-500">
                      Hajj Programme
                    </p>

                  </div>

                </div>


                <div className="my-7 h-px bg-neutral-200" />


                <div className="space-y-4">

                  <PackagePoint text="Hajj 2027 travel programme" />
                  <PackagePoint text="Professional pilgrimage support" />
                  <PackagePoint text="Travel coordination" />
                  <PackagePoint text="Makkah & Madinah journey support" />

                </div>


                <Link
                  href="/contact"
                  className="
                    mt-8 flex h-13 w-full
                    items-center justify-center gap-2
                    rounded-xl
                    bg-[#12080A]
                    font-semibold text-white
                    transition-all duration-300
                    hover:bg-[#7A2330]
                    hover:shadow-lg
                  "
                >
                  Reserve Hajj 2027
                  <ArrowRight className="h-4 w-4" />
                </Link>

              </div>

            </div>

          </div>

          {/* Pricing note */}
          <p className="mx-auto mt-8 max-w-3xl text-center text-sm leading-6 text-neutral-500">
            Package pricing shown above is based on the current programme
            information provided by UNASCO. Final package details,
            availability, itinerary and applicable terms should be confirmed
            directly with UNASCO before payment.
          </p>

        </div>

      </section>


      {/* =====================================================
          SAUDI DESTINATIONS
      ===================================================== */}

      <section className="bg-white py-24 lg:py-32">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="grid gap-8 md:grid-cols-2">

            {/* Makkah */}
            <DestinationCard
              image="/hajj-umrah/makkah.jpg"
              title="Makkah"
              subtitle="The Sacred City"
            />

            {/* Madinah */}
            <DestinationCard
              image="/hajj-umrah/madinah.jpg"
              title="Madinah"
              subtitle="The City of the Prophet ﷺ"
            />

          </div>

        </div>

      </section>


      {/* =====================================================
          SERVICES
      ===================================================== */}

      <section className="bg-[#12080A] py-24 text-white lg:py-32">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="mx-auto max-w-3xl text-center">

            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#C9828D]">
              Pilgrimage Support
            </p>

            <h2 className="mt-5 text-4xl font-bold sm:text-5xl">
              Professional support for your journey
            </h2>

            <p className="mt-5 text-lg leading-8 text-white/60">
              UNASCO combines aviation, logistics and travel experience to
              provide structured pilgrimage support.
            </p>

          </div>


          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            <ServiceCard
              icon={<Plane />}
              title="Flight Coordination"
              description="Professional flight planning and aviation coordination for pilgrimage travel."
            />

            <ServiceCard
              icon={<Hotel />}
              title="Accommodation Support"
              description="Assistance with accommodation arrangements and pilgrimage travel planning."
            />

            <ServiceCard
              icon={<Globe2 />}
              title="Ground Travel Support"
              description="Coordinated support for movement between key pilgrimage destinations."
            />

            <ServiceCard
              icon={<Users />}
              title="Group Pilgrimage Travel"
              description="Organized travel support for families, groups and pilgrimage delegations."
            />

            <ServiceCard
              icon={<ShieldCheck />}
              title="Reliable Assistance"
              description="Professional support focused on dependable service and a smooth journey."
            />

            <ServiceCard
              icon={<CheckCircle2 />}
              title="Journey Assistance"
              description="Dedicated assistance throughout the pilgrimage travel process."
            />

          </div>

        </div>

      </section>


      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="relative overflow-hidden bg-white py-24 lg:py-32">

        <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-[#7A2330]/10 blur-3xl" />

        <div className="relative mx-auto max-w-5xl px-6 text-center lg:px-8">

          <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#7A2330]">
            Begin Your Journey
          </p>

          <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Ready for Hajj or Umrah?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-neutral-600">
            Contact UNASCO today to discuss your pilgrimage package,
            availability and complete travel arrangements.
          </p>

          <Link
            href="/contact"
            className="
              mt-9 inline-flex h-13 items-center gap-3
              rounded-full bg-[#7A2330]
              px-8 font-semibold text-white
              shadow-xl shadow-[#7A2330]/20
              transition-all duration-300
              hover:-translate-y-1
              hover:bg-[#8F2B3A]
            "
          >
            Contact UNASCO
            <ArrowRight className="h-4 w-4" />
          </Link>

        </div>

      </section>

    </main>
  )
}


/* =========================================================
   PACKAGE POINT
========================================================= */

function PackagePoint({
  text,
}: {
  text: string
}) {
  return (
    <div className="flex items-center gap-3">

      <CheckCircle2 className="h-5 w-5 shrink-0 text-[#7A2330]" />

      <span className="text-sm font-medium text-neutral-700">
        {text}
      </span>

    </div>
  )
}


/* =========================================================
   DESTINATION CARD
========================================================= */

function DestinationCard({
  image,
  title,
  subtitle,
}: {
  image: string
  title: string
  subtitle: string
}) {
  return (
    <div className="group relative h-[430px] overflow-hidden rounded-[2rem]">

      <Image
        src={image}
        alt={`${title}, Saudi Arabia`}
        fill
        className="
          object-cover
          transition-transform duration-700
          group-hover:scale-105
        "
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

      <div className="absolute bottom-8 left-8 text-white">

        <p className="text-sm font-medium uppercase tracking-[0.2em] text-white/70">
          Saudi Arabia
        </p>

        <h3 className="mt-2 text-4xl font-bold">
          {title}
        </h3>

        <p className="mt-1 text-white/70">
          {subtitle}
        </p>

      </div>

    </div>
  )
}


/* =========================================================
   SERVICE CARD
========================================================= */

function ServiceCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode
  title: string
  description: string
}) {
  return (
    <div
      className="
        group rounded-3xl
        border border-white/10
        bg-white/[0.04]
        p-7
        backdrop-blur-sm
        transition-all duration-500
        hover:-translate-y-2
        hover:border-[#7A2330]/60
        hover:bg-white/[0.07]
      "
    >

      <div
        className="
          flex h-14 w-14 items-center justify-center
          rounded-2xl
          bg-[#7A2330]
          text-white
          transition-all duration-500
          group-hover:scale-105
          group-hover:bg-[#8F2B3A]
        "
      >
        <div className="h-6 w-6">
          {icon}
        </div>
      </div>

      <h3 className="mt-7 text-xl font-bold text-white">
        {title}
      </h3>

      <p className="mt-3 leading-7 text-white/55">
        {description}
      </p>

    </div>
  )
}