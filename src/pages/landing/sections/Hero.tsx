import { ArrowRight } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
            {/* Animated background grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem] animate-pulse-slow"></div>

            {/* Gradient orbs */}
            <div className="absolute top-1/4 -left-48 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-float-delayed"></div>

            <div className="relative max-w-5xl mx-auto text-center space-y-8 animate-fade-in-up">
                <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-sm">
                    🎓 South Africa's Smartest University Application Platform
                </div>

                <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                    From Matric Results to
                    <br />
                    <span className="bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent animate-gradient">
                        University Acceptance
                    </span>
                </h1>

                <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto">
                    Calculate your APS, discover courses you qualify for!
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                    <button className="group bg-white text-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-200 transition-all transform hover:scale-105 flex items-center gap-2">
                        Calculate My APS - it's free
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <button className="px-8 py-4 rounded-full font-semibold text-lg border-2 border-white/20 hover:bg-white/10 transition-all transform hover:scale-105">
                        Explore Courses
                    </button>
                </div>

                <div className="flex flex-wrap justify-center gap-8 md:gap-12 pt-8 text-sm">
                    <div>
                        <div className="text-3xl font-bold">23</div>
                        <div className="text-gray-400">SA Universities</div>
                    </div>
                    <div>
                        <div className="text-3xl font-bold">500+</div>
                        <div className="text-gray-400">Course Options</div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero