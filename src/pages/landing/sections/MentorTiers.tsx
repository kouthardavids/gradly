import { CheckCircle } from 'lucide-react';
import { mentorTiers } from '../data/mentorTiers';

const MentorTiers = () => {
    return (
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
    )
}

export default MentorTiers