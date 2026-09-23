"use client";

import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";

const footerLinks = [
  { label: "Home",           href: "#home" },
  { label: "About",          href: "#about" },
  { label: "Vision",         href: "#vision" },
  { label: "Leadership",     href: "#leadership" },
  { label: "Contact",        href: "#contact" },
  { label: "Privacy Policy", href: "#" },
];

export default function Footer() {
  const scrollTo = (href: string) => {
    if (href === "#") return;
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      aria-label="Site footer"
      className="bg-navy-950 text-white/60 border-t border-gold-500/10"
    >
      {/* ── Main footer content ── */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-12 gap-12">

          {/* Brand column */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <div className="relative w-12 h-12 flex-shrink-0">
                <Image
                  src="/images/logo.png"
                  alt="RAD ROYALS Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <p className="font-display text-white text-xl font-semibold tracking-wider leading-none">
                  RAD ROYALS
                </p>
                <p className="font-body text-gold-500/60 text-[9px] tracking-[0.3em] uppercase mt-0.5">
                  Private Limited
                </p>
              </div>
            </div>

            <p className="font-display text-base italic text-white/40 leading-relaxed mb-8 max-w-xs">
              &ldquo;Building With Vision. Delivering With Precision.&rdquo;
            </p>

            <div className="w-10 h-px bg-gold-500/40 mb-8" />

            {/* Contact details */}
            <div className="space-y-4">
              <a
                href="tel:+917428435887"
                id="footer-phone"
                className="flex items-center gap-3 hover:text-gold-400 transition-colors duration-200 group"
                aria-label="Call RAD ROYALS: +91-7428435887"
              >
                <Phone size={13} className="text-gold-500/50 group-hover:text-gold-400 transition-colors" aria-hidden="true" />
                <span className="font-body text-sm">+91-7428435887</span>
              </a>
              <a
                href="mailto:radroyals25@gmail.com"
                id="footer-email"
                className="flex items-center gap-3 hover:text-gold-400 transition-colors duration-200 group"
                aria-label="Email RAD ROYALS: radroyals25@gmail.com"
              >
                <Mail size={13} className="text-gold-500/50 group-hover:text-gold-400 transition-colors" aria-hidden="true" />
                <span className="font-body text-sm">radroyals25@gmail.com</span>
              </a>
              <div className="flex items-start gap-3">
                <MapPin size={13} className="text-gold-500/50 flex-shrink-0 mt-1" aria-hidden="true" />
                <address
                  id="footer-address"
                  className="font-body text-sm not-italic leading-relaxed"
                >
                  C-606, 6th Floor, Blue Moon Homes,<br />
                  Raj Nagar Extension, Ghaziabad,<br />
                  Uttar Pradesh, India – 201017
                </address>
              </div>
            </div>
          </div>

          {/* Spacer */}
          <div className="hidden md:block md:col-span-1" />

          {/* Quick links */}
          <div className="md:col-span-3">
            <h3 className="font-body text-[10px] text-gold-500/60 tracking-[0.3em] uppercase font-semibold mb-6">
              Quick Links
            </h3>
            <nav aria-label="Footer navigation">
              <ul className="space-y-3">
                {footerLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                      className="font-body text-sm text-white/50 hover:text-gold-400
                                 transition-colors duration-200 hover:translate-x-1 inline-block"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Company info column */}
          <div className="md:col-span-3">
            <h3 className="font-body text-[10px] text-gold-500/60 tracking-[0.3em] uppercase font-semibold mb-6">
              Company Info
            </h3>
            <div className="space-y-3 text-sm">
              {[
                { label: "Entity",       value: "Private Limited" },
                { label: "Established",  value: "2025" },
                { label: "Allotment",    value: "12 August 2025" },
                { label: "Domain",       value: "radroyals.in" },
                { label: "Director",     value: "Archna Srivastava" },
              ].map(({ label, value }) => (
                <div key={label} className="flex justify-between gap-4">
                  <span className="text-white/30 tracking-wide text-xs">{label}</span>
                  <span className="text-white/55 text-right text-xs">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Copyright bar ── */}
      <div className="border-t border-gold-500/10 py-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-white/25 text-center sm:text-left">
            © 2025–2026 RAD ROYALS PRIVATE LIMITED. All Rights Reserved.
          </p>
          <p className="font-body text-[10px] text-white/20 tracking-widest uppercase">
            Recognised by Visionaries
          </p>
        </div>
      </div>
    </footer>
  );
}
