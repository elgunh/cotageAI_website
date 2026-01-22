import { cn } from "@/lib/cn";
import { forwardRef, ButtonHTMLAttributes } from "react";

export interface GlassButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "ghost" | "outline";
    size?: "sm" | "md" | "lg";
}

export const GlassButton = forwardRef<HTMLButtonElement, GlassButtonProps>(
    ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
        const baseClasses = "inline-flex items-center justify-center gap-2 font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-500)] focus-visible:ring-offset-2 focus-visible:ring-offset-transparent disabled:opacity-50 disabled:pointer-events-none whitespace-nowrap";

        const variants = {
            primary: "bg-gradient-to-r from-[var(--accent-600)] to-[var(--accent-400)] text-white shadow-lg hover:shadow-[0_0_30px_hsla(168,58%,45%,0.4)] hover:-translate-y-0.5 active:translate-y-0",
            secondary: "glass text-[var(--text-primary)] hover:bg-[hsla(0,0%,100%,0.1)]",
            ghost: "bg-transparent text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[hsla(0,0%,100%,0.05)]",
            outline: "bg-transparent border-2 border-[var(--accent-500)] text-[var(--accent-400)] hover:bg-[var(--accent-600)] hover:text-white",
        };

        const sizes = {
            sm: "px-4 py-2 text-sm rounded-lg",
            md: "px-6 py-3 text-base rounded-xl",
            lg: "px-8 py-4 text-lg rounded-xl",
        };

        return (
            <button
                ref={ref}
                className={cn(baseClasses, variants[variant], sizes[size], className)}
                {...props}
            >
                {children}
            </button>
        );
    }
);

GlassButton.displayName = "GlassButton";

// Link variant for navigation
import Link from "next/link";
import { AnchorHTMLAttributes } from "react";

export interface GlassButtonLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    href: string;
    variant?: "primary" | "secondary" | "ghost" | "outline";
    size?: "sm" | "md" | "lg";
}

export const GlassButtonLink = forwardRef<HTMLAnchorElement, GlassButtonLinkProps>(
    ({ className, href, variant = "primary", size = "md", children, ...props }, ref) => {
        const baseClasses = "inline-flex items-center justify-center gap-2 font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-500)] focus-visible:ring-offset-2 focus-visible:ring-offset-transparent whitespace-nowrap";

        const variants = {
            primary: "bg-gradient-to-r from-[var(--accent-600)] to-[var(--accent-400)] text-white shadow-lg hover:shadow-[0_0_30px_hsla(168,58%,45%,0.4)] hover:-translate-y-0.5 active:translate-y-0",
            secondary: "glass text-[var(--text-primary)] hover:bg-[hsla(0,0%,100%,0.1)]",
            ghost: "bg-transparent text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[hsla(0,0%,100%,0.05)]",
            outline: "bg-transparent border-2 border-[var(--accent-500)] text-[var(--accent-400)] hover:bg-[var(--accent-600)] hover:text-white",
        };

        const sizes = {
            sm: "px-4 py-2 text-sm rounded-lg",
            md: "px-6 py-3 text-base rounded-xl",
            lg: "px-8 py-4 text-lg rounded-xl",
        };

        return (
            <Link
                ref={ref}
                href={href}
                className={cn(baseClasses, variants[variant], sizes[size], className)}
                {...props}
            >
                {children}
            </Link>
        );
    }
);

GlassButtonLink.displayName = "GlassButtonLink";
