"use client";

export default function Vision() {
  return (
    <section
      id="vision"
      aria-label="Our Vision"
      className="py-16 md:py-24 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* ── Two-column layout ── */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left: Text content */}
          <div>
            <span className="section-label reveal">Our Vision</span>
            <div className="gold-rule mt-3 mb-8 reveal" />

            <h2
              className="display-lg text-charcoal mb-6 reveal-left"
              style={{ color: "var(--color-charcoal)" }}
            >
              To Build a Future{" "}
              <span
                className="italic"
                style={{ color: "var(--color-navy-500)" }}
              >
                Shaped by Bold Ideas.
              </span>
            </h2>

            <p className="body-lg mb-6 reveal-left" data-delay="100">
              &ldquo;To build a future shaped by bold ideas, thoughtful execution
              and lasting value.&rdquo;
            </p>

            <p className="body-base reveal-left" data-delay="150">
              We believe vision is more than an idea. It is the ability to see
              possibilities, define a clear direction and create outcomes that
              stand the test of time.
            </p>
          </div>

          {/* Right: Three pillars */}
          <div className="space-y-6 reveal-right" data-delay="100">
            {[
              {
                num: "01",
                label: "Bold Ideas",
                desc: "Thinking beyond conventional boundaries to create meaningful possibilities for tomorrow.",
              },
              {
                num: "02",
                label: "Thoughtful Execution",
                desc: "Every step guided by discipline, attention to detail and a commitment to quality.",
              },
              {
                num: "03",
                label: "Lasting Value",
                desc: "Outcomes built to endure — reflecting quality, purpose and long-term impact.",
              },
            ].map(({ num, label, desc }, i) => (
              <div
                key={num}
                className="flex gap-6 p-6 border border-gray-100 hover:border-gold-500/30 hover:shadow-card transition-all duration-300 group"
                style={{ backgroundColor: "var(--color-offwhite)", transitionDelay: `${i * 60}ms` }}
              >
                {/* Number */}
                <div className="flex-shrink-0 pt-1">
                  <span
                    className="font-display text-2xl font-light"
                    style={{ color: "var(--color-gold-500)" }}
                  >
                    {num}
                  </span>
                </div>

                {/* Content */}
                <div>
                  <h3
                    className="font-display text-xl font-medium mb-2 transition-colors duration-300 group-hover:text-navy-600"
                    style={{ color: "var(--color-charcoal)" }}
                  >
                    {label}
                  </h3>
                  <p
                    className="font-body text-sm leading-relaxed"
                    style={{ color: "var(--color-muted)" }}
                  >
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Bottom quote strip ── */}
        <div
          className="mt-20 pt-10 border-t border-gray-100 flex flex-col sm:flex-row items-start sm:items-center gap-6 reveal"
          data-delay="200"
        >
          <div
            className="w-px h-10 self-stretch"
            style={{ background: "var(--color-gold-500)" }}
            aria-hidden="true"
          />
          <p
            className="font-display text-xl italic font-light"
            style={{ color: "var(--color-navy-500)" }}
          >
            &ldquo;Vision is the ability to see possibilities and create outcomes
            that stand the test of time.&rdquo;
          </p>
          <div
            className="ml-auto flex-shrink-0 hidden sm:flex items-center gap-2"
          >
            <span
              className="font-body text-xs tracking-widest uppercase"
              style={{ color: "var(--color-muted)" }}
            >
              RAD ROYALS
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
