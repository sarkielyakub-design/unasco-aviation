import Link from "next/link";
import {
  ArrowUpRight,
  BriefcaseBusiness,
} from "lucide-react";

import { services } from "@/lib/services";

export function ServicesOverview() {

  const allServices = [
    ...services,

    {
      title: "General Sales Agents",
      description:
        "Professional airline representation, sales support, market development and commercial services for airlines and aviation partners.",
      href: "/general-sales-agents",
      icon: BriefcaseBusiness,
    },
  ];

  return (
    <section className="bg-secondary py-20 lg:py-28">

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* SECTION HEADER */}
        <div className="mx-auto max-w-2xl text-center">

          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            What We Do
          </span>

          <h2 className="mt-4 text-balance font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Comprehensive aviation and logistics solutions
          </h2>

          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            One partner for every link in your supply chain, from the runway
            to the final destination.
          </p>

        </div>


        {/* SERVICES */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {allServices.map((service) => {

            const Icon = service.icon;

            return (

              <Link
                key={service.title}
                href={service.href}
                className="
                  group
                  relative
                  flex
                  flex-col
                  rounded-2xl
                  border
                  border-[#7A2330]/40
                  bg-[#7A2330]
                  p-8
                  text-white
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-[#8F2B3A]
                  hover:bg-[#8F2B3A]
                  hover:shadow-[0_20px_45px_rgba(122,35,48,0.25)]
                "
              >

                {/* ICON */}
                <span
                  className="
                    flex
                    size-14
                    items-center
                    justify-center
                    rounded-xl
                    bg-white/10
                    text-[#C9828D]
                    ring-1
                    ring-white/10
                    transition-all
                    duration-300
                    group-hover:bg-white
                    group-hover:text-[#7A2330]
                  "
                >
                  <Icon
                    className="size-7"
                    aria-hidden="true"
                  />
                </span>


                {/* TITLE */}
                <h3
                  className="
                    mt-6
                    font-display
                    text-xl
                    font-bold
                    text-white
                  "
                >
                  {service.title}
                </h3>


                {/* DESCRIPTION */}
                <p
                  className="
                    mt-3
                    flex-1
                    text-sm
                    leading-relaxed
                    text-white/75
                  "
                >
                  {service.description}
                </p>


                {/* LEARN MORE */}
                <span
                  className="
                    mt-6
                    inline-flex
                    items-center
                    gap-1.5
                    text-sm
                    font-semibold
                    text-white
                    transition-colors
                    group-hover:text-[#F2C6CC]
                  "
                >
                  Learn more

                  <ArrowUpRight
                    className="
                      size-4
                      transition-transform
                      group-hover:translate-x-0.5
                      group-hover:-translate-y-0.5
                    "
                  />

                </span>

              </Link>

            );

          })}

        </div>

      </div>

    </section>
  );
}