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

      {/* Background Decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-20 px-6 lg:grid-cols-2">

        {/* Left Image */}
        <div className="relative">

          <div className="overflow-hidden rounded-3xl shadow-2xl">
            <Image
              src="/air-cargo-loading.png"
              alt="UNASCO Aviation Cargo Operations"
              width={720}
              height={600}
              className="h-full w-full object-cover transition duration-700 hover:scale-105"
            />
          </div>

          {/* Floating Card */}
          <div className="absolute -bottom-8 left-8 rounded-2xl border border-white/40 bg-white/95 p-6 shadow-2xl backdrop-blur">

            <h3 className="text-3xl font-bold text-primary">
              RC 8207934
            </h3>

            <p className="mt-2 text-sm text-muted-foreground">
              Registered Aviation Company
            </p>

          </div>

        </div>

        {/* Right */}
        <div>

          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
            Company Profile
          </span>

          <h2 className="mt-5 text-4xl font-bold leading-tight lg:text-5xl">
            Your Trusted Aviation,
            <br />
            Cargo & Logistics Partner
          </h2>

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

          {/* Services */}
          <div className="mt-10 grid gap-4 sm:grid-cols-2">

            {highlights.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-xl border bg-card p-4 transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-lg"
              >
                <CheckCircle2 className="mt-1 h-5 w-5 text-primary shrink-0" />
                <span className="text-sm font-medium leading-6">
                  {item}
                </span>
              </div>
            ))}

          </div>

          {/* CTA */}
          <div className="mt-10 flex flex-wrap gap-4">

            <Link
              href="/about"
              className={cn(
                buttonVariants(),
                "h-12 rounded-xl px-7"
              )}
            >
              Learn More About Us
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>

            <Link
              href="/contact"
              className={cn(
                buttonVariants({ variant: "outline" }),
                "h-12 rounded-xl px-7"
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