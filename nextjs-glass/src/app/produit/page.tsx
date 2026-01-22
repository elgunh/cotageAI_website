"use client";

import { motion } from "framer-motion";
import { GlassCard, GlassBadge, GlassButtonLink } from "@/components/ui";
import { FileSpreadsheet, Eye, Edit, Download, Check } from "lucide-react";

export default function ProductPage() {
    return (
        <div className="relative pt-32 pb-20 px-6">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <GlassBadge variant="primary" className="mb-4">Produit</GlassBadge>
                    <h1 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-4">
                        De vos documents bruts à un devis structuré
                    </h1>
                    <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
                        Cotage AI lit vos CCTP et plans PDF, extrait les quantités, et génère un DPGF-like en Excel.
                    </p>
                </motion.div>

                {/* Glossary */}
                <section className="mb-24">
                    <h2 className="text-2xl font-bold text-[var(--text-primary)] text-center mb-12">
                        Glossaire BTP
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {[
                            { term: "DCE", def: "Dossier de Consultation des Entreprises", desc: "L'ensemble des documents transmis par le maître d'ouvrage pour consulter les entreprises : plans, CCTP, DPGF, etc." },
                            { term: "CCTP", def: "Cahier des Clauses Techniques Particulières", desc: "Document décrivant les exigences techniques : matériaux, finitions, couches, normes à respecter." },
                            { term: "DPGF", def: "Décomposition du Prix Global et Forfaitaire", desc: "Tableau listant les lignes de prix : lots, désignations, unités, quantités. Souvent vide dans le privé." },
                            { term: "Forfait", def: "Mode de rémunération", desc: "Prix fixe. Tout oubli dans le métrage = travaux non facturés." },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                            >
                                <GlassCard>
                                    <h4 className="text-lg font-bold text-[var(--accent-400)] mb-2">
                                        {item.term} — {item.def}
                                    </h4>
                                    <p className="text-sm text-[var(--text-secondary)]">{item.desc}</p>
                                </GlassCard>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Output Structure */}
                <section className="mb-24">
                    <motion.div
                        className="text-center mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-2">
                            Structure du BoQ généré
                        </h2>
                        <p className="text-[var(--text-secondary)]">Un fichier Excel clair et exploitable</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <GlassCard variant="strong" className="max-w-4xl mx-auto">
                            <div className="flex items-center gap-2 mb-4 text-sm text-emerald-400">
                                <FileSpreadsheet size={18} />
                                <span className="font-semibold">DPGF_Exemple_Structure.xlsx</span>
                            </div>
                            <div className="overflow-x-auto">
                                <table className="w-full text-sm">
                                    <thead>
                                        <tr className="border-b border-[var(--glass-border)]">
                                            <th className="text-left py-2 px-3 text-[var(--text-muted)] font-medium">N° Lot</th>
                                            <th className="text-left py-2 px-3 text-[var(--text-muted)] font-medium">Sous-lot</th>
                                            <th className="text-left py-2 px-3 text-[var(--text-muted)] font-medium">Désignation</th>
                                            <th className="text-left py-2 px-3 text-[var(--text-muted)] font-medium">Unité</th>
                                            <th className="text-right py-2 px-3 text-[var(--text-muted)] font-medium">Quantité</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-[var(--text-secondary)]">
                                        <tr className="border-b border-[var(--glass-border)]/50">
                                            <td className="py-2 px-3">6</td>
                                            <td className="py-2 px-3">6.1</td>
                                            <td className="py-2 px-3">Peinture murs — Acrylique mat</td>
                                            <td className="py-2 px-3">m²</td>
                                            <td className="py-2 px-3 text-right text-[var(--accent-400)]">245.50</td>
                                        </tr>
                                        <tr className="border-b border-[var(--glass-border)]/50">
                                            <td className="py-2 px-3">6</td>
                                            <td className="py-2 px-3">6.2</td>
                                            <td className="py-2 px-3">Peinture plafonds — Blanc mat</td>
                                            <td className="py-2 px-3">m²</td>
                                            <td className="py-2 px-3 text-right text-[var(--accent-400)]">182.00</td>
                                        </tr>
                                        <tr className="border-b border-[var(--glass-border)]/50">
                                            <td className="py-2 px-3">6</td>
                                            <td className="py-2 px-3">6.3</td>
                                            <td className="py-2 px-3">Préparation supports — Enduit lissé</td>
                                            <td className="py-2 px-3">m²</td>
                                            <td className="py-2 px-3 text-right text-[var(--accent-400)]">427.50</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <p className="text-xs text-[var(--text-muted)] mt-4">
                                Vous remplissez uniquement les colonnes Prix Unitaire. Les quantités sont pré-calculées.
                            </p>
                        </GlassCard>
                    </motion.div>
                </section>

                {/* Validation */}
                <section className="mb-24">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <GlassBadge variant="default" className="mb-4">Précision</GlassBadge>
                            <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4">
                                Validation humaine intégrée
                            </h2>
                            <p className="text-[var(--text-secondary)] mb-6">
                                Cotage AI propose des quantités, mais <strong className="text-[var(--text-primary)]">vous gardez le contrôle</strong>. Avant export, vous pouvez :
                            </p>
                            <ul className="space-y-3">
                                {[
                                    "Vérifier chaque ligne de quantité",
                                    "Visualiser le mapping plan ↔ CCTP",
                                    "Modifier ou ajouter des lignes",
                                    "Exporter uniquement après validation",
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-[var(--text-secondary)]">
                                        <Check size={18} className="text-[var(--accent-400)] shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <GlassCard>
                                <h4 className="text-lg font-bold text-[var(--accent-400)] mb-3">Mode Révision</h4>
                                <p className="text-sm text-[var(--text-secondary)] mb-4">
                                    Interface de validation avec vue côte-à-côte : plan annoté + lignes générées. Modifiez en temps réel.
                                </p>
                                <div className="grid grid-cols-3 gap-2">
                                    {[Eye, Edit, Download].map((Icon, i) => (
                                        <div key={i} className="text-center p-3 rounded-lg glass-subtle">
                                            <Icon size={20} className="mx-auto mb-1 text-[var(--accent-400)]" />
                                            <div className="text-xs text-[var(--text-muted)]">
                                                {["View", "Edit", "Export"][i]}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </GlassCard>
                        </motion.div>
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
                            Découvrez Cotage AI en action
                        </h3>
                        <p className="text-[var(--text-secondary)] mb-6">
                            Demandez une démo personnalisée avec vos propres documents.
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
