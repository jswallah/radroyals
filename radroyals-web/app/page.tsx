"use client";

import { useEffect } from "react";
import Navbar      from "@/components/Navbar";
import Hero        from "@/components/Hero";
import About       from "@/components/About";
import Vision      from "@/components/Vision";
import Values      from "@/components/Values";
import Highlights  from "@/components/Highlights";
import Leadership  from "@/components/Leadership";
import BrandStory  from "@/components/BrandStory";
import Contact     from "@/components/Contact";
import Footer      from "@/components/Footer";

export default function HomePage() {
  /* ── Global scroll reveal ── */
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>(
      ".reveal, .reveal-left, .reveal-right"
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const delay = parseInt(el.dataset.delay ?? "0", 10);
            setTimeout(() => el.classList.add("visible"), delay);
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <Vision />
        <Values />
        <Highlights />
        <Leadership />
        <BrandStory />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
