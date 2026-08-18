import type { Metadata } from "next";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Building2,
  Globe2,
} from "lucide-react";

import { PageHero } from "@/components/page-hero";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contact UNASCO Aviation Limited",
  description:
    "Contact UNASCO Aviation Limited for Flight Support Services, Air Cargo Transportation, Logistics Solutions, Airline Management and Hajj & Umrah Operations.",
};

const details = [
  {
    icon: Phone,
    title: "Chief Executive Officer",
    value: "+966 556 011 122",
    sub: "Executive & Corporate Enquiries",
    href: "tel:+966556011122",
  },
  {
    icon: Phone,
    title: "Sales Manager",
    value: "+234 806 333 2227",
    sub: "Hafiz Umar Ballah • Sales & Business Enquiries",
    href: "tel:+2348063332227",
  },
  {
    icon: Mail,
    title: "Official Email",
    value: "unascoaviationltd@gmail.com",
    sub: "Corporate & General Business Enquiries",
    href: "mailto:unascoaviationltd@gmail.com",
  },
  {
    icon: Mail,
    title: "Customer Support Email",
    value: "unascol2025@gmail.com",
    sub: "Customer Support & Service Enquiries",
    href: "mailto:unascol2025@gmail.com",
  },
  {
    icon: MapPin,
    title: "Head Office",
    value: "No. 7 Bompai Road, Kano State, Nigeria",
    sub: "Corporate Headquarters",
  },
  {
    icon: Globe2,
    title: "International Operations",
    value: "China • Nigeria",
    sub: "International Cargo & Logistics Network",
  },
  {
    icon: Clock,
    title: "Working Hours",
    value: "Monday - Friday",
    sub: "08:00 AM - 06:00 PM • Operations Support Available 24/7",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        subtitle="Contact UNASCO"
        breadcrumb="Contact"
        title="Let's Discuss Your Aviation Requirements"
      />

      <section className="relative overflow-hidden bg-gradient-to-br from-[#F8FBFF] via-[#EEF6FF] to-[#FFF6EF] py-24">

        {/* Background Decoration */}

        <div
          aria-hidden="true"
          className="absolute left-0 top-0 h-96 w-96 rounded-full bg-blue-200/30 blur-3xl"
        />

        <div
          aria-hidden="true"
          className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-orange-200/30 blur-3xl"
        />

        <div className="relative mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-[430px_1fr]">

          {/* LEFT SIDE */}

          <div>

            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
              Contact Information
            </span>

            <h2 className="mt-5 text-4xl font-bold leading-tight">
              We Are Ready To
              <span className="text-primary"> Assist You</span>
            </h2>

            <p className="mt-6 leading-8 text-muted-foreground">
              Connect with the UNASCO Aviation team for professional
              assistance with Flight Support Services, Air Cargo
              Transportation, Logistics Solutions, Airline Management,
              General Aviation Services and Hajj & Umrah Operations.
            </p>

            {/* CONTACT DETAILS */}

            <div className="mt-10 space-y-5">

              {details.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={`${item.title}-${item.value}`}
                    className="group flex gap-5 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl"
                  >

                    {/* Icon */}

                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white">
                      <Icon className="h-7 w-7" />
                    </div>

                    {/* Content */}

                    <div className="min-w-0">

                      <h3 className="text-lg font-semibold text-slate-900">
                        {item.title}
                      </h3>

                      {item.href ? (
                        <a
                          href={item.href}
                          className="mt-1 block break-words font-semibold text-primary transition-colors hover:text-[#FF6B00] hover:underline"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="mt-1 font-semibold text-primary">
                          {item.value}
                        </p>
                      )}

                      <p className="mt-1 text-sm leading-6 text-muted-foreground">
                        {item.sub}
                      </p>

                    </div>

                  </div>
                );
              })}

            </div>

            {/* COMPANY CARD */}

            <div className="mt-10 rounded-3xl bg-primary p-8 text-white shadow-2xl">

              <Building2 className="h-10 w-10 text-orange-300" />

              <h3 className="mt-5 text-2xl font-bold">
                UNASCO Aviation Limited
              </h3>

              <p className="mt-4 leading-8 text-white/80">
                Professional Aviation Services, Flight Operations,
                Airline Management, Air Cargo Transportation,
                Logistics Solutions, General Aviation, Travel Management,
                and Hajj & Umrah Operations.
              </p>

              {/* Quick Contact */}

              <div className="mt-7 space-y-4 border-t border-white/15 pt-6">

                <a
                  href="tel:+966556011122"
                  className="flex items-center gap-3 text-white/90 transition-colors hover:text-white"
                >
                  <Phone className="h-5 w-5 shrink-0 text-orange-300" />

                  <div>
                    <p className="text-xs uppercase tracking-wider text-white/60">
                      Chief Executive Officer
                    </p>

                    <p className="font-semibold">
                      +966 556 011 122
                    </p>
                  </div>
                </a>

                <a
                  href="tel:+2348063332227"
                  className="flex items-center gap-3 text-white/90 transition-colors hover:text-white"
                >
                  <Phone className="h-5 w-5 shrink-0 text-orange-300" />

                  <div>
                    <p className="text-xs uppercase tracking-wider text-white/60">
                      Sales Manager
                    </p>

                    <p className="font-semibold">
                      +234 806 333 2227
                    </p>
                  </div>
                </a>

                <a
                  href="mailto:unascoaviationltd@gmail.com"
                  className="flex items-center gap-3 text-white/90 transition-colors hover:text-white"
                >
                  <Mail className="h-5 w-5 shrink-0 text-orange-300" />

                  <div>
                    <p className="text-xs uppercase tracking-wider text-white/60">
                      Official Email
                    </p>

                    <p className="break-all font-semibold">
                      unascoaviationltd@gmail.com
                    </p>
                  </div>
                </a>

              </div>

            </div>

          </div>

          {/* RIGHT SIDE */}

          <div>

            <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-2xl lg:p-12">

              <div className="mb-8">

                <span className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
                  Send Message
                </span>

                <h2 className="mt-3 text-4xl font-bold">
                  Request A Quote
                </h2>

                <p className="mt-4 leading-7 text-muted-foreground">
                  Complete the form below and one of our aviation
                  specialists will review your request and respond
                  as soon as possible.
                </p>

              </div>

              <ContactForm />

            </div>

          </div>

        </div>

      </section>
    </>
  );
}