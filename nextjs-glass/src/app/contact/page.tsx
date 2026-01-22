"use client";

import { motion } from "framer-motion";
import { GlassCard, GlassBadge, GlassButton } from "@/components/ui";
import { Mail, MessageSquare, Send } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        phone: "",
        message: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission (e.g., send to API)
        console.log("Form submitted:", formData);
        alert("Merci ! Nous vous contacterons bientôt.");
    };

    return (
        <div className="relative pt-32 pb-20 px-6 min-h-screen">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <GlassBadge variant="primary" className="mb-4">
                        <Mail size={14} />
                        Contact
                    </GlassBadge>
                    <h1 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-4">
                        Demander une démo
                    </h1>
                    <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
                        Découvrez comment Cotage AI peut transformer votre processus de chiffrage. Remplissez le formulaire ci-dessous et nous vous contacterons rapidement.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    <GlassCard variant="strong">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                                        Nom complet *
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        required
                                        className="w-full px-4 py-3 rounded-xl glass-subtle border border-[var(--glass-border)] text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-500)] transition-all"
                                        placeholder="Jean Dupont"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                                        Email professionnel *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        required
                                        className="w-full px-4 py-3 rounded-xl glass-subtle border border-[var(--glass-border)] text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-500)] transition-all"
                                        placeholder="jean@entreprise.fr"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    />
                                </div>

                                <div>
                                    <label htmlFor="company" className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                                        Entreprise *
                                    </label>
                                    <input
                                        type="text"
                                        id="company"
                                        required
                                        className="w-full px-4 py-3 rounded-xl glass-subtle border border-[var(--glass-border)] text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-500)] transition-all"
                                        placeholder="Votre société"
                                        value={formData.company}
                                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                                    />
                                </div>

                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                                        Téléphone
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        className="w-full px-4 py-3 rounded-xl glass-subtle border border-[var(--glass-border)] text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-500)] transition-all"
                                        placeholder="+33 6 12 34 56 78"
                                        value={formData.phone}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    rows={5}
                                    className="w-full px-4 py-3 rounded-xl glass-subtle border border-[var(--glass-border)] text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-500)] transition-all resize-none"
                                    placeholder="Parlez-nous de vos besoins..."
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                />
                            </div>

                            <GlassButton type="submit" variant="primary" size="lg" className="w-full md:w-auto">
                                <Send size={18} />
                                Envoyer la demande
                            </GlassButton>
                        </form>

                        <div className="mt-8 pt-8 border-t border-[var(--glass-border)]">
                            <div className="flex flex-col md:flex-row gap-6 items-center justify-center text-sm text-[var(--text-secondary)]">
                                <div className="flex items-center gap-2">
                                    <Mail size={16} className="text-[var(--accent-400)]" />
                                    <a href="mailto:contact@cotage.ai" className="hover:text-[var(--accent-400)] transition-colors">
                                        contact@cotage.ai
                                    </a>
                                </div>
                            </div>
                        </div>
                    </GlassCard>
                </motion.div>
            </div>
        </div>
    );
}
