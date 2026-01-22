"use client";

import { motion } from "framer-motion";
import { GlassCard, GlassBadge } from "@/components/ui";
import { Paintbrush, Hammer, Home, Wrench } from "lucide-react";

const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
};

const stagger = {
    animate: {
        transition: {
            staggerChildren: 0.1
        }
    }
};

const trades = [
    {
        icon: Paintbrush,
        title: "Peintres",
        badge: "PRIORITÉ",
        badgeVariant: "primary" as const,
        surfaces: "murs, plafonds, boiseries",
        documents: "CCTP + plans étages",
        output: "m² par type de finition, couches, préparation"
    },
    {
        icon: Hammer,
        title: "Plaquistes",
        badge: "BIENTÔT",
        badgeVariant: "default" as const,
        surfaces: "cloisons, faux plafonds",
        documents: "CCTP + plans + coupes",
        output: "m² BA13, ossature, isolation"
    },
    {
        icon: Home,
        title: "Revêtements de sol",
        badge: "BIENTÔT",
        badgeVariant: "default" as const,
        surfaces: "carrelage, parquet, sols souples",
        documents: "CCTP + plans RDC",
        output: "m² par matériau, plinthes"
    },
    {
        icon: Wrench,
        title: "Menuisiers",
        badge: "BIENTÔT",
        badgeVariant: "default" as const,
        surfaces: "portes, plinthes, finitions",
        documents: "CCTP + plans + détails",
        output: "unités, ml, dimensions"
    }
];

export function TradesSection() {
    return (
        <section className="py-24 px-6">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <GlassBadge variant="default" className="mb-4">Métiers</GlassBadge>
                    <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-4">
                        Travaux de second œuvre
                    </h2>
                    <p className="text-lg text-[var(--text-secondary)] max-w-3xl mx-auto">
                        Cotage AI s'adresse aux corps d'état de finition répondant aux appels d'offres privés.
                    </p>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
                    variants={stagger}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                >
                    {trades.map((trade, i) => (
                        <motion.div key={i} variants={fadeInUp}>
                            <GlassCard hover={true} className="h-full">
                                <div className="flex items-start justify-between mb-4">
                                    <div className="w-12 h-12 rounded-xl bg-[var(--accent-500)]/20 flex items-center justify-center shrink-0">
                                        <trade.icon className="w-6 h-6 text-[var(--accent-400)]" />
                                    </div>
                                    <GlassBadge variant={trade.badgeVariant}>
                                        {trade.badge}
                                    </GlassBadge>
                                </div>

                                <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-4">
                                    {trade.title}
                                </h3>

                                <div className="space-y-3 text-sm">
                                    <div>
                                        <div className="text-[var(--text-muted)] font-medium mb-1">
                                            {trade.title === "Menuisiers" ? "Éléments" : "Surfaces"}
                                        </div>
                                        <div className="text-[var(--text-secondary)]">{trade.surfaces}</div>
                                    </div>

                                    <div>
                                        <div className="text-[var(--text-muted)] font-medium mb-1">Documents</div>
                                        <div className="text-[var(--text-secondary)]">{trade.documents}</div>
                                    </div>

                                    <div>
                                        <div className="text-[var(--text-muted)] font-medium mb-1">Output</div>
                                        <div className="text-[var(--text-secondary)]">{trade.output}</div>
                                    </div>
                                </div>
                            </GlassCard>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                >
                    <p className="text-sm text-[var(--text-muted)] italic">
                        Nous commençons par la peinture, puis étendons aux métiers proches du second œuvre.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
