"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import ThemeToggle from "../components/ThemeToggle";
import { useTheme } from "../components/ThemeProvider";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "Courses", href: "#courses" },
  { name: "About", href: "#about" },
  { name: "Faculty", href: "#faculty" },
  { name: "Results", href: "#results" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-border bg-surface/95 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-surface/80"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="text-lg font-bold tracking-tight text-text-main sm:text-xl"
        >
          <span className="text-primary">Tuition</span> Center
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-text-secondary transition-colors hover:text-primary"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden items-center gap-2 md:flex">
          <ThemeToggle />
          <Link
            href="#contact"
            className="inline-flex items-center rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-contrast shadow-sm transition-colors hover:bg-primary/90 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:outline-none"
          >
            Enroll Now
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="rounded-md p-2 text-text-secondary transition-colors hover:bg-primary-light hover:text-primary md:hidden"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span className="text-lg">{menuOpen ? "✕" : "☰"}</span>
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="border-t border-border bg-surface/95 backdrop-blur md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-4 sm:px-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-medium text-text-main transition-colors hover:bg-primary-light hover:text-primary"
              >
                {item.name}
              </Link>
            ))}

            <Link
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-contrast shadow-sm transition-colors hover:bg-primary/90"
            >
              Enroll Now
            </Link>

            <div className="mt-4 flex items-center justify-between rounded-lg border border-border px-3 py-2">
              <span className="text-sm font-medium text-text-main">
                {theme === "dark" ? "Dark mode" : "Light mode"}
              </span>
              <ThemeToggle />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}