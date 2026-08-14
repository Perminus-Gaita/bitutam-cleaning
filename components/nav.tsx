"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#clients", label: "Clients" },
  { href: "#cleaning", label: "Cleaning" },
  { href: "#gardening", label: "Gardening" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#why", label: "Why Us" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "bg-[#0d431f]/95 backdrop-blur-md shadow-lg shadow-black/10"
          : "bg-gradient-to-b from-black/45 to-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <a href="#top" className="group flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="grid h-10 w-10 place-items-center rounded-lg bg-white/95 font-display text-xl font-bold text-[#0d431f]">
            B
          </span>
          <span className="leading-none text-white">
            <span className="block font-display text-lg font-bold tracking-wide">BITUTAM</span>
            <span className="block text-[10px] font-medium uppercase tracking-[0.22em] text-white/70">
              Cleaning Services
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative text-sm font-medium text-white/85 transition-colors hover:text-white after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:w-0 after:bg-[#7bc144] after:transition-all hover:after:w-full"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full bg-[#7bc144] px-5 py-2.5 text-sm font-semibold text-[#062615] transition-transform hover:scale-[1.04]"
          >
            Get a Quote
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="grid h-10 w-10 place-items-center rounded-md text-white lg:hidden"
        >
          <span className="relative block h-4 w-6">
            <span
              className={`absolute left-0 h-0.5 w-6 bg-white transition-all ${open ? "top-1.5 rotate-45" : "top-0"}`}
            />
            <span className={`absolute left-0 top-1.5 h-0.5 w-6 bg-white transition-opacity ${open ? "opacity-0" : ""}`} />
            <span
              className={`absolute left-0 h-0.5 w-6 bg-white transition-all ${open ? "top-1.5 -rotate-45" : "top-3"}`}
            />
          </span>
        </button>
      </div>

      {open && (
        <nav className="border-t border-white/10 lg:hidden">
          <div className="mx-auto max-w-7xl px-5 pb-6 pt-2 sm:px-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block border-b border-white/10 py-3.5 font-display text-lg tracking-wide text-white"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-5 block rounded-full bg-[#7bc144] py-3 text-center font-semibold text-[#062615]"
            >
              Get a Quote
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
