"use client";

const highlights = [
  {
    id: "highlight-year",
    value: "2025",
    label: "Company Established",
    sublabel: "Allocation Year",
  },
  {
    id: "highlight-date",
    value: "12 AUG",
    label: "Allocation Date",
    sublabel: "Official Registration",
  },
  {
    id: "highlight-hours",
    value: "09–18",
    label: "Working Hours",
    sublabel: "Monday to Saturday",
  },
  {
    id: "highlight-location",
    value: "GZB",
    label: "Head Office",
    sublabel: "Ghaziabad, Uttar Pradesh",
  },
];

export default function Highlights() {
  return (
    <section
      aria-label="Company Highlights"
      className="py-24 bg-navy-500 relative overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 animated-grid opacity-30 pointer-events-none" aria-hidden="true" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/40 to-transparent" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/40 to-transparent" aria-hidden="true" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        <div className="text-center mb-14 reveal">
          <span className="section-label text-gold-400/70">Company Highlights</span>
          <div className="w-12 h-px bg-gold-500/50 mx-auto mt-3" />
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-0">
          {highlights.map((h, i) => (
            <div
              key={h.id}
              id={h.id}
              className={`group text-center py-10 px-6 reveal
                ${i < highlights.length - 1 ? "border-r border-gold-500/10" : ""}
                hover:bg-white/5 transition-colors duration-300`}
              data-delay={`${i * 80}`}
            >
              <p className="font-display text-5xl md:text-6xl font-light text-gold-400 leading-none mb-3 group-hover:text-gold-300 transition-colors duration-300">
                {h.value}
              </p>
              <p className="font-body text-white/70 text-sm font-medium tracking-wide mb-1">{h.label}</p>
              <p className="font-body text-white/30 text-xs tracking-wider">{h.sublabel}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
