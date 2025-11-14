import React, { useState, useEffect } from 'react';
import { ArrowRight, Star, Users, BookOpen, Award, TrendingUp, CheckCircle, Menu, X, Calculator, Target, Brain, ClipboardList, Sparkles, GraduationCap } from 'lucide-react';

export default function UniPathLanding() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeTestimonial, setActiveTestimonial] = useState(0);
    const [activeFeature, setActiveFeature] = useState(0);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveTestimonial((prev) => (prev + 1) % 3);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveFeature((prev) => (prev + 1) % 4);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    const mentorTiers = [
        { name: 'Bronze', sessions: 'Verified student', rate: 'R20-R40', color: 'from-orange-400 to-orange-600' },
        { name: 'Silver', sessions: '20+ sessions', rate: 'R50-R80', color: 'from-gray-300 to-gray-500' },
        { name: 'Gold', sessions: '50+ sessions', rate: 'R100+', color: 'from-yellow-400 to-yellow-600' }
    ];

    const coreFeatures = [
        {
            icon: <Calculator className="w-8 h-8" />,
            title: 'APS Calculator',
            desc: 'Enter your matric results and instantly calculate your Admission Point Score',
            detail: 'Know exactly where you stand with accurate APS calculations based on your current or expected results'
        },
        {
            icon: <Target className="w-8 h-8" />,
            title: 'Course Matching',
            desc: 'Discover which courses and programs you qualify for across SA universities',
            detail: 'Get personalized recommendations based on your APS, subjects, and career interests'
        },
        {
            icon: <Brain className="w-8 h-8" />,
            title: 'AI Study Coach',
            desc: 'Get personalized AI feedback to improve your marks in specific subjects',
            detail: 'Receive actionable advice on how to boost your performance and meet course requirements'
        },
        {
            icon: <ClipboardList className="w-8 h-8" />,
            title: 'Application Tracker',
            desc: 'Track all your university and college applications in one place',
            detail: 'Never miss a deadline with organized tracking of documents, dates, and application status'
        }
    ];

    const benefits = [
        { icon: <Star className="w-6 h-6" />, title: 'Verified Mentors', desc: 'Connect with current university students' },
        { icon: <BookOpen className="w-6 h-6" />, title: 'Essay Reviews', desc: 'Get expert feedback on applications' },
        { icon: <Users className="w-6 h-6" />, title: 'Live Q&A', desc: 'Real-time guidance from mentors' },
        { icon: <GraduationCap className="w-6 h-6" />, title: 'SA Universities', desc: 'Comprehensive database of institutions' }
    ];

    const testimonials = [
        { name: 'Sipho M.', role: 'Grade 12, KZN', text: 'Calculated my APS and found 8 courses I qualify for. Now studying Engineering at UKZN!' },
        { name: 'Ayanda K.', role: 'Wits Mentor', text: 'Helped 50+ learners improve their marks and get accepted. Love giving back!' },
        { name: 'Lerato S.', role: 'Grade 11, Gauteng', text: 'The AI coach helped me improve my Maths from 55% to 72% in one term!' }
    ];

    return (
        <div className="min-h-screen bg-black text-white overflow-hidden">
            {/* Navigation */}
            <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-black/90 backdrop-blur-lg border-b border-white/10' : 'bg-transparent'}`}>
                <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                    <div className="text-2xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                        Gradly
                    </div>

                    <div className="hidden md:flex items-center gap-8">
                        <a href="#features" className="hover:text-gray-400 transition-colors">Features</a>
                        <a href="#how-it-works" className="hover:text-gray-400 transition-colors">How It Works</a>
                        <a href="#mentors" className="hover:text-gray-400 transition-colors">For Mentors</a>
                        <button className="bg-white text-black px-6 py-2 rounded-full font-semibold hover:bg-gray-200 transition-all transform hover:scale-105">
                            Calculate APS
                        </button>
                    </div>

                    <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                        {mobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="md:hidden bg-black/95 backdrop-blur-lg border-b border-white/10 animate-fade-in">
                        <div className="px-6 py-4 flex flex-col gap-4">
                            <a href="#features" className="hover:text-gray-400 transition-colors">Features</a>
                            <a href="#how-it-works" className="hover:text-gray-400 transition-colors">How It Works</a>
                            <a href="#mentors" className="hover:text-gray-400 transition-colors">For Mentors</a>
                            <button className="bg-white text-black px-6 py-2 rounded-full font-semibold">
                                Calculate APS
                            </button>
                        </div>
                    </div>
                )}
            </nav>

            {/* Hero Section */}
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
                        Calculate your APS, discover courses you qualify for, get AI-powered study help, and track all your applications—all in one place.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                        <button className="group bg-white text-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-200 transition-all transform hover:scale-105 flex items-center gap-2">
                            Calculate My APS
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
                        <div>
                            <div className="text-3xl font-bold">1000+</div>
                            <div className="text-gray-400">Students Helped</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold">4.8★</div>
                            <div className="text-gray-400">User Rating</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Features Showcase */}
            <section id="features" className="py-32 px-6 relative">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20 animate-fade-in-up">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-6">
                            <Sparkles className="w-4 h-4" />
                            <span className="text-sm">Powered by AI</span>
                        </div>
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
                                        {feature.icon}
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

            {/* How It Works */}
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
                            { num: '04', title: 'Apply & Track', desc: 'Submit applications and track everything', icon: <ClipboardList className="w-6 h-6" /> }
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

            {/* Additional Benefits */}
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
                                    {benefit.icon}
                                </div>
                                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                                <p className="text-gray-400">{benefit.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* For Mentors Section */}
            <section id="mentors" className="py-32 px-6 bg-white/5">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <div className="inline-block px-4 py-2 bg-white/10 rounded-full mb-6 text-sm">
                            💼 Become a Mentor
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">Help Students & Earn Money</h2>
                        <p className="text-gray-400 text-xl">Current university students: share your journey and get paid</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 mb-16">
                        {mentorTiers.map((tier, i) => (
                            <div
                                key={i}
                                className="relative group bg-black border border-white/20 rounded-2xl p-8 hover:scale-105 transition-all duration-500"
                            >
                                <div className={`absolute inset-0 bg-gradient-to-br ${tier.color} opacity-10 rounded-2xl group-hover:opacity-20 transition-opacity`}></div>
                                <div className="relative">
                                    <div className="text-2xl font-bold mb-2">{tier.name}</div>
                                    <div className="text-gray-400 mb-6">{tier.sessions}</div>
                                    <div className="text-3xl font-bold mb-4">{tier.rate}</div>
                                    <div className="text-sm text-gray-400">per session</div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                        {[
                            'Guide students through applications',
                            'Review motivation letters & essays',
                            'Share your university experience',
                            'Build your verified mentor profile',
                            'Earn recognition & LinkedIn badges',
                            'Flexible hours, work remotely'
                        ].map((perk, i) => (
                            <div key={i} className="flex items-center gap-3 text-gray-300">
                                <CheckCircle className="w-5 h-5 text-white flex-shrink-0" />
                                <span>{perk}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-32 px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">Real Success Stories</h2>
                        <p className="text-gray-400 text-xl">From learners and mentors across South Africa</p>
                    </div>

                    <div className="relative h-64">
                        {testimonials.map((testimonial, i) => (
                            <div
                                key={i}
                                className={`absolute inset-0 transition-all duration-700 ${i === activeTestimonial ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                                    }`}
                            >
                                <div className="bg-white/5 backdrop-blur-sm p-12 rounded-2xl border border-white/10 text-center">
                                    <p className="text-xl mb-6 text-gray-300">"{testimonial.text}"</p>
                                    <div className="font-semibold">{testimonial.name}</div>
                                    <div className="text-gray-400">{testimonial.role}</div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="flex justify-center gap-2 mt-8">
                        {testimonials.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setActiveTestimonial(i)}
                                className={`w-2 h-2 rounded-full transition-all ${i === activeTestimonial ? 'bg-white w-8' : 'bg-white/30'
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
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
                            Calculate APS Now
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                        <button className="px-12 py-5 rounded-full font-semibold text-lg border-2 border-white/20 hover:bg-white/10 transition-all transform hover:scale-105">
                            Become a Mentor
                        </button>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t border-white/10 py-12 px-6">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-2xl font-bold">Gradly</div>
                    <div className="flex gap-8 text-gray-400">
                        <a href="#" className="hover:text-white transition-colors">Privacy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms</a>
                        <a href="#" className="hover:text-white transition-colors">Contact</a>
                    </div>
                    <div className="text-gray-400">© 2025 Gradly. All rights reserved.</div>
                </div>
            </footer>

            <style>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out;
        }
        .animate-fade-in {
          animation: fade-in-up 0.3s ease-out;
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float 6s ease-in-out infinite 3s;
        }
        .animate-pulse-slow {
          animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
        </div>
    );
}