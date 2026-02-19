import NeuralIcon from "@/components/ui/NeuralIcon";
import { NAV_LINKS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--surface)]/40">
      <div className="max-w-6xl mx-auto px-[5%] py-12">
        <div className="flex flex-col md:flex-row justify-between items-start gap-10 mb-10">
          {/* Brand */}
          <div className="max-w-xs">
            <div className="flex items-center gap-2.5 mb-4">
              <NeuralIcon size={28} />
              <span className="font-syne font-extrabold text-lg">
                <span className="text-coral">ML</span>
                <span className="text-violet">era</span>
              </span>
            </div>
            <p className="text-[var(--muted)] text-sm leading-relaxed font-dm">
              A structured Machine Learning teaching platform designed to simplify how learners understand ML concepts.
            </p>
            <p className="text-[var(--muted)]/60 text-xs mt-3 font-dm">
              Built at IIIT Dharwad Research Park (IDRP)
            </p>
          </div>

          {/* Nav */}
          <div>
            <p className="text-xs font-syne font-bold uppercase tracking-widest text-[var(--muted)] mb-4">Navigation</p>
            <ul className="flex flex-col gap-3">
              {NAV_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <a href={href} className="text-sm text-[var(--muted)] hover:text-white transition-colors font-dm">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-syne font-bold uppercase tracking-widest text-[var(--muted)] mb-4">Reach us</p>
            <ul className="flex flex-col gap-3">
              {[
                { label: "hello@mlera.dev", href: "mailto:hello@mlera.dev" },
                { label: "Twitter / X", href: "#" },
                { label: "LinkedIn", href: "#" },
              ].map(({ label, href }) => (
                <li key={label}>
                  <a href={href} className="text-sm text-[var(--muted)] hover:text-white transition-colors font-dm">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-[var(--border)] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[var(--muted)]/60 text-xs font-dm">
            © {new Date().getFullYear()} MLera · Built at IIIT Dharwad Research Park
          </p>
          <p className="text-[var(--muted)]/50 text-xs font-dm italic">
            Machine Learning, Finally Made Clear.
          </p>
        </div>
      </div>
    </footer>
  );
}
