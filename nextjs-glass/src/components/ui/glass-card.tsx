"use client";

import { cn } from "@/lib/cn";
import { forwardRef, HTMLAttributes } from "react";
import { motion, HTMLMotionProps } from "framer-motion";

export interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
    variant?: "default" | "strong" | "subtle";
    hover?: boolean;
    animate?: boolean;
}

export const GlassCard = forwardRef<HTMLDivElement, GlassCardProps>(
    ({ className, variant = "default", hover = true, animate = false, children, ...props }, ref) => {
        const variants = {
            default: "glass",
            strong: "glass-strong",
            subtle: "glass-subtle",
        };

        const baseClasses = cn(
            variants[variant],
            "rounded-2xl p-6 md:p-8",
            hover && "transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_16px_48px_hsla(0,0%,0%,0.4)]",
            className
        );

        if (animate) {
            return (
                <motion.div
                    ref={ref as React.Ref<HTMLDivElement>}
                    className={baseClasses}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    {...(props as HTMLMotionProps<"div">)}
                >
                    {children}
                </motion.div>
            );
        }

        return (
            <div ref={ref} className={baseClasses} {...props}>
                {children}
            </div>
        );
    }
);

GlassCard.displayName = "GlassCard";
