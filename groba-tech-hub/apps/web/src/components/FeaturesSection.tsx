import { ShieldCheck, Clock, Layers, HeadphonesIcon } from "lucide-react";
import * as motion from "framer-motion/client";

export function FeaturesSection() {
    const features = [
        {
            icon: <Clock className="w-8 h-8 text-blue-400" />,
            title: "Agilidade Local no RJ",
            description: "Nossa equipe opera localmente no Rio de Janeiro garantindo que a infraestrutura do seu negócio nunca fique parada."
        },
        {
            icon: <Layers className="w-8 h-8 text-indigo-400" />,
            title: "Arquitetura Escalável",
            description: "Desenvolvemos fluxos de automação e CRMs modulares preparados para crescer junto com seu volume de vendas."
        },
        {
            icon: <ShieldCheck className="w-8 h-8 text-blue-500" />,
            title: "Segurança de Dados",
            description: "Da clonagem de um SSD à gestão do seu Lead no Meta CAPI: tratamos todas as informações com protocolos rígidos."
        },
        {
            icon: <HeadphonesIcon className="w-8 h-8 text-indigo-500" />,
            title: "Parceria Estratégica",
            description: "Não somos apenas suporte técnico. Somos seus aliados na modernização, sugerindo as melhores práticas de mercado."
        }
    ];

    return (
        <section className="py-16 md:py-20 bg-[#050505] border-y border-white/5 relative overflow-hidden">
            {/* Subtle background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-900/10 blur-[100px] rounded-full pointer-events-none"></div>

            <div className="container max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="text-center mb-12 max-w-3xl mx-auto"
                >
                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4 tracking-tight">
                        Por que escolher a <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Groba Tech</span>?
                    </h2>
                    <p className="text-base md:text-lg text-gray-400 font-light">
                        Unimos o melhor do mundo físico e digital. Suporte rápido para suas máquinas locais e engenharia de software de ponta para escalar suas operações na nuvem.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40, scale: 0.92 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ 
                                duration: 0.6, 
                                delay: index * 0.15,
                                ease: [0.25, 0.46, 0.45, 0.94]
                            }}
                            className="group bg-white/5 border border-white/10 p-6 rounded-3xl hover:bg-white/10 hover:border-blue-500/30 transition-all duration-500 relative overflow-hidden hover:-translate-y-2 hover:shadow-[0_20px_50px_-15px_rgba(59,130,246,0.15)]"
                        >
                            {/* Hover gradient background */}
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-indigo-500/0 group-hover:from-blue-500/5 group-hover:to-indigo-500/10 transition-colors duration-500"></div>

                            <div className="relative w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center mb-5 shadow-inner border border-gray-800 group-hover:scale-110 group-hover:shadow-[0_0_20px_-5px_rgba(59,130,246,0.4)] transition-all duration-500">
                                {feature.icon}
                            </div>
                            <h3 className="relative text-lg font-bold text-white mb-2">{feature.title}</h3>
                            <p className="relative text-gray-400 leading-relaxed font-light text-xs sm:text-sm">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
