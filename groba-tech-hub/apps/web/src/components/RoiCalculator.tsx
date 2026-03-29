"use client";

import { useState } from "react";
import { Calculator } from "lucide-react";

export function RoiCalculator() {
    const [leadsPerDay, setLeadsPerDay] = useState<number>(30);
    const [ticketValue, setTicketValue] = useState<number>(500);

    // Estimativa de perda de fechamento por lentidão (20%) e taxa de conversão média (10% dos leads viram venda)
    const lostLeadsPerDay = Math.floor(leadsPerDay * 0.2);
    const potentialLostSales = Math.floor(lostLeadsPerDay * 0.1) || 1; // pelo menos 1
    const lostRevenuePerMonth = potentialLostSales * 30 * ticketValue;

    return (
        <section className="py-24 bg-[#050505] relative overflow-hidden border-t border-white/5">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-red-900/10 blur-[150px] rounded-full pointer-events-none"></div>

            <div className="container max-w-5xl mx-auto px-6 relative z-10">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center justify-center p-3 mb-6 bg-red-500/10 border border-red-500/20 rounded-full shadow-[0_0_30px_rgba(239,68,68,0.2)]">
                        <Calculator className="w-8 h-8 text-red-400" />
                    </div>
                    <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
                        Quanto dinheiro você está <span className="text-red-500">deixando na mesa?</span>
                    </h2>
                    <p className="text-lg text-gray-400 font-light max-w-2xl mx-auto">
                        Demorar mais de 5 minutos para responder um cliente reduz em 80% as chances de venda.
                        Calcule o prejuízo invisível da sua operação atual:
                    </p>
                </div>

                <div className="bg-gray-900/60 backdrop-blur-xl border border-gray-800 rounded-[2rem] p-8 md:p-12 shadow-2xl flex flex-col md:flex-row gap-12 items-center">

                    <div className="w-full md:w-1/2 space-y-8">
                        <div>
                            <label className="block text-gray-300 font-medium mb-4">
                                Quantos contatos de WhatsApp você recebe por dia? <span className="text-blue-400 font-bold">{leadsPerDay}</span>
                            </label>
                            <input
                                type="range"
                                min="5"
                                max="500"
                                value={leadsPerDay}
                                onChange={(e) => setLeadsPerDay(Number(e.target.value))}
                                className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
                            />
                        </div>

                        <div>
                            <label className="block text-gray-300 font-medium mb-4">
                                Qual é o Ticket Médio (R$) da sua venda? <span className="text-green-400 font-bold">R$ {ticketValue}</span>
                            </label>
                            <input
                                type="range"
                                min="50"
                                max="10000"
                                step="50"
                                value={ticketValue}
                                onChange={(e) => setTicketValue(Number(e.target.value))}
                                className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-green-500"
                            />
                        </div>
                    </div>

                    <div className="w-full md:w-1/2 bg-red-950/20 border border-red-900/40 rounded-3xl p-8 text-center relative overflow-hidden group">
                        <div className="absolute inset-0 bg-red-500/5 group-hover:bg-red-500/10 transition-colors"></div>
                        <p className="text-red-300 font-semibold mb-2 relative z-10 uppercase tracking-widest text-sm">
                            Prejuízo Estipulado por Mês
                        </p>
                        <p className="text-5xl font-extrabold text-red-500 relative z-10 drop-shadow-lg">
                            R$ {lostRevenuePerMonth.toLocaleString('pt-BR')}
                        </p>
                        <p className="text-gray-400 text-sm mt-4 relative z-10 font-light">
                            *Estimativa: perdendo 20% dos leads por resposta lenta, considerando taxa de conversão final de 10%.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}
