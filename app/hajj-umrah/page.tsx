"use client";

import Image from "next/image";
import Link from "next/link";
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
} from "lucide-react";

const MAROON = "#561923";
const MAROON_LIGHT = "#7A2330";
const MAROON_SOFT = "#C9828D";
const MAROON_DARK = "#3D1118";

const GOLD = "#D4A72C";
const GOLD_LIGHT = "#F3D98B";

/*
 * High-quality Unsplash Kaaba image.
 * Source:
 * https://unsplash.com/photos/kaaba-in-makkah-al-mukarramah-EWtprB5HAL0
 */
const KAABA_IMAGE =
  "https://images.unsplash.com/photo-1713239060784-e6ed820a0715?auto=format&fit=crop&w=3000&q=90";

export default function HajjUmrahPage() {
  return (
    <main className="min-h-screen bg-white text-black">
      {/* =====================================================
          HERO
      ===================================================== */}

      <section
        className="relative min-h-[720px] overflow-hidden text-white"
        style={{ backgroundColor: MAROON_DARK }}
      >
        <Image
          src={KAABA_IMAGE}
          alt="Kaaba in Makkah, Saudi Arabia"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Premium maroon overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(61,17,24,0.96) 0%, rgba(86,25,35,0.78) 48%, rgba(86,25,35,0.30) 100%)",
          }}
        />

        {/* Bottom depth */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(61,17,24,0.96) 0%, rgba(61,17,24,0.42) 45%, transparent 100%)",
          }}
        />

        {/* Gold glow */}
        <div
          className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full blur-[110px]"
          style={{ backgroundColor: "rgba(212,167,44,0.18)" }}
        />

        {/* Maroon glow */}
        <div
          className="pointer-events-none absolute -bottom-40 right-0 h-[500px] w-[500px] rounded-full blur-[130px]"
          style={{ backgroundColor: "rgba(122,35,48,0.45)" }}
        />

        <div className="relative z-10 mx-auto flex min-h-[720px] max-w-7xl items-center px-6 py-32 lg:px-8">
          <div className="max-w-4xl">
            {/* Badge */}
            <div
              className="
                inline-flex items-center gap-3
                rounded-full border border-white/25
                bg-black/20 px-5 py-2.5
                text-sm font-semibold text-white
                shadow-xl backdrop-blur-xl
                animate-[fadeInUp_.7s_ease-out]
              "
            >
              <span
                className="h-2.5 w-2.5 rounded-full"
                style={{
                  backgroundColor: GOLD_LIGHT,
                  boxShadow: "0 0 15px rgba(243,217,139,0.9)",
                }}
              />

              <MapPin
                className="h-4 w-4"
                style={{ color: GOLD_LIGHT }}
              />

              <span>Makkah • Madinah • Saudi Arabia</span>
            </div>

            {/* Heading */}
            <h1
              className="
                mt-7
                text-5xl font-extrabold tracking-tight
                sm:text-6xl
                lg:text-8xl
                animate-[fadeInUp_.9s_ease-out]
              "
            >
              Your Journey to
              <span
                className="block"
                style={{ color: GOLD_LIGHT }}
              >
                the Holy Lands.
              </span>
            </h1>

            {/* Gold divider */}
            <div
              className="mt-7 h-1 w-24 rounded-full"
              style={{ backgroundColor: GOLD }}
            />

            <p
              className="
                mt-7 max-w-2xl
                text-lg leading-8
                text-white/80
                lg:text-xl
                animate-[fadeInUp_1.1s_ease-out]
              "
            >
              Professional Hajj and Umrah travel support from UNASCO
              Aviation Limited, helping pilgrims plan their journey to
              Makkah and Madinah with confidence.
            </p>

            {/* Buttons */}
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
                  rounded-full
                  px-7
                  font-bold
                  shadow-xl
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:shadow-2xl
                "
                style={{
                  backgroundColor: GOLD,
                  color: MAROON_DARK,
                }}
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
                  border border-white/40
                  bg-white/10
                  px-7
                  font-semibold
                  text-white
                  backdrop-blur-md
                  transition-all duration-300
                  hover:border-white
                  hover:bg-white
                "
              >
                Contact UNASCO
              </Link>
            </div>

            {/* Trust points */}
            <div className="mt-12 flex flex-wrap gap-x-8 gap-y-4 text-sm text-white/85">
              <div className="flex items-center gap-2">
                <CheckCircle2
                  className="h-5 w-5"
                  style={{ color: GOLD_LIGHT }}
                />
                Professional Travel Support
              </div>

              <div className="flex items-center gap-2">
                <CheckCircle2
                  className="h-5 w-5"
                  style={{ color: GOLD_LIGHT }}
                />
                Makkah & Madinah
              </div>

              <div className="flex items-center gap-2">
                <CheckCircle2
                  className="h-5 w-5"
                  style={{ color: GOLD_LIGHT }}
                />
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
              <p
                className="text-sm font-bold uppercase tracking-[0.25em]"
                style={{ color: MAROON }}
              >
                Pilgrimage Travel
              </p>

              <h2 className="mt-5 text-4xl font-extrabold tracking-tight sm:text-5xl">
                A journey of faith deserves careful planning.
              </h2>

              <div
                className="mt-6 h-1 w-20 rounded-full"
                style={{ backgroundColor: GOLD }}
              />

              <p className="mt-7 max-w-xl text-lg leading-8 text-neutral-600">
                UNASCO provides organized Hajj and Umrah travel support
                for individuals, families and pilgrimage groups
                travelling to Saudi Arabia.
              </p>

              <p className="mt-5 max-w-xl text-lg leading-8 text-neutral-600">
                Our pilgrimage services are designed around dependable
                coordination, professional travel support and a
                comfortable journey from departure to the Holy Lands.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <div
                  className="rounded-full px-4 py-2 text-sm font-semibold"
                  style={{
                    backgroundColor: "rgba(86,25,35,0.08)",
                    color: MAROON,
                  }}
                >
                  Makkah
                </div>

                <div
                  className="rounded-full px-4 py-2 text-sm font-semibold"
                  style={{
                    backgroundColor: "rgba(212,167,44,0.15)",
                    color: "#80620F",
                  }}
                >
                  Madinah
                </div>

                <div
                  className="rounded-full px-4 py-2 text-sm font-semibold"
                  style={{
                    backgroundColor: "rgba(86,25,35,0.08)",
                    color: MAROON,
                  }}
                >
                  Hajj & Umrah
                </div>
              </div>
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

              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(61,17,24,0.70), transparent 60%)",
                }}
              />

              <div className="absolute bottom-6 left-6 text-white">
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-white/75">
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
        className="bg-[#FAF8F8] py-24 lg:py-32"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div
              className="
                inline-flex items-center gap-2
                rounded-full
                px-4 py-2
                text-sm font-bold
              "
              style={{
                backgroundColor: "rgba(86,25,35,0.09)",
                color: MAROON,
              }}
            >
              <Star
                className="h-4 w-4"
                style={{ color: GOLD }}
              />

              UNASCO PILGRIMAGE PACKAGES
            </div>

            <h2 className="mt-5 text-4xl font-extrabold tracking-tight sm:text-5xl">
              Hajj & Umrah Packages
            </h2>

            <p className="mt-5 text-lg leading-8 text-neutral-600">
              Choose your pilgrimage programme and speak with our team
              for the complete itinerary, availability and package
              details.
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

                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(61,17,24,0.82), rgba(0,0,0,0.08) 60%, transparent)",
                  }}
                />

                <div
                  className="
                    absolute left-6 top-6 rounded-full
                    bg-white px-4 py-2 text-sm font-bold shadow-lg
                  "
                  style={{ color: MAROON }}
                >
                  UMRAH
                </div>

                <div className="absolute bottom-6 left-6 text-white">
                  <p className="text-sm text-white/75">
                    Pilgrimage Programme
                  </p>

                  <h3 className="mt-1 text-3xl font-bold">
                    Umrah Package
                  </h3>
                </div>
              </div>

              <div className="p-8">
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-neutral-400">
                      Starting From
                    </p>

                    <p
                      className="mt-1 text-4xl font-extrabold"
                      style={{ color: MAROON }}
                    >
                      ₦2.5M
                    </p>
                  </div>

                  <div
                    className="rounded-xl px-4 py-3 text-right"
                    style={{
                      backgroundColor: "rgba(86,25,35,0.07)",
                    }}
                  >
                    <p className="text-xs text-neutral-500">
                      Destination
                    </p>

                    <p
                      className="font-bold"
                      style={{ color: MAROON_DARK }}
                    >
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
                    font-semibold text-white
                    transition-all duration-300
                    hover:shadow-lg
                  "
                  style={{ backgroundColor: MAROON }}
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
                border-2
                bg-white
                shadow-xl
                transition-all duration-500
                hover:-translate-y-2
                hover:shadow-2xl
              "
              style={{ borderColor: "rgba(212,167,44,0.50)" }}
            >
              {/* Recommended */}
              <div
                className="
                  absolute right-6 top-6 z-20
                  rounded-full
                  px-4 py-2
                  text-xs font-bold uppercase tracking-wide
                  shadow-lg
                "
                style={{
                  backgroundColor: GOLD,
                  color: MAROON_DARK,
                }}
              >
                Hajj 2027
              </div>

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

                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(61,17,24,0.88), rgba(0,0,0,0.20) 60%, transparent)",
                  }}
                />

                <div className="absolute bottom-6 left-6 text-white">
                  <p className="text-sm text-white/75">
                    2027 Pilgrimage Programme
                  </p>

                  <h3 className="mt-1 text-3xl font-bold">
                    Hajj Package
                  </h3>
                </div>
              </div>

              <div className="p-8">
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-neutral-400">
                      Deposit From
                    </p>

                    <p
                      className="mt-1 text-4xl font-extrabold"
                      style={{ color: MAROON }}
                    >
                      ₦5M
                    </p>
                  </div>

                  <div
                    className="rounded-xl px-4 py-3 text-right"
                    style={{
                      backgroundColor: "rgba(212,167,44,0.15)",
                    }}
                  >
                    <div className="flex items-center gap-2">
                      <CalendarDays
                        className="h-4 w-4"
                        style={{ color: "#80620F" }}
                      />

                      <p
                        className="font-bold"
                        style={{ color: "#80620F" }}
                      >
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
                    font-semibold text-white
                    transition-all duration-300
                    hover:shadow-lg
                  "
                  style={{ backgroundColor: MAROON_DARK }}
                >
                  Reserve Hajj 2027

                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>

          <p className="mx-auto mt-8 max-w-3xl text-center text-sm leading-6 text-neutral-500">
            Package pricing shown above is based on the current programme
            information provided by UNASCO. Final package details,
            availability, itinerary and applicable terms should be
            confirmed directly with UNASCO before payment.
          </p>
        </div>
      </section>

      {/* =====================================================
          SAUDI DESTINATIONS
      ===================================================== */}

      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p
              className="text-sm font-bold uppercase tracking-[0.25em]"
              style={{ color: MAROON }}
            >
              The Holy Cities
            </p>

            <h2 className="mt-4 text-4xl font-extrabold sm:text-5xl">
              Makkah & Madinah
            </h2>

            <p className="mt-5 text-lg leading-8 text-neutral-600">
              Professional travel support for your pilgrimage journey
              across the Holy Lands.
            </p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-2">
            <DestinationCard
              image="/hajj-umrah/makkah.jpg"
              title="Makkah"
              subtitle="The Sacred City"
            />

            <DestinationCard
              image="/hajj-umrah/madinah.jpg"
              title="Madinah"
              subtitle="The City of the Prophet ﷺ"
            />
          </div>
        </div>
      </section>

      {/* =====================================================
          PILGRIMAGE SUPPORT
      ===================================================== */}

      <section className="relative overflow-hidden bg-white py-24 lg:py-32">
        {/* Maroon decorative background */}
        <div
          className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full blur-[120px]"
          style={{ backgroundColor: "rgba(86,25,35,0.08)" }}
        />

        <div
          className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full blur-[120px]"
          style={{ backgroundColor: "rgba(212,167,44,0.10)" }}
        />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div
              className="
                inline-flex items-center gap-2
                rounded-full
                border px-4 py-2
                text-sm font-bold
                uppercase tracking-[0.18em]
              "
              style={{
                borderColor: "rgba(86,25,35,0.18)",
                backgroundColor: "rgba(86,25,35,0.06)",
                color: MAROON,
              }}
            >
              <Star
                className="h-4 w-4"
                style={{ color: GOLD }}
              />

              Pilgrimage Support
            </div>

            <h2 className="mt-6 text-4xl font-extrabold text-black sm:text-5xl lg:text-6xl">
              Professional support for your journey
            </h2>

            <div
              className="mx-auto mt-6 h-1 w-20 rounded-full"
              style={{ backgroundColor: GOLD }}
            />

            <p className="mt-6 text-lg leading-8 text-neutral-600">
              UNASCO combines aviation, logistics and travel experience
              to provide structured pilgrimage support.
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

      <section className="relative overflow-hidden bg-[#FAF8F8] py-24 lg:py-32">
        <div
          className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full blur-3xl"
          style={{ backgroundColor: "rgba(212,167,44,0.10)" }}
        />

        <div className="relative mx-auto max-w-5xl px-6 text-center lg:px-8">
          <p
            className="text-sm font-bold uppercase tracking-[0.25em]"
            style={{ color: MAROON }}
          >
            Begin Your Journey
          </p>

          <h2 className="mt-5 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Ready for Hajj or Umrah?
          </h2>

          <div
            className="mx-auto mt-6 h-1 w-20 rounded-full"
            style={{ backgroundColor: GOLD }}
          />

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-neutral-600">
            Contact UNASCO today to discuss your pilgrimage package,
            availability and complete travel arrangements.
          </p>

          <Link
            href="/contact"
            className="
              mt-9 inline-flex h-13 items-center gap-3
              rounded-full
              px-8
              font-bold
              text-white
              shadow-xl
              transition-all duration-300
              hover:-translate-y-1
              hover:shadow-2xl
            "
            style={{
              backgroundColor: MAROON,
              boxShadow: "0 20px 40px rgba(86,25,35,0.18)",
            }}
          >
            Contact UNASCO

            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}

