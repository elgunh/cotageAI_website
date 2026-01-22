"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/cn";
import { GlassButtonLink } from "./glass-button";
import { Menu, X } from "lucide-react";

const navLinks = [
    { href: "/produit", label: "Produit" },
    { href: "/comment-ca-marche", label: "Comment ça marche" },
    { href: "/metiers", label: "Métiers" },
    { href: "/tarifs", label: "Tarifs" },
    { href: "/faq", label: "FAQ" },
];

export function GlassNavbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                scrolled ? "glass py-5" : "glass-subtle py-6"
            )}
        >
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-3">
                    <Image
                        src="/cotage_logo_black.png"
                        alt="Cotage AI"
                        width={140}
                        height={40}
                        className="h-10 w-auto"
                        priority
                    />
                </Link>

                {/* Desktop Navigation */}
                <ul className="hidden lg:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <Link
                                href={link.href}
                                className="text-[var(--text-secondary)] text-sm font-medium hover:text-[var(--text-primary)] transition-colors relative group"
                            >
                                {link.label}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--accent-500)] group-hover:w-full transition-all duration-300" />
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* CTA Button */}
                <div className="hidden lg:block">
                    <GlassButtonLink href="/contact" variant="primary" size="sm">
                        Demander une démo
                    </GlassButtonLink>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="lg:hidden p-2 text-[var(--text-primary)]"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label={mobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
                >
                    {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <div
                className={cn(
                    "lg:hidden absolute top-full left-0 right-0 glass-strong transition-all duration-300 overflow-hidden",
                    mobileMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                )}
            >
                <div className="px-6 py-6 space-y-4">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="block text-[var(--text-primary)] font-medium py-3 border-b border-[var(--glass-border)]"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <GlassButtonLink
                        href="/contact"
                        variant="primary"
                        className="w-full mt-4"
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        Demander une démo
                    </GlassButtonLink>
                </div>
            </div>
        </nav>
    );
}
