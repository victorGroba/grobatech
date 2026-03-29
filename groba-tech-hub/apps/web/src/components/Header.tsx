"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";

const navLinks = [
    { label: "Início", href: "/" },
    { label: "Soluções", href: "#solucoes" },
    { label: "Sobre", href: "#sobre" },
    { label: "Contato", href: "#contato" },
];

export function Header() {
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 w-full">
            {/* Glassmorphism navbar */}
            <div className="mx-auto max-w-[1280px] px-4 pt-4">
                <nav className="flex h-20 md:h-24 items-center justify-between rounded-2xl border border-white/[0.06] bg-[#0A0A12]/70 backdrop-blur-2xl backdrop-saturate-150 px-6 shadow-[0_8px_32px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.04)]">
                    
                    {/* Logo */}
                    <Link href="/" className="flex items-center shrink-0">
                        <Image 
                            src="/assets/image/groba4.png"
                            alt="Groba Tech"
                            width={280}
                            height={70}
                            className="h-12 md:h-16 w-auto object-contain"
                            priority
                        />
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-2">
                        {navLinks.map((link) => (
                            <Link
                                key={link.label}
                                href={link.href}
                                className="relative px-5 py-2.5 text-sm font-medium text-gray-300 rounded-lg transition-all duration-200 hover:text-white hover:bg-white/[0.06]"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    {/* CTA + Mobile Toggle */}
                    <div className="flex items-center gap-3">
                        <Link 
                            href="https://wa.me/5521972706086" 
                            target="_blank" 
                            className="hidden sm:inline-flex items-center gap-2 px-5 py-2 text-sm font-semibold text-white rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 shadow-[0_0_20px_-4px_rgba(79,70,229,0.4)] hover:shadow-[0_0_28px_-4px_rgba(79,70,229,0.6)] transition-all duration-300 hover:-translate-y-0.5"
                        >
                            Fale conosco
                            <ArrowRight className="w-4 h-4" />
                        </Link>

                        {/* Mobile hamburger */}
                        <button
                            onClick={() => setMobileOpen(!mobileOpen)}
                            className="md:hidden flex items-center justify-center w-9 h-9 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
                            aria-label="Menu"
                        >
                            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                        </button>
                    </div>
                </nav>
            </div>

            {/* Mobile menu dropdown */}
            {mobileOpen && (
                <div className="md:hidden mx-4 mt-2 rounded-2xl border border-white/[0.06] bg-[#0A0A12]/95 backdrop-blur-2xl p-4 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200">
                    <div className="flex flex-col gap-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.label}
                                href={link.href}
                                onClick={() => setMobileOpen(false)}
                                className="flex items-center px-4 py-3 text-sm font-medium text-gray-300 rounded-xl hover:text-white hover:bg-white/[0.06] transition-colors"
                            >
                                {link.label}
                            </Link>
                        ))}
                        <div className="mt-2 pt-2 border-t border-white/[0.06]">
                            <Link 
                                href="https://wa.me/5521972706086" 
                                target="_blank"
                                onClick={() => setMobileOpen(false)}
                                className="flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-white rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600"
                            >
                                Fale conosco
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}
