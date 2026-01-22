import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/cn";

const footerLinks = {
    produit: [
        { href: "/produit", label: "Fonctionnalités" },
        { href: "/comment-ca-marche", label: "Comment ça marche" },
        { href: "/tarifs", label: "Tarifs" },
    ],
    metiers: [
        { href: "/metiers#peintres", label: "Peintres" },
        { href: "/metiers#plaquistes", label: "Plaquistes" },
        { href: "/metiers#sols", label: "Revêtements de sol" },
        { href: "/metiers#menuisiers", label: "Menuisiers" },
    ],
    support: [
        { href: "/faq", label: "FAQ" },
        { href: "/contact", label: "Contact" },
    ],
};

export function GlassFooter() {
    return (
        <footer className="glass-strong mt-20">
            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="lg:col-span-1">
                        <Image
                            src="/cotage_logo_black.png"
                            alt="Cotage AI"
                            width={140}
                            height={40}
                            className="h-9 w-auto mb-4"
                        />
                        <p className="text-[var(--text-muted)] text-sm leading-relaxed max-w-xs">
                            Cotage AI transforme vos DCE en métrés structurés. Répondez plus vite aux appels d'offres, sécurisez vos marges.
                        </p>
                    </div>

                    {/* Produit */}
                    <div>
                        <h4 className="text-[var(--text-primary)] font-semibold text-sm uppercase tracking-wider mb-5">
                            Produit
                        </h4>
                        <ul className="space-y-3">
                            {footerLinks.produit.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-[var(--text-muted)] text-sm hover:text-[var(--accent-400)] transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Métiers */}
                    <div>
                        <h4 className="text-[var(--text-primary)] font-semibold text-sm uppercase tracking-wider mb-5">
                            Métiers
                        </h4>
                        <ul className="space-y-3">
                            {footerLinks.metiers.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-[var(--text-muted)] text-sm hover:text-[var(--accent-400)] transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h4 className="text-[var(--text-primary)] font-semibold text-sm uppercase tracking-wider mb-5">
                            Support
                        </h4>
                        <ul className="space-y-3">
                            {footerLinks.support.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-[var(--text-muted)] text-sm hover:text-[var(--accent-400)] transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom */}
                <div className="pt-8 border-t border-[var(--glass-border)] flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-[var(--text-muted)] text-sm">
                        © 2024 Cotage AI. Tous droits réservés.
                    </p>
                    <div className="flex items-center gap-4">
                        <a
                            href="https://www.linkedin.com/company/codage-az/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-9 h-9 flex items-center justify-center rounded-lg glass-subtle hover:bg-[hsla(0,0%,100%,0.1)] transition-colors"
                            aria-label="LinkedIn"
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-[var(--text-muted)]">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
