import { Calculator, Target, ClipboardList, GraduationCap } from 'lucide-react';

const HowItWorks = () => {
    return (
        <section id="how-it-works" className="py-32 px-6 bg-white/5">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">How UniPath Works</h2>
                    <p className="text-gray-400 text-xl">Your journey from Grade 12 to university in 4 simple steps</p>
                </div>

                <div className="grid md:grid-cols-4 gap-8">
                    {[
                        { num: '01', title: 'Enter Results', desc: 'Input your current or expected matric marks', icon: <Calculator className="w-6 h-6" /> },
                        { num: '02', title: 'Get Your APS', desc: 'Instantly calculate your Admission Point Score', icon: <Target className="w-6 h-6" /> },
                        { num: '03', title: 'Find Courses', desc: 'See all programs you qualify for across SA', icon: <GraduationCap className="w-6 h-6" /> },
                    ].map((step, i) => (
                        <div key={i} className="relative">
                            {i < 3 && (
                                <div className="hidden md:block absolute top-12 left-1/2 w-full h-0.5 bg-gradient-to-r from-white/20 to-transparent"></div>
                            )}
                            <div className="relative bg-black border-2 border-white/20 rounded-2xl p-8 hover:border-white/40 transition-all duration-500 group hover:scale-105">
                                <div className="text-5xl font-bold text-white/10 mb-4 group-hover:text-white/20 transition-colors">{step.num}</div>
                                <div className="bg-white/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-white/20 transition-all">
                                    {step.icon}
                                </div>
                                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                                <p className="text-gray-400">{step.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default HowItWorks