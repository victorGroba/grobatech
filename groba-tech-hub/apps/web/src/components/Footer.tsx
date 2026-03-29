import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, ArrowUpRight } from "lucide-react";

export function Footer() {
    return (
        <footer className="relative bg-[#050508] pt-20 pb-8 overflow-hidden">
            {/* Subtle top gradient border */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
            
            {/* Background glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-900/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="container max-w-[1200px] mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
                    
                    {/* Brand Column */}
                    <div className="md:col-span-5 space-y-6">
                        <Image 
                            src="/assets/image/groba4.png"
                            alt="Groba Tech"
                            width={160}
                            height={40}
                            className="h-9 w-auto object-contain"
                        />
                        <p className="text-sm text-gray-500 leading-relaxed max-w-sm">
                            Sua parceira estratégica em tecnologia. De manutenção de hardware local no Rio de Janeiro a robustos ecossistemas SaaS e automações de IA para todo o Brasil.
                        </p>
                        <div className="flex gap-3 pt-2">
                            <a
                                href="https://wa.me/5521972706086"
                                target="_blank"
                                className="w-10 h-10 rounded-xl bg-white/5 border border-white/[0.06] flex items-center justify-center text-gray-500 hover:text-green-400 hover:border-green-500/30 hover:bg-green-500/10 transition-all duration-300"
                                aria-label="WhatsApp"
                            >
                                <Phone className="w-4 h-4" />
                            </a>
                            <a
                                href="mailto:contato@grobatech.com"
                                className="w-10 h-10 rounded-xl bg-white/5 border border-white/[0.06] flex items-center justify-center text-gray-500 hover:text-blue-400 hover:border-blue-500/30 hover:bg-blue-500/10 transition-all duration-300"
                                aria-label="Email"
                            >
                                <Mail className="w-4 h-4" />
                            </a>
                        </div>
                    </div>

                    {/* Services Column */}
                    <div className="md:col-span-3 space-y-5">
                        <h4 className="text-xs font-semibold text-gray-400 tracking-[0.2em] uppercase">Serviços</h4>
                        <ul className="space-y-3">
                            {[
                                { label: "Infraestrutura RJ", href: "/manutencao-rj" },
                                { label: "Automação de WhatsApp", href: "/solucoes-ia" },
                                { label: "CRM Customizado", href: "/solucoes-ia" },
                                { label: "Conversion API (CAPI)", href: "/solucoes-ia" },
                            ].map((item) => (
                                <li key={item.label}>
                                    <Link 
                                        href={item.href} 
                                        className="group flex items-center text-sm text-gray-500 hover:text-white transition-colors duration-200"
                                    >
                                        {item.label}
                                        <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 -translate-y-0.5 translate-x-0.5 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-200" />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Column */}
                    <div className="md:col-span-4 space-y-5">
                        <h4 className="text-xs font-semibold text-gray-400 tracking-[0.2em] uppercase">Contato</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <MapPin className="w-4 h-4 text-gray-600 mt-0.5 shrink-0" />
                                <span className="text-sm text-gray-500">Rio de Janeiro, RJ — Brasil</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Phone className="w-4 h-4 text-gray-600 mt-0.5 shrink-0" />
                                <a href="https://wa.me/5521972706086" className="text-sm text-gray-500 hover:text-white transition-colors">
                                    (21) 97270-6086
                                </a>
                            </li>
                        </ul>

                        {/* Mini CTA */}
                        <Link 
                            href="https://wa.me/5521972706086"
                            target="_blank"
                            className="inline-flex items-center gap-2 mt-2 px-5 py-2.5 text-sm font-semibold text-white rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 shadow-[0_0_20px_-4px_rgba(79,70,229,0.3)] transition-all duration-300"
                        >
                            Fale pelo WhatsApp
                            <ArrowUpRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="pt-8 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-xs text-gray-600">
                        © {new Date().getFullYear()} Groba Tech. Todos os direitos reservados.
                    </p>
                    <div className="flex gap-6">
                        <Link href="#" className="text-xs text-gray-600 hover:text-gray-400 transition-colors">Termos</Link>
                        <Link href="#" className="text-xs text-gray-600 hover:text-gray-400 transition-colors">Privacidade</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
