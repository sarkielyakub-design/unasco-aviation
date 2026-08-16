import Image from "next/image";
import Link from "next/link";
import { ArrowRight, PlaneTakeoff, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export function HomeHero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      {/* Background */}
      <Image
        src="/hero-cargo-aircraft.png"
        alt="UNASCO Aviation Cargo Operations"
        fill
        priority
        className="object-cover"
      />

      {/* Better Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/20" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-32">
        <div className="max-w-3xl">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 px-5 py-2 text-white">
            <PlaneTakeoff className="h-4 w-4 text-primary" />
            Aviation • Cargo • Logistics • Hajj & Umrah
          </div>

          {/* Heading */}
          <h1 className="mt-8 text-5xl font-bold leading-tight text-white lg:text-7xl">
            Connecting Africa
            <br />
            <span className="text-primary">
              To The World.
            </span>
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-200">
            UNASCO Aviation Limited provides world-class aviation support,
            air cargo transportation, logistics solutions, flight operations,
            airline management and Hajj & Umrah travel services with safety,
            reliability and excellence.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap gap-4">

            <Link
              href="/contact"
              className={cn(
                buttonVariants(),
                "h-12 px-7 rounded-xl text-base"
              )}
            >
              Request a Quote
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>

            <Link
              href="/cargo-services"
              className={cn(
                buttonVariants({ variant: "outline" }),
                "h-12 px-7 rounded-xl border-white text-white bg-white/10 hover:bg-white hover:text-black"
              )}
            >
              Explore Services
            </Link>

          </div>

          {/* Features */}
          <div className="mt-12 flex flex-wrap gap-8 text-white">

            <div className="flex items-center gap-2">
              <ShieldCheck className="text-primary" />
              Safe & Reliable Operations
            </div>

            <div className="flex items-center gap-2">
              <PlaneTakeoff className="text-primary" />
              International Cargo Network
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}