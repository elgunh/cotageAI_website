"use client";

import { motion } from "framer-motion";
import { GlassCard, GlassBadge } from "@/components/ui";
import { Paintbrush, Hammer, Home, Wrench } from "lucide-react";

const trades = [
    {
        icon: Paintbrush,
        title: "Peintres",
        tag: "Priorité",
        tagVariant: "primary" as const,
        surfaces: "murs, plafonds, boiseries",
        documents: "CCTP + plans étages",
        output: "m² par type de finition, couches, préparation",
    },
    {
        icon: Hammer,
        title: "Plaquistes",
        tag: "Bientôt",
        tagVariant: "default" as const,
        surfaces: "cloisons, faux plafonds",
        documents: "CCTP + plans + coupes",
        output: "m² BA13, ossature, isolation",
    },
    {
        icon: Home,
        title: "Revêtements de sol",
        tag: "Bientôt",
        tagVariant: "default" as const,
        surfaces: "carrelage, parquet, sols souples",
        documents: "CCTP + plans RDC",
        output: "m² par matériau, plinthes",
    },
    {
        icon: Wrench,
        title: "Menuisiers",
        tag: "Bientôt",
        tagVariant: "default" as const,
        surfaces: "portes, plinthes, finitions",
        documents: "CCTP + plans + détails",
        output: "unités, ml, dimensions",
    },
];

export default function TradesPage() {
    return (
        <div className="relative pt-32 pb-20 px-6 min-h-screen">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <GlassBadge variant="default" className="mb-4">Métiers</GlassBadge>
                    <h1 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-4">
                        Travaux de second œuvre
                    </h1>
                    <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
                        Cotage AI s'adresse aux corps d'état de finition répondant aux appels d'offres privés.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-6 mb-12">
                    {trades.map((trade, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <GlassCard hover={true} className="h-full relative overflow-hidden">
                                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[var(--accent-600)] to-[var(--accent-400)]" />

                                <div className="flex items-start justify-between mb-4">
                                    <div className="w-12 h-12 rounded-xl bg-[var(--accent-500)]/20 flex items-center justify-center shrink-0">
                                        <trade.icon className="w-6 h-6 text-[var(--accent-400)]" />
                                    </div>
                                    <GlassBadge variant={trade.tagVariant}>{trade.tag}</GlassBadge>
                                </div>

                                <h3 className="text-xl font-bold text-[var(--text-primary)] mb-4">{trade.title}</h3>

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
                </div>

                <motion.div
                    className="text-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    <GlassCard variant="subtle" className="max-w-2xl mx-auto">
                        <p className="text-[var(--text-secondary)]">
                            Nous commençons par la <strong className="text-[var(--accent-400)]">peinture</strong>, puis étendons aux métiers proches du second œuvre.
                        </p>
                    </GlassCard>
                </motion.div>
            </div>
        </div>
    );
}
