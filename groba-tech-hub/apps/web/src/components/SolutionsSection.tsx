"use client";

import { Rocket, BotMessageSquare, CodeXml, Check, ArrowRight } from "lucide-react";
import * as motion from "framer-motion/client";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function SolutionsSection() {
    const solutions = [
        {
            title: "Máquina de Vendas Digital",
            description: "Criação de um ecossistema completo para atrair e converter clientes todos os dias.",
            icon: <Rocket className="w-8 h-8 text-orange-400" />,
            features: [
                "Landing Page de Alta Conversão",
                "Gestão de Tráfego Pago (Meta Ads)",
                "Agente de IA Simples para WhatsApp",
                "Foco absoluto em ROI e Vendas"
            ],
            cta: "Quero Escalar Minhas Vendas",
            popular: true,
            gradient: "from-orange-500/20 to-red-500/20",
            borderClass: "border-orange-500/50",
            buttonClass: "bg-orange-500 hover:bg-orange-600 text-white shadow-[0_0_20px_-5px_rgba(249,115,22,0.5)]",
            glowColor: "bg-orange-600/10",
        },
        {
            title: "Atendimento Autônomo",
            description: "Elimine gargalos operacionais e atenda clientes em segundos, 24 horas por dia.",
            icon: <BotMessageSquare className="w-8 h-8 text-blue-400" />,
            features: [
                "Agente de IA Avançado",
                "Treinamento Personalizado da IA",
                "Integração com Sistema e Agenda",
                "Equipe humana foca em fechamentos"
            ],
            cta: "Automatizar Atendimento",
            popular: false,
            gradient: "from-blue-500/10 to-indigo-500/10",
            borderClass: "border-white/10 hover:border-blue-500/30",
            buttonClass: "bg-white/10 hover:bg-white/20 text-white",
            glowColor: "bg-blue-600/10",
        },
        {
            title: "Transformação Digital",
            description: "A solução definitiva para modernizar toda a operação da sua empresa de ponta a ponta.",
            icon: <CodeXml className="w-8 h-8 text-indigo-400" />,
            features: [
                "Sistema Web / CRM Sob Medida",
                "Servidor Dedicado Otimizado",
                "Suporte Técnico Mensal",
                "Digitalização de Dados"
            ],
            cta: "Falar com Especialista",
            popular: false,
            gradient: "from-indigo-500/10 to-purple-500/10",
            borderClass: "border-white/10 hover:border-indigo-500/30",
            buttonClass: "bg-white/10 hover:bg-white/20 text-white",
            glowColor: "bg-indigo-600/10",
        }
    ];

    return (
        <section id="pacotes" className="py-20 md:py-28 bg-[#05050A] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-600/5 blur-[150px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/5 blur-[150px] rounded-full pointer-events-none" />

            <div className="container max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="text-center mb-16 max-w-3xl mx-auto"
                >
                    <span className="inline-flex items-center px-3 py-1 mb-4 text-[10px] sm:text-xs font-semibold text-orange-400 bg-orange-500/10 rounded-full border border-orange-500/20 uppercase tracking-wider">
                        Soluções Completas
                    </span>
                    <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
                        Pacotes de <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">Aceleração</span>
                    </h2>
                    <p className="text-base md:text-lg text-gray-400 font-light">
                        Não vendemos apenas sistemas ou anúncios. Entregamos células de lucro completas e prontas para rodar no seu negócio.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                    {solutions.map((pkg, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                            className={cn(
                                "relative bg-[#0C0C14]/80 backdrop-blur-xl border rounded-3xl p-8 flex flex-col h-full transition-all duration-500 group",
                                pkg.borderClass,
                                pkg.popular ? "md:-mt-4 md:mb-4 shadow-[0_20px_50px_-15px_rgba(249,115,22,0.1)]" : "hover:-translate-y-2 hover:shadow-2xl"
                            )}
                        >
                            <div className={cn("absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl pointer-events-none", pkg.glowColor)} />

                            {pkg.popular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-1 text-xs font-bold rounded-full shadow-lg">
                                    Mais Procurado
                                </div>
                            )}

                            <div className="mb-6 flex justify-between items-start relative z-10">
                                <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center bg-gradient-to-br border border-white/5", pkg.gradient)}>
                                    {pkg.icon}
                                </div>
                            </div>

                            <h3 className="text-2xl font-bold text-white mb-3 relative z-10">{pkg.title}</h3>
                            <p className="text-gray-400 text-sm mb-8 leading-relaxed font-light relative z-10">{pkg.description}</p>

                            <div className="flex-1 relative z-10">
                                <ul className="space-y-4 mb-8">
                                    {pkg.features.map((feature, fIdx) => (
                                        <li key={fIdx} className="flex items-start text-sm text-gray-300">
                                            <Check className={cn("w-5 h-5 mr-3 flex-shrink-0 mt-0.5", pkg.popular ? "text-orange-400" : "text-blue-400")} />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <Link 
                                href="#contato"
                                className={cn(
                                    "relative z-10 w-full inline-flex items-center justify-center px-6 py-3.5 rounded-xl font-semibold transition-all duration-300 group/btn",
                                    pkg.buttonClass
                                )}
                            >
                                {pkg.cta}
                                <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
