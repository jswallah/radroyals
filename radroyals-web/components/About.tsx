"use client";

import Image from "next/image";
import { Building2, Calendar, MapPin, Clock } from "lucide-react";

const highlights = [
  { icon: Building2, label: "Established",     value: "2025" },
  { icon: Calendar,  label: "Allocation Date", value: "12 August 2025" },
  { icon: MapPin,    label: "Location",         value: "Ghaziabad, Uttar Pradesh" },
  { icon: Clock,     label: "Availability",     value: "09:00 AM – 06:00 PM" },
];

export default function About() {
  return (
    <section id="about" aria-label="About RAD ROYALS PRIVATE LIMITED" className="py-16 md:py-24 bg-white">
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
              <span className="italic" style={{ color: "var(--color-navy-500)" }}>
                Defined by Precision.
              </span>
            </h2>

            <div className="space-y-5 mb-12">
              <p className="body-lg reveal-left" data-delay="100">
                RAD ROYALS PRIVATE LIMITED is a newly established organisation
                built around a clear philosophy — transforming vision into
                meaningful outcomes through precision, commitment and responsible
                execution.
              </p>
              <p className="body-base reveal-left" data-delay="150">
                Founded with a forward-looking mindset, the company aims to create
                work that reflects quality, purpose and long-term value.
              </p>
            </div>

            {/* Info cards */}
            <div className="grid grid-cols-2 gap-4 reveal" data-delay="200">
              {highlights.map(({ icon: Icon, label, value }) => (
                <div
                  key={label}
                  className="group p-5 border border-gray-100 hover:border-gold-500/40 hover:shadow-gold transition-all duration-300 hover:-translate-y-0.5" style={{ backgroundColor: "var(--color-offwhite)" }}
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

          {/* Right: Logo showcase */}
          <div className="relative reveal-right flex flex-col items-center justify-center">

            {/* Logo container — elegant centered display */}
            <div
              className="relative w-full flex items-center justify-center py-16 px-12"
              style={{
                background: "linear-gradient(135deg, var(--color-navy-950) 0%, var(--color-navy-700) 100%)",
              }}
            >
              {/* Animated gold grid background */}
              <div
                className="absolute inset-0 opacity-10 pointer-events-none"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(201,164,81,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(201,164,81,0.15) 1px, transparent 1px)",
                  backgroundSize: "40px 40px",
                }}
                aria-hidden="true"
              />

              {/* Corner accents */}
              <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2" style={{ borderColor: "var(--color-gold-500)" }} aria-hidden="true" />
              <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2" style={{ borderColor: "var(--color-gold-500)" }} aria-hidden="true" />
              <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2" style={{ borderColor: "var(--color-gold-500)" }} aria-hidden="true" />
              <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2" style={{ borderColor: "var(--color-gold-500)" }} aria-hidden="true" />

              {/* Logo */}
              <div className="relative z-10 flex flex-col items-center gap-6">
                <div className="relative w-44 h-44 animate-float drop-shadow-2xl">
                  <Image
                    src="/images/logo.png"
                    alt="RAD ROYALS PRIVATE LIMITED Official Logo"
                    fill
                    className="object-contain"
                    sizes="176px"
                  />
                </div>

                {/* Brand name below logo */}
                <div className="text-center">
                  <p className="font-display text-white text-2xl font-semibold tracking-widest leading-none">
                    RAD ROYALS
                  </p>
                  <p
                    className="font-body text-[10px] font-semibold tracking-[0.4em] uppercase mt-2"
                    style={{ color: "var(--color-gold-500)" }}
                  >
                    Private Limited
                  </p>
                  <div
                    className="w-12 h-px mx-auto mt-3"
                    style={{ background: "var(--color-gold-500)" }}
                    aria-hidden="true"
                  />
                  <p
                    className="font-display italic text-sm mt-3"
                    style={{ color: "rgba(201,164,81,0.6)" }}
                  >
                    Recognised by Visionaries
                  </p>
                </div>
              </div>
            </div>

            {/* Floating year badge */}
            <div
              className="absolute -bottom-5 -left-5 px-6 py-4 shadow-premium animate-float"
              style={{ background: "var(--color-navy-500)" }}
            >
              <p className="font-display text-3xl font-light leading-none" style={{ color: "var(--color-gold-400)" }}>
                2025
              </p>
              <p className="font-body text-[10px] tracking-widest uppercase mt-1" style={{ color: "rgba(255,255,255,0.5)" }}>
                Founded
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
