import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header className="bg-pink-800 text-white py-4 px-6 fixed top-0 left-0 w-full z-50 shadow-lg flex justify-between items-center">
            {/* Logo */}
            <div className="text-3xl font-semibold">
                <span className="text-white">Amasha</span>Maduwanthi
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-6">
                {['Home', 'About', 'Services', 'Skill', 'Portfolio', 'Contact'].map((item) => (
                    <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-teal-400">
                        {item}
                    </a>
                ))}
            </nav>

            {/* Mobile Menu Toggle */}
            <button onClick={toggleMenu} className="lg:hidden text-2xl focus:outline-none">
                {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>

            {/* Mobile Navigation */}
            <nav
                className={`lg:hidden fixed top-16 left-0 w-full bg-gray-900 transition-transform transform ${
                    isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
                } p-6 space-y-4 shadow-md`}
            >
                {['Home', 'About', 'Services', 'Skill', 'Portfolio', 'Contact'].map((item) => (
                    <a
                        key={item}
                        href={`#${item.toLowerCase()}`}
                        className="block hover:text-teal-400"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        {item}
                    </a>
                ))}
            </nav>
        </header>
    );
};

export default Header;
