"use client";
import { useState } from "react";
import { useScrolled } from "@/lib/hooks/useScrolled";
import { scrollToSection } from "@/lib/utils";
import { NAV_LINKS } from "@/lib/constants";
import NeuralIcon from "@/components/ui/NeuralIcon";
import Button from "@/components/ui/Button";
import ThemeToggle from "@/components/ui/ThemeToggle";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const scrolled = useScrolled(40);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNav = (href) => {
    scrollToSection(href.replace("#", ""));
    setMobileOpen(false);
  };

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 px-[5%] h-16 flex items-center justify-between transition-all duration-300"
        style={{
          background: scrolled ? "var(--nav-bg)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid var(--border)" : "none",
        }}
      >
        {/* Logo */}
        <button
          className="flex items-center gap-2.5 cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="MLera home"
        >
          <NeuralIcon size={30} />
          <span className="font-syne font-extrabold text-xl tracking-tight">
            <span className="text-coral">ML</span>
            <span className="text-violet">era</span>
          </span>
        </button>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(({ label, href }) => (
            <button
              key={label}
              onClick={() => handleNav(href)}
              className="text-[var(--muted)] hover:text-white text-sm font-syne font-semibold tracking-wider uppercase transition-colors duration-200"
            >
              {label}
            </button>
          ))}
        </div>

        {/* Right actions */}
        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <Button onClick={() => scrollToSection("join")} size="sm">
            Get Early Access
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-[var(--muted)] hover:text-white p-1 transition-colors"
          onClick={() => setMobileOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
          mobileOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <div className="absolute inset-0 bg-[var(--deep)]/80 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />
        <div
          className={`absolute top-16 left-0 right-0 bg-[var(--surface)] border-b border-[var(--border)] px-[5%] py-8 flex flex-col gap-6 transition-all duration-300 ${
            mobileOpen ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0"
          }`}
        >
          {NAV_LINKS.map(({ label, href }) => (
            <button
              key={label}
              onClick={() => handleNav(href)}
              className="text-left text-[var(--text-dim)] hover:text-white text-lg font-syne font-semibold transition-colors"
            >
              {label}
            </button>
          ))}
          <div className="flex items-center gap-3 pt-2 border-t border-[var(--border)]">
            <ThemeToggle />
            <Button
              onClick={() => { scrollToSection("join"); setMobileOpen(false); }}
              className="flex-1 justify-center"
            >
              Get Early Access
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
