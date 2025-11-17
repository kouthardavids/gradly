import { ArrowRight } from 'lucide-react';

const CTA = () => {
    return (
        <section className="py-32 px-6 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent"></div>
            <div className="max-w-4xl mx-auto text-center relative">
                <h2 className="text-4xl md:text-6xl font-bold mb-6">
                    Start Your University Journey Today
                </h2>
                <p className="text-xl text-gray-400 mb-12">
                    Calculate your APS, find your perfect course, and get accepted to your dream institution
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="group bg-white text-black px-12 py-5 rounded-full font-semibold text-lg hover:bg-gray-200 transition-all transform hover:scale-105 flex items-center gap-2 justify-center">
                        Calculate APS Now - it's free
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                    {/* <button className="px-12 py-5 rounded-full font-semibold text-lg border-2 border-white/20 hover:bg-white/10 transition-all transform hover:scale-105">
                        Become a Mentor
                    </button> */}
                </div>
            </div>
        </section>
    )
}

export default CTA