"use client";

import Image from "next/image";
import { ChevronDown, ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToVision = () => {
    document.getElementById("vision")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      aria-label="Hero section"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* ── Background Image ── */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-architecture.jpg"
          alt="Premium modern architecture representing RAD ROYALS vision"
          fill
          className="object-cover object-center scale-105"
          priority
          quality={90}
        />
        {/* Multi-layer overlay for deep navy atmosphere */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/92 via-navy-900/70 to-navy-800/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 via-transparent to-navy-950/20" />
      </div>

      {/* ── Animated Gold Line (decorative) ── */}
      <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-gold-500/30 to-transparent" />

      {/* ── Content ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 w-full">
        <div className="max-w-3xl">

          {/* Badge */}
          <div
            className="badge-gold mb-8 animate-fade-in"
            style={{ animationDelay: "0.1s", animationFillMode: "both" }}
            aria-label="Brand statement: Recognised by Visionaries"
          >
            <Sparkles size={10} className="text-gold-500" aria-hidden="true" />
            Recognised by Visionaries
          </div>

          {/* Headline */}
          <h1
            className="font-display text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light text-white leading-tight tracking-tight mb-6 animate-fade-up"
            style={{ animationDelay: "0.2s", animationFillMode: "both" }}
          >
            Building With{" "}
            <span className="gold-shimmer italic">Vision.</span>
            <br className="hidden sm:block" />{" "}
            Delivering With{" "}
            <span className="text-gold-400/90">Precision.</span>
          </h1>

          {/* Sub-headline */}
          <p
            className="font-body text-base md:text-lg text-white/60 leading-relaxed max-w-xl mb-10 animate-fade-up"
            style={{ animationDelay: "0.4s", animationFillMode: "both" }}
          >
            RAD ROYALS PRIVATE LIMITED represents a commitment to vision,
            precision and enduring value. We believe meaningful work begins with
            a clear vision and is realised through disciplined execution.
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 animate-fade-up"
            style={{ animationDelay: "0.55s", animationFillMode: "both" }}
          >
            <button
              id="hero-explore-btn"
              onClick={scrollToVision}
              className="btn-primary group"
              aria-label="Explore our vision"
            >
              Explore Our Vision
              <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
            </button>
            <button
              id="hero-contact-btn"
              onClick={scrollToContact}
              className="btn-outline group"
              aria-label="Contact us"
            >
              Contact Us
              <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
            </button>
          </div>

          {/* ── Decorative stat strip ── */}
          <div
            className="flex items-center gap-8 mt-16 pt-8 border-t border-white/10 animate-fade-up"
            style={{ animationDelay: "0.7s", animationFillMode: "both" }}
          >
            {[
              { value: "2025", label: "Established" },
              { value: "12 Aug", label: "Allocation Date" },
              { value: "09–18 hrs", label: "Office Hours" },
            ].map((stat) => (
              <div key={stat.value} className="text-center">
                <p className="font-display text-2xl font-light text-gold-400 leading-none">{stat.value}</p>
                <p className="font-body text-[10px] text-white/40 tracking-widest uppercase mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Scroll Indicator ── */}
      <button
        id="hero-scroll-indicator"
        onClick={scrollToAbout}
        aria-label="Scroll to About section"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40 hover:text-gold-400 transition-colors duration-300 group"
      >
        <span className="font-body text-[9px] tracking-[0.3em] uppercase">Scroll</span>
        <ChevronDown size={18} className="animate-scroll-bounce" aria-hidden="true" />
      </button>
    </section>
  );
}
