import type { Metadata } from "next";

import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Building2,
  Globe2,
  MessageCircle,
  ArrowRight,
  ChevronRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Contact UNASCO Aviation Limited",
  description:
    "Contact UNASCO Aviation Limited for Flight Support Services, Air Cargo Transportation, Logistics Solutions, Airline Management and Operations.",
};

const MAROON = "#561923";
const MAROON_LIGHT = "#7A2330";
const MAROON_SOFT = "#F2C6CC";
const MAROON_DARK = "#3D1118";

const CEO_WHATSAPP = "https://wa.me/966556011122";
const SALES_WHATSAPP = "https://wa.me/2348063332227";

const details = [
  {
    icon: MessageCircle,
    title: "Chief Executive Officer",
    value: "+966 556 011 122",
    sub: "Executive & Corporate Enquiries • WhatsApp",
    href: CEO_WHATSAPP,
    type: "whatsapp",
  },
  {
    icon: MessageCircle,
    title: "Director, Sales Manager",
    value: "+234 806 333 2227",
    sub: "Hafiz Umar Ballah • Sales & Business Enquiries • WhatsApp",
    href: SALES_WHATSAPP,
    type: "whatsapp",
  },
  {
    icon: Mail,
    title: "Official Email",
    value: "customerservice@unascoltd.com",
    sub: "Corporate & General Business Enquiries",
    href: "mailto:customerservice@unascoltd.com",
    type: "email",
  },
  {
    icon: Mail,
    title: "Customer Support Email",
    value: "support@unascoltd.com",
    sub: "Customer Support & Service Enquiries",
    href: "mailto:support@unascoltd.com",
    type: "email",
  },
  {
    icon: MapPin,
    title: "Head Office",
    value: "No. 7 Bompai Road, Kano State, Nigeria",
    sub: "Corporate Headquarters",
    type: "location",
  },
  {
    icon: Globe2,
    title: "International Operations",
    value: "China • Nigeria",
    sub: "International Cargo & Logistics Network",
    type: "location",
  },
  {
    icon: Clock,
    title: "Working Hours",
    value: "Monday - Friday",
    sub: "08:00 AM - 06:00 PM • Operations Support Available 24/7",
    type: "hours",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative overflow-hidden bg-[#561923] py-24 lg:py-32">
        {/* Background effects */}
        <div className="absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#7A2330]/60 blur-[120px]" />

        <div className="absolute -right-40 top-10 h-[500px] w-[500px] rounded-full bg-[#3D1118]/80 blur-[120px]" />

        <div className="absolute bottom-[-180px] left-1/3 h-[420px] w-[420px] rounded-full bg-[#C9828D]/10 blur-[120px]" />

        {/* Decorative circles */}
        <div className="pointer-events-none absolute right-0 top-0 h-full w-1/3 opacity-10">
          <div className="absolute right-20 top-20 h-64 w-64 rounded-full border border-white/30" />
          <div className="absolute right-[-80px] top-40 h-96 w-96 rounded-full border border-white/20" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm">
            <a
              href="/"
              className="text-white transition hover:text-[#F2C6CC]"
            >
              Home
            </a>

            <ChevronRight className="h-4 w-4 text-[#F2C6CC]" />

            <span className="font-medium text-white">
              Contact
            </span>
          </div>

          <div className="mt-12 max-w-5xl">
            {/* Eyebrow */}
            <span className="inline-flex rounded-full border border-[#C9828D]/50 bg-white/5 px-5 py-2.5 text-sm font-semibold uppercase tracking-[0.22em] text-white backdrop-blur-sm">
              Contact UNASCO
            </span>

            {/* Heading */}
            <h1 className="mt-7 text-5xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Let&apos;s Connect With Our Aviation Team
            </h1>

            {/* Accent */}
            <div className="mt-8 h-1.5 w-28 rounded-full bg-[#C9828D]" />

            {/* Description */}
            <p className="mt-8 max-w-4xl text-lg leading-8 text-white sm:text-xl">
              Connect directly with UNASCO Aviation for professional
              assistance with aviation services, air cargo, logistics,
              airline management and travel operations.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          CONTACT INFORMATION
      ====================================================== */}

      <section className="relative overflow-hidden bg-white py-24 lg:py-32">
        {/* Background decorations */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-0 top-0 h-96 w-96 rounded-full bg-[#561923]/5 blur-3xl"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#561923]/5 blur-3xl"
        />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          {/* Header */}
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-[#561923]">
              Contact Information
            </span>

            <h2 className="mt-5 text-4xl font-bold leading-tight text-slate-900 sm:text-5xl">
              We Are Ready To{" "}
              <span className="text-[#561923]">
                Assist You
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Connect directly with the UNASCO Aviation team for
              professional assistance with Flight Support Services,
              Air Cargo Transportation, Logistics Solutions, Airline
              Management, General Aviation Services, Travel Management
              and Cargo Operations.
            </p>
          </div>

          {/* =================================================
              DIRECT WHATSAPP CONTACT
          ================================================== */}

          <div className="mx-auto mt-14 max-w-5xl">
            <div className="overflow-hidden rounded-[2rem] bg-[#561923] shadow-2xl">
              <div className="grid lg:grid-cols-2">
                {/* CEO */}
                <div className="border-b border-white/10 p-8 lg:border-b-0 lg:border-r lg:p-10">
                  <div className="flex items-start gap-5">
                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[#7A2330] text-[#F2C6CC] shadow-lg">
                      <MessageCircle className="h-8 w-8" />
                    </div>

                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#F2C6CC]">
                        Executive Contact
                      </p>

                      <h3 className="mt-2 text-2xl font-bold text-white">
                        Chief Executive Officer
                      </h3>

                      <p className="mt-2 text-lg font-semibold text-white">
                        +966 556 011 122
                      </p>

                      <p className="mt-1 text-sm text-white">
                        Executive &amp; Corporate Enquiries
                      </p>
                    </div>
                  </div>

                  <a
                    href={CEO_WHATSAPP}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 flex h-14 w-full items-center justify-center gap-3 rounded-xl bg-[#7A2330] font-bold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#8E2D3C] hover:shadow-xl"
                  >
                    <MessageCircle className="h-5 w-5" />

                    Chat With CEO on WhatsApp

                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>

                {/* Sales */}
                <div className="p-8 lg:p-10">
                  <div className="flex items-start gap-5">
                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[#7A2330] text-[#F2C6CC] shadow-lg">
                      <MessageCircle className="h-8 w-8" />
                    </div>

                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#F2C6CC]">
                        Sales &amp; Business
                      </p>

                      <h3 className="mt-2 text-2xl font-bold text-white">
                        Director, Sales Manager
                      </h3>

                      <p className="mt-2 text-lg font-semibold text-white">
                        +234 806 333 2227
                      </p>

                      <p className="mt-1 text-sm text-white">
                        Hafiz Umar Ballah • Sales &amp; Business Enquiries
                      </p>
                    </div>
                  </div>

                  <a
                    href={SALES_WHATSAPP}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 flex h-14 w-full items-center justify-center gap-3 rounded-xl bg-[#7A2330] font-bold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#8E2D3C] hover:shadow-xl"
                  >
                    <MessageCircle className="h-5 w-5" />

                    Chat With Sales on WhatsApp

                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* =================================================
              CONTACT DETAIL CARDS
          ================================================== */}

          <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {details.map((item) => {
              const Icon = item.icon;
              const isWhatsApp = item.type === "whatsapp";

              return (
                <div
                  key={`${item.title}-${item.value}`}
                  className="group rounded-3xl border border-[#7A2330]/50 bg-[#561923] p-7 text-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:bg-[#7A2330] hover:shadow-2xl"
                >
                  {/* Icon */}
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#7A2330] text-[#F2C6CC] transition-all duration-300 group-hover:bg-[#F2C6CC] group-hover:text-[#561923]">
                    <Icon className="h-7 w-7" />
                  </div>

                  {/* Content */}
                  <h3 className="mt-5 text-lg font-bold text-white">
                    {item.title}
                  </h3>

                  {item.href ? (
                    <a
                      href={item.href}
                      target={isWhatsApp ? "_blank" : undefined}
                      rel={
                        isWhatsApp
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="mt-2 block break-words font-semibold text-white transition-colors hover:text-[#F2C6CC] hover:underline"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="mt-2 font-semibold text-white">
                      {item.value}
                    </p>
                  )}

                  <p className="mt-2 text-sm leading-6 text-white">
                    {item.sub}
                  </p>

                  {isWhatsApp && (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#F2C6CC] transition-all hover:gap-3 hover:text-white"
                    >
                      <MessageCircle className="h-4 w-4" />

                      Chat on WhatsApp

                      <ArrowRight className="h-3.5 w-3.5" />
                    </a>
                  )}
                </div>
              );
            })}
          </div>

          {/* =================================================
              COMPANY CARD
          ================================================== */}

          <div className="mt-16 overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#3D1118] via-[#561923] to-[#7A2330] p-8 text-white shadow-2xl lg:p-10">
            <div className="grid gap-10 lg:grid-cols-[1fr_420px] lg:items-center">
              {/* Company information */}
              <div>
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 backdrop-blur">
                  <Building2 className="h-7 w-7 text-white" />
                </div>

                <h3 className="mt-6 text-3xl font-bold text-white">
                  UNASCO Aviation Limited
                </h3>

                <p className="mt-4 max-w-2xl leading-8 text-white">
                  Professional Aviation Services, Flight Operations,
                  Airline Management, Air Cargo Transportation,
                  Logistics Solutions, General Aviation, Travel
                  Management, and Cargo Operations.
                </p>

                <div className="mt-7 flex flex-wrap gap-3">
                  <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-white">
                    Aviation Services
                  </span>

                  <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-white">
                    Air Cargo
                  </span>

                  <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-white">
                    Logistics
                  </span>

                  <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-white">
                    Travel Management
                  </span>
                </div>
              </div>

              {/* Quick Contacts */}
              <div className="rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur-md">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-white">
                  Direct Contacts
                </p>

                <div className="mt-5 space-y-4">
                  {/* CEO */}
                  <a
                    href={CEO_WHATSAPP}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 transition-all duration-300 hover:bg-white/10"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-[#561923]">
                      <MessageCircle className="h-5 w-5" />
                    </div>

                    <div className="min-w-0">
                      <p className="text-xs uppercase tracking-wider text-white">
                        Chief Executive Officer
                      </p>

                      <p className="mt-1 font-semibold text-white">
                        +966 556 011 122
                      </p>
                    </div>

                    <ArrowRight className="ml-auto h-4 w-4 shrink-0 text-white" />
                  </a>

                  {/* Sales */}
                  <a
                    href={SALES_WHATSAPP}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 transition-all duration-300 hover:bg-white/10"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-[#561923]">
                      <MessageCircle className="h-5 w-5" />
                    </div>

                    <div className="min-w-0">
                      <p className="text-xs uppercase tracking-wider text-white">
                        Director, Sales Manager
                      </p>

                      <p className="mt-1 font-semibold text-white">
                        +234 806 333 2227
                      </p>
                    </div>

                    <ArrowRight className="ml-auto h-4 w-4 shrink-0 text-white" />
                  </a>
                </div>

                {/* Official Customer Service Email */}
                <a
                  href="mailto:customerservice@unascoltd.com"
                  className="mt-4 flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 transition-all duration-300 hover:bg-white/10"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-[#561923]">
                    <Mail className="h-5 w-5" />
                  </div>

                  <div className="min-w-0">
                    <p className="text-xs uppercase tracking-wider text-white">
                      Official Customer Service
                    </p>

                    <p className="mt-1 break-all font-semibold text-white">
                      customerservice@unascoltd.com
                    </p>
                  </div>
                </a>

                {/* Customer Support Email */}
                <a
                  href="mailto:support@unascoltd.com"
                  className="mt-4 flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 transition-all duration-300 hover:bg-white/10"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-[#561923]">
                    <Mail className="h-5 w-5" />
                  </div>

                  <div className="min-w-0">
                    <p className="text-xs uppercase tracking-wider text-white">
                      Customer Support
                    </p>

                    <p className="mt-1 break-all font-semibold text-white">
                      support@unascoltd.com
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* =================================================
              HEAD OFFICE
          ================================================== */}

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {/* Head Office */}
            <div className="rounded-3xl border border-[#7A2330]/50 bg-[#561923] p-7 text-white shadow-lg transition hover:bg-[#7A2330]">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#7A2330] text-[#F2C6CC]">
                  <MapPin className="h-6 w-6" />
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#F2C6CC]">
                    Head Office
                  </p>

                  <h3 className="mt-2 text-xl font-bold text-white">
                    Kano, Nigeria
                  </h3>

                  <p className="mt-2 leading-7 text-white">
                    No. 7 Bompai Road, Kano State, Nigeria
                  </p>
                </div>
              </div>
            </div>

            {/* Working Hours */}
            <div className="rounded-3xl border border-[#7A2330]/50 bg-[#561923] p-7 text-white shadow-lg transition hover:bg-[#7A2330]">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#7A2330] text-[#F2C6CC]">
                  <Clock className="h-6 w-6" />
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#F2C6CC]">
                    Working Hours
                  </p>

                  <h3 className="mt-2 text-xl font-bold text-white">
                    Monday - Friday
                  </h3>

                  <p className="mt-2 leading-7 text-white">
                    08:00 AM - 06:00 PM
                  </p>

                  <p className="mt-1 text-sm text-white">
                    Operations Support Available 24/7
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* =================================================
              FINAL WHATSAPP CTA
          ================================================== */}

          <div className="mt-16 rounded-[2rem] bg-[#561923] p-10 text-center shadow-2xl lg:p-14">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#F2C6CC]">
              Need Assistance?
            </p>

            <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
              Speak Directly With UNASCO
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-white">
              For fast enquiries, business discussions, sales assistance
              or aviation service requests, contact our team directly
              through WhatsApp.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href={SALES_WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-14 items-center gap-3 rounded-full bg-[#7A2330] px-7 font-bold text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-[#8E2D3C] hover:shadow-2xl"
              >
                <MessageCircle className="h-5 w-5" />

                WhatsApp Sales

                <ArrowRight className="h-4 w-4" />
              </a>

              <a
                href={CEO_WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-14 items-center gap-3 rounded-full border-2 border-white px-7 font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-[#561923]"
              >
                <MessageCircle className="h-5 w-5" />

                WhatsApp CEO

                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}