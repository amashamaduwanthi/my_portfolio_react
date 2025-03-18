

const Footer = () => {
    return (
        <footer className="bg-pink-800 text-white py-8">
            <div className="footer-content max-w-4xl mx-auto text-center">
                <h3 className="text-3xl font-semibold">Amasha Maduwanthi</h3>
                <p className="mt-4">Thank you for visiting my portfolio. Feel free to connect with me through any of the platforms below.</p>

                <ul className="socials mt-6 flex justify-center space-x-6">
                    <li>
                        <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">
                            LinkedIn
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-600">
                            GitHub
                        </a>
                    </li>
                    <li>
                        <a href="mailto:youremail@example.com" className="text-green-500 hover:text-green-700">
                            Email
                        </a>
                    </li>
                </ul>
            </div>
            <div className="footer-bottom text-center mt-8">
                <p className="text-sm">&copy; 2024 All Copy Rights Reserved | Designed by Amasha Maduwanthi</p>
            </div>
        </footer>
    );
};

export default Footer;
