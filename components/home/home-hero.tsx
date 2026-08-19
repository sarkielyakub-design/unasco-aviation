'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, PlaneTakeoff, ShieldCheck, Globe2 } from 'lucide-react'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'

export function HomeHero() {
  return (
    <section className="group relative flex min-h-screen items-center overflow-hidden bg-slate-950">

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
          PREMIUM OVERLAY
      ========================================================== */}

      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/75 to-slate-950/25" />

      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/20" />

      {/* Subtle blue glow */}
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
          bg-primary/20
          blur-[120px]
          animate-pulse
        "
      />

      {/* =========================================================
          CONTENT
      ========================================================== */}

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-32 lg:px-8">

        <div className="max-w-4xl">

          {/* =====================================================
              BADGE
          ====================================================== */}

          <div
            className="
              animate-[fadeInUp_0.8s_ease-out_both]
              inline-flex
              items-center
              gap-3
              rounded-full
              border
              border-white/20
              bg-white/10
              px-5
              py-2.5
              text-sm
              font-medium
              text-white
              shadow-2xl
              backdrop-blur-xl
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
                  bg-orange-400
                  opacity-75
                "
              />

              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-orange-400" />

            </span>

            <PlaneTakeoff className="h-4 w-4 text-orange-400" />

            <span>
              Aviation <span className="mx-1 text-white/40">•</span>
              Cargo <span className="mx-1 text-white/40">•</span>
              Logistics
            </span>

          </div>

          {/* =====================================================
              MAIN HEADING
          ====================================================== */}

          <h1
            className="
              mt-8
              animate-[fadeInUp_0.9s_0.15s_ease-out_both]
              text-5xl
              font-extrabold
              leading-[1.05]
              tracking-tight
              text-white
              sm:text-6xl
              lg:text-7xl
              xl:text-[5.5rem]
            "
          >
              Unasco Cargo
            

            <br />

            <span
              className="
                relative
                inline-block
                text-primary
              "
            >
              To The World.

              {/* Animated underline */}
              <span
                aria-hidden="true"
                className="
                  absolute
                  -bottom-2
                  left-0
                  h-1
                  w-20
                  origin-left
                  animate-[scaleIn_0.8s_0.8s_ease-out_both]
                  rounded-full
                  bg-orange-400
                "
              />

            </span>

          </h1>

          {/* =====================================================
              DESCRIPTION
          ====================================================== */}

          <p
            className="
              mt-8
              max-w-2xl
              animate-[fadeInUp_0.9s_0.3s_ease-out_both]
              text-base
              leading-8
              text-white/75
              sm:text-lg
            "
          >
            UNASCO Aviation Limited provides professional aviation support,
            air cargo transportation, logistics solutions, flight operations
            and airline management with safety, reliability and operational
            excellence.
          </p>

          {/* =====================================================
              BUTTONS
          ====================================================== */}

          <div
            className="
              mt-10
              flex
              flex-wrap
              gap-4
              animate-[fadeInUp_0.9s_0.45s_ease-out_both]
            "
          >

            {/* Primary CTA */}

            <Link
              href="/contact"
              className={cn(
                buttonVariants(),
                `
                  group/btn
                  h-14
                  rounded-xl
                  bg-[#FF6B00]
                  px-7
                  text-base
                  font-semibold
                  text-white
                  shadow-[0_15px_40px_rgba(255,107,0,0.25)]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-[#ff7d1f]
                  hover:shadow-[0_20px_50px_rgba(255,107,0,0.35)]
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

            {/* Secondary CTA */}

            <Link
              href="/cargo-services"
              className={cn(
                buttonVariants({ variant: 'outline' }),
                `
                  h-14
                  rounded-xl
                  border-white/30
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
                  hover:text-slate-950
                `
              )}
            >
              Explore Cargo Services
            </Link>

          </div>

          {/* =====================================================
              TRUST FEATURES
          ====================================================== */}

          <div
            className="
              mt-12
              grid
              max-w-2xl
              gap-4
              sm:grid-cols-2
              animate-[fadeInUp_0.9s_0.6s_ease-out_both]
            "
          >

            {/* Feature 1 */}

            <div
              className="
                group/feature
                flex
                items-center
                gap-4
                rounded-2xl
                border
                border-white/10
                bg-white/5
                px-5
                py-4
                backdrop-blur-md
                transition-all
                duration-500
                hover:-translate-y-1
                hover:border-primary/40
                hover:bg-white/10
              "
            >

              <div
                className="
                  flex
                  h-11
                  w-11
                  shrink-0
                  items-center
                  justify-center
                  rounded-xl
                  bg-primary/15
                  text-primary
                  transition-all
                  duration-500
                  group-hover/feature:scale-110
                  group-hover/feature:bg-primary
                  group-hover/feature:text-white
                "
              >
                <ShieldCheck className="h-5 w-5" />
              </div>

              <div>

                <p className="text-sm font-semibold text-white">
                  Safe & Reliable
                </p>

                <p className="mt-0.5 text-xs text-white/50">
                  Professional Operations
                </p>

              </div>

            </div>

            {/* Feature 2 */}

            <div
              className="
                group/feature
                flex
                items-center
                gap-4
                rounded-2xl
                border
                border-white/10
                bg-white/5
                px-5
                py-4
                backdrop-blur-md
                transition-all
                duration-500
                hover:-translate-y-1
                hover:border-primary/40
                hover:bg-white/10
              "
            >

              <div
                className="
                  flex
                  h-11
                  w-11
                  shrink-0
                  items-center
                  justify-center
                  rounded-xl
                  bg-primary/15
                  text-primary
                  transition-all
                  duration-500
                  group-hover/feature:scale-110
                  group-hover/feature:bg-primary
                  group-hover/feature:text-white
                "
              >
                <Globe2 className="h-5 w-5" />
              </div>

              <div>

                <p className="text-sm font-semibold text-white">
                  International Network
                </p>

                <p className="mt-0.5 text-xs text-white/50">
                  China • Nigeria • Global
                </p>

              </div>

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

        <span className="text-[10px] font-semibold uppercase tracking-[0.3em]">
          Explore
        </span>

        <div
          className="
            h-10
            w-px
            overflow-hidden
            bg-white/20
          "
        >

          <div
            className="
              h-1/2
              w-full
              animate-[scrollLine_1.8s_ease-in-out_infinite]
              bg-white
            "
          />

        </div>

      </div>

    </section>
  )
}