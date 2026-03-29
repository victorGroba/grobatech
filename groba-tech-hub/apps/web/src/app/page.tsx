import { ConsultingHero } from "@/components/ConsultingHero";
import { FeaturesSection } from "@/components/FeaturesSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { FloatingWhatsAppButton } from "@/components/FloatingWhatsAppButton";
import { SolutionsSection } from "@/components/SolutionsSection";
import Link from "next/link";
import { ArrowUpRight, Cpu, Server, Wrench, Bot } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#05050A]">
      <ConsultingHero />

      <SolutionsSection />

      <FeaturesSection />

      <section id="servicos" className="py-16 md:py-20 px-6 relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-blue-900/5 blur-[100px] rounded-full pointer-events-none" />

        <div className="max-w-[1200px] mx-auto relative z-10">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <span className="inline-flex items-center px-3 py-1 mb-4 text-[10px] sm:text-xs font-semibold text-blue-300 bg-blue-500/10 rounded-full border border-blue-500/20 tracking-wider uppercase">
              Pilares de Competência
            </span>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4 tracking-tight">
              O Que Entregamos com <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Excelência</span>
            </h2>
            <p className="text-base md:text-lg text-gray-500 font-light">
              Nossas especialidades técnicas focadas no resultado final do seu negócio.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="group relative bg-[#0C0C14]/80 border border-white/[0.04] rounded-2xl p-6 md:p-8 hover:border-blue-500/20 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_50px_-15px_rgba(59,130,246,0.1)] overflow-hidden">
              <div className="absolute top-6 right-6 opacity-[0.04] group-hover:opacity-[0.08] transition-opacity">
                <Bot className="w-16 h-16 text-blue-400" />
              </div>
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-5">
                <Cpu className="w-5 h-5 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 relative z-10">Automações &amp; IA</h3>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed max-w-sm font-light relative z-10">
                Atendimento instantâneo e redução de custos operacionais. Fluxos interligados com Inteligência Artificial para operar 24h por dia.
              </p>
            </div>

            <div className="group relative bg-[#0C0C14]/80 border border-white/[0.04] rounded-2xl p-6 md:p-8 hover:border-indigo-500/20 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_50px_-15px_rgba(99,102,241,0.1)] overflow-hidden">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mb-5">
                <Server className="w-5 h-5 text-indigo-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 relative z-10">Desenvolvimento</h3>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed max-w-sm font-light relative z-10">
                Digitalização de dados corporativos e sistemas que se moldam à sua empresa. De Dashboards financeiros a CRMs complexos.
              </p>
            </div>

            <div className="group relative bg-[#0C0C14]/80 border border-white/[0.04] rounded-2xl p-6 md:p-8 hover:border-orange-500/20 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_50px_-15px_rgba(249,115,22,0.1)] overflow-hidden">
              <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center mb-5">
                <ArrowUpRight className="w-5 h-5 text-orange-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 relative z-10">Presença &amp; Tráfego</h3>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed max-w-sm font-light relative z-10">
                Atração de clientes qualificados e conversão maximizada via Sites Premium e gestão inteligente de anúncios.
              </p>
            </div>
          </div>

          <div className="group relative bg-[#0C0C14]/50 border border-white/[0.04] rounded-2xl p-6 hover:border-white/[0.08] transition-all flex flex-col md:flex-row items-center justify-between gap-4">
             <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0">
                  <Wrench className="w-5 h-5 text-gray-400" />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-sm">Suporte e Infraestrutura Local</h4>
                  <p className="text-gray-500 text-xs font-light">Para clientes do RJ, também garantimos e reparamos o hardware e a rede local de forma ágil e confiável.</p>
                </div>
             </div>
             <Link href="#contato" className="text-xs font-semibold text-gray-400 hover:text-white transition-colors">
                Saiba Mais <span aria-hidden="true">&rarr;</span>
             </Link>
          </div>
        </div>
      </section>

      <TestimonialsSection />

      <FloatingWhatsAppButton phoneNumber="5521972706086" />
    </div>
  );
}
