"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  PlaneTakeoff,
  ShieldCheck,
  Globe2,
  MapPin,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export function HomeHero() {
  return (
    <section className="group relative flex min-h-screen items-center justify-center overflow-hidden bg-[#12080A]">
      {/* =========================================================
          BACKGROUND IMAGE
      ========================================================== */}

      <Image
        src="/hero-cargo-aircraft.png"
        alt="UNASCO Aviation cargo aircraft operations"
        fill
        priority
        sizes="100vw"
        className="
          object-cover
          object-center
          scale-105
          transition-transform
          duration-[12000ms]
          ease-out
          group-hover:scale-110
        "
      />

      {/* =========================================================
          PREMIUM MAROON OVERLAY
      ========================================================== */}

      <div
        className="
          absolute inset-0
          bg-gradient-to-r
          from-[#12080A]/90
          via-[#12080A]/70
          to-[#12080A]/35
        "
      />

      <div
        className="
          absolute inset-0
          bg-gradient-to-t
          from-[#12080A]/95
          via-[#12080A]/45
          to-[#12080A]/20
        "
      />

      {/* =========================================================
          CENTER MAROON LIGHT EFFECT
      ========================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -left-32
          top-1/4
          h-96
          w-96
          rounded-full
          bg-[#7A2330]/30
          blur-[120px]
          animate-pulse
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-32
          bottom-10
          h-80
          w-80
          rounded-full
          bg-[#8F2B3A]/20
          blur-[120px]
        "
      />

      {/* =========================================================
          MAIN CONTENT
      ========================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          flex
          w-full
          max-w-7xl
          flex-col
          items-center
          px-6
          py-32
          text-center
          lg:px-8
        "
      >
        <div className="flex w-full max-w-6xl flex-col items-center">

          {/* =====================================================
              BADGE
          ====================================================== */}

          <div
            className="
              inline-flex
              items-center
              gap-3
              rounded-full
              border
              border-white/20
              bg-black/20
              px-5
              py-2.5
              text-sm
              font-medium
              text-white
              shadow-2xl
              backdrop-blur-xl
              animate-[fadeInUp_0.8s_ease-out_both]
            "
          >
            <span className="relative flex h-2.5 w-2.5">
              <span
                className="
                  absolute
                  inline-flex
                  h-full
                  w-full
                  animate-ping
                  rounded-full
                  bg-[#C9828D]
                  opacity-75
                "
              />

              <span
                className="
                  relative
                  inline-flex
                  h-2.5
                  w-2.5
                  rounded-full
                  bg-[#C9828D]
                "
              />
            </span>

            <PlaneTakeoff className="h-4 w-4 text-[#C9828D]" />

            <span>
              Aviation
              <span className="mx-1.5 text-white/30">•</span>
              Cargo
              <span className="mx-1.5 text-white/30">•</span>
              Logistics
              <span className="mx-1.5 text-white/30">•</span>
              Hajj &amp; Umrah
            </span>
          </div>

          {/* =====================================================
              MAIN HEADING
          ====================================================== */}

          <div
            className="
              mt-8
              flex
              flex-col
              items-center
              animate-[fadeInUp_0.9s_0.15s_ease-out_both]
            "
          >
            {/* UNASCO */}

            <h1
              className="
                font-extrabold
                tracking-[-0.04em]
                text-white
                text-6xl
                leading-none
                sm:text-7xl
                md:text-8xl
                lg:text-[7rem]
                xl:text-[8.5rem]
              "
            >
              UNASCO
            </h1>

            {/* Connecting People & Cargo */}

            <div
              className="
                mt-4
                text-3xl
                font-normal
                leading-tight
                tracking-tight
                sm:text-4xl
                md:text-5xl
                lg:text-6xl
              "
            >
              <span className="text-white">
                Connecting{" "}
              </span>

              <span className="text-[#C9828D]">
                People &amp; Cargo
              </span>
            </div>

            {/* Decorative line */}

            <div
              className="
                mt-7
                h-1
                w-24
                rounded-full
                bg-[#C9828D]
                shadow-[0_0_25px_rgba(201,130,141,0.45)]
              "
            />
          </div>

          {/* =====================================================
              DESCRIPTION
          ====================================================== */}

          <p
            className="
              mt-8
              max-w-3xl
              animate-[fadeInUp_0.9s_0.3s_ease-out_both]
              text-base
              leading-8
              text-white/75
              sm:text-lg
              md:text-xl
            "
          >
            UNASCO Aviation Limited provides professional aviation
            support, air cargo transportation, logistics solutions,
            flight operations, airline management and Hajj &amp; Umrah
            travel services with safety, reliability and excellence.
          </p>

          {/* =====================================================
              BUTTONS
          ====================================================== */}

          <div
            className="
              mt-10
              flex
              flex-col
              items-center
              justify-center
              gap-4
              sm:flex-row
              animate-[fadeInUp_0.9s_0.45s_ease-out_both]
            "
          >
            {/* PRIMARY */}

            <Link
              href="/contact"
              className={cn(
                buttonVariants(),
                `
                  group/btn
                  h-14
                  min-w-[220px]
                  rounded-xl
                  bg-[#7A2330]
                  px-7
                  text-base
                  font-semibold
                  text-white
                  shadow-[0_15px_40px_rgba(122,35,48,0.30)]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-[#8F2B3A]
                  hover:shadow-[0_20px_50px_rgba(122,35,48,0.40)]
                `
              )}
            >
              Request a Quote

              <ArrowRight
                className="
                  ml-2
                  h-4
                  w-4
                  transition-transform
                  duration-300
                  group-hover/btn:translate-x-1
                "
              />
            </Link>

            {/* SECONDARY */}

            <Link
              href="/cargo-services"
              className={cn(
                buttonVariants({ variant: "outline" }),
                `
                  h-14
                  min-w-[220px]
                  rounded-xl
                  border-white/40
                  bg-white/10
                  px-7
                  text-base
                  font-semibold
                  text-white
                  backdrop-blur-md
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-white
                  hover:bg-white
                  hover:text-[#12080A]
                `
              )}
            >
              Explore Our Services
            </Link>
          </div>

          {/* =====================================================
              TRUST FEATURES
          ====================================================== */}

          <div
            className="
              mt-12
              grid
              w-full
              max-w-4xl
              gap-4
              sm:grid-cols-3
              animate-[fadeInUp_0.9s_0.6s_ease-out_both]
            "
          >
            {/* ===================================================
                SAFE & RELIABLE
            ==================================================== */}

            <div
              className="
                group/feature
                flex
                flex-col
                items-center
                justify-center
                rounded-2xl
                border
                border-white/15
                bg-black/20
                px-5
                py-6
                text-center
                backdrop-blur-md
                transition-all
                duration-500
                hover:-translate-y-1
                hover:border-[#7A2330]/60
                hover:bg-white/10
              "
            >
              <div
                className="
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-xl
                  bg-[#7A2330]/40
                  text-[#C9828D]
                  transition-all
                  duration-500
                  group-hover/feature:scale-110
                  group-hover/feature:bg-[#7A2330]
                  group-hover/feature:text-white
                "
              >
                <ShieldCheck className="h-6 w-6" />
              </div>

              <p className="mt-4 text-sm font-semibold text-white">
                Safe &amp; Reliable
              </p>

              <p className="mt-1 text-xs text-white/50">
                Professional Operations
              </p>
            </div>

            {/* ===================================================
                GLOBAL NETWORK
            ==================================================== */}

            <div
              className="
                group/feature
                flex
                flex-col
                items-center
                justify-center
                rounded-2xl
                border
                border-white/15
                bg-black/20
                px-5
                py-6
                text-center
                backdrop-blur-md
                transition-all
                duration-500
                hover:-translate-y-1
                hover:border-[#7A2330]/60
                hover:bg-white/10
              "
            >
              <div
                className="
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-xl
                  bg-[#7A2330]/40
                  text-[#C9828D]
                  transition-all
                  duration-500
                  group-hover/feature:scale-110
                  group-hover/feature:bg-[#7A2330]
                  group-hover/feature:text-white
                "
              >
                <Globe2 className="h-6 w-6" />
              </div>

              <p className="mt-4 text-sm font-semibold text-white">
                Global Network
              </p>

              <p className="mt-1 text-xs text-white/50">
                Africa • Asia • Global
              </p>
            </div>

            {/* ===================================================
                HAJJ & UMRAH
            ==================================================== */}

            <div
              className="
                group/feature
                flex
                flex-col
                items-center
                justify-center
                rounded-2xl
                border
                border-white/15
                bg-black/20
                px-5
                py-6
                text-center
                backdrop-blur-md
                transition-all
                duration-500
                hover:-translate-y-1
                hover:border-[#7A2330]/60
                hover:bg-white/10
              "
            >
              <div
                className="
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-xl
                  bg-[#7A2330]/40
                  text-[#C9828D]
                  transition-all
                  duration-500
                  group-hover/feature:scale-110
                  group-hover/feature:bg-[#7A2330]
                  group-hover/feature:text-white
                "
              >
                <MapPin className="h-6 w-6" />
              </div>

              <p className="mt-4 text-sm font-semibold text-white">
                Hajj &amp; Umrah
              </p>

              <p className="mt-1 text-xs text-white/50">
                Makkah • Madinah
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================
          BOTTOM SCROLL INDICATOR
      ========================================================== */}

      <div
        className="
          absolute
          bottom-8
          left-1/2
          hidden
          -translate-x-1/2
          flex-col
          items-center
          gap-3
          text-white/40
          md:flex
          animate-[fadeIn_1s_1.2s_ease-out_both]
        "
      >
        <span
          className="
            text-[10px]
            font-semibold
            uppercase
            tracking-[0.3em]
          "
        >
          Explore
        </span>

        <div className="h-10 w-px overflow-hidden bg-white/20">
          <div
            className="
              h-1/2
              w-full
              animate-[scrollLine_1.8s_ease-in-out_infinite]
              bg-[#C9828D]
            "
          />
        </div>
      </div>
    </section>
  );
}