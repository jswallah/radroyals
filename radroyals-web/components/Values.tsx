"use client";

import { Eye, Target, Shield, Star } from "lucide-react";

const values = [
  {
    id: "vision-card",
    num: "01",
    icon: Eye,
    title: "Vision",
    body: "Thinking beyond today to create meaningful possibilities for tomorrow.",
    accent: "Seeing further.",
  },
  {
    id: "precision-card",
    num: "02",
    icon: Target,
    title: "Precision",
    body: "Attention to detail, disciplined execution and a commitment to quality.",
    accent: "Every detail matters.",
  },
  {
    id: "trust-card",
    num: "03",
    icon: Shield,
    title: "Trust",
    body: "Building relationships through transparency, responsibility and consistency.",
    accent: "Built to last.",
  },
  {
    id: "excellence-card",
    num: "04",
    icon: Star,
    title: "Excellence",
    body: "Striving for high standards in every aspect of our work.",
    accent: "No compromise.",
  },
];

export default function Values() {
  return (
    <section
      id="philosophy"
      aria-label="Our Philosophy and Values"
      className="py-16 md:py-24"
      style={{ backgroundColor: "var(--color-offwhite)" }}
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* ── Section header ── */}
        <div className="mb-16">
          <div className="flex items-center justify-between flex-wrap gap-6">
            <div className="reveal">
              <span className="section-label">Philosophy & Values</span>
              <div className="gold-rule mt-3" />
            </div>
            <h2 className="display-md text-charcoal max-w-sm text-right reveal-right">
              What We <span className="italic text-navy-500">Stand For</span>
            </h2>
          </div>
        </div>

        {/* ── Cards ── */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => {
            const Icon = v.icon;
            return (
              <article
                key={v.id}
                id={v.id}
                aria-label={`Value: ${v.title}`}
                className="group relative bg-white border border-gray-100 p-8 overflow-hidden
                           hover:border-gold-500/30 hover:shadow-gold
                           transition-all duration-500 hover:-translate-y-2 reveal"
                data-delay={`${i * 100}`}
              >
                {/* Background number */}
                <span
                  className="absolute -top-2 -right-1 font-display text-[80px] font-bold
                             text-gray-50 group-hover:text-gold-500/8 transition-colors duration-500
                             leading-none select-none pointer-events-none"
                  aria-hidden="true"
                >
                  {v.num}
                </span>

                {/* Gold top bar */}
                <div className="w-0 h-px bg-gold-500 absolute top-0 left-0 group-hover:w-full transition-all duration-500" aria-hidden="true" />

                {/* Icon */}
                <div
                  className="w-11 h-11 flex items-center justify-center border border-gold-500/30
                             bg-gold-500/5 group-hover:bg-gold-500/10 group-hover:border-gold-500/50
                             transition-all duration-300 mb-6"
                >
                  <Icon
                    size={18}
                    className="text-gold-600 group-hover:scale-110 transition-transform duration-300"
                    aria-hidden="true"
                  />
                </div>

                {/* Number label */}
                <p className="font-body text-[10px] text-gold-500/60 tracking-[0.25em] uppercase mb-3">
                  {v.num}
                </p>

                {/* Title */}
                <h3 className="font-display text-navy-500 text-2xl font-medium mb-3 group-hover:text-navy-600 transition-colors duration-300">
                  {v.title}
                </h3>

                {/* Body */}
                <p className="font-body text-sm text-muted leading-relaxed mb-5">{v.body}</p>

                {/* Accent line */}
                <p className="font-display text-xs italic text-gold-500/60 group-hover:text-gold-500 transition-colors duration-300">
                  &ldquo;{v.accent}&rdquo;
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
