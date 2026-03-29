import { PricingCards } from "@/components/PricingCards";
import { FloatingWhatsAppButton } from "@/components/FloatingWhatsAppButton";
import { BotMessageSquare } from "lucide-react";
import { TestDriveSection } from "@/components/TestDriveSection";
import { IntegrationsCarousel } from "@/components/IntegrationsCarousel";
import { RoiCalculator } from "@/components/RoiCalculator";
import { PainVsFutureSection } from "@/components/PainVsFutureSection";
import * as motion from "framer-motion/client";
import Image from "next/image";

export default function SolucoesIA() {
    const plans = [
        {
            name: "A 'Recepcionista IA' 24/7",
            description: "Reduza faltas e marque consultas enquanto você dorme.",
            price: "1x R$ 997",
            features: [
                "Integração direta com o seu Google Calendar",
                "Qualificação do paciente antes de marcar e FAQ nativo",
                "Atendimento em 3 segundos, 24 horas por dia",
                "Instalação direta no seu número oficial de WhatsApp"
            ],
            ctaText: "Agendar Reunião",
            ctaHref: "https://wa.me/5521972706086?text=Quero%20agendar%20uma%20reuniao%20sobre%20o%20Chatbot."
        },
        {
            name: "Máquina para Infoprodutores",
            description: "Tráfego, captura e fechamento rodando no automático.",
            price: "1x R$ 2.497",
            popular: true,
            features: [
                "Gestão de Tráfego + Landing Page de Alta Conversão",
                "IA Focada em quebra de objeções e recuperação de carrinhos",
                "CRM Customizável atrelado ao Meta CAPI",
                "Disparo Ativo em massa seguro"
            ],
            ctaText: "Falar com Consultor",
            ctaHref: "https://wa.me/5521972706086?text=Quero%20falar%20com%20um%20consultor%20sobre%20o%20CRM."
        },
        {
            name: "Dashboards e CRMs B2B",
            description: "Abandone planilhas manuais e visualize seu faturamento.",
            price: "Sob Consulta",
            features: [
                "Transformação de dados brutos num Painel Visual Interativo",
                "Controle de fluxo de contratos e licitações",
                "Infraestrutura dedicada com PostgreSQL no Backend",
                "Microserviços escaláveis (Desenvolvimento Sob Medida)"
            ],
            ctaText: "Pedir Proposta",
            ctaHref: "https://wa.me/5521972706086?text=Gostaria%20de%20pedir%20uma%20proposta%20para%20SaaS%20Corporativo."
        }
    ];

    return (
        <div className="min-h-screen bg-[#0A0A0A] relative overflow-hidden flex flex-col">
            {/* Background elements */}
            <div className="absolute top-0 w-full h-screen bg-gradient-to-b from-indigo-900/10 to-transparent pointer-events-none"></div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="pt-28 pb-16 text-center px-4 max-w-5xl mx-auto relative z-10 flex flex-col items-center"
            >
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="w-16 h-16 bg-indigo-500/10 rounded-2xl border border-indigo-500/20 flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(99,102,241,0.2)]"
                >
                    <BotMessageSquare className="w-8 h-8 text-indigo-400" />
                </motion.div>
                <div className="inline-flex items-center justify-center px-4 py-1.5 mb-8 text-sm font-medium text-indigo-300 bg-indigo-900/30 rounded-full border border-indigo-800/50 backdrop-blur-sm shadow-inner">
                    Concentre-se em entregar o seu serviço
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white mb-6 drop-shadow-lg tracking-tight">
                    Passe a vender <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">tempo e lucro.</span>
                </h1>
                <p className="text-xl md:text-2xl text-indigo-100/60 max-w-3xl mx-auto font-light leading-relaxed mb-12">
                    Nós construímos o motor digital. Você apenas atende quem já está qualificado e pronto para pagar pelo seu serviço.
                </p>

                {/* Automation Banner Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
                    className="relative w-full max-w-5xl mx-auto rounded-[2rem] overflow-hidden shadow-[0_0_60px_-15px_rgba(99,102,241,0.4)] border border-indigo-500/30"
                >
                    <Image
                        src="/assets/image/banner-sobre-automacao.png"
                        alt="Plataforma de Automação e CRM"
                        width={1200}
                        height={600}
                        className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
                        priority
                    />
                </motion.div>
            </motion.div>

            {/* 2. PROVA TÉCNICA (Carrossel) */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <IntegrationsCarousel />
            </motion.div>

            {/* 3. A DOR VS FUTURO (Ação e Escala) */}
            <PainVsFutureSection />

            {/* 4. A PRATELEIRA DE PRODUTOS (Soluções de mercado refatoradas) */}
            <div className="py-24 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
                        Os <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Sistemas</span> que mais vendem
                    </h2>
                    <p className="text-gray-400 font-light max-w-2xl mx-auto">
                        Sua equipe livre de tarefas braçais e processos robotizados.
                    </p>
                </motion.div>
                <PricingCards plans={plans} />
            </div>

            {/* 5. A CALCULADORA DE URGÊNCIA (ROI) */}
            <RoiCalculator />

            {/* 6. O TESTE PRÁTICO (Botão Imersivo) */}
            <TestDriveSection />

            <FloatingWhatsAppButton phoneNumber="5521972706086" message="Olá! Tenho interesse em escalar minha operação com Inteligência Artificial e Automações." origin="solucoes_ia" />
        </div>
    );
}
