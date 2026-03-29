"use client";

import { Star, Quote } from "lucide-react";
import * as motion from "framer-motion/client";

export function TestimonialsSection() {
    const testimonials = [
        {
            name: "Carlos Eduardo",
            role: "Diretor Comercial (RJ)",
            content: "O serviço de infraestrutura salvou nossa operação no mês de fechamento. Em 24 horas trocaram os SSDs de 5 notebooks na agência sem perdermos nenhum dado.",
            gradient: "from-blue-500 to-cyan-400",
        },
        {
            name: "Fernanda Lima",
            role: "CEO, StartFlow",
            content: "A automação de WhatsApp ligada ao nosso CRM mudou o jogo. Reduzimos nosso tempo de primeira resposta de 4 horas para 10 segundos! Um nível brutal de tecnologia proprietária.",
            gradient: "from-indigo-500 to-purple-500",
        },
        {
            name: "Rafael Moraes",
            role: "Gestor de Tráfego",
            content: "Estávamos perdendo conversões porque o Meta não rastreava direito. A Groba Tech implementou a Conversion API (CAPI) do lado do servidor e nosso ROAS duplicou.",
            gradient: "from-violet-500 to-pink-500",
        }
    ];

    return (
        <section className="py-16 md:py-20 bg-[#050508] relative overflow-hidden">
            {/* Ambient glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-indigo-900/5 blur-[100px] rounded-full pointer-events-none" />

            <div className="container max-w-[1200px] mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="text-center mb-12"
                >
                    <span className="inline-flex items-center px-3 py-1 mb-4 text-[10px] sm:text-xs font-semibold text-indigo-300 bg-indigo-500/10 rounded-full border border-indigo-500/20 tracking-wider uppercase">
                        Depoimentos
                    </span>
                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4 tracking-tight">
                        Quem já <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">escalou</span> com a gente
                    </h2>
                    <p className="text-base md:text-lg text-gray-500 font-light max-w-2xl mx-auto">
                        Não somos fornecedores, somos aceleradores. Veja o impacto real que geramos.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30, scale: 0.95 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: index * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
                            className="group relative bg-[#0C0C14]/80 border border-white/[0.04] rounded-2xl p-6 hover:border-white/[0.08] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.5)] flex flex-col h-full"
                        >
                            {/* Hover glow */}
                            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-indigo-500/[0.03] to-transparent pointer-events-none" />

                            <Quote className="w-8 h-8 text-white/[0.04] mb-3" />
                            
                            <div className="flex gap-0.5 mb-4">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <Star key={star} className="w-3.5 h-3.5 fill-yellow-500/80 text-yellow-500/80" />
                                ))}
                            </div>

                            <p className="text-sm text-gray-400 leading-relaxed mb-6 relative z-10 font-light grow">
                                &ldquo;{testimonial.content}&rdquo;
                            </p>

                            <div className="flex items-center gap-3 mt-auto relative z-10">
                                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${testimonial.gradient} flex items-center justify-center text-white font-bold text-sm shadow-lg`}>
                                    {testimonial.name.charAt(0)}
                                </div>
                                <div>
                                    <h4 className="text-white font-semibold text-sm">{testimonial.name}</h4>
                                    <p className="text-gray-600 text-xs">{testimonial.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
