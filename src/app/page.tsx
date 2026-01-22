"use client";

import { motion } from "framer-motion";
import { GlassCard, GlassBadge, GlassButtonLink } from "@/components/ui";
import { ScanToBoQAnimation } from "@/components/scan-animation";
import { TradesSection } from "@/components/trades-section";
import {
  Clock, DollarSign, AlertTriangle,
  LayoutGrid, FileText, PenTool, Download,
  GraduationCap, FileCheck, Lock, Zap
} from "lucide-react";

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

export default function HomePage() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="min-h-screen pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <motion.div {...fadeInUp}>
              <GlassBadge variant="primary" className="mb-6">
                <Zap size={14} />
                Conçu pour les PME du BTP
              </GlassBadge>
            </motion.div>

            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--text-primary)] mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              Transformez un DCE en métrés + DPGF structuré{" "}
              <span className="text-gradient">en quelques minutes</span>
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-[var(--text-secondary)] max-w-3xl mx-auto mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Importez votre CCTP et vos plans PDF. Cotage AI génère automatiquement un Bill of Quantities (DPGF-like) + un export Excel prêt à envoyer à l'Entreprise Générale.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <GlassButtonLink href="/contact" variant="primary" size="lg">
                Demander une démo
              </GlassButtonLink>
              <GlassButtonLink href="#how-it-works" variant="secondary" size="lg">
                Voir comment ça marche
              </GlassButtonLink>
            </motion.div>
          </div>

          {/* Animation */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <GlassCard className="p-8">
              <ScanToBoQAnimation />
            </GlassCard>
          </motion.div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <GlassBadge variant="default" className="mb-4">Le problème</GlassBadge>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4">
              La feuille Excel vide
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Dans le marché privé, le DPGF pré-rempli n'existe souvent pas. C'est au sous-traitant de tout calculer à partir des plans.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-6"
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              { icon: Clock, title: "30 heures par DCE", desc: "Le métrage manuel prend un temps considérable : lecture des plans, calculs de surfaces, croisement avec le CCTP..." },
              { icon: DollarSign, title: "Forfait = risque de marge", desc: "Chaque oubli coûte votre marge. En marché forfaitaire, les surfaces non comptées sont des travaux non facturés." },
              { icon: AlertTriangle, title: "Erreurs fréquentes", desc: "Les ouvertures mal déduites, les pièces oubliées, les doublons... Les erreurs sont courantes et coûteuses." },
            ].map((item, i) => (
              <motion.div key={i} variants={fadeInUp}>
                <GlassCard hover={true} className="text-center h-full">
                  <div className="w-14 h-14 mx-auto mb-5 rounded-2xl bg-[var(--accent-500)]/20 flex items-center justify-center">
                    <item.icon className="w-7 h-7 text-[var(--accent-400)]" />
                  </div>
                  <h4 className="text-xl font-semibold text-[var(--text-primary)] mb-3">{item.title}</h4>
                  <p className="text-[var(--text-secondary)]">{item.desc}</p>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <GlassBadge variant="primary" className="mb-4">La solution</GlassBadge>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4">
              Cotage AI automatise le métrage
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Nous transformons vos documents en lignes de prix structurées, prêtes à exporter vers Excel.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              { icon: LayoutGrid, title: "Métrage des plans", desc: "Extraction automatique des surfaces murs/plafonds avec déduction des ouvertures." },
              { icon: FileText, title: "Mapping CCTP", desc: "Croisement pièces/zones avec les exigences qualité et couches du cahier des charges." },
              { icon: PenTool, title: "Génération BoQ", desc: "Création de lignes de prix structurées type DPGF avec lots, désignations, unités et quantités." },
              { icon: Download, title: "Export Excel", desc: "Fichier .xlsx éditable et traçable, prêt à envoyer à l'Entreprise Générale." },
            ].map((item, i) => (
              <motion.div key={i} variants={fadeInUp}>
                <GlassCard hover={true} className="h-full">
                  <div className="w-12 h-12 mb-4 rounded-xl bg-[var(--accent-500)]/20 flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-[var(--accent-400)]" />
                  </div>
                  <h4 className="text-lg font-semibold text-[var(--text-primary)] mb-2">{item.title}</h4>
                  <p className="text-sm text-[var(--text-secondary)]">{item.desc}</p>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Trades Section - Travaux de second œuvre */}
      <TradesSection />

      {/* How It Works Section */}
      <section id="how-it-works" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <GlassBadge variant="default" className="mb-4">Comment ça marche</GlassBadge>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4">
              3 étapes simples
            </h2>
            <p className="text-lg text-[var(--text-secondary)]">
              De vos documents bruts à un devis structuré en quelques minutes.
            </p>
          </motion.div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mb-12">
            {[
              { num: "1", title: "Téléchargez", desc: "CCTP + 1-2 plans PDF" },
              { num: "2", title: "Extraction & Croisement", desc: "Quantités + mapping specs" },
              { num: "3", title: "Exportez", desc: "BoQ.xlsx prêt à envoyer" },
            ].map((step, i) => (
              <motion.div
                key={i}
                className="flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[var(--accent-600)] to-[var(--accent-400)] flex items-center justify-center text-white font-bold text-lg mb-4">
                  {step.num}
                </div>
                <h4 className="font-semibold text-[var(--text-primary)] mb-1">{step.title}</h4>
                <p className="text-sm text-[var(--text-muted)]">{step.desc}</p>
                {i < 2 && (
                  <div className="hidden md:block w-16 h-0.5 bg-[var(--glass-border)] absolute translate-x-[140px]" />
                )}
              </motion.div>
            ))}
          </div>

          <motion.div
            className="max-w-xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <GlassCard variant="subtle" className="text-center">
              <div className="flex items-center justify-center gap-2 text-[var(--accent-400)] mb-2">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="8.5" cy="7" r="4" />
                  <path d="M20 8v6M23 11h-6" />
                </svg>
                <span className="font-semibold">Human-in-the-loop</span>
              </div>
              <p className="text-sm text-[var(--text-secondary)]">
                Vous validez chaque ligne avant envoi. Le contrôle reste entre vos mains.
              </p>
            </GlassCard>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <GlassBadge variant="default" className="mb-4">Bénéfices</GlassBadge>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)]">
              Résultats mesurables
            </h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-3 gap-8 mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {[
              { value: "-80%", label: "Temps de chiffrage" },
              { value: "+15%", label: "Appels d'offres traités" },
              { value: "0", label: "Pièce oubliée" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-[var(--accent-400)] mb-2">{stat.value}</div>
                <div className="text-sm text-[var(--text-muted)] uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <GlassBadge variant="default" className="mb-4">Confiance</GlassBadge>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)]">
              Une technologie fiable
            </h2>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-6"
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              { icon: GraduationCap, title: "Ingénieurs X / IP Paris", desc: "Équipe technique issue de l'École Polytechnique et de l'Institut Polytechnique de Paris." },
              { icon: FileCheck, title: "Workflow DCE réel", desc: "Conçu pour les vrais processus d'appels d'offres : analyse CCTP, génération DPGF, gestion forfait et échanges GC." },
              { icon: Lock, title: "Données sécurisées", desc: "Vos documents restent confidentiels. Hébergement sécurisé, pas de partage avec des tiers." },
            ].map((item, i) => (
              <motion.div key={i} variants={fadeInUp}>
                <GlassCard hover={true} className="flex gap-4">
                  <div className="w-14 h-14 shrink-0 rounded-2xl bg-[var(--accent-500)]/20 flex items-center justify-center">
                    <item.icon className="w-7 h-7 text-[var(--accent-400)]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[var(--text-primary)] mb-1">{item.title}</h4>
                    <p className="text-sm text-[var(--text-secondary)]">{item.desc}</p>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <GlassCard variant="strong" className="text-center py-16 px-8">
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4">
                Prêt à gagner du temps sur vos métrés ?
              </h2>
              <p className="text-lg text-[var(--text-secondary)] max-w-xl mx-auto mb-8">
                Demandez une démonstration personnalisée et découvrez comment Cotage AI peut transformer votre processus de chiffrage.
              </p>
              <GlassButtonLink href="/contact" variant="primary" size="lg">
                Demander une démo
              </GlassButtonLink>
              <p className="text-sm text-[var(--text-muted)] mt-6">
                Ou écrivez-nous : <a href="mailto:contact@cotage.ai" className="text-[var(--accent-400)] hover:underline">contact@cotage.ai</a>
              </p>
            </GlassCard>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
