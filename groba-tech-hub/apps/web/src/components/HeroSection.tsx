import Link from "next/link";
import { ArrowRight } from "lucide-react";
import * as motion from "framer-motion/client";

interface HeroSectionProps {
    title: React.ReactNode;
    subtitle: string;
    ctaText: string;
    ctaHref: string;
    secondaryCtaText?: string;
    secondaryCtaHref?: string;
}

export function HeroSection({
    title,
    subtitle,
    ctaText,
    ctaHref,
    secondaryCtaText,
    secondaryCtaHref,
}: HeroSectionProps) {
    return (
        <section className="relative w-full pt-28 pb-32 lg:pt-36 lg:pb-40 bg-[#0A0A0A] flex items-center justify-center overflow-hidden">
            {/* Background gradients and meshes for premium look */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/20 rounded-full blur-[120px]"
                />
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                    className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-indigo-600/20 rounded-full blur-[120px]"
                />
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut", delay: 0.4 }}
                    className="absolute top-[20%] right-[20%] w-[30%] h-[30%] bg-purple-600/10 rounded-full blur-[100px]"
                />
                {/* Subtle grid pattern pattern overlay */}
                <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-5"></div>
            </div>

            <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="container px-4 md:px-6 relative z-10 text-center mx-auto max-w-5xl"
            >
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="inline-flex items-center justify-center px-4 py-1.5 mb-8 text-sm font-medium text-blue-300 bg-blue-900/30 rounded-full border border-blue-800/50 backdrop-blur-sm shadow-inner shadow-blue-500/20"
                >
                    <span className="flex w-2 h-2 rounded-full bg-blue-500 mr-2 animate-pulse"></span>
                    Soluções Tecnológicas de Alta Performance
                </motion.div>

                <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-7xl/tight text-white mb-6 drop-shadow-2xl">
                    {title}
                </h1>

                <p className="mx-auto max-w-[750px] text-gray-400 md:text-xl/relaxed lg:text-2xl/relaxed mb-10 font-light">
                    {subtitle}
                </p>

                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className="flex flex-col sm:flex-row gap-5 justify-center items-center mt-8"
                >
                    <Link href={ctaHref} className="group relative inline-flex items-center justify-center text-lg font-semibold px-8 py-4 w-full sm:w-auto text-white transition-all duration-300 ease-in-out bg-blue-600 border border-transparent rounded-full hover:bg-blue-700 shadow-[0_0_40px_-10px_rgba(59,130,246,0.5)] hover:shadow-[0_0_60px_-15px_rgba(59,130,246,0.7)] hover:scale-105">
                        {ctaText}
                        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>

                    {secondaryCtaText && secondaryCtaHref && (
                        <Link href={secondaryCtaHref} className="group inline-flex items-center justify-center text-lg font-medium px-8 py-4 w-full sm:w-auto text-white transition-all duration-300 ease-in-out bg-white/5 border border-white/10 rounded-full hover:bg-white/10 backdrop-blur-md">
                            {secondaryCtaText}
                        </Link>
                    )}
                </motion.div>
            </motion.div>
        </section>
    );
}
