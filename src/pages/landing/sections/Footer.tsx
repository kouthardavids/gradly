
const Footer = () => {
    return (
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
    )
}

export default Footer