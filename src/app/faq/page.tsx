"use client";

import { motion } from "framer-motion";
import { GlassCard, GlassBadge } from "@/components/ui";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
    {
        q: "Combien de temps prend le traitement d'un DCE ?",
        a: "Le temps de traitement dépend de la taille de votre projet, mais en général, comptez entre 5 et 15 minutes pour un projet résidentiel standard (3-5 plans). Vous pouvez ensuite passer 10-20 minutes à valider les résultats.",
    },
    {
        q: "Quels formats de fichiers sont acceptés ?",
        a: "Nous acceptons les PDF pour les plans et le CCTP. Les fichiers DWG (AutoCAD) seront bientôt supportés pour une précision maximale.",
    },
    {
        q: "Puis-je modifier les quantités générées ?",
        a: "Absolument ! Vous gardez le contrôle total. L'interface de validation vous permet de modifier chaque ligne, d'ajouter ou de supprimer des éléments avant l'export final.",
    },
    {
        q: "Est-ce que Cotage AI remplace mon logiciel de devis ?",
        a: "Non, Cotage AI se concentre sur l'extraction de quantités et la génération du DPGF. Vous exportez ensuite vers Excel ou votre logiciel de devis habituel (Batappli, Onaya, etc.) pour ajouter vos prix unitaires.",
    },
    {
        q: "Comment sont calculées les surfaces ?",
        a: "Notre moteur d'analyse utilise la vision par ordinateur et l'IA pour détecter les pièces, mesurer les surfaces, et déduire automatiquement les ouvertures (portes, fenêtres). Vous pouvez visualiser le mapping plan ↔ CCTP avant validation.",
    },
    {
        q: "Mes données sont-elles sécurisées ?",
        a: "Oui. Vos documents sont chiffrés en transit et au repos. Nous ne partageons jamais vos données avec des tiers, et vous pouvez supprimer vos projets à tout moment.",
    },
    {
        q: "Quel est le tarif ?",
        a: "Nous proposons plusieurs formules adaptées à votre volume de réponses. Contactez-nous pour une démo et un devis personnalisé.",
    },
    {
        q: "Est-ce que ça marche pour tous les corps d'état ?",
        a: "Nous commençons par la peinture (lots 6.x), puis étendrons progressivement aux plaquistes, revêtements de sol, et menuisiers. Chaque métier a ses spécificités, et nous les intégrons progressivement.",
    },
];

export default function FAQPage() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <div className="relative pt-32 pb-20 px-6 min-h-screen">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <GlassBadge variant="default" className="mb-4">FAQ</GlassBadge>
                    <h1 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-4">
                        Questions fréquentes
                    </h1>
                    <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
                        Tout ce que vous devez savoir sur Cotage AI
                    </p>
                </motion.div>

                <div className="space-y-4">
                    {faqs.map((faq, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.05 }}
                        >
                            <GlassCard
                                hover={false}
                                className={`cursor-pointer transition-all ${openIndex === i ? "ring-2 ring-[var(--accent-500)]/50" : ""
                                    }`}
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                            >
                                <div className="flex items-center justify-between">
                                    <h3 className="text-lg font-semibold text-[var(--text-primary)] pr-4">
                                        {faq.q}
                                    </h3>
                                    <ChevronDown
                                        size={20}
                                        className={`text-[var(--text-muted)] transition-transform shrink-0 ${openIndex === i ? "rotate-180" : ""
                                            }`}
                                    />
                                </div>
                                <div
                                    className={`overflow-hidden transition-all duration-300 ${openIndex === i ? "max-h-96 mt-4" : "max-h-0"
                                        }`}
                                >
                                    <p className="text-[var(--text-secondary)] leading-relaxed">
                                        {faq.a}
                                    </p>
                                </div>
                            </GlassCard>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    className="mt-12 text-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                >
                    <GlassCard variant="subtle">
                        <p className="text-[var(--text-secondary)]">
                            Vous avez d'autres questions ?{" "}
                            <a href="/contact" className="text-[var(--accent-400)] hover:underline">
                                Contactez-nous
                            </a>
                        </p>
                    </GlassCard>
                </motion.div>
            </div>
        </div>
    );
}
