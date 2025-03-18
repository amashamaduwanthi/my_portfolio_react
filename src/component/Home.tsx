import { useEffect, useRef } from "react";
import ScrollReveal from "scrollreveal";
import Typed from "typed.js";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import "../style.css";

const Home = () => {
    const typedRef = useRef(null);

    useEffect(() => {
        // Scroll Reveal Animation
        ScrollReveal().reveal(".home-content h3, .home-content h1", { origin: "top", distance: "80px", duration: 2000, delay: 200 });
        ScrollReveal().reveal(".home-content p, .social-media, .btn", { origin: "left", distance: "80px", duration: 2000, delay: 200 });
        ScrollReveal().reveal(".home-image", { origin: "bottom", distance: "80px", duration: 2000, delay: 200 });

        // Typed.js Effect
        if (typedRef.current) {
            new Typed(typedRef.current, {
                strings: ["Fullstack Developer", "Web Designer"],
                typeSpeed: 70,
                backSpeed: 70,
                backDelay: 1000,
                loop: true,
            });
        }
    }, []);

    return (
        <section id="home" className="home bg-gradient-to-r from-pink-200 via-white to-pink-300 py-40 px-6 md:px-12 flex flex-col md:flex-row items-center">
            {/* Profile Image Positioned to Left */}
            <div className="home-image md:w-1/2 mx-auto md:mx-0 md:mr-12 order-1 md:order-none">
                <img
                    src="WhatsApp_Image_2025-03-17_at_20.44.11-removebg-preview.png"
                    alt="About Me"
                    className="w-10/12 rounded-lg shadow-lg transform transition duration-500 hover:scale-105"
                />
            </div>

            <div className="home-content max-w-screen-lg mx-auto text-center md:text-left md:w-1/2">
                <h3 className="text-lg text-gray-500">Hello, I'm</h3>
                <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-4 mb-6">Amasha Maduwanthi</h1>
                <h3 className="text-xl text-gray-700 mt-4 mb-6">
                    I'm a <span ref={typedRef} className="font-semibold text-blue-600"></span>
                </h3>
                <p className="mt-6 text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto md:text-xl mb-8">
                    I'm an aspiring Software Engineer, currently pursuing my undergraduate degree at IJSE.
                    My passion for technology drives me to continuously learn and innovate, building efficient
                    and scalable software solutions.
                </p>

                {/* Social Media Icons */}
                <div className="social-media flex justify-center md:justify-start space-x-8 mt-8 mb-10">
                    <a href="#" className="text-blue-600 hover:text-blue-800 text-3xl transition duration-300 transform hover:scale-110">
                        <FaFacebook />
                    </a>
                    <a href="#" className="text-pink-500 hover:text-pink-700 text-3xl transition duration-300 transform hover:scale-110">
                        <FaInstagram />
                    </a>
                    <a href="#" className="text-blue-600 hover:text-blue-800 text-3xl transition duration-300 transform hover:scale-110">
                        <FaLinkedin />
                    </a>
                    <a href="#" className="text-blue-400 hover:text-blue-600 text-3xl transition duration-300 transform hover:scale-110">
                        <FaTwitter />
                    </a>
                </div>

                {/* Download CV Button */}
                <a
                    href="#"
                    className="btn mt-8 inline-block bg-gradient-to-r from-blue-500 to-teal-400 text-white py-3 px-8 rounded-lg text-lg font-semibold hover:bg-gradient-to-l hover:from-teal-400 hover:to-blue-500 transition duration-300 transform hover:scale-105"
                >
                    Download CV
                </a>
            </div>
        </section>
    );
};

export default Home;
