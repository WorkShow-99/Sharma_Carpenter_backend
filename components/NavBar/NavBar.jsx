import { useEffect, useRef, useState } from 'react';
import SharmaCarpenter from '../../src/assets/Sharma.png';
import './NavBar.css';
import { Outlet } from 'react-router-dom';

export const NavBar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [showNav, setShowNav] = useState(true);
    const [menuOpen, setMenuOpen] = useState(false);
    
    const lastScrollY = useRef(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            setIsScrolled(currentScrollY > 20);

            if (currentScrollY > lastScrollY.current && currentScrollY > 80) {
                setShowNav(false);
            } else {
                setShowNav(true);
            }

            lastScrollY.current = currentScrollY;
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            style={{ top: 0, zIndex: 2147483647, pointerEvents: 'visible' }}
            className={`fixed Nav_main  z-50  left-1/2 w-[calc(100%-1rem)] sm:w-[calc(100%-2rem)] max-w-6xl -translate-x-1/2 flex items-center justify-between px-4  transition-all duration-300 ${
                showNav
                    ? 'translate-y-0 bg-transparent backdrop-blur-md shadow-lg border border-white/10'
                    : '-translate-y-full opacity-0'
            } ${isScrolled ? 'h-17' : 'h-20'}`}
        >
            {/* Logo */}
            <div className="text-lg font-bold">
                <img src={SharmaCarpenter} alt="logo" className="w-24 h-auto object-cover" />
            </div>

            {/* Desktop Menu */}
            <ul className="hidden md:flex space-x-6 text-black">
                <li><a href="#home" className="hover:text-gray-300">Home</a></li>
                <li><a href="#services" className="hover:text-gray-300">Services</a></li>
                <li><a href="#about" className="hover:text-gray-300">About</a></li>
                <li><a href="#contact" className="hover:text-gray-300">Contact</a></li>
            </ul>

            {/* Desktop Button */}
            <div className="hidden md:block">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Get a Quote
                </button>
            </div>

            {/* Hamburger Button */}
            <div className="md:hidden">
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="text-white text-2xl"
                >
                    ☰
                </button>
            </div>

            {/* Mobile Menu */}
            <div
                className={`absolute top-full left-0 w-full bg-gray-800 text-white flex flex-col items-center space-y-4 py-6 transition-all duration-300 ${
                    menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                } md:hidden`}
            >
                <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
                <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
                <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
                <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>

                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Get a Quote
                </button>
            </div>
        </nav>
    );
};