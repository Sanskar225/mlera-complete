"use client";

import { useState, useEffect } from "react";
import { useScrolled } from "@/lib/hooks/useScrolled";
import { scrollToSection } from "@/lib/utils";
import { NAV_LINKS } from "@/lib/constants";
import NeuralIcon from "@/components/ui/NeuralIcon";
import Button from "@/components/ui/Button";
import ThemeToggle from "@/components/ui/ThemeToggle";
import { Menu, X, ChevronRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const scrolled = useScrolled(20);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");
  const pathname = usePathname();

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Handle smooth scroll for anchor links
  const handleNav = (href) => {
    if (href.startsWith("#")) {
      scrollToSection(href.replace("#", ""));
    } else {
      // For future route navigation
      window.location.href = href;
    }
    setMobileOpen(false);
  };

  // Update active link based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = NAV_LINKS.map(l => l.href.replace("#", ""));
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveLink(`#${section}`);
            break;
          }
        }
      }
    };
    
    if (pathname === "/") {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [pathname]);

  return (
    <>
      {/* Skip to content link for accessibility */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-violet text-white px-4 py-2 rounded-lg z-[100]"
      >
        Skip to content
      </a>

      <nav
        className="fixed top-0 left-0 right-0 z-50 px-[5%] h-[72px] flex items-center justify-between transition-all duration-500"
        style={{
          background: scrolled 
            ? "linear-gradient(135deg, var(--nav-bg), var(--surface)/90)" 
            : "transparent",
          backdropFilter: scrolled ? "blur(20px) saturate(180%)" : "none",
          borderBottom: scrolled ? "1px solid var(--border)" : "none",
          boxShadow: scrolled ? "0 8px 32px rgba(0,0,0,0.1)" : "none",
        }}
        aria-label="Main navigation"
      >
        {/* Logo with enhanced branding */}
        <button
          className="flex items-center gap-2.5 cursor-pointer group"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="MLera home - back to top"
        >
          <div className="transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
            <NeuralIcon size={32} />
          </div>
          <div className="flex flex-col items-start">
            <span className="font-syne font-extrabold text-xl tracking-tight leading-none">
              <span className="bg-gradient-to-r from-coral to-coral/80 bg-clip-text text-transparent">ML</span>
              <span className="bg-gradient-to-r from-violet to-lavender bg-clip-text text-transparent">era</span>
            </span>
            <span className="text-[0.6rem] font-mono text-[var(--muted)]/50 tracking-wider hidden sm:block">
              structured ML
            </span>
          </div>
        </button>

        {/* Desktop navigation links */}
        <div className="hidden md:flex items-center gap-1" role="navigation" aria-label="Main menu">
          {NAV_LINKS.map(({ label, href }) => {
            const isActive = activeLink === href || (href === "#hero" && activeLink === "");
            
            return (
              <button
                key={label}
                onClick={() => handleNav(href)}
                className={`
                  relative px-4 py-2 text-sm font-syne font-semibold tracking-wider uppercase
                  transition-all duration-300 rounded-lg group
                  ${isActive 
                    ? "text-white" 
                    : "text-[var(--muted)] hover:text-white"
                  }
                `}
                aria-current={isActive ? "page" : undefined}
              >
                <span className="relative z-10">{label}</span>
                
                {/* Active indicator */}
                {isActive && (
                  <span className="absolute inset-0 bg-gradient-to-r from-violet/20 to-coral/20 rounded-lg animate-pulse-slow" />
                )}
                
                {/* Hover effect */}
                <span className="absolute inset-0 bg-[var(--surface)]/50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Bottom accent line */}
                <span className={`
                  absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 
                  bg-gradient-to-r from-coral to-violet 
                  transition-all duration-300 group-hover:w-1/2
                  ${isActive ? "w-1/2" : ""}
                `} />
              </button>
            );
          })}
        </div>

        {/* Right actions - enhanced */}
        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center gap-2 pr-2 border-r border-[var(--border)]">
            <ThemeToggle />
          </div>
          
          <Button 
            onClick={() => scrollToSection("join")} 
            size="sm"
            className="relative overflow-hidden group"
          >
            <span className="relative z-10 flex items-center gap-2">
              Get Early Access
              <ChevronRight size={16} className="transition-transform group-hover:translate-x-1" />
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-coral to-violet opacity-0 group-hover:opacity-20 transition-opacity" />
          </Button>

          {/* Version badge (visible when scrolled) */}
          {scrolled && (
            <span className="text-[0.6rem] font-mono bg-[var(--surface)]/60 px-2 py-1 rounded-full border border-[var(--border)] text-[var(--muted)]/60">
              v1.0
            </span>
          )}
        </div>

        {/* Mobile menu button - enhanced */}
        <button
          className="md:hidden relative w-10 h-10 rounded-lg bg-[var(--surface)]/20 hover:bg-[var(--surface)]/40 transition-colors flex items-center justify-center"
          onClick={() => setMobileOpen((o) => !o)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? (
            <X size={20} className="text-[var(--text-dim)]" />
          ) : (
            <Menu size={20} className="text-[var(--text-dim)]" />
          )}
        </button>
      </nav>

      {/* Mobile drawer - enhanced with animations */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-500 ${
          mobileOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
        aria-hidden={!mobileOpen}
      >
        {/* Backdrop with blur */}
        <div 
          className="absolute inset-0 bg-[var(--deep)]/80 backdrop-blur-md"
          onClick={() => setMobileOpen(false)}
        />
        
        {/* Drawer content */}
        <div
          className={`
            absolute top-[72px] left-4 right-4 
            bg-gradient-to-b from-[var(--surface)] to-[var(--surface)]/95
            border border-[var(--border)] rounded-2xl
            shadow-2xl backdrop-blur-xl
            px-6 py-8 flex flex-col gap-2
            transition-all duration-500
            ${mobileOpen 
              ? "translate-y-0 opacity-100 scale-100" 
              : "-translate-y-4 opacity-0 scale-95"
            }
          `}
        >
          {/* User greeting (mock) */}
          <div className="flex items-center gap-3 pb-4 mb-2 border-b border-[var(--border)]">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-coral to-violet flex items-center justify-center">
              <span className="text-white font-bold text-lg">ML</span>
            </div>
            <div>
              <p className="text-sm font-syne font-semibold text-[var(--text-dim)]">Welcome to MLera</p>
              <p className="text-xs text-[var(--muted)]">structured learning</p>
            </div>
          </div>

          {/* Mobile nav links */}
          <nav className="flex flex-col gap-1" aria-label="Mobile menu">
            {NAV_LINKS.map(({ label, href }, index) => (
              <button
                key={label}
                onClick={() => handleNav(href)}
                className="group flex items-center justify-between w-full px-4 py-3 text-left text-[var(--text-dim)] hover:text-white hover:bg-[var(--surface)]/60 rounded-xl transition-all duration-200"
                style={{
                  animationDelay: `${index * 50}ms`,
                }}
              >
                <span className="text-base font-syne font-semibold">{label}</span>
                <ChevronRight 
                  size={18} 
                  className="text-[var(--muted)] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
                />
              </button>
            ))}
          </nav>

          {/* Mobile actions */}
          <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-[var(--border)]">
            <div className="flex items-center justify-between px-2">
              <span className="text-sm text-[var(--muted)] font-dm">Theme</span>
              <ThemeToggle />
            </div>
            
            <Button
              onClick={() => { 
                scrollToSection("join"); 
                setMobileOpen(false); 
              }}
              className="w-full justify-center mt-2"
              size="md"
            >
              Get Early Access →
            </Button>

            {/* Quick stats */}
            <div className="grid grid-cols-2 gap-2 mt-2">
              <div className="bg-[var(--surface)]/40 rounded-lg p-2 text-center">
                <p className="text-xs text-[var(--muted)]">Paths</p>
                <p className="text-sm font-bold text-coral">6+</p>
              </div>
              <div className="bg-[var(--surface)]/40 rounded-lg p-2 text-center">
                <p className="text-xs text-[var(--muted)]">Learners</p>
                <p className="text-sm font-bold text-violet">500+</p>
              </div>
            </div>
          </div>

          {/* Footer note */}
          <p className="text-center text-[0.65rem] text-[var(--muted)]/40 mt-4">
            Built at IIIT Dharwad Research Park
          </p>
        </div>
      </div>

      {/* Progress bar (optional) */}
      {scrolled && (
        <div className="fixed top-[72px] left-0 right-0 h-0.5 z-50">
          <div className="h-full bg-gradient-to-r from-coral via-violet to-lavender animate-gradient-x" />
        </div>
      )}
    </>
  );
}