"use client";

import { motion } from "framer-motion";
import { GlassCard, GlassBadge, GlassButtonLink } from "@/components/ui";
import { Upload, Scan, FileDown, UserCheck } from "lucide-react";

const steps = [
    {
        icon: Upload,
        number: "1",
        title: "Téléchargez",
        description: "CCTP + 1-2 plans PDF",
        details: "Importez vos documents d'appel d'offres : le cahier des charges (CCTP) et les plans architecte en PDF.",
    },
    {
        icon: Scan,
        number: "2",
        title: "Extraction & Croisement",
        description: "Quantités + mapping specs",
        details: "Notre IA analyse les plans, détecte les pièces, calcule les surfaces, et croise avec les exigences du CCTP.",
    },
    {
        icon: FileDown,
        number: "3",
        title: "Exportez",
        description: "BoQ.xlsx prêt à envoyer",
        details: "Validez les quantités générées, puis exportez votre DPGF structuré en Excel pour chiffrage final.",
    },
];

export default function HowItWorksPage() {
    return (
        <div className="relative pt-32 pb-20 px-6 min-h-screen">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <GlassBadge variant="primary" className="mb-4">Comment ça marche</GlassBadge>
                    <h1 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-4">
                        3 étapes simples
                    </h1>
                    <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
                        De vos documents bruts à un devis structuré en quelques minutes.
                    </p>
                </motion.div>

                {/* Steps */}
                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    {steps.map((step, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.15 }}
                            className="relative"
                        >
                            <GlassCard className="text-center h-full">
                                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r from-[var(--accent-600)] to-[var(--accent-400)] flex items-center justify-center">
                                    <span className="text-2xl font-bold text-white">{step.number}</span>
                                </div>

                                <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-[var(--accent-500)]/20 flex items-center justify-center">
                                    <step.icon className="w-6 h-6 text-[var(--accent-400)]" />
                                </div>

                                <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">
                                    {step.title}
                                </h3>
                                <p className="text-sm text-[var(--text-muted)] mb-4">{step.description}</p>
                                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                                    {step.details}
                                </p>
                            </GlassCard>

                            {/* Connector line */}
                            {i < steps.length - 1 && (
                                <div className="hidden md:block absolute top-24 left-full w-8 h-0.5 bg-gradient-to-r from-[var(--accent-600)] to-transparent -translate-x-full" />
                            )}
                        </motion.div>
                    ))}
                </div>

                {/* Human in the loop */}
                <motion.div
                    className="mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <GlassCard variant="subtle" className="max-w-3xl mx-auto">
                        <div className="flex items-center justify-center gap-3 mb-3">
                            <UserCheck className="text-[var(--accent-400)]" size={24} />
                            <h3 className="text-lg font-semibold text-[var(--accent-400)]">Human-in-the-loop</h3>
                        </div>
                        <p className="text-[var(--text-secondary)] text-center">
                            Vous validez chaque ligne avant envoi. Le contrôle reste entre vos mains.
                        </p>
                    </GlassCard>
                </motion.div>

                {/* Workflow Details */}
                <section className="mb-16">
                    <h2 className="text-2xl font-bold text-[var(--text-primary)] text-center mb-12">
                        Workflow détaillé
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {[
                            {
                                title: "Analyse des plans",
                                items: [
                                    "Détection automatique des pièces et zones",
                                    "Calcul des surfaces murs et plafonds",
                                    "Déduction intelligente des ouvertures (portes, fenêtres)",
                                    "Extraction des dimensions et hauteurs sous plafond",
                                ],
                            },
                            {
                                title: "Croisement CCTP",
                                items: [
                                    "Mapping des pièces avec les lots du CCTP",
                                    "Identification des finitions par zone",
                                    "Association des couches et préparations",
                                    "Détection des exigences particulières",
                                ],
                            },
                            {
                                title: "Génération du BoQ",
                                items: [
                                    "Structure hiérarchique lots > sous-lots > lignes",
                                    "Désignations normalisées et claires",
                                    "Unités adaptées (m², ml, unités)",
                                    "Quantités calculées avec précision",
                                ],
                            },
                            {
                                title: "Validation et export",
                                items: [
                                    "Interface de révision interactive",
                                    "Modification manuelle possible",
                                    "Export Excel multi-feuilles",
                                    "Traçabilité complète du calcul",
                                ],
                            },
                        ].map((section, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                            >
                                <GlassCard>
                                    <h4 className="text-lg font-bold text-[var(--accent-400)] mb-4">
                                        {section.title}
                                    </h4>
                                    <ul className="space-y-2">
                                        {section.items.map((item, j) => (
                                            <li key={j} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                                                <span className="text-[var(--accent-400)] mt-0.5">•</span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </GlassCard>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* CTA */}
                <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <GlassCard variant="strong" className="max-w-2xl mx-auto">
                        <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-3">
                            Prêt à accélérer vos réponses aux appels d'offres ?
                        </h3>
                        <p className="text-[var(--text-secondary)] mb-6">
                            Testez Cotage AI avec vos propres documents lors d'une démo personnalisée.
                        </p>
                        <GlassButtonLink href="/contact" variant="primary" size="lg">
                            Demander une démo
                        </GlassButtonLink>
                    </GlassCard>
                </motion.div>
            </div>
        </div>
    );
}
