import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    return (
        <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-black/90 backdrop-blur-lg border-b border-white/10' : 'bg-transparent'}`}>
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                <div className="text-2xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                    Gradly
                </div>

                <div className="hidden md:flex items-center gap-8">
                    <a href="#features" className="hover:text-gray-400 transition-colors">Features</a>
                    <a href="#how-it-works" className="hover:text-gray-400 transition-colors">How It Works</a>
                    <button className="bg-white text-black px-6 py-2 rounded-full font-semibold hover:bg-gray-200 transition-all transform hover:scale-105">
                        Calculate APS
                    </button>
                </div>

                <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                    {mobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {mobileMenuOpen && (
                <div className="md:hidden bg-black/95 backdrop-blur-lg border-b border-white/10 animate-fade-in">
                    <div className="px-6 py-4 flex flex-col gap-4">
                        <a href="#features" className="hover:text-gray-400 transition-colors">Features</a>
                        <a href="#how-it-works" className="hover:text-gray-400 transition-colors">How It Works</a>
                        <button className="bg-white text-black px-6 py-2 rounded-full font-semibold">
                            Calculate APS
                        </button>
                    </div>
                </div>
            )}
        </nav>
    )
}

export default Navigation