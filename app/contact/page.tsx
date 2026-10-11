
import type { Metadata } from "next";
import {
  Mail,
  MapPin,
  Clock,
  Building2,
  Globe2,
  ArrowRight,
  ChevronRight,
  Send,
  Headphones,
  BriefcaseBusiness,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Contact UNASCO Aviation Limited",
  description:
    "Contact UNASCO Aviation Limited for flight support services, air cargo transportation, logistics solutions, airline management and operations.",
};

const MAROON = "#561923";
const MAROON_LIGHT = "#7A2330";
const MAROON_SOFT = "#F2C6CC";
const MAROON_DARK = "#3D1118";

const contacts = [
  {
    icon: Mail,
    title: "Customer Care",
    value: "customercare@unascoltd.com",
    description: "General enquiries and customer assistance",
    href: "mailto:customercare@unascoltd.com",
  },
  {
    icon: Headphones,
    title: "Customer Support",
    value: "support@unascoltd.com",
    description: "Customer support and service enquiries",
    href: "mailto:support@unascoltd.com",
  },
  {
    icon: BriefcaseBusiness,
    title: "Executive Office",
    value: "Contact Customer Care",
    description: "Executive and corporate enquiries",
    href: "mailto:customercare@unascoltd.com?subject=Executive%20Enquiry",
  },
  {
    icon: BriefcaseBusiness,
    title: "Sales & Business Enquiries",
    value: "Contact Customer Care",
    description: "Business development and commercial enquiries",
    href: "mailto:customercare@unascoltd.com?subject=Sales%20and%20Business%20Enquiry",
  },
];

const companyDetails = [
  {
    icon: MapPin,
    title: "Head Office",
    heading: "Kano, Nigeria",
    description: "No. 7 Bompai Road, Kano State, Nigeria",
  },
  {
    icon: Clock,
    title: "Working Hours",
    heading: "Monday – Friday",
    description:
      "08:00 AM – 06:00 PM. Operations support available 24/7.",
  },
];

const serviceAreas = [
  "Aviation Services",
  "Air Cargo",
  "Logistics",
  "Travel Management",
];

