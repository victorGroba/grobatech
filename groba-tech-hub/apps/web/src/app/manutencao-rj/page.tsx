import { PricingCards } from "@/components/PricingCards";
import { FloatingWhatsAppButton } from "@/components/FloatingWhatsAppButton";
import { Wrench } from "lucide-react";

export default function ManutencaoRJ() {
    const plans = [
        {
            name: "Instalação de SSD NVMe/SATA",
            description: "Dê uma nova vida e hipervelocidade ao seu equipamento.",
            price: "A partir de R$ 250",
            features: [
                "SSD Kingston/WD incluso",
                "Clonagem exata de Sistema",
                "Limpeza física interna",
                "Otimização do Windows",
                "Garantia de 6 a 12 meses"
            ],
            ctaText: "Agendar Instalação",
            ctaHref: "https://wa.me/5521972706086?text=Opa!%20Quero%20instalar%20um%20SSD!"
        },
        {
            name: "Formatação Premium",
            description: "Limpeza, otimização e pacotes corporativos de software.",
            price: "R$ 150",
            popular: true,
            features: [
                "Backup em nuvem (até 100GB)",
                "Windows 10/11 Original Autenticado",
                "Pacote Office, Adobe PDF e Drivers",
                "Remoção cirúrgica de Vírus/Malware",
                "Suporte Remoto 30 dias"
            ],
            ctaText: "Solicitar Formatação",
            ctaHref: "https://wa.me/5521972706086?text=Opa!%20Meu%20PC%20precisa%20de%20formatacao."
        },
        {
            name: "Troca de Bateria",
            description: "Notebook com autonomia de novo para você trabalhar onde quiser.",
            price: "Sob Consulta",
            features: [
                "Baterias Originais ou Compatíveis Premium",
                "Análise de saúde do sistema energético",
                "Atendimento e troca no seu local (RJ)",
                "Garantia de fábrica assegurada"
            ],
            ctaText: "Fazer Orçamento",
            ctaHref: "https://wa.me/5521972706086?text=Opa!%20A%20bateria%20do%20meu%20notebook%20viciou."
        }
    ];

    return (
        <div className="min-h-screen bg-[#0A0A0A] relative overflow-hidden flex flex-col">
            {/* Background elements */}
            <div className="absolute top-0 w-full h-96 bg-gradient-to-b from-blue-900/20 to-transparent pointer-events-none"></div>

            <div className="pt-28 pb-16 text-center px-4 relative z-10 max-w-4xl mx-auto flex flex-col items-center">
                <div className="w-16 h-16 bg-blue-500/10 rounded-2xl border border-blue-500/20 flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(59,130,246,0.2)]">
                    <Wrench className="w-8 h-8 text-blue-400" />
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 drop-shadow-md tracking-tight">
                    Infraestrutura e <span className="text-blue-500">Manutenção (RJ)</span>
                </h1>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
                    Atendimento local especializado no Rio de Janeiro. Resolvemos problemas de lentidão, vícios de bateria e "tela azul" rapidamente para você não parar de trabalhar.
                </p>
            </div>

            <div className="pb-24 relative z-10">
                <PricingCards plans={plans} />
            </div>

            <FloatingWhatsAppButton phoneNumber="5521972706086" message="Olá! Tenho interesse em serviços de manutenção de Hardware no RJ." origin="manutencao_rj" />
        </div>
    );
}
