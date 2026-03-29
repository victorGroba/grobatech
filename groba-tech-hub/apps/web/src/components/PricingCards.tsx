import { Button } from "@/components/ui/button";
import { Check, Zap } from "lucide-react";

interface PricingPlan {
    name: string;
    description: string;
    price: string;
    features: string[];
    ctaText: string;
    ctaHref: string;
    popular?: boolean;
}

interface PricingCardsProps {
    plans: PricingPlan[];
}

export function PricingCards({ plans }: PricingCardsProps) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4 py-8 relative z-10">
            {plans.map((plan, index) => (
                <div
                    key={index}
                    className={`relative group flex flex-col rounded-3xl backdrop-blur-md overflow-hidden transition-all duration-500 ease-out hover:scale-105 hover:-translate-y-2 ${plan.popular
                            ? "bg-gradient-to-b from-gray-900 to-gray-800 border-[1px] border-blue-500/50 shadow-[0_0_40px_-5px_rgba(59,130,246,0.3)] z-20"
                            : "bg-white/5 border-[1px] border-gray-200/20 dark:border-gray-800/50 shadow-xl"
                        }`}
                >
                    {/* Subtle gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    {plan.popular && (
                        <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500"></div>
                    )}

                    {plan.popular && (
                        <div className="absolute top-4 right-4 bg-blue-500/10 text-blue-400 border border-blue-500/20 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase flex items-center gap-1">
                            <Zap className="w-3 h-3" /> Mais Escolhido
                        </div>
                    )}

                    <div className="p-8 flex-1 flex flex-col relative z-10">
                        <h3 className={`text-2xl font-bold mb-2 ${plan.popular ? "text-white" : "text-gray-900 dark:text-white"}`}>
                            {plan.name}
                        </h3>
                        <p className={`text-sm mb-6 h-10 ${plan.popular ? "text-gray-300" : "text-gray-500 dark:text-gray-400"}`}>
                            {plan.description}
                        </p>

                        <div className="mb-8">
                            <span className={`text-4xl font-extrabold tracking-tight ${plan.popular ? "text-white" : "text-gray-900 dark:text-white"}`}>
                                {plan.price}
                            </span>
                        </div>

                        <ul className="space-y-4 mb-8 flex-1">
                            {plan.features.map((feature, i) => (
                                <li key={i} className="flex items-start">
                                    <div className={`mt-1 mr-3 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${plan.popular ? "bg-blue-500/20 text-blue-400" : "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400"}`}>
                                        <Check className="h-3 w-3" strokeWidth={3} />
                                    </div>
                                    <span className={`text-sm leading-relaxed ${plan.popular ? "text-gray-300" : "text-gray-600 dark:text-gray-300"}`}>
                                        {feature}
                                    </span>
                                </li>
                            ))}
                        </ul>

                        <a
                            href={plan.ctaHref}
                            className={`w-full py-4 px-6 rounded-xl font-semibold text-center transition-all duration-300 inline-block shadow-md ${plan.popular
                                    ? "bg-blue-600 hover:bg-blue-500 text-white shadow-blue-500/25 hover:shadow-blue-500/40"
                                    : "bg-gray-100 hover:bg-gray-200 text-gray-900 dark:bg-white/10 dark:text-white dark:hover:bg-white/20"
                                }`}
                        >
                            {plan.ctaText}
                        </a>
                    </div>
                </div>
            ))}
        </div>
    );
}
