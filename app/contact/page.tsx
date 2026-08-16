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
    title: "Sales Manager",
    value: "+234 806 333 2227",
    sub: "Hafiz Umar Ballah",
    href: "tel:+2348063332227",
  },
  {
    icon: Mail,
    title: "Email Address",
    value: "unascol2025@gmail.com",
    sub: "Customer Support & Business Enquiries",
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
    title: "Branch Offices",
    value: "Abuja • Lagos • Minna",
    sub: "Nationwide Operations",
  },
  {
    icon: Clock,
    title: "Working Hours",
    value: "Monday - Friday",
    sub: "08:00 AM - 06:00 PM (Operations Support Available 24/7)",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact UNASCO"
        breadcrumb="Contact"
        title="Let's Discuss Your Aviation Requirements"
        description="Whether you require Flight Support Services, Air Cargo Transportation, Airline Management, Logistics Solutions or Hajj & Umrah Operations, our experienced team is ready to assist you."
        image="/about-operations.png"
        imageAlt="UNASCO Aviation Operations"
      />

      <section className="relative overflow-hidden bg-gradient-to-br from-[#F8FBFF] via-[#EEF6FF] to-[#FFF6EF] py-24">

        <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-blue-200/30 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-orange-200/30 blur-3xl"></div>

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
              Speak directly with our aviation professionals regarding
              Flight Support Services, Cargo Transportation,
              Logistics Solutions, Airline Management,
              General Aviation Services and Hajj & Umrah Operations.
            </p>

            <div className="mt-10 space-y-5">

              {details.map((item) => {

                const Icon = item.icon;

                return (

                  <div
                    key={item.title}
                    className="group flex gap-5 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-xl"
                  >

                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-white">

                      <Icon className="h-7 w-7" />

                    </div>

                    <div>

                      <h3 className="font-semibold text-lg">
                        {item.title}
                      </h3>

                      {item.href ? (

                        <a
                          href={item.href}
                          className="mt-1 block font-medium text-primary hover:underline"
                        >
                          {item.value}
                        </a>

                      ) : (

                        <p className="mt-1 font-medium text-primary">
                          {item.value}
                        </p>

                      )}

                      <p className="mt-1 text-sm text-muted-foreground">
                        {item.sub}
                      </p>

                    </div>

                  </div>

                );

              })}

            </div>

            <div className="mt-10 rounded-3xl bg-primary p-8 text-white shadow-2xl">

              <Building2 className="h-10 w-10 text-orange-300" />

              <h3 className="mt-5 text-2xl font-bold">
                UNASCO Aviation Limited
              </h3>

              <p className="mt-4 leading-8 text-white/80">
                Professional Aviation Services,
                Flight Operations,
                Airline Management,
                Air Cargo Transportation,
                Logistics Solutions,
                General Aviation,
                Travel Management,
                and Hajj & Umrah Operations.
              </p>

            </div>

          </div>

          {/* RIGHT SIDE */}

          <div>

            <div className="rounded-[32px] border bg-white p-8 shadow-2xl lg:p-12">

              <div className="mb-8">

                <span className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
                  Send Message
                </span>

                <h2 className="mt-3 text-4xl font-bold">
                  Request A Quote
                </h2>

                <p className="mt-4 text-muted-foreground">
                  Complete the form below and one of our aviation
                  specialists will respond as soon as possible.
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