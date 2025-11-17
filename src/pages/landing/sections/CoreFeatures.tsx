import React, { useState } from 'react';
import { Sparkles } from 'lucide-react';
import { coreFeatures } from '../data/features';

const CoreFeatures = () => {
    const [activeFeature, setActiveFeature] = useState(0);

    return (
        <section id="features" className="py-32 px-6 relative">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20 animate-fade-in-up">
                    {/* <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-6">
                        <Sparkles className="w-4 h-4" />
                        <span className="text-sm">Powered by AI</span>
                    </div> */}
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">Everything You Need to Apply</h2>
                    <p className="text-gray-400 text-xl">Four powerful tools to get you into your dream institution</p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8 mb-16">
                    {coreFeatures.map((feature, i) => (
                        <div
                            key={i}
                            className="group bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-500 cursor-pointer"
                            onMouseEnter={() => setActiveFeature(i)}
                        >
                            <div className="flex items-start gap-6">
                                <div className="bg-white/10 w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-white/20 transition-all">
                                    {React.createElement(feature.icon, { className: 'w-6 h-6' })}
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-2xl font-semibold mb-3">{feature.title}</h3>
                                    <p className="text-gray-400 mb-4">{feature.desc}</p>
                                    <p className="text-gray-500 text-sm leading-relaxed">{feature.detail}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default CoreFeatures