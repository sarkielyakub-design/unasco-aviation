import {
  ShieldCheck,
  PlaneTakeoff,
  PackageCheck,
  Globe2,
  Users,
  Briefcase,
} from "lucide-react";

const reasons = [
  {
    icon: PlaneTakeoff,
    title: "Comprehensive Aviation Services",
    description:
      "Professional flight support, flight operations, airline management and general aviation services delivered with operational excellence.",
  },

  {
    icon: PackageCheck,
    title: "Cargo & Logistics Solutions",
    description:
      "Reliable air cargo transportation, freight forwarding and logistics services designed to move goods safely and efficiently.",
  },

  {
    icon: Globe2,
    title: "Nationwide & International Network",
    description:
      "Operating from Kano with additional offices and strategic aviation partners across Nigeria and international destinations.",
  },

  {
    icon: ShieldCheck,
    title: "Safety & Regulatory Compliance",
    description:
      "Committed to maintaining high operational standards while complying with applicable aviation regulations and industry best practices.",
  },

  {
    icon: Users,
    title: "Experienced Professional Team",
    description:
      "A team of experienced aviation professionals dedicated to delivering quality services with integrity, professionalism and customer satisfaction.",
  },

  // GENERAL SALES AGENTS
  {
    icon: Briefcase,
    title: "General Sales Agents",
    description:
      "Professional airline representation, sales support, market development and commercial services for airlines and aviation partners.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white py-24 lg:py-32">

      {/* Background Decoration */}
      <div className="absolute inset-0 -z-10">

        <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />

        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />

      </div>


      <div className="mx-auto max-w-7xl px-6">

        <div className="grid gap-16 lg:grid-cols-3">


          {/* =====================================================
              LEFT SIDE
          ====================================================== */}

          <div className="self-start lg:sticky lg:top-28">

            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
              Why Choose UNASCO
            </span>


            <h2 className="mt-5 text-4xl font-bold leading-tight lg:text-5xl">

              Excellence in

              <br />

              Aviation, Cargo &

              <span className="text-primary">
                {" "}Logistics.
              </span>

            </h2>


            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              UNASCO Aviation Limited combines industry expertise,
              operational excellence and customer-focused services to
              deliver dependable aviation, cargo and logistics solutions
              across Nigeria and beyond.
            </p>

          </div>


          {/* =====================================================
              CARDS
          ====================================================== */}

          <div className="grid gap-6 sm:grid-cols-2 lg:col-span-2">

            {reasons.map((reason) => {

              const Icon = reason.icon;

              return (

                <div
                  key={reason.title}
                  className="
                    group
                    rounded-2xl
                    border
                    border-[#7A2330]/40
                    bg-[#7A2330]
                    p-8
                    text-white
                    shadow-lg
                    transition-all
                    duration-300
                    hover:-translate-y-2
                    hover:border-[#8F2B3A]
                    hover:bg-[#8F2B3A]
                    hover:shadow-[0_20px_45px_rgba(122,35,48,0.28)]
                  "
                >

                  {/* ICON */}
                  <div
                    className="
                      flex
                      h-14
                      w-14
                      items-center
                      justify-center
                      rounded-xl
                      bg-white/10
                      text-[#F2C6CC]
                      ring-1
                      ring-white/10
                      transition-all
                      duration-300
                      group-hover:bg-white
                      group-hover:text-[#7A2330]
                    "
                  >

                    <Icon className="h-7 w-7" />

                  </div>


                  {/* TITLE */}
                  <h3
                    className="
                      mt-6
                      text-xl
                      font-bold
                      text-white
                    "
                  >
                    {reason.title}
                  </h3>


                  {/* DESCRIPTION */}
                  <p
                    className="
                      mt-3
                      leading-7
                      text-white/75
                    "
                  >
                    {reason.description}
                  </p>

                </div>

              );

            })}

          </div>

        </div>

      </div>

    </section>
  );
}