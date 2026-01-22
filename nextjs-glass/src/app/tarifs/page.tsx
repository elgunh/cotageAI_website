"use client";

import { motion } from "framer-motion";
import { GlassCard, GlassBadge, GlassButtonLink } from "@/components/ui";
import { Check, Sparkles } from "lucide-react";

const plans = [
    {
        name: "Starter",
        price: "Sur demande",
        description: "Pour tester le service",
        features: [
            "5 DCE / mois",
            "Export Excel",
            "Support email",
            "Validation manuelle",
        ],
        cta: "Demander un devis",
        featured: false,
    },
    {
        name: "Pro",
        price: "Sur demande",
        description: "Pour les entreprises actives",
        features: [
            "20 DCE / mois",
            "Export Excel + API",
            "Support prioritaire",
            "Validation manuelle",
            "Intégration Batappli",
        ],
        cta: "Demander un devis",
        featured: true,
    },
    {
        name: "Enterprise",
        price: "Sur demande",
        description: "Pour les structures importantes",
        features: [
            "DCE illimités",
            "API complète",
            "Support dédié",
            "Validation automatique (option)",
            "Intégrations sur mesure",
            "Formation équipe",
        ],
        cta: "Nous contacter",
        featured: false,
    },
];

export default function PricingPage() {
    return (
        <div className="relative pt-32 pb-20 px-6 min-h-screen">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <GlassBadge variant="primary" className="mb-4">Tarifs</GlassBadge>
                    <h1 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-4">
                        Des tarifs adaptés à votre activité
                    </h1>
                    <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
                        Choisissez la formule qui correspond à votre volume de réponses aux appels d'offres
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {plans.map((plan, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="relative"
                        >
                            {plan.featured && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                                    <GlassBadge variant="primary">
                                        <Sparkles size={14} />
                                        Populaire
                                    </GlassBadge>
                                </div>
                            )}
                            <GlassCard
                                variant={plan.featured ? "strong" : "default"}
                                className={`h-full ${plan.featured ? "ring-2 ring-[var(--accent-500)]/50" : ""}`}
                                hover={true}
                            >
                                <div className="text-center mb-6">
                                    <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-2">
                                        {plan.name}
                                    </h3>
                                    <p className="text-sm text-[var(--text-muted)] mb-4">{plan.description}</p>
                                    <div className="text-3xl font-bold text-[var(--accent-400)]">
                                        {plan.price}
                                    </div>
                                </div>

                                <ul className="space-y-3 mb-8">
                                    {plan.features.map((feature, j) => (
                                        <li key={j} className="flex items-start gap-3 text-sm text-[var(--text-secondary)]">
                                            <Check size={18} className="text-[var(--accent-400)] shrink-0 mt-0.5" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <GlassButtonLink
                                    href="/contact"
                                    variant={plan.featured ? "primary" : "secondary"}
                                    className="w-full"
                                >
                                    {plan.cta}
                                </GlassButtonLink>
                            </GlassCard>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    className="mt-16 text-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                >
                    <GlassCard variant="subtle" className="max-w-3xl mx-auto">
                        <p className="text-[var(--text-secondary)]">
                            <strong className="text-[var(--text-primary)]">Tarification transparente</strong> — Pas de frais cachés. Annulez à tout moment. Nous adaptons nos tarifs à votre usage réel.
                        </p>
                    </GlassCard>
                </motion.div>
            </div>
        </div>
    );
}
