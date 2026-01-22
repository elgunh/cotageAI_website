"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/cn";

interface AnimationState {
    phase: "upload" | "analysis" | "boq";
    uploadProgress: number;
    filesDropped: { blueprint: boolean; cctp: boolean };
    uploadVerified: boolean;
    scanProgress: number;
    roomsDetected: number[];
    hudValues: { rooms: number; area: number; confidence: number };
    boqRowsVisible: number;
    boqReady: boolean;
    particles: { x: number; y: number; duration: number; delay: number }[];
}

const initialState: AnimationState = {
    phase: "upload",
    uploadProgress: 0,
    filesDropped: { blueprint: false, cctp: false },
    uploadVerified: false,
    scanProgress: 0,
    roomsDetected: [],
    hudValues: { rooms: 0, area: 0, confidence: 0 },
    boqRowsVisible: 0,
    boqReady: false,
    particles: [],
};

const boqData = [
    { room: "Salon", desc: "Wall paint", qty: "42 m²", total: "€840" },
    { room: "Chambre", desc: "Wall paint", qty: "28 m²", total: "€560" },
    { room: "Cuisine", desc: "Ceiling", qty: "18 m²", total: "€324" },
    { room: "Bureau", desc: "Wall prep", qty: "15 m²", total: "€195" },
];

