import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { Logo } from "@/components/logo";
import { navLinks, siteConfig } from "@/lib/site";

const services = [
  { label: "Flight Support Services", href: "/aviation-services" },
  { label: "Air Cargo Transportation", href: "/cargo-services" },
  { label: "Airline Management", href: "/aviation-services" },
  { label: "Cargo & Logistics", href: "/logistics" },
  { label: "Travel & Tours", href: "/travel" },
  { label: "Hajj & Umrah", href: "/hajj-umrah" },
];

export function SiteFooter() {
  return (
    <footer className="bg-[#0A2E6F] text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">

        <div className="grid gap-12 lg:grid-cols-4">

          {/* Company */}
          <div>

            <Logo inverted />

            <p className="mt-6 text-sm leading-7 text-white/70">
              UNASCO Aviation Limited is a Nigerian aviation company
              providing Flight Support Services, Flight Operations,
              Airline Management, Air Cargo Transportation, Logistics
              Solutions, General Aviation, Travel Management and
              Hajj &amp; Umrah Services with professionalism,
              safety and operational excellence.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">

              {["LinkedIn", "Facebook", "Instagram", "X"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="rounded-lg border border-white/20 px-4 py-2 text-sm transition hover:border-[#FF6B00] hover:bg-[#FF6B00]"
                >
                  {item}
                </a>
              ))}

            </div>

          </div>

          {/* Company Links */}
          <div>

            <h3 className="text-lg font-semibold">
              Company
            </h3>

            <ul className="mt-6 space-y-4">

              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 transition hover:text-[#FF6B00]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}

            </ul>

          </div>

          {/* Services */}
          <div>

            <h3 className="text-lg font-semibold">
              Our Services
            </h3>

            <ul className="mt-6 space-y-4">

              {services.map((service) => (
                <li key={service.label}>
                  <Link
                    href={service.href}
                    className="text-white/70 transition hover:text-[#FF6B00]"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}

            </ul>

          </div>

          {/* Contact */}
          <div>

            <h3 className="text-lg font-semibold">
              Contact Information
            </h3>

            <div className="mt-6 space-y-6">

              {/* Head Office */}
              <div className="flex items-start gap-3">

                <MapPin className="mt-1 h-5 w-5 shrink-0 text-[#FF6B00]" />

                <div>

                  <h4 className="font-semibold">
                    Head Office
                  </h4>

                  <p className="mt-1 text-sm leading-6 text-white/70">
                    No. 7 Bompai Road,
                    <br />
                    Kano State,
                    <br />
                    Nigeria.
                  </p>

                </div>

              </div>

              {/* CEO */}
              <div className="flex items-start gap-3">

                <Phone className="mt-1 h-5 w-5 shrink-0 text-[#FF6B00]" />

                <div>

                  <h4 className="font-semibold">
                    Chief Executive Officer
                  </h4>

                  <a
                    href="tel:+966556011122"
                    className="mt-1 block text-white/70 transition hover:text-[#FF6B00]"
                  >
                    +966 556 011 122
                  </a>

                  <p className="text-sm text-white/50">
                    Executive &amp; Corporate Enquiries
                  </p>

                </div>

              </div>

              {/* Sales Manager */}
              <div className="flex items-start gap-3">

                <Phone className="mt-1 h-5 w-5 shrink-0 text-[#FF6B00]" />

                <div>

                  <h4 className="font-semibold">
                    Sales Manager
                  </h4>

                  <a
                    href="tel:+2348063332227"
                    className="mt-1 block text-white/70 transition hover:text-[#FF6B00]"
                  >
                    +234 806 333 2227
                  </a>

                  <p className="text-sm text-white/50">
                    Hafiz Umar Ballah
                  </p>

                </div>

              </div>

              {/* Official Email */}
              <div className="flex items-start gap-3">

                <Mail className="mt-1 h-5 w-5 shrink-0 text-[#FF6B00]" />

                <div>

                  <h4 className="font-semibold">
                    Official Email
                  </h4>

                  <a
                    href="mailto:unascoaviationltd@gmail.com"
                    className="mt-1 block break-all text-white/70 transition hover:text-[#FF6B00]"
                  >
                    unascoaviationltd@gmail.com
                  </a>

                  <p className="text-sm text-white/50">
                    Corporate &amp; General Enquiries
                  </p>

                </div>

              </div>

              {/* Customer Support Email */}
              <div className="flex items-start gap-3">

                <Mail className="mt-1 h-5 w-5 shrink-0 text-[#FF6B00]" />

                <div>

                  <h4 className="font-semibold">
                    Customer Support
                  </h4>

                  <a
                    href="mailto:unascol2025@gmail.com"
                    className="mt-1 block break-all text-white/70 transition hover:text-[#FF6B00]"
                  >
                    unascol2025@gmail.com
                  </a>

                  <p className="text-sm text-white/50">
                    Customer Support &amp; Service Enquiries
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

        {/* Bottom */}
        <div className="mt-14 flex flex-col items-center justify-between gap-5 border-t border-white/10 pt-8 text-sm text-white/60 md:flex-row">

          <p>
            © {new Date().getFullYear()} {siteConfig.name}. All Rights Reserved.
          </p>

          <div className="flex gap-6">

            <Link
              href="/privacy-policy"
              className="transition hover:text-[#FF6B00]"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="transition hover:text-[#FF6B00]"
            >
              Terms &amp; Conditions
            </Link>

          </div>

        </div>

      </div>
    </footer>
  );
}