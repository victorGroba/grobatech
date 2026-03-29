import { XCircle, CheckCircle2 } from "lucide-react";

export function PainVsFutureSection() {
    const painPoints = [
        "Mensagens acumuladas e resposta lenta",
        "Pacientes desistindo pela demora no atendimento",
        "Agenda de papel ou planilhas confusas",
        "Perda de vendas fora do horário comercial",
        "Equipe exausta fazendo trabalho repetitivo"
    ];

    const futurePoints = [
        "Atendimento fulminante em apenas 3 segundos",
        "Agendamentos confirmados direto no Google Calendar",
        "Dashboard visual em tempo real (CRM em Nuvem)",
        "Faturamento rodando no automático 24/7",
        "Sua equipe focada no que realmente importa"
    ];

    return (
        <section className="py-24 bg-[#0A0A0A] relative overflow-hidden">
            <div className="container max-w-6xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
                        A forma <span className="text-gray-500">antiga</span> vs O seu <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Futuro</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {/* PAIN */}
                    <div className="bg-red-950/10 backdrop-blur-md border border-red-900/30 rounded-[2rem] p-10 hover:border-red-500/50 transition-colors shadow-2xl relative">
                        <h3 className="text-2xl font-bold text-red-500 mb-8 pb-4 border-b border-red-900/30">
                            Sem a Groba Tech (Sua Dor Atual)
                        </h3>
                        <ul className="space-y-6">
                            {painPoints.map((point, i) => (
                                <li key={i} className="flex items-start">
                                    <XCircle className="w-6 h-6 text-red-500 mr-4 shrink-0 mt-0.5 opacity-80" />
                                    <span className="text-gray-400 font-light text-lg">{point}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* FUTURE */}
                    <div className="bg-blue-900/10 backdrop-blur-md border border-blue-500/30 rounded-[2rem] p-10 hover:border-blue-400/60 hover:shadow-[0_0_40px_-10px_rgba(59,130,246,0.3)] transition-all shadow-2xl relative">
                        <div className="absolute -top-4 -right-4 bg-blue-600 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg transform rotate-3">
                            O Padrão Ouro
                        </div>
                        <h3 className="text-2xl font-bold text-blue-400 mb-8 pb-4 border-b border-blue-900/50">
                            Com as Soluções da Groba Tech
                        </h3>
                        <ul className="space-y-6">
                            {futurePoints.map((point, i) => (
                                <li key={i} className="flex items-start">
                                    <CheckCircle2 className="w-6 h-6 text-blue-400 mr-4 shrink-0 mt-0.5" />
                                    <span className="text-white font-medium text-lg leading-relaxed">{point}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
