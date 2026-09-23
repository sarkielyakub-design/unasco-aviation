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
} from "lucide-react";

import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Contact UNASCO Aviation Limited",
  description:
    "Contact UNASCO Aviation Limited for Flight Support Services, Air Cargo Transportation, Logistics Solutions, Airline Management and Operations.",
};

const MAROON = "#561923";
const MAROON_LIGHT = "#7A2330";
const MAROON_DARK = "#3D1118";

const CEO_WHATSAPP = "https://wa.me/966556011122";
const SALES_WHATSAPP = "https://wa.me/+234 8155558069";

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
    value: "unascoaviationltd@gmail.com",
    sub: "Corporate & General Business Enquiries",
    href: "mailto:unascoaviationltd@gmail.com",
    type: "email",
  },
  {
    icon: Mail,
    title: "Customer Support Email",
    value: "unascol2025@gmail.com",
    sub: "Customer Support & Service Enquiries",
    href: "mailto:unascol2025@gmail.com",
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
      <PageHero
        subtitle="Contact UNASCO"
        breadcrumb="Contact"
        title="Let's Connect With Our Aviation Team"
      />

      <section className="relative overflow-hidden bg-white py-24 lg:py-32">
        {/* Background Decoration */}

        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-0 top-0 h-96 w-96 rounded-full blur-3xl"
          style={{
            backgroundColor: "rgba(86, 25, 35, 0.06)",
          }}
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full blur-3xl"
          style={{
            backgroundColor: "rgba(86, 25, 35, 0.05)",
          }}
        />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          {/* =====================================================
              HEADER
          ===================================================== */}

          <div className="mx-auto max-w-3xl text-center">
            <span
              className="text-sm font-semibold uppercase tracking-[0.25em]"
              style={{ color: MAROON }}
            >
              Contact Information
            </span>

            <h2 className="mt-5 text-4xl font-bold leading-tight text-slate-900 sm:text-5xl">
              We Are Ready To{" "}
              <span style={{ color: MAROON }}>
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

          {/* =====================================================
              WHATSAPP CONTACT
          ===================================================== */}

          <div className="mx-auto mt-14 max-w-5xl">
            <div
              className="overflow-hidden rounded-[2rem] border shadow-xl"
              style={{
                borderColor: "rgba(86, 25, 35, 0.12)",
                background:
                  "linear-gradient(135deg, #ffffff 0%, #faf6f7 100%)",
              }}
            >
              <div className="grid lg:grid-cols-2">
                {/* CEO */}

                <div className="border-b border-slate-200 p-8 lg:border-b-0 lg:border-r lg:p-10">
                  <div className="flex items-start gap-5">
                    <div
                      className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl text-white shadow-lg"
                      style={{
                        backgroundColor: MAROON,
                        boxShadow:
                          "0 12px 30px rgba(86,25,35,0.20)",
                      }}
                    >
                      <MessageCircle className="h-8 w-8" />
                    </div>

                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
                        Executive Contact
                      </p>

                      <h3 className="mt-2 text-2xl font-bold text-slate-900">
                        Chief Executive Officer
                      </h3>

                      <p className="mt-2 text-lg font-semibold text-slate-700">
                        +966 556 011 122
                      </p>

                      <p className="mt-1 text-sm text-slate-500">
                        Executive & Corporate Enquiries
                      </p>
                    </div>
                  </div>

                  <a
                    href={CEO_WHATSAPP}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      mt-8 flex h-14 w-full
                      items-center justify-center gap-3
                      rounded-xl
                      font-bold text-white
                      shadow-lg
                      transition-all duration-300
                      hover:-translate-y-1
                      hover:shadow-xl
                    "
                    style={{ backgroundColor: MAROON }}
                  >
                    <MessageCircle className="h-5 w-5" />

                    Chat With CEO on WhatsApp

                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>

                {/* Director Sales Manager */}

                <div className="p-8 lg:p-10">
                  <div className="flex items-start gap-5">
                    <div
                      className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl text-white shadow-lg"
                      style={{
                        backgroundColor: MAROON_LIGHT,
                        boxShadow:
                          "0 12px 30px rgba(122,35,48,0.20)",
                      }}
                    >
                      <MessageCircle className="h-8 w-8" />
                    </div>

                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
                        Sales & Business
                      </p>

                      <h3 className="mt-2 text-2xl font-bold text-slate-900">
                        Director, Sales Manager
                      </h3>

                      <p className="mt-2 text-lg font-semibold text-slate-700">
                        +234 806 333 2227
                      </p>

                      <p className="mt-1 text-sm text-slate-500">
                        Hafiz Umar Ballah • Sales & Business Enquiries
                      </p>
                    </div>
                  </div>

                  <a
                    href={SALES_WHATSAPP}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      mt-8 flex h-14 w-full
                      items-center justify-center gap-3
                      rounded-xl
                      font-bold text-white
                      shadow-lg
                      transition-all duration-300
                      hover:-translate-y-1
                      hover:shadow-xl
                    "
                    style={{ backgroundColor: MAROON_LIGHT }}
                  >
                    <MessageCircle className="h-5 w-5" />

                    Chat With Sales on WhatsApp

                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* =====================================================
              CONTACT DETAILS
          ===================================================== */}

          <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {details.map((item) => {
              const Icon = item.icon;

              const isWhatsApp = item.type === "whatsapp";

              return (
                <div
                  key={`${item.title}-${item.value}`}
                  className="
                    group rounded-3xl
                    border border-slate-200
                    bg-white
                    p-6
                    shadow-sm
                    transition-all duration-300
                    hover:-translate-y-1
                    hover:shadow-xl
                  "
                  style={{
                    borderColor: "rgba(86,25,35,0.10)",
                  }}
                >
                  {/* Icon */}

                  <div
                    className="
                      flex h-14 w-14
                      shrink-0 items-center justify-center
                      rounded-2xl
                      transition-all duration-300
                      group-hover:text-white
                    "
                    style={{
                      backgroundColor: "rgba(86,25,35,0.08)",
                      color: MAROON,
                    }}
                  >
                    <Icon className="h-7 w-7" />
                  </div>

                  {/* Content */}

                  <h3 className="mt-5 text-lg font-semibold text-slate-900">
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
                      className="mt-2 block break-words font-semibold transition-colors hover:underline"
                      style={{ color: MAROON }}
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p
                      className="mt-2 font-semibold"
                      style={{ color: MAROON }}
                    >
                      {item.value}
                    </p>
                  )}

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    {item.sub}
                  </p>

                  {isWhatsApp && (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        mt-5 inline-flex
                        items-center gap-2
                        text-sm font-bold
                        transition-all
                        hover:gap-3
                      "
                      style={{ color: MAROON }}
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

          {/* =====================================================
              COMPANY CARD
          ===================================================== */}

          <div
            className="mt-16 overflow-hidden rounded-[2rem] p-8 text-white shadow-2xl lg:p-10"
            style={{
              background:
                "linear-gradient(135deg, #3D1118 0%, #561923 55%, #7A2330 100%)",
            }}
          >
            <div className="grid gap-10 lg:grid-cols-[1fr_420px] lg:items-center">
              <div>
                <div
                  className="
                    flex h-14 w-14
                    items-center justify-center
                    rounded-2xl
                    bg-white/10
                    backdrop-blur
                  "
                >
                  <Building2 className="h-7 w-7 text-white" />
                </div>

                <h3 className="mt-6 text-3xl font-bold">
                  UNASCO Aviation Limited
                </h3>

                <p className="mt-4 max-w-2xl leading-8 text-white/75">
                  Professional Aviation Services, Flight Operations,
                  Airline Management, Air Cargo Transportation,
                  Logistics Solutions, General Aviation, Travel
                  Management, and Cargo Operations.
                </p>

                <div className="mt-7 flex flex-wrap gap-3">
                  <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-white/90">
                    Aviation Services
                  </span>

                  <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-white/90">
                    Air Cargo
                  </span>

                  <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-white/90">
                    Logistics
                  </span>

                  <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-white/90">
                    Travel Management
                  </span>
                </div>
              </div>

              {/* Quick WhatsApp Contacts */}

              <div className="rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur-md">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/60">
                  Direct WhatsApp
                </p>

                <div className="mt-5 space-y-4">
                  {/* CEO */}

                  <a
                    href={CEO_WHATSAPP}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      flex items-center gap-4
                      rounded-2xl
                      border border-white/10
                      bg-white/5
                      p-4
                      transition-all duration-300
                      hover:bg-white/10
                    "
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-[#561923]">
                      <MessageCircle className="h-5 w-5" />
                    </div>

                    <div className="min-w-0">
                      <p className="text-xs uppercase tracking-wider text-white/55">
                        Chief Executive Officer
                      </p>

                      <p className="mt-1 font-semibold text-white">
                        +966 556 011 122
                      </p>
                    </div>

                    <ArrowRight className="ml-auto h-4 w-4 shrink-0 text-white/50" />
                  </a>

                  {/* Director Sales Manager */}

                  <a
                    href={SALES_WHATSAPP}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      flex items-center gap-4
                      rounded-2xl
                      border border-white/10
                      bg-white/5
                      p-4
                      transition-all duration-300
                      hover:bg-white/10
                    "
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-[#561923]">
                      <MessageCircle className="h-5 w-5" />
                    </div>

                    <div className="min-w-0">
                      <p className="text-xs uppercase tracking-wider text-white/55">
                        Director, Sales Manager
                      </p>

                      <p className="mt-1 font-semibold text-white">
                        +234 806 333 2227
                      </p>
                    </div>

                    <ArrowRight className="ml-auto h-4 w-4 shrink-0 text-white/50" />
                  </a>
                </div>

                {/* Email */}

                <a
                  href="mailto:unascoaviationltd@gmail.com"
                  className="
                    mt-4 flex items-center gap-4
                    rounded-2xl
                    border border-white/10
                    bg-white/5
                    p-4
                    transition-all duration-300
                    hover:bg-white/10
                  "
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-[#561923]">
                    <Mail className="h-5 w-5" />
                  </div>

                  <div className="min-w-0">
                    <p className="text-xs uppercase tracking-wider text-white/55">
                      Official Email
                    </p>

                    <p className="mt-1 break-all font-semibold text-white">
                      unascoaviationltd@gmail.com
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* =====================================================
              HEAD OFFICE
          ===================================================== */}

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
              <div className="flex items-start gap-4">
                <div
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl"
                  style={{
                    backgroundColor: "rgba(86,25,35,0.08)",
                    color: MAROON,
                  }}
                >
                  <MapPin className="h-6 w-6" />
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
                    Head Office
                  </p>

                  <h3 className="mt-2 text-xl font-bold text-slate-900">
                    Kano, Nigeria
                  </h3>

                  <p className="mt-2 leading-7 text-slate-600">
                    No. 7 Bompai Road, Kano State, Nigeria
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
              <div className="flex items-start gap-4">
                <div
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl"
                  style={{
                    backgroundColor: "rgba(86,25,35,0.08)",
                    color: MAROON,
                  }}
                >
                  <Clock className="h-6 w-6" />
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
                    Working Hours
                  </p>

                  <h3 className="mt-2 text-xl font-bold text-slate-900">
                    Monday - Friday
                  </h3>

                  <p className="mt-2 leading-7 text-slate-600">
                    08:00 AM - 06:00 PM
                  </p>

                  <p className="mt-1 text-sm text-slate-500">
                    Operations Support Available 24/7
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* =====================================================
              FINAL WHATSAPP CTA
          ===================================================== */}

          <div className="mt-16 text-center">
            <p
              className="text-sm font-bold uppercase tracking-[0.25em]"
              style={{ color: MAROON }}
            >
              Need Assistance?
            </p>

            <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">
              Speak Directly With UNASCO
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-600">
              For fast enquiries, business discussions, sales
              assistance or aviation service requests, contact our
              team directly through WhatsApp.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href={SALES_WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex h-14
                  items-center gap-3
                  rounded-full
                  px-7
                  font-bold text-white
                  shadow-xl
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:shadow-2xl
                "
                style={{ backgroundColor: MAROON }}
              >
                <MessageCircle className="h-5 w-5" />

                WhatsApp Sales

                <ArrowRight className="h-4 w-4" />
              </a>

              <a
                href={CEO_WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex h-14
                  items-center gap-3
                  rounded-full
                  border-2
                  px-7
                  font-bold
                  transition-all duration-300
                  hover:-translate-y-1
                "
                style={{
                  borderColor: MAROON,
                  color: MAROON,
                }}
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