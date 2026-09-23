"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home",       href: "#home" },
  { label: "About",      href: "#about" },
  { label: "Vision",     href: "#vision" },
  { label: "Philosophy", href: "#philosophy" },
  { label: "Leadership", href: "#leadership" },
  { label: "Contact",    href: "#contact" },
];

export default function Navbar() {
  const [scrolled,     setScrolled]     = useState(false);
  const [mobileOpen,   setMobileOpen]   = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  /* ── Scroll handler ── */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);

      // Active section detection
      const sections = navLinks.map((l) => l.href.replace("#", ""));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ── Lock body scroll when mobile menu is open ── */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
  }, [mobileOpen]);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav
        aria-label="Main navigation"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500
          ${scrolled
            ? "bg-navy-950/95 backdrop-blur-md border-b border-gold-500/10 py-3 shadow-lg"
            : "bg-transparent py-5"
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

          {/* ── Logo ── */}
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); handleNavClick("#home"); }}
            className="flex items-center gap-3 group"
            aria-label="RAD ROYALS PRIVATE LIMITED - Home"
          >
            <div className="relative w-11 h-11 flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/images/logo.png"
                alt="RAD ROYALS Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="leading-none">
              <p className="font-display text-white text-lg font-semibold tracking-wider leading-none">
                RAD ROYALS
              </p>
              <p className="font-body text-gold-500/80 text-[9px] font-medium tracking-[0.3em] uppercase mt-0.5">
                Private Limited
              </p>
            </div>
          </a>

          {/* ── Desktop Nav ── */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                className={`nav-link text-sm font-medium tracking-wide transition-colors duration-200
                  ${activeSection === link.href.replace("#", "")
                    ? "text-gold-400 after:w-full"
                    : "text-white/70 hover:text-white"
                  }`}
                aria-current={activeSection === link.href.replace("#", "") ? "page" : undefined}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* ── CTA + Hamburger ── */}
          <div className="flex items-center gap-4">
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); handleNavClick("#contact"); }}
              className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 bg-gold-500 hover:bg-gold-400
                         text-navy-950 font-body font-semibold text-xs tracking-wider uppercase
                         transition-all duration-300 hover:shadow-glow hover:-translate-y-0.5"
              id="navbar-cta-btn"
            >
              Get in Touch
            </a>

            <button
              id="navbar-hamburger-btn"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden relative w-10 h-10 flex items-center justify-center text-white hover:text-gold-400 transition-colors duration-200"
            >
              <span className={`absolute transition-all duration-300 ${mobileOpen ? "opacity-100 rotate-0" : "opacity-0 rotate-90"}`}>
                <X size={22} />
              </span>
              <span className={`absolute transition-all duration-300 ${mobileOpen ? "opacity-0 -rotate-90" : "opacity-100 rotate-0"}`}>
                <Menu size={22} />
              </span>
            </button>
          </div>
        </div>
      </nav>

      {/* ── Mobile Menu Overlay ── */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-400
          ${mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-navy-950/95 backdrop-blur-lg"
          onClick={() => setMobileOpen(false)}
        />

        {/* Drawer content */}
        <div className={`absolute top-0 right-0 h-full w-72 bg-navy-950 border-l border-gold-500/10
                         flex flex-col pt-28 px-8 pb-12 transition-transform duration-400
                         ${mobileOpen ? "translate-x-0" : "translate-x-full"}`}>

          {/* Gold rule */}
          <div className="w-12 h-px bg-gold-500 mb-8" />

          <nav className="flex flex-col gap-6">
            {navLinks.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                className={`font-display text-2xl font-light tracking-wide transition-all duration-200
                  ${activeSection === link.href.replace("#", "")
                    ? "text-gold-400"
                    : "text-white/70 hover:text-white hover:translate-x-1"
                  }`}
                style={{ transitionDelay: mobileOpen ? `${i * 60}ms` : "0ms" }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="mt-auto pt-8 border-t border-gold-500/10">
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); handleNavClick("#contact"); }}
              className="btn-primary w-full justify-center text-xs tracking-widest uppercase"
            >
              Get in Touch
            </a>
            <p className="font-body text-xs text-white/30 text-center mt-6 tracking-wider">
              +91-7428435887
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
