import { Smartphone } from "lucide-react";

export function TestDriveSection() {
    return (
        <section className="py-24 bg-[#0A0A0A] relative z-10 overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[300px] bg-green-500/10 blur-[150px] rounded-full pointer-events-none"></div>

            <div className="container max-w-4xl mx-auto px-6 relative z-20 text-center">
                <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
                    Não acredite em nós. <span className="text-green-500">Teste você mesmo.</span>
                </h2>
                <p className="text-xl text-gray-400 font-light max-w-2xl mx-auto mb-12">
                    A teoria é linda, mas a prática é brutal. Clique no botão abaixo e interaja **em tempo real** com a nossa IA oficial no WhatsApp. Ela vai qualificar você e agendar uma reunião diretamente na nossa agenda se você estiver pronto.
                </p>

                <a
                    href="https://wa.me/5521972706086?text=Quero%20fazer%20o%20test-drive%20da%20IA%20da%20Groba%20Tech"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center justify-center text-xl font-bold px-10 py-5 w-full sm:w-auto text-white transition-all duration-300 ease-in-out bg-green-600 border border-transparent rounded-full hover:bg-green-500 shadow-[0_0_40px_-5px_rgba(34,197,94,0.4)] hover:shadow-[0_0_60px_-10px_rgba(34,197,94,0.6)] hover:scale-105"
                >
                    <Smartphone className="mr-3 w-6 h-6 animate-pulse" />
                    Fazer o Test-Drive no WhatsApp
                </a>
                <p className="text-sm text-gray-500 mt-6 font-mono">
                    *Nenhum humano vai te responder. Apenas a nossa IA proprietária em ação.
                </p>
            </div>
        </section>
    );
}