export function ScanToBoQAnimation() {
    const shouldReduceMotion = useReducedMotion();
    const [state, setState] = useState<AnimationState>(initialState);
    const animationRef = useRef<NodeJS.Timeout | null>(null);
    const isRunning = useRef(true);

    const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

    const animateValue = (
        start: number,
        end: number,
        duration: number,
        setter: (val: number) => void
    ) => {
        const startTime = performance.now();
        const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - (1 - progress) * (1 - progress);
            setter(start + (end - start) * eased);
            if (progress < 1) requestAnimationFrame(animate);
        };
        requestAnimationFrame(animate);
    };

    useEffect(() => {
        // Initialize particles on client side only to avoid hydration mismatch
        const newParticles = [...Array(8)].map(() => ({
            x: 10 + Math.random() * 80,
            y: 10 + Math.random() * 80,
            duration: 3 + Math.random() * 2,
            delay: Math.random() * 2,
        }));
        setState(s => ({ ...s, particles: newParticles }));

        if (shouldReduceMotion) {
            // Show final state immediately
            setState({
                phase: "boq",
                uploadProgress: 100,
                filesDropped: { blueprint: true, cctp: true },
                uploadVerified: true,
                scanProgress: 100,
                roomsDetected: [0, 1, 2, 3, 4],
                hudValues: { rooms: 5, area: 83, confidence: 98 },
                boqRowsVisible: 4,
                boqReady: true,
                particles: newParticles,
            });
            return;
        }

        const runAnimation = async () => {
            while (isRunning.current) {
                // Reset
                setState(initialState);
                await sleep(500);

                // Phase 1: Upload
                setState((s) => ({ ...s, phase: "upload" }));
                await sleep(300);
                setState((s) => ({ ...s, filesDropped: { ...s.filesDropped, blueprint: true } }));
                await sleep(400);
                setState((s) => ({ ...s, filesDropped: { blueprint: true, cctp: true } }));
                await sleep(600);
                animateValue(0, 100, 800, (val) =>
                    setState((s) => ({ ...s, uploadProgress: val }))
                );
                await sleep(1000);
                setState((s) => ({ ...s, uploadVerified: true }));
                await sleep(500);

                // Phase 2: Analysis
                setState((s) => ({ ...s, phase: "analysis" }));
                await sleep(300);

                // Scan and detect rooms
                for (let i = 0; i < 5; i++) {
                    await sleep(400);
                    setState((s) => ({
                        ...s,
                        roomsDetected: [...s.roomsDetected, i],
                        scanProgress: ((i + 1) / 5) * 100,
                    }));
                }

                await sleep(300);

                // Animate HUD values
                animateValue(0, 5, 600, (val) =>
                    setState((s) => ({ ...s, hudValues: { ...s.hudValues, rooms: Math.round(val) } }))
                );
                await sleep(200);
                animateValue(0, 83, 800, (val) =>
                    setState((s) => ({ ...s, hudValues: { ...s.hudValues, area: Math.round(val) } }))
                );
                await sleep(200);
                animateValue(0, 98, 600, (val) =>
                    setState((s) => ({ ...s, hudValues: { ...s.hudValues, confidence: Math.round(val) } }))
                );
                await sleep(800);

                // Phase 3: BoQ
                setState((s) => ({ ...s, phase: "boq" }));
                await sleep(300);

                // Show rows one by one
                for (let i = 1; i <= 4; i++) {
                    setState((s) => ({ ...s, boqRowsVisible: i }));
                    await sleep(250);
                }

                await sleep(400);
                setState((s) => ({ ...s, boqReady: true }));

                // Hold final state
                await sleep(2500);
            }
        };

        runAnimation();

        return () => {
            isRunning.current = false;
        };
    }, [shouldReduceMotion]);

    return (
        <div className="relative w-full max-w-4xl mx-auto">
            {/* Floating particles (subtle) */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {state.particles.map((p, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 rounded-full bg-[var(--accent-400)]/30"
                        style={{
                            left: `${p.x}%`,
                            top: `${p.y}%`,
                        }}
                        animate={
                            shouldReduceMotion
                                ? {}
                                : {
                                    y: [0, -20, 0],
                                    opacity: [0.3, 0.6, 0.3],
                                }
                        }
                        transition={{
                            duration: p.duration,
                            repeat: Infinity,
                            delay: p.delay,
                        }}
                    />
                ))}
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">
                {/* Card 1: Upload */}
                <motion.div
                    className={cn(
                        "glass rounded-2xl p-5 transition-all duration-300",
                        state.phase === "upload" && "ring-2 ring-[var(--accent-500)]/50"
                    )}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                >
                    <div className="flex items-center gap-2 mb-4 text-sm font-medium text-[var(--text-secondary)]">
                        <span className="w-6 h-6 rounded-full bg-gradient-to-r from-[var(--accent-600)] to-[var(--accent-400)] flex items-center justify-center text-xs text-white font-bold">
                            1
                        </span>
                        Upload
                    </div>

                    <div className="space-y-3">
                        {/* Blueprint file */}
                        <motion.div
                            className={cn(
                                "flex items-center gap-3 p-3 rounded-xl border transition-all duration-300",
                                state.filesDropped.blueprint
                                    ? "glass-subtle border-[var(--accent-500)]/30"
                                    : "border-dashed border-[var(--glass-border)] opacity-50"
                            )}
                            animate={state.filesDropped.blueprint ? { scale: [1, 1.02, 1] } : {}}
                        >
                            <div className="w-10 h-10 rounded-lg bg-[var(--accent-500)]/20 flex items-center justify-center">
                                <svg className="w-5 h-5 text-[var(--accent-400)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <rect x="3" y="3" width="18" height="18" rx="2" />
                                    <path d="M3 9h18M9 21V9" />
                                </svg>
                            </div>
                            <div className="flex-1 min-w-0">
                                <div className="text-sm font-medium text-[var(--text-primary)] truncate">Blueprints</div>
                                <div className="text-xs text-[var(--text-muted)]">PDF • 2.4 MB</div>
                            </div>
                        </motion.div>

                        {/* CCTP file */}
                        <motion.div
                            className={cn(
                                "flex items-center gap-3 p-3 rounded-xl border transition-all duration-300",
                                state.filesDropped.cctp
                                    ? "glass-subtle border-[var(--accent-500)]/30"
                                    : "border-dashed border-[var(--glass-border)] opacity-50"
                            )}
                            animate={state.filesDropped.cctp ? { scale: [1, 1.02, 1] } : {}}
                        >
                            <div className="w-10 h-10 rounded-lg bg-[var(--accent-500)]/20 flex items-center justify-center">
                                <svg className="w-5 h-5 text-[var(--accent-400)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                                    <path d="M14 2v6h6" />
                                    <path d="M16 13H8M16 17H8M10 9H8" />
                                </svg>
                            </div>
                            <div className="flex-1 min-w-0">
                                <div className="text-sm font-medium text-[var(--text-primary)] truncate">CCTP / Specs</div>
                                <div className="text-xs text-[var(--text-muted)]">PDF • 1.8 MB</div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Upload status */}
                    <AnimatePresence>
                        {state.uploadProgress > 0 && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                className="mt-4"
                            >
                                <div className="flex items-center justify-between text-xs mb-1">
                                    <span className="text-[var(--text-muted)]">
                                        {state.uploadVerified ? "Verified ✓" : "Uploading..."}
                                    </span>
                                    <span className="text-[var(--accent-400)]">{Math.round(state.uploadProgress)}%</span>
                                </div>
                                <div className="h-1 rounded-full bg-[var(--glass-bg)] overflow-hidden">
                                    <motion.div
                                        className={cn(
                                            "h-full rounded-full",
                                            state.uploadVerified
                                                ? "bg-emerald-500"
                                                : "bg-gradient-to-r from-[var(--accent-600)] to-[var(--accent-400)]"
                                        )}
                                        style={{ width: `${state.uploadProgress}%` }}
                                    />
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>

                {/* Card 2: Analysis */}
                <motion.div
                    className={cn(
                        "glass rounded-2xl p-5 transition-all duration-300",
                        state.phase === "analysis" && "ring-2 ring-[var(--accent-500)]/50"
                    )}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    <div className="flex items-center gap-2 mb-4 text-sm font-medium text-[var(--text-secondary)]">
                        <span className="w-6 h-6 rounded-full bg-gradient-to-r from-[var(--accent-600)] to-[var(--accent-400)] flex items-center justify-center text-xs text-white font-bold">
                            2
                        </span>
                        Analysis
                    </div>

                    {/* Blueprint visualization */}
                    <div className="relative bg-[var(--glass-bg)] rounded-xl p-2 mb-4 overflow-hidden">
                        <svg className="w-full h-auto" viewBox="0 0 200 120">
                            {/* Grid pattern */}
                            <defs>
                                <pattern id="anim-grid" width="10" height="10" patternUnits="userSpaceOnUse">
                                    <path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(0,0,0,0.08)" strokeWidth="0.5" />
                                </pattern>
                            </defs>
                            <rect width="100%" height="100%" fill="url(#anim-grid)" />

                            {/* Rooms */}
                            {[
                                { x: 15, y: 15, w: 60, h: 45, label: "Salon", cx: 45, cy: 37 },
                                { x: 85, y: 15, w: 50, h: 45, label: "Chambre", cx: 110, cy: 37 },
                                { x: 145, y: 15, w: 40, h: 45, label: "SdB", cx: 165, cy: 37 },
                                { x: 15, y: 70, w: 80, h: 35, label: "Cuisine", cx: 55, cy: 87 },
                                { x: 105, y: 70, w: 80, h: 35, label: "Bureau", cx: 145, cy: 87 },
                            ].map((room, i) => (
                                <g key={i}>
                                    <motion.rect
                                        x={room.x}
                                        y={room.y}
                                        width={room.w}
                                        height={room.h}
                                        fill={
                                            state.roomsDetected.includes(i)
                                                ? `hsla(168, 60%, 45%, ${0.2 + (i % 3) * 0.1})`
                                                : "transparent"
                                        }
                                        stroke={state.roomsDetected.includes(i) ? "hsla(168, 60%, 50%, 0.6)" : "rgba(0,0,0,0.15)"}
                                        strokeWidth={state.roomsDetected.includes(i) ? 1.5 : 0.5}
                                        rx="2"
                                        initial={false}
                                        animate={{
                                            fill: state.roomsDetected.includes(i)
                                                ? `hsla(168, 60%, 45%, ${0.2 + (i % 3) * 0.1})`
                                                : "transparent",
                                        }}
                                        transition={{ duration: 0.3 }}
                                    />
                                    <text
                                        x={room.cx}
                                        y={room.cy}
                                        textAnchor="middle"
                                        className="fill-[var(--text-muted)] text-[8px]"
                                    >
                                        {room.label}
                                    </text>
                                </g>
                            ))}

                            {/* Scan line */}
                            {state.phase === "analysis" && state.scanProgress < 100 && (
                                <motion.line
                                    x1="0"
                                    y1="0"
                                    x2="200"
                                    y2="0"
                                    stroke="var(--accent-400)"
                                    strokeWidth="2"
                                    initial={{ y1: 0, y2: 0 }}
                                    animate={{ y1: 120, y2: 120 }}
                                    transition={{ duration: 2, ease: "linear" }}
                                    style={{ filter: "drop-shadow(0 0 4px var(--accent-400))" }}
                                />
                            )}
                        </svg>
                    </div>

                    {/* HUD */}
                    <div className="grid grid-cols-3 gap-2">
                        {[
                            { label: "Rooms", value: state.hudValues.rooms, suffix: "" },
                            { label: "Area", value: state.hudValues.area, suffix: " m²" },
                            { label: "Conf.", value: state.hudValues.confidence, suffix: "%" },
                        ].map((item, i) => (
                            <motion.div
                                key={item.label}
                                className="text-center p-2 rounded-lg glass-subtle"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{
                                    opacity: state.phase !== "upload" ? 1 : 0.5,
                                    scale: 1,
                                }}
                                transition={{ delay: i * 0.1 }}
                            >
                                <div className="text-lg font-bold text-[var(--accent-400)]">
                                    {item.value}{item.suffix}
                                </div>
                                <div className="text-xs text-[var(--text-muted)]">{item.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Card 3: BoQ */}
                <motion.div
                    className={cn(
                        "glass rounded-2xl p-5 transition-all duration-300",
                        state.phase === "boq" && "ring-2 ring-[var(--accent-500)]/50"
                    )}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                >
                    <div className="flex items-center gap-2 mb-4 text-sm font-medium text-[var(--text-secondary)]">
                        <span className="w-6 h-6 rounded-full bg-gradient-to-r from-[var(--accent-600)] to-[var(--accent-400)] flex items-center justify-center text-xs text-white font-bold">
                            3
                        </span>
                        BoQ / Quote
                    </div>

                    {/* Table */}
                    <div className="space-y-1 mb-4">
                        {/* Header */}
                        <div className="grid grid-cols-4 gap-2 text-xs text-[var(--text-muted)] pb-2 border-b border-[var(--glass-border)]">
                            <span>Room</span>
                            <span>Type</span>
                            <span className="text-right">Qty</span>
                            <span className="text-right">Total</span>
                        </div>

                        {/* Rows */}
                        {boqData.map((row, i) => (
                            <motion.div
                                key={i}
                                className="grid grid-cols-4 gap-2 text-xs py-2 border-b border-[var(--glass-border)]/50"
                                initial={{ opacity: 0, x: -10 }}
                                animate={{
                                    opacity: state.boqRowsVisible > i ? 1 : 0,
                                    x: state.boqRowsVisible > i ? 0 : -10,
                                }}
                                transition={{ duration: 0.2 }}
                            >
                                <span className="text-[var(--text-primary)]">{row.room}</span>
                                <span className="text-[var(--text-muted)]">{row.desc}</span>
                                <span className="text-right text-[var(--accent-400)]">{row.qty}</span>
                                <span className="text-right text-[var(--text-primary)] font-medium">{row.total}</span>
                            </motion.div>
                        ))}
                    </div>

                    {/* Footer */}
                    <AnimatePresence>
                        {state.boqReady && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="space-y-3"
                            >
                                <div className="flex items-center gap-2 text-xs text-emerald-400">
                                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                                    Ready to export
                                </div>
                                <div className="flex gap-2">
                                    <button className="flex-1 py-2 px-3 text-xs font-medium rounded-lg bg-gradient-to-r from-[var(--accent-600)] to-[var(--accent-400)] text-white">
                                        Export Excel
                                    </button>
                                    <button className="flex-1 py-2 px-3 text-xs font-medium rounded-lg glass-subtle text-[var(--text-secondary)]">
                                        Send to GC
                                    </button>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            </div>
        </div>
    );
}
