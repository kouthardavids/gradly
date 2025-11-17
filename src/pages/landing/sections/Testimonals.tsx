import { useState } from 'react'
import { testimonials } from '../data/testimonals'

const Testimonals = () => {
    const [activeTestimonial, setActiveTestimonial] = useState(0);
    return (
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
    )
}

export default Testimonals