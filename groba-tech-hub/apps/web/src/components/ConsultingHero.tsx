"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import * as motion from "framer-motion/client";
import { useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

export function ConsultingHero() {
    const sectionRef = useRef<HTMLElement>(null);
    
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end end"]
    });

    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 80,
        damping: 25,
        mass: 0.5,
        restDelta: 0.0005
    });

    const textOpacity = useTransform(smoothProgress, [0, 0.15], [1, 0]);
    const textY = useTransform(smoothProgress, [0, 0.15], [0, -80]);
    const overlayOpacity = useTransform(smoothProgress, [0, 0.15], [0.7, 0]);
    const videoScale = useTransform(smoothProgress, [0, 0.3], [1.05, 1]);

    return (
        <section 
            ref={sectionRef} 
            className="relative w-full bg-[#05050A]"
            style={{ height: '400vh' }}
        >
            <div className="sticky top-0 w-full h-screen overflow-hidden">
                
                {/* Video background - autoplay loop */}
                <motion.div style={{ scale: videoScale }} className="absolute inset-0">
                    <video 
                        src="/assets/videos/Logo_internal_system_202603291538.mp4"
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="auto"
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                </motion.div>

                <motion.div 
                    style={{ opacity: overlayOpacity }}
                    className="absolute inset-0 bg-[#05050A] z-[1] pointer-events-none" 
                />
                
                <div className="absolute inset-0 bg-[#05050A]/20 z-[1] pointer-events-none" />
                <div className="absolute bottom-0 left-0 right-0 h-[30%] bg-gradient-to-t from-[#05050A] via-[#05050A]/60 to-transparent z-[1] pointer-events-none" />

                <motion.div 
                    style={{ opacity: textOpacity, y: textY }}
                    className="absolute inset-0 z-[2] flex items-center bg-gradient-to-r from-[#05050A] to-transparent"
                >
                    <div className="container mx-auto px-6 max-w-[1200px]">
                        <div className="max-w-2xl">
                            <div className="py-6 sm:py-8">
                                <motion.div
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ duration: 0.7, ease: "easeOut" }}
                                    className="inline-flex items-center px-4 py-1.5 mb-5 text-xs sm:text-sm font-semibold text-blue-300 bg-blue-500/10 rounded-full border border-blue-500/20"
                                >
                                    <span className="w-2 h-2 rounded-full bg-blue-500 mr-2 animate-pulse"></span>
                                    Consultoria Estratégica &amp; Automação Avançada
                                </motion.div>

                                <motion.h1
                                    initial={{ y: 30, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
                                    className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-5 leading-[1.1]"
                                >
                                    Escale sua empresa com{" "}
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-indigo-500">
                                        Tecnologia e Automação Inteligente
                                    </span>
                                </motion.h1>

                                <motion.p
                                    initial={{ y: 30, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                                    className="text-base sm:text-lg text-gray-300 mb-6 max-w-lg leading-relaxed font-light"
                                >
                                    A Groba Tech é a parceira estratégica ideal para desenvolver sistemas sob medida, automatizar o atendimento com IA e escalar seus resultados. Transforme a TI no principal motor de vendas do seu negócio.
                                </motion.p>

                                <motion.ul
                                    initial={{ y: 30, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
                                    className="flex flex-col gap-2.5 mb-8"
                                >
                                    {[
                                        "Desenvolvimento de CRMs e Sistemas Web",
                                        "Agentes de IA Avançados no WhatsApp",
                                        "Criação de Máquina de Vendas Digital com Meta Ads"
                                    ].map((item, index) => (
                                        <li key={index} className="flex items-center text-gray-200 text-sm font-medium">
                                            <CheckCircle2 className="w-4 h-4 text-blue-400 mr-3 flex-shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </motion.ul>

                                <motion.div
                                    initial={{ y: 30, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
                                    className="flex flex-col sm:flex-row gap-3"
                                >
                                    <Link 
                                        href="#contato" 
                                        className="group inline-flex items-center justify-center text-base font-bold px-6 py-3 text-white bg-orange-500 rounded-xl hover:bg-orange-600 shadow-[0_0_30px_-5px_rgba(249,115,22,0.5)] hover:shadow-[0_0_40px_-5px_rgba(249,115,22,0.7)] hover:-translate-y-1 transition-all duration-300"
                                    >
                                        Quero escalar minha empresa
                                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </Link>

                                    <Link 
                                        href="#solucoes" 
                                        className="inline-flex items-center justify-center text-base font-semibold px-6 py-3 text-white bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:border-white/20 backdrop-blur-md transition-all duration-300"
                                    >
                                        Ver como funciona
                                    </Link>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
