import { cn } from "@/lib/cn";
import { HTMLAttributes, forwardRef } from "react";

export interface GlassBadgeProps extends HTMLAttributes<HTMLSpanElement> {
    variant?: "default" | "primary" | "success" | "warning";
}

export const GlassBadge = forwardRef<HTMLSpanElement, GlassBadgeProps>(
    ({ className, variant = "default", children, ...props }, ref) => {
        const variants = {
            default: "glass-subtle text-[var(--text-secondary)]",
            primary: "bg-[hsla(168,60%,45%,0.15)] text-[var(--accent-400)] border-[var(--accent-500)]/30",
            success: "bg-[hsla(142,60%,45%,0.15)] text-emerald-400 border-emerald-500/30",
            warning: "bg-[hsla(45,90%,50%,0.15)] text-amber-400 border-amber-500/30",
        };

        return (
            <span
                ref={ref}
                className={cn(
                    "inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-full border",
                    variants[variant],
                    className
                )}
                {...props}
            >
                {children}
            </span>
        );
    }
);

GlassBadge.displayName = "GlassBadge";
