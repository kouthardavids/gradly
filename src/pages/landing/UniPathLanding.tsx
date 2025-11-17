// import Benefits from './sections/Benefits';
import CoreFeatures from './sections/CoreFeatures';
import CTA from './sections/CTA';
import Footer from './sections/Footer';
import Hero from './sections/Hero';
import HowItWorks from './sections/HowItWorks';
// import MentorTiers from './sections/MentorTiers';
import Navigation from './sections/Navigation';
// import Testimonals from './sections/Testimonals';

const UniPathLanding = () => {
    return (
        <div className="min-h-screen bg-black text-white overflow-hidden">
            <Navigation />
            <Hero />
            <CoreFeatures />
            <HowItWorks />
            {/* <Benefits /> */}
            {/* <MentorTiers /> */}
            {/* <Testimonals /> */}
            <CTA />
            <Footer />
        </div>
    )
}

export default UniPathLanding