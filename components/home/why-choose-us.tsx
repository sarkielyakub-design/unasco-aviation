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
  
];

export function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white py-24 lg:py-32">

      {/* Background Decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6">

        <div className="grid gap-16 lg:grid-cols-3">

          {/* Left Side */}
          <div className="lg:sticky lg:top-28 self-start">

            <span className="text-primary uppercase tracking-[0.25em] text-sm font-semibold">
              Why Choose UNASCO
            </span>

            <h2 className="mt-5 text-4xl lg:text-5xl font-bold leading-tight">
              Excellence in
              <br />
              Aviation, Cargo &
              <span className="text-primary"> Logistics.</span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              UNASCO Aviation Limited combines industry expertise,
              operational excellence and customer-focused services to
              deliver dependable aviation, cargo and logistics solutions
              across Nigeria and beyond.
            </p>

          </div>

          {/* Cards */}
          <div className="grid gap-6 sm:grid-cols-2 lg:col-span-2">

            {reasons.map((reason) => {
              const Icon = reason.icon;

              return (
                <div
                  key={reason.title}
                  className="group rounded-2xl border bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-primary hover:shadow-2xl"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all group-hover:bg-primary group-hover:text-white">
                    <Icon className="h-7 w-7" />
                  </div>

                  <h3 className="mt-6 text-xl font-bold">
                    {reason.title}
                  </h3>

                  <p className="mt-3 leading-7 text-muted-foreground">
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