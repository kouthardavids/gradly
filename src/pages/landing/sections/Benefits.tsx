import React from 'react';
import { benefits } from '../data/benefits';

const Benefits = () => {
    return (
        <section className="py-32 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">Plus, Get Extra Support</h2>
                    <p className="text-gray-400 text-xl">Connect with mentors and expert guidance</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {benefits.map((benefit, i) => (
                        <div
                            key={i}
                            className="group bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105 cursor-pointer"
                        >
                            <div className="bg-white/10 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-white/20 transition-all">
                                {React.createElement(benefit.icon, { className: 'w-6 h-6' })}
                            </div>
                            <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                            <p className="text-gray-400">{benefit.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Benefits