/* =========================================================
   PACKAGE POINT
========================================================= */

function PackagePoint({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3">
      <CheckCircle2
        className="h-5 w-5 shrink-0"
        style={{ color: MAROON }}
      />

      <span className="text-sm font-medium text-neutral-700">
        {text}
      </span>
    </div>
  );
}

/* =========================================================
   DESTINATION CARD
========================================================= */

function DestinationCard({
  image,
  title,
  subtitle,
}: {
  image: string;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="group relative h-[430px] overflow-hidden rounded-[2rem] shadow-xl">
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

      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(61,17,24,0.90), rgba(0,0,0,0.20) 55%, transparent)",
        }}
      />

      <div className="absolute bottom-8 left-8 text-white">
        <p
          className="text-sm font-medium uppercase tracking-[0.2em]"
          style={{ color: GOLD_LIGHT }}
        >
          Saudi Arabia
        </p>

        <h3 className="mt-2 text-4xl font-extrabold">
          {title}
        </h3>

        <p className="mt-1 text-white/75">
          {subtitle}
        </p>
      </div>
    </div>
  );
}

/* =========================================================
   SERVICE CARD
========================================================= */

function ServiceCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div
      className="
        group rounded-3xl
        border
        bg-white
        p-7
        shadow-sm
        transition-all duration-500
        hover:-translate-y-2
        hover:shadow-xl
      "
      style={{
        borderColor: "rgba(86,25,35,0.12)",
      }}
    >
      <div
        className="
          flex h-14 w-14 items-center justify-center
          rounded-2xl
          text-white
          shadow-lg
          transition-all duration-500
          group-hover:scale-110
        "
        style={{
          backgroundColor: MAROON,
          boxShadow: "0 10px 25px rgba(86,25,35,0.18)",
        }}
      >
        <div className="h-6 w-6">
          {icon}
        </div>
      </div>

      <h3
        className="mt-7 text-xl font-bold"
        style={{ color: MAROON_DARK }}
      >
        {title}
      </h3>

      <p className="mt-3 leading-7 text-neutral-600">
        {description}
      </p>

      <div
        className="
          mt-6 h-0.5 w-10 rounded-full
          transition-all duration-500
          group-hover:w-16
        "
        style={{ backgroundColor: GOLD }}
      />
    </div>
  );
}