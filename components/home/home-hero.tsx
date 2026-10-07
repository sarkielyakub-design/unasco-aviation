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

const unascoLetters = ["U", "N", "A", "S", "C", "O"];

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
          brightness-[1.08]
          saturate-[1.12]
          transition-transform
          duration-[12000ms]
          ease-out
          group-hover:scale-110
        "
      />

      {/* =========================================================
          LIGHT OVERLAY
      ========================================================== */}

      <div
        aria-hidden="true"
        className="
          absolute
          inset-0
          bg-gradient-to-r
          from-[#12080A]/45
          via-[#12080A]/18
          to-[#12080A]/5
        "
      />

      {/* =========================================================
          BOTTOM CONTRAST
      ========================================================== */}

      <div
        aria-hidden="true"
        className="
          absolute
          inset-0
          bg-gradient-to-t
          from-[#12080A]/65
          via-[#12080A]/15
          to-transparent
        "
      />

      {/* =========================================================
          TOP SOFT GLOW
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
          bg-[#7A2330]/20
          blur-[120px]
          animate-pulse
        "
      />

      {/* =========================================================
          RIGHT SOFT GLOW
      ========================================================== */}

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
          bg-[#8F2B3A]/15
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
              IATA / NANTA
          ====================================================== */}

          <div
            className="
              mb-6
              flex
              flex-wrap
              items-center
              justify-center
              gap-4
              animate-[heroFadeUp_0.9s_ease-out_0.15s_both]
            "
          >
            {/* IATA */}

            <div
              className="
                flex
                h-16
                min-w-[150px]
                items-center
                justify-center
                overflow-hidden
                rounded-2xl
                border
                border-white/20
                bg-white
                px-5
                shadow-xl
                backdrop-blur-md
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-2xl
              "
            >
              <Image
                src="/logos/iata.png"
                alt="IATA"
                width={120}
                height={60}
                className="h-12 w-auto object-contain"
              />
            </div>

            {/* NANTA */}

            <div
              className="
                flex
                h-16
                min-w-[150px]
                items-center
                justify-center
                overflow-hidden
                rounded-2xl
                border
                border-white/20
                bg-white
                px-5
                shadow-xl
                backdrop-blur-md
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-2xl
              "
            >
              <Image
                src="/logos/nanta.png"
                alt="NANTA"
                width={150}
                height={60}
                className="h-12 w-auto object-contain"
              />
            </div>
          </div>

          {/* =====================================================
              SERVICE BADGE
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
              animate-[heroFadeUp_0.9s_ease-out_0.35s_both]
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
              <span className="mx-1.5 text-white/40">•</span>
              Cargo
              <span className="mx-1.5 text-white/40">•</span>
              Logistics
              <span className="mx-1.5 text-white/40">•</span>
              Hajj &amp; Umrah
            </span>
          </div>

          {/* =====================================================
              HERO HEADING
          ====================================================== */}

          <div className="mt-8 flex flex-col items-center">
            {/* UNASCO */}

            <h1
              aria-label="UNASCO"
              className="
                flex
                items-center
                justify-center
                font-extrabold
                leading-none
                tracking-[-0.05em]
                text-white
                text-6xl
                sm:text-7xl
                md:text-8xl
                lg:text-[7rem]
                xl:text-[8.5rem]
              "
            >
              {unascoLetters.map((letter, index) => (
                <span
                  key={`${letter}-${index}`}
                  className="
                    inline-block
                    opacity-0
                    animate-[unascoLetterIn_0.75s_cubic-bezier(0.22,1,0.36,1)_forwards]
                  "
                  style={{
                    animationDelay: `${0.65 + index * 0.16}s`,
                  }}
                >
                  {letter}
                </span>
              ))}
            </h1>

            {/* CONNECTING PEOPLE & CARGO */}

            <h2
              className="
                mt-4
                text-3xl
                font-normal
                leading-tight
                tracking-tight
                sm:text-4xl
                md:text-5xl
                lg:text-6xl
                animate-[heroFadeUp_0.9s_cubic-bezier(0.22,1,0.36,1)_1.75s_both]
              "
            >
              <span className="text-white">
                Connecting{" "}
              </span>

              <span className="text-[#C9828D]">
                People &amp; Cargo
              </span>
            </h2>

            {/* ACCENT LINE */}

            <div
              className="
                mt-7
                h-1
                w-24
                rounded-full
                bg-[#C9828D]
                shadow-[0_0_25px_rgba(201,130,141,0.45)]
                animate-[heroFade_1s_ease-out_2s_both]
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
              text-base
              leading-8
              text-white/85
              sm:text-lg
              md:text-xl
              animate-[heroFadeUp_0.9s_cubic-bezier(0.22,1,0.36,1)_2.1s_both]
            "
          >
            UNASCO Aviation Limited provides professional aviation
            support, air cargo transportation, general sales agent,
            logistics solutions, flight operations, airline management
            and Hajj &amp; Umrah travel services with safety,
            reliability and excellence.
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
              animate-[heroFadeUp_0.9s_cubic-bezier(0.22,1,0.36,1)_2.3s_both]
            "
          >
            {/* REQUEST A QUOTE */}

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
                `,
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

            {/* EXPLORE SERVICES */}

            <Link
              href="/cargo-services"
              className={cn(
                buttonVariants({
                  variant: "outline",
                }),
                `
                  h-14
                  min-w-[220px]
                  rounded-xl
                  border-white/50
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
                `,
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
              animate-[heroFadeUp_0.9s_cubic-bezier(0.22,1,0.36,1)_2.5s_both]
            "
          >
            {/* SAFE & RELIABLE */}

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

              <p className="mt-1 text-xs text-white/70">
                Professional Operations
              </p>
            </div>

            {/* GLOBAL NETWORK */}

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

              <p className="mt-1 text-xs text-white/70">
                Africa • Asia • Global
              </p>
            </div>

            {/* HAJJ & UMRAH */}

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

              <p className="mt-1 text-xs text-white/70">
                Makkah • Madinah
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================
          BOTTOM EXPLORE INDICATOR
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
          text-white/50
          md:flex
          animate-[heroFade_1s_ease-out_2.8s_both]
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
              bg-[#C9828D]
              animate-[scrollLine_1.8s_ease-in-out_infinite]
            "
          />
        </div>
      </div>

      {/* =========================================================
          ANIMATION KEYFRAMES
          Using a normal style tag with valid JSX syntax.
      ========================================================== */}

      <style>{`
        @keyframes unascoLetterIn {
          0% {
            opacity: 0;
            transform: translateY(45px) scale(0.82);
            filter: blur(8px);
          }

          60% {
            opacity: 1;
            transform: translateY(-4px) scale(1.03);
            filter: blur(0);
          }

          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
            filter: blur(0);
          }
        }

        @keyframes heroFadeUp {
          0% {
            opacity: 0;
            transform: translateY(28px);
          }

          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes heroFade {
          0% {
            opacity: 0;
          }

          100% {
            opacity: 1;
          }
        }

        @keyframes scrollLine {
          0% {
            transform: translateY(-100%);
          }

          50% {
            transform: translateY(100%);
          }

          100% {
            transform: translateY(250%);
          }
        }
      `}</style>
    </section>
  );
}