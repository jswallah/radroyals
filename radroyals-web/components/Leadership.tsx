"use client";

import Image from "next/image";

export default function Leadership() {
  return (
    <section
      id="leadership"
      aria-label="Leadership"
      className="py-16 md:py-24"
      style={{ backgroundColor: "var(--color-offwhite)" }}
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* ── Section header ── */}
        <div className="text-center mb-20 reveal">
          <span className="section-label">The Helm</span>
          <div className="w-12 h-px bg-gold-500 mx-auto mt-3 mb-6" />
          <h2 className="display-lg text-charcoal">
            Leadership
          </h2>
        </div>

        {/* ── Leader card ── */}
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-0 items-stretch reveal">

            {/* Photo side */}
            <div className="relative overflow-hidden group">
              <div className="relative aspect-[3/4] md:aspect-auto md:h-full min-h-[400px]">
                <Image
                  src="/images/director.jpg"
                  alt="Archna Srivastava, Director of RAD ROYALS PRIVATE LIMITED"
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent" />

                {/* Gold frame accents */}
                <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-gold-500/60 pointer-events-none" aria-hidden="true" />
                <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-gold-500/60 pointer-events-none" aria-hidden="true" />
              </div>
            </div>

            {/* Text side */}
            <div className="bg-navy-950 p-10 md:p-14 flex flex-col justify-center">

              <div className="mb-8">
                <p className="font-body text-[10px] text-gold-500/70 tracking-[0.3em] uppercase mb-4">Director</p>
                <h3 className="font-display text-white text-3xl md:text-4xl font-light leading-tight mb-2">
                  Archna Srivastava
                </h3>
                <div className="w-10 h-px bg-gold-500 mt-4" />
              </div>

              <blockquote className="font-display text-xl italic text-white/60 leading-relaxed mb-8 border-l-2 border-gold-500/40 pl-5">
                &ldquo;Leadership grounded in vision, responsibility and long-term thinking.&rdquo;
              </blockquote>

              <p className="font-body text-sm text-white/40 leading-relaxed mb-10">
                Guiding RAD ROYALS PRIVATE LIMITED with a commitment to purposeful
                growth, transparent leadership and building lasting value in every
                endeavour the company undertakes.
              </p>

              {/* Company details */}
              <div className="space-y-3 pt-6 border-t border-gold-500/10">
                {[
                  { label: "Organisation", value: "RAD ROYALS PRIVATE LIMITED" },
                  { label: "Based at",     value: "Ghaziabad, Uttar Pradesh" },
                  { label: "Established",  value: "2025" },
                ].map(({ label, value }) => (
                  <div key={label} className="flex justify-between items-center text-xs">
                    <span className="font-body text-white/30 tracking-wider uppercase">{label}</span>
                    <span className="font-body text-white/60">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
