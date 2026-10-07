import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

const highlights = [
  "Flight Support Services",
  "Flight Operations & Airline Management",
  "Air Cargo Transportation",
  "General Aviation & Travel Services",
  "Nationwide & International Logistics",
];

export function CompanyProfile() {
  return (
    <section className="relative overflow-hidden bg-background py-24 lg:py-32">

      {/* =====================================================
          BACKGROUND DECORATION
      ====================================================== */}

      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-20 px-6 lg:grid-cols-2">

        {/* =====================================================
            LEFT SIDE
        ====================================================== */}

        <div className="relative">

          {/* ===================================================
              CLEAN CARGO IMAGE
          ==================================================== */}

          <div className="overflow-hidden rounded-3xl shadow-2xl">
            <Image
              src="/air-cargo-loading.png"
              alt="UNASCO Aviation Cargo Operations"
              width={720}
              height={600}
              priority
              className="
                h-full
                w-full
                object-cover
                transition-transform
                duration-700
                hover:scale-105
              "
            />
          </div>

          {/* ===================================================
    RC + IATA CARDS
==================================================== */}

<div
  className="
    relative
    z-10
    -mt-8
    mx-4
    grid
    gap-4
    sm:mx-8
    sm:grid-cols-2
  "
>

  {/* =================================================
      RC REGISTRATION CARD
  ================================================= */}

  <div
    className="
      group
      relative
      overflow-hidden
      rounded-2xl
      border
      border-[#561923]/20
      bg-white
      px-6
      py-5
      shadow-[0_15px_40px_rgba(86,25,35,0.18)]
      transition-all
      duration-500
      hover:-translate-y-2
      hover:border-[#561923]/40
      hover:shadow-[0_22px_50px_rgba(86,25,35,0.28)]
    "
  >

    {/* Decorative glow */}
    <div
      className="
        absolute
        -right-10
        -top-10
        h-24
        w-24
        rounded-full
        bg-[#F2C6CC]/40
        blur-2xl
        transition-transform
        duration-500
        group-hover:scale-150
      "
    />

    <div className="relative z-10">

      <p
        className="
          text-[10px]
          font-bold
          uppercase
          tracking-[0.2em]
          text-[#561923]
        "
      >
        Company Registration
      </p>

      <h3
        className="
          mt-1
          text-3xl
          font-bold
          tracking-tight
          text-[#561923]
        "
      >
        RC 8207934
      </h3>

      <p
        className="
          mt-1
          text-sm
          font-medium
          text-[#561923]
        "
      >
        Registered Aviation Company
      </p>

    </div>

  </div>


  {/* =================================================
      IATA CARD
  ================================================= */}

  <div
    className="
      group
      relative
      flex
      items-center
      gap-4
      overflow-hidden
      rounded-2xl
      border
      border-[#561923]/20
      bg-white
      px-5
      py-5
      shadow-[0_15px_40px_rgba(86,25,35,0.18)]
      transition-all
      duration-500
      hover:-translate-y-2
      hover:border-[#561923]/40
      hover:shadow-[0_22px_50px_rgba(86,25,35,0.28)]
    "
  >

    {/* Decorative glow */}
    <div
      className="
        absolute
        -bottom-10
        -right-10
        h-28
        w-28
        rounded-full
        bg-[#F2C6CC]/40
        blur-2xl
        transition-transform
        duration-500
        group-hover:scale-150
      "
    />

    {/* =================================================
        ACTUAL IATA LOGO
    ================================================= */}

    <div
      className="
        relative
        z-10
        flex
        shrink-0
        items-center
        justify-center
      "
    >
      <Image
        src="/logos/iata.png"
        alt="IATA"
        width={130}
        height={80}
        priority
        className="
          h-auto
          w-[90px]
          object-contain
          transition-transform
          duration-500
          group-hover:scale-105
        "
      />
    </div>

    {/* =================================================
        IATA INFORMATION
    ================================================= */}

    <div className="relative z-10 min-w-0">

      <p
        className="
          text-[10px]
          font-bold
          uppercase
          tracking-[0.16em]
          text-[#561923]
        "
      >
        IATA Numeric Code
      </p>

      <h3
        className="
          mt-1
          text-2xl
          font-bold
          tracking-tight
          text-[#561923]
        "
      >
        59289580
      </h3>

      <p
        className="
          mt-1
          text-xs
          font-medium
          text-[#561923]
        "
      >
        Aviation Partner
      </p>

    </div>

  </div>

</div>
          {/* ===================================================
              NANTA CARD
          ==================================================== */}

          <div className="mt-5 flex justify-center">

            <div
              className="
                group
                flex
                min-h-[82px]
                min-w-[240px]
                items-center
                justify-center
                rounded-2xl
                border
                border-neutral-200
                bg-white
                px-8
                py-4
                shadow-[0_12px_35px_rgba(0,0,0,0.10)]
                transition-all
                duration-500
                hover:-translate-y-1
                hover:shadow-[0_18px_40px_rgba(0,0,0,0.15)]
              "
            >

              <Image
                src="/logos/nanta.png"
                alt="NANTA - National Association of Nigeria Travel Agencies"
                width={240}
                height={100}
                priority
                className="
                  h-auto
                  max-h-[65px]
                  w-auto
                  max-w-[200px]
                  object-contain
                  transition-transform
                  duration-500
                  group-hover:scale-105
                "
              />

            </div>

          </div>

        </div>

        {/* =====================================================
            RIGHT CONTENT
        ====================================================== */}

        <div>

          {/* Section Label */}
          <span
            className="
              text-sm
              font-semibold
              uppercase
              tracking-[0.25em]
              text-primary
            "
          >
            Company Profile
          </span>

          {/* Heading */}
          <h2
            className="
              mt-5
              text-4xl
              font-bold
              leading-tight
              lg:text-5xl
            "
          >
            Your Trusted Aviation,
            <br />
            Cargo & Logistics Partner
          </h2>

          {/* Description */}
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            UNASCO Aviation Limited is a Nigerian aviation company providing
            world-class aviation support, flight operations, airline
            management, air cargo transportation, logistics solutions.
          </p>

          <p className="mt-5 text-lg leading-8 text-muted-foreground">
            Through a growing network of aviation partners and operational
            expertise, we deliver reliable, safe, and efficient services for
            governments, businesses, organizations, and individual travelers.
          </p>

          {/* ===================================================
              SERVICES
          ==================================================== */}

          <div className="mt-10 grid gap-4 sm:grid-cols-2">

            {highlights.map((item, index) => (
              <div
                key={item}
                className={cn(
                  `
                    group
                    flex
                    items-start
                    gap-3
                    rounded-2xl
                    border
                    border-[#7A2330]/50
                    bg-[#561923]
                    p-5
                    shadow-[0_8px_24px_rgba(86,25,35,0.14)]
                    transition-all
                    duration-500
                    hover:-translate-y-1.5
                    hover:bg-[#7A2330]
                    hover:shadow-[0_14px_30px_rgba(86,25,35,0.24)]
                  `,
                  index === highlights.length - 1
                    ? "sm:col-span-2 sm:max-w-[calc(50%-0.5rem)]"
                    : "",
                )}
              >

                <CheckCircle2
                  className="
                    mt-0.5
                    h-5
                    w-5
                    shrink-0
                    text-[#F2C6CC]
                    transition-transform
                    duration-300
                    group-hover:scale-110
                  "
                />

                <span
                  className="
                    text-sm
                    font-semibold
                    leading-6
                    text-white
                  "
                >
                  {item}
                </span>

              </div>
            ))}

          </div>

          {/* ===================================================
              CTA
          ==================================================== */}

          <div className="mt-10 flex flex-wrap gap-4">

            <Link
              href="/about"
              className={cn(
                buttonVariants(),
                "h-12 rounded-xl bg-[#561923] px-7 text-white hover:bg-[#7A2330]",
              )}
            >
              Learn More About Us

              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>

            <Link
              href="/contact"
              className={cn(
                buttonVariants({ variant: "outline" }),
                "h-12 rounded-xl border-[#561923] px-7 text-[#561923] hover:bg-[#F2C6CC]",
              )}
            >
              Contact Our Team
            </Link>

          </div>

        </div>
      </div>
    </section>
  );
}