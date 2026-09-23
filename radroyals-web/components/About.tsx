"use client";

import Image from "next/image";
import { Building2, Calendar, MapPin, Clock } from "lucide-react";

const highlights = [
  { icon: Building2, label: "Established",      value: "2025" },
  { icon: Calendar,  label: "Allocation Date",  value: "12 August 2025" },
  { icon: MapPin,    label: "Location",          value: "Ghaziabad, Uttar Pradesh" },
  { icon: Clock,     label: "Availability",      value: "09:00 AM – 06:00 PM" },
];

export default function About() {
  return (
    <section id="about" aria-label="About RAD ROYALS PRIVATE LIMITED" className="py-28 md:py-36" style={{ backgroundColor: "var(--color-offwhite)" }}>
      <div className="max-w-7xl mx-auto px-6">

        {/* ── Section header ── */}
        <div className="mb-16 reveal">
          <span className="section-label">Who We Are</span>
          <div className="gold-rule mt-3 mb-0" />
        </div>

        {/* ── Two column layout ── */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left: Text + Info Cards */}
          <div>
            <h2 className="display-lg text-charcoal mb-8 reveal-left">
              Driven by Vision.{" "}
              <span className="italic text-navy-500">Defined by Precision.</span>
            </h2>

            <div className="space-y-5 mb-12">
              <p className="body-lg reveal-left" data-delay="100">
                RAD ROYALS PRIVATE LIMITED is a newly established organisation
                built around a clear philosophy — transforming vision into
                meaningful outcomes through precision, commitment and responsible
                execution.
              </p>
              <p className="body-base text-muted reveal-left" data-delay="150">
                Founded with a forward-looking mindset, the company aims to create
                work that reflects quality, purpose and long-term value.
              </p>
            </div>

            {/* Info cards */}
            <div className="grid grid-cols-2 gap-4 reveal" data-delay="200">
              {highlights.map(({ icon: Icon, label, value }) => (
                <div
                  key={label}
                  className="group p-5 border border-gray-100 hover:border-gold-500/40
                             hover:shadow-gold transition-all duration-300 hover:-translate-y-0.5 bg-offwhite"
                >
                  <Icon
                    size={16}
                    className="text-gold-500 mb-3 transition-transform duration-300 group-hover:scale-110"
                    aria-hidden="true"
                  />
                  <p className="font-body text-[10px] text-muted tracking-widest uppercase mb-1">{label}</p>
                  <p className="font-display text-navy-500 text-base font-medium leading-snug">{value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Image */}
          <div className="relative reveal-right">
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src="/images/about-architecture.jpg"
                alt="Contemporary architecture representing RAD ROYALS precision and craftsmanship"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Gold border accent */}
              <div className="absolute inset-0 border border-gold-500/20 pointer-events-none" />
            </div>

            {/* Floating accent card */}
            <div className="absolute -bottom-6 -left-6 bg-navy-500 px-6 py-5 shadow-premium animate-float">
              <p className="font-display text-gold-400 text-3xl font-light leading-none">2025</p>
              <p className="font-body text-white/60 text-[10px] tracking-widest uppercase mt-1">
                Founded
              </p>
            </div>

            {/* Decorative corner element */}
            <div className="absolute -top-4 -right-4 w-16 h-16 border-t-2 border-r-2 border-gold-500/40" aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  );
}
