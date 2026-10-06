'use client';

import React from 'react';
import { CameraOff } from 'lucide-react';
import { GENERAL_INFO } from '@/lib/data';

const DevelopmentStopped = () => {
    return (
        <div className="relative min-h-[100dvh] w-full flex flex-col justify-between items-center px-4 py-8 sm:py-12 bg-background text-foreground overflow-x-hidden selection:bg-primary/20 selection:text-primary">
            {/* Subtle background ambient glow */}
            <div
                className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-primary/[0.04] rounded-full blur-[120px]"
                aria-hidden="true"
            />
            <div
                className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-white/[0.02] rounded-full blur-[100px]"
                aria-hidden="true"
            />

            {/* Header: Prominent Brand Logo */}
            <header className="w-full max-w-4xl mx-auto flex flex-col items-center pt-2 sm:pt-4 text-center z-10">
                <div className="text-3xl sm:text-4xl md:text-5xl font-anton tracking-wider leading-none">
                    <span className="text-primary">SIDHU</span>{' '}
                    <span className="text-foreground">PHOTOGRAPHY</span>
                </div>
                <p className="mt-2 text-[11px] sm:text-xs tracking-[0.28em] text-muted-foreground uppercase font-medium">
                    Photographic Portfolio & Studio
                </p>
            </header>

            {/* Main Notice Card */}
            <main className="w-full max-w-xl mx-auto my-auto py-8 sm:py-12 z-10 flex flex-col items-center text-center">
                <div className="w-full bg-background-light/50 border border-border/80 rounded-2xl p-7 sm:p-12 backdrop-blur-md shadow-2xl relative overflow-hidden">
                    {/* Top card accent line */}
                    <div
                        className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-[1px] bg-gradient-to-r from-transparent via-primary/40 to-transparent"
                        aria-hidden="true"
                    />

                    {/* Status Pill */}
                    <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-border text-xs mb-8">
                        <span className="size-2 rounded-full bg-amber-500/90 animate-pulse" />
                        <span className="tracking-widest uppercase font-medium text-[11px] text-muted-foreground">
                            Status: Discontinued
                        </span>
                    </div>

                    {/* Subtle Stopped Project Illustration / Icon */}
                    <div className="relative mx-auto mb-8 flex items-center justify-center size-20 sm:size-24 rounded-2xl bg-background border border-border/70 shadow-lg shadow-black/40">
                        {/* Soft inner glow */}
                        <div
                            className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/[0.06] to-transparent pointer-events-none"
                            aria-hidden="true"
                        />

                        {/* Camera off icon */}
                        <CameraOff
                            className="size-9 sm:size-10 text-muted-foreground/80 transition-colors duration-300"
                            strokeWidth={1.5}
                        />

                        {/* Subtle corner badge marker */}
                        <span className="absolute -bottom-1 -right-1 flex size-3">
                            <span className="relative inline-flex rounded-full size-3 bg-zinc-600 border-2 border-background" />
                        </span>
                    </div>

                    {/* Headline */}
                    <h1 className="text-3xl sm:text-4xl md:text-[42px] font-anton uppercase tracking-wide text-foreground leading-tight mb-4">
                        Development Stopped
                    </h1>

                    {/* Primary Statement */}
                    <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-md mx-auto">
                        Development of this project has been discontinued and the website is no longer actively maintained.
                    </p>

                    {/* Thank You Note */}
                    <p className="mt-4 text-sm sm:text-base text-muted-foreground/75 leading-relaxed font-light">
                        Thank you for your interest and support.
                    </p>

                    {/* Inquiries Contact Reference */}
                    <div className="mt-8 pt-6 border-t border-border/50 w-full flex flex-col items-center">
                        <span className="text-[11px] uppercase tracking-wider text-muted-foreground/60 mb-1.5">
                            Inquiries & Archival Contact
                        </span>
                        <a
                            href={`mailto:${GENERAL_INFO.email}`}
                            className="text-sm text-foreground/90 hover:text-primary transition-colors underline-offset-4 hover:underline"
                        >
                            {GENERAL_INFO.email}
                        </a>
                    </div>
                </div>
            </main>

            {/* Subtle Minimal Footer Notice */}
            <footer className="w-full text-center pb-2 text-xs text-muted-foreground/50 tracking-wider z-10">
                © {new Date().getFullYear()} Sidhu Photography. All rights reserved.
            </footer>
        </div>
    );
};

export default DevelopmentStopped;