export default function ContactPage() {
  return (
    <main>
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-[#561923] py-24 sm:py-28 lg:py-32">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#7A2330]/60 blur-[120px]"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 top-10 h-[500px] w-[500px] rounded-full bg-[#3D1118]/80 blur-[120px]"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-[-180px] left-1/3 h-[420px] w-[420px] rounded-full bg-[#C9828D]/10 blur-[120px]"
        />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-sm"
          >
            <a
              href="/"
              className="text-white transition hover:text-[#F2C6CC]"
            >
              Home
            </a>

            <ChevronRight className="h-4 w-4 text-[#F2C6CC]" />

            <span className="font-medium text-white">Contact</span>
          </nav>

          <div className="mt-12 max-w-5xl">
            <span className="inline-flex rounded-full border border-[#C9828D]/50 bg-white/5 px-5 py-2.5 text-sm font-semibold uppercase tracking-[0.22em] text-white backdrop-blur-sm">
              Contact UNASCO
            </span>

            <h1 className="mt-7 text-5xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Let&apos;s Connect With Our Aviation Team
            </h1>

            <div className="mt-8 h-1.5 w-28 rounded-full bg-[#C9828D]" />

            <p className="mt-8 max-w-4xl text-lg leading-8 text-white sm:text-xl">
              Connect with UNASCO Aviation for professional assistance
              with aviation services, air cargo, logistics, airline
              management and travel operations. Our team is available
              through our official customer care and support email
              addresses.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="mailto:customercare@unascoltd.com"
                className="inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-white px-7 py-4 font-bold text-[#561923] shadow-xl transition duration-300 hover:-translate-y-1 hover:bg-[#F2C6CC]"
              >
                <Mail className="h-5 w-5" />
                Email Customer Care
                <ArrowRight className="h-4 w-4" />
              </a>

              <a
                href="mailto:support@unascoltd.com"
                className="inline-flex min-h-14 items-center justify-center gap-3 rounded-full border border-white/60 px-7 py-4 font-bold text-white transition duration-300 hover:-translate-y-1 hover:bg-white hover:text-[#561923]"
              >
                <Headphones className="h-5 w-5" />
                Contact Support
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT INFORMATION */}
      <section className="relative overflow-hidden bg-white py-24 lg:py-32">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-0 top-0 h-96 w-96 rounded-full bg-[#561923]/5 blur-3xl"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#561923]/5 blur-3xl"
        />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-[#561923]">
              Contact Information
            </span>

            <h2 className="mt-5 text-4xl font-bold leading-tight text-slate-900 sm:text-5xl">
              We Are Ready To{" "}
              <span className="text-[#561923]">Assist You</span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Reach the UNASCO Aviation team for enquiries about flight
              support services, air cargo transportation, logistics
              solutions, airline management, general aviation services,
              travel management and cargo operations.
            </p>
          </div>

          {/* EMAIL CONTACT CARDS */}
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {contacts.map((contact) => {
              const Icon = contact.icon;

              return (
                <a
                  key={contact.title}
                  href={contact.href}
                  className="group flex h-full flex-col rounded-3xl border border-[#7A2330]/50 bg-[#561923] p-7 text-white shadow-lg transition duration-300 hover:-translate-y-2 hover:bg-[#7A2330] hover:shadow-2xl"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#7A2330] text-[#F2C6CC] transition duration-300 group-hover:bg-[#F2C6CC] group-hover:text-[#561923]">
                    <Icon className="h-7 w-7" />
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-white">
                    {contact.title}
                  </h3>

                  <p className="mt-3 break-words font-semibold leading-6 text-white">
                    {contact.value}
                  </p>

                  <p className="mt-3 flex-1 text-sm leading-6 text-white">
                    {contact.description}
                  </p>

                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#F2C6CC] transition group-hover:gap-3 group-hover:text-white">
                    {contact.title.includes("Support") ||
                    contact.title.includes("Care")
                      ? "Send an Email"
                      : "Make an Enquiry"}
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </a>
              );
            })}
          </div>

          {/* COMPANY INFORMATION */}
          <div className="mt-16 overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#3D1118] via-[#561923] to-[#7A2330] p-8 text-white shadow-2xl lg:p-10">
            <div className="grid gap-10 lg:grid-cols-[1fr_420px] lg:items-center">
              <div>
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10">
                  <Building2 className="h-7 w-7 text-white" />
                </div>

                <h3 className="mt-6 text-3xl font-bold text-white">
                  UNASCO Aviation Limited
                </h3>

                <p className="mt-4 max-w-2xl leading-8 text-white">
                  Professional aviation services, flight operations,
                  airline management, air cargo transportation, logistics
                  solutions, general aviation, travel management and cargo
                  operations.
                </p>

                <div className="mt-7 flex flex-wrap gap-3">
                  {serviceAreas.map((service) => (
                    <span
                      key={service}
                      className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-white"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>

              {/* OFFICIAL EMAIL ADDRESSES */}
              <div className="rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur-md">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-white">
                  Official Email Addresses
                </p>

                <div className="mt-5 space-y-4">
                  <a
                    href="mailto:customercare@unascoltd.com"
                    className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 transition duration-300 hover:bg-white/10"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-[#561923]">
                      <Mail className="h-5 w-5" />
                    </div>

                    <div className="min-w-0">
                      <p className="text-xs uppercase tracking-wider text-white">
                        Customer Care
                      </p>

                      <p className="mt-1 break-all font-semibold text-white">
                        customercare@unascoltd.com
                      </p>
                    </div>

                    <ArrowRight className="ml-auto h-4 w-4 shrink-0 text-white transition group-hover:translate-x-1" />
                  </a>

                  <a
                    href="mailto:support@unascoltd.com"
                    className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 transition duration-300 hover:bg-white/10"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-[#561923]">
                      <Headphones className="h-5 w-5" />
                    </div>

                    <div className="min-w-0">
                      <p className="text-xs uppercase tracking-wider text-white">
                        Customer Support
                      </p>

                      <p className="mt-1 break-all font-semibold text-white">
                        support@unascoltd.com
                      </p>
                    </div>

                    <ArrowRight className="ml-auto h-4 w-4 shrink-0 text-white transition group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* OFFICE DETAILS */}
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {companyDetails.map((detail) => {
              const Icon = detail.icon;

              return (
                <div
                  key={detail.title}
                  className="rounded-3xl border border-[#7A2330]/50 bg-[#561923] p-7 text-white shadow-lg transition duration-300 hover:bg-[#7A2330]"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#7A2330] text-[#F2C6CC]">
                      <Icon className="h-6 w-6" />
                    </div>

                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#F2C6CC]">
                        {detail.title}
                      </p>

                      <h3 className="mt-2 text-xl font-bold text-white">
                        {detail.heading}
                      </h3>

                      <p className="mt-2 leading-7 text-white">
                        {detail.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* INTERNATIONAL OPERATIONS */}
          <div className="mt-5 rounded-3xl border border-[#7A2330]/50 bg-[#561923] p-7 text-white shadow-lg transition duration-300 hover:bg-[#7A2330]">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#7A2330] text-[#F2C6CC]">
                <Globe2 className="h-6 w-6" />
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#F2C6CC]">
                  International Operations
                </p>

                <h3 className="mt-2 text-xl font-bold text-white">
                  China • Nigeria
                </h3>

                <p className="mt-2 leading-7 text-white">
                  International cargo and logistics network.
                </p>
              </div>
            </div>
          </div>

          {/* FINAL EMAIL CTA */}
          <div className="mt-16 rounded-[2rem] bg-[#561923] p-10 text-center shadow-2xl lg:p-14">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#F2C6CC]">
              Need Assistance?
            </p>

            <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
              Speak With the UNASCO Team
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-white">
              For general enquiries, business discussions, sales
              assistance or aviation service requests, email our
              customer care or customer support team.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href="mailto:customercare@unascoltd.com"
                className="inline-flex min-h-14 items-center gap-3 rounded-full bg-white px-7 py-4 font-bold text-[#561923] shadow-xl transition duration-300 hover:-translate-y-1 hover:bg-[#F2C6CC] hover:shadow-2xl"
              >
                <Mail className="h-5 w-5" />
                Email Customer Care
                <ArrowRight className="h-4 w-4" />
              </a>

              <a
                href="mailto:support@unascoltd.com"
                className="inline-flex min-h-14 items-center gap-3 rounded-full border-2 border-white px-7 py-4 font-bold text-white transition duration-300 hover:-translate-y-1 hover:bg-white hover:text-[#561923]"
              >
                <Send className="h-5 w-5" />
                Email Support
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
