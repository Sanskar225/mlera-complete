import NeuralIcon from "@/components/ui/NeuralIcon";
import { NAV_LINKS } from "@/lib/constants";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  // Structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "MLera",
    "description": "A structured Machine Learning teaching platform designed to simplify how learners understand ML concepts.",
    "url": "https://mlera.dev",
    "parentOrganization": {
      "@type": "CollegeOrUniversity",
      "name": "IIIT Dharwad Research Park",
      "url": "https://iiitdwd.ac.in"
    },
    "sameAs": [
      "https://twitter.com/mlera",
      "https://linkedin.com/company/mlera"
    ]
  };

  return (
    <>
      {/* Structured data script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <footer className="border-t border-[var(--border)] bg-gradient-to-b from-[var(--surface)]/30 to-[var(--surface)]/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-[5%] py-16">
          
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-12">
            
            {/* Brand Column - Wider */}
            <div className="lg:col-span-5">
              <div className="flex items-center gap-3 mb-5 group">
                <div className="transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <NeuralIcon size={34} />
                </div>
                <span className="font-syne font-extrabold text-xl tracking-tight">
                  <span className="bg-gradient-to-r from-coral to-coral/80 bg-clip-text text-transparent">ML</span>
                  <span className="bg-gradient-to-r from-violet to-lavender bg-clip-text text-transparent">era</span>
                  <span className="ml-2 text-xs font-medium px-2 py-0.5 bg-violet/20 text-lavender rounded-full">v1.0</span>
                </span>
              </div>
              
              <p className="text-[var(--muted)] text-base leading-relaxed font-dm max-w-md mb-4">
                A structured Machine Learning teaching platform designed to simplify how learners understand ML concepts.
              </p>
              
              <p className="text-[var(--muted)]/70 text-sm font-dm flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>Built at </span>
                <a 
                  href="https://iiitdwd.ac.in" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-lavender hover:text-violet transition-colors font-medium"
                >
                  IIIT Dharwad Research Park
                </a>
              </p>
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-3">
              <h3 className="text-xs font-syne font-bold uppercase tracking-[0.15em] text-[var(--muted)] mb-5 flex items-center gap-2">
                <span className="w-0.5 h-4 bg-gradient-to-b from-coral to-violet rounded-full"></span>
                EXPLORE
              </h3>
              <ul className="flex flex-col gap-3">
                {NAV_LINKS.map(({ label, href }) => (
                  <li key={label}>
                    <Link 
                      href={href}
                      className="text-sm text-[var(--muted)] hover:text-white transition-all duration-200 font-dm flex items-center gap-2 group"
                    >
                      <span className="w-1 h-1 rounded-full bg-[var(--muted)]/30 group-hover:bg-violet group-hover:w-2 transition-all"></span>
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div className="lg:col-span-2">
              <h3 className="text-xs font-syne font-bold uppercase tracking-[0.15em] text-[var(--muted)] mb-5 flex items-center gap-2">
                <span className="w-0.5 h-4 bg-gradient-to-b from-lavender to-coral rounded-full"></span>
                RESOURCES
              </h3>
              <ul className="flex flex-col gap-3">
                {[
                  { label: "Learning Paths", href: "/learning-paths" },
                  { label: "Challenges", href: "/challenges" },
                  { label: "Lexicon", href: "/lexicon" },
                  { label: "Blog", href: "/blog" },
                ].map(({ label, href }) => (
                  <li key={label}>
                    <Link 
                      href={href}
                      className="text-sm text-[var(--muted)] hover:text-white transition-all duration-200 font-dm flex items-center gap-2 group"
                    >
                      <span className="w-1 h-1 rounded-full bg-[var(--muted)]/30 group-hover:bg-lavender group-hover:w-2 transition-all"></span>
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Connect */}
            <div className="lg:col-span-2">
              <h3 className="text-xs font-syne font-bold uppercase tracking-[0.15em] text-[var(--muted)] mb-5 flex items-center gap-2">
                <span className="w-0.5 h-4 bg-gradient-to-b from-emerald-400 to-violet rounded-full"></span>
                CONNECT
              </h3>
              <ul className="flex flex-col gap-3">
                <li>
                  <a 
                    href="mailto:hello@mlera.dev"
                    className="text-sm text-[var(--muted)] hover:text-white transition-colors font-dm flex items-center gap-2 group"
                  >
                    <span className="w-6 h-6 rounded-full bg-violet/10 flex items-center justify-center group-hover:bg-violet/20 transition-colors">
                      <svg className="w-3 h-3 text-lavender" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </span>
                    hello@mlera.dev
                  </a>
                </li>
                <li>
                  <a 
                    href="https://twitter.com/mlera"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[var(--muted)] hover:text-white transition-colors font-dm flex items-center gap-2 group"
                  >
                    <span className="w-6 h-6 rounded-full bg-violet/10 flex items-center justify-center group-hover:bg-violet/20 transition-colors">
                      <svg className="w-3 h-3 text-lavender" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.104c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 0021.775-3.374 14.5 14.5 0 001.518-6.256c0-.21-.005-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                      </svg>
                    </span>
                    X (Twitter)
                  </a>
                </li>
                <li>
                  <a 
                    href="https://linkedin.com/company/mlera"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[var(--muted)] hover:text-white transition-colors font-dm flex items-center gap-2 group"
                  >
                    <span className="w-6 h-6 rounded-full bg-violet/10 flex items-center justify-center group-hover:bg-violet/20 transition-colors">
                      <svg className="w-3 h-3 text-lavender" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </span>
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a 
                    href="https://github.com/mlera"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[var(--muted)] hover:text-white transition-colors font-dm flex items-center gap-2 group"
                  >
                    <span className="w-6 h-6 rounded-full bg-violet/10 flex items-center justify-center group-hover:bg-violet/20 transition-colors">
                      <svg className="w-3 h-3 text-lavender" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                      </svg>
                    </span>
                    GitHub
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-[var(--border)]/60 pt-8 mt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-5">
              
              {/* Copyright */}
              <div className="flex flex-wrap items-center gap-4 text-center md:text-left">
                <p className="text-[var(--muted)]/60 text-xs font-dm">
                  © {currentYear} MLera. All rights reserved.
                </p>
                
                {/* Legal Links */}
                <div className="flex items-center gap-3">
                  <span className="text-[var(--muted)]/30 text-xs">•</span>
                  <Link href="/privacy" className="text-[var(--muted)]/50 hover:text-lavender text-xs font-dm transition-colors">
                    Privacy
                  </Link>
                  <span className="text-[var(--muted)]/30 text-xs">•</span>
                  <Link href="/terms" className="text-[var(--muted)]/50 hover:text-lavender text-xs font-dm transition-colors">
                    Terms
                  </Link>
                  <span className="text-[var(--muted)]/30 text-xs">•</span>
                  <Link href="/cookies" className="text-[var(--muted)]/50 hover:text-lavender text-xs font-dm transition-colors">
                    Cookies
                  </Link>
                </div>
              </div>

              {/* Badge */}
              <div className="flex items-center gap-3">
                <span className="text-[var(--muted)]/40 text-xs font-dm italic hidden sm:block">
                  Machine Learning, Finally Made Clear.
                </span>
                <span className="px-2.5 py-1 bg-[var(--surface)]/60 border border-[var(--border)] rounded-full text-[0.65rem] font-mono text-[var(--muted)]/70">
                  v1.0.0
                </span>
              </div>
            </div>

            {/* SEO Keywords (hidden but present) */}
            <div className="sr-only">
              <h2>Machine Learning education platform</h2>
              <p>MLera offers structured learning paths, ML lexicon, coding challenges, and interactive tutorials for machine learning education.</p>
              <p>Keywords: machine learning, AI education, structured learning, ML tutorials, data science, neural networks, deep learning</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}