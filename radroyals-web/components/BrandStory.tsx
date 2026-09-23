"use client";

import Image from "next/image";
import { Quote } from "lucide-react";

export default function BrandStory() {
  return (
    <section
      aria-label="Brand Story — Recognised by Visionaries"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* ── Background ── */}
      <div className="absolute inset-0">
        <Image
          src="/images/brand-story.jpg"
          alt="Grand landmark architecture representing vision, ambition and enduring pride"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/96 via-navy-950/80 to-navy-950/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 to-transparent" />
      </div>

      {/* ── Animated grid ── */}
      <div className="absolute inset-0 animated-grid opacity-20 pointer-events-none" aria-hidden="true" />

      {/* ── Content ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 md:py-24">
        <div className="max-w-2xl">

          <span className="section-label text-gold-400/70 reveal">Brand Philosophy</span>
          <div className="w-12 h-px bg-gold-500/50 mt-3 mb-12 reveal" />

          <h2 className="display-lg text-white mb-10 reveal" data-delay="100">
            Recognised by{" "}
            <span className="gold-shimmer italic">Visionaries.</span>
          </h2>

          {/* Quote icon */}
          <div className="reveal" data-delay="150">
            <Quote
              size={36}
              className="text-gold-500/40 mb-6"
              aria-hidden="true"
            />
          </div>

          <blockquote className="font-display text-xl md:text-2xl font-light italic text-white/75 leading-relaxed mb-10 reveal" data-delay="200">
            &ldquo;Across decades and continents, visionary leaders have contributed
            to our milestones, inaugurating structures that stand for ambition,
            endurance, and global pride. Their trust fuels our commitment, and
            their presence marks the significance of what we build — born from
            vision and delivered with precision.&rdquo;
          </blockquote>

          <div className="flex items-center gap-4 reveal" data-delay="280">
            <div className="w-10 h-px bg-gold-500/60" />
            <span className="font-body text-xs text-gold-400/60 tracking-[0.25em] uppercase font-semibold">
              RAD ROYALS PRIVATE LIMITED
            </span>
          </div>

          {/* ── Three philosophy pillars ── */}
          <div className="grid grid-cols-3 gap-6 mt-20 pt-10 border-t border-gold-500/10 reveal" data-delay="350">
            {[
              { label: "Ambition",   desc: "Building with purpose and conviction" },
              { label: "Endurance",  desc: "Structures and values that last" },
              { label: "Global Pride", desc: "Work that stands for something greater" },
            ].map(({ label, desc }) => (
              <div key={label} className="group">
                <div className="w-6 h-px bg-gold-500/40 group-hover:w-10 transition-all duration-300 mb-4" />
                <p className="font-display text-white text-base font-medium mb-2">{label}</p>
                <p className="font-body text-white/30 text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
