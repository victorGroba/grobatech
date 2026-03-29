export function IntegrationsCarousel() {
    const tools = [
        "WhatsApp API",
        "Meta Ads",
        "Google Calendar",
        "Groba AI",
        "Automação Ativa",
        "Google Gemini",
        "OpenAI (ChatGPT)",
        "PostgreSQL",
        "CRMs Personalizados"
    ];

    return (
        <section className="py-12 bg-[#050505] border-y border-white/5 overflow-hidden">
            <div className="container max-w-7xl mx-auto px-4 mb-6 text-center">
                <p className="text-sm font-semibold text-gray-500 uppercase tracking-widest">
                    A arquitetura por trás das nossas Máquinas de Vendas
                </p>
            </div>

            {/* Container CSS-based Marquee */}
            <div className="relative flex w-full overflow-hidden bg-[#050505]">
                {/* Left Gradient Overlay - optional for fade effect */}
                <div className="absolute left-0 top-0 z-10 h-full w-[100px] bg-gradient-to-r from-[#050505] to-transparent"></div>

                {/* The Track (Animated) */}
                <div className="flex animate-marquee whitespace-nowrap py-4">
                    {/* First block of logos */}
                    {tools.map((tool, idx) => (
                        <div key={`tool-1-${idx}`} className="mx-8 flex items-center justify-center">
                            <span className="text-xl md:text-3xl font-bold text-gray-700 hover:text-blue-500 transition-colors cursor-default">
                                {tool}
                            </span>
                        </div>
                    ))}
                    {/* Repeated block for infinite scroll illusion */}
                    {tools.map((tool, idx) => (
                        <div key={`tool-2-${idx}`} className="mx-8 flex items-center justify-center">
                            <span className="text-xl md:text-3xl font-bold text-gray-700 hover:text-blue-500 transition-colors cursor-default">
                                {tool}
                            </span>
                        </div>
                    ))}
                </div>

                {/* Right Gradient Overlay */}
                <div className="absolute right-0 top-0 z-10 h-full w-[100px] bg-gradient-to-l from-[#050505] to-transparent"></div>
            </div>
        </section>
    );
}
