import { FaCode, FaPalette, FaAndroid } from "react-icons/fa";

const Services = () => {
    return (
        <section className="services py-40 px-6 md:px-12 bg-pink-200" id="services">
            <div className="max-w-screen-xl mx-auto text-center">
                <h2 className="heading text-3xl md:text-4xl font-bold text-gray-900 mb-12">
                    My <span className="text-blue-600">Services</span>
                </h2>

                {/* Services Container */}
                <div className="services-container grid grid-cols-1 md:grid-cols-3 gap-12">
                    {/* Service Box 1: Web Development */}
                    <div className="services-box bg-white p-8 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                        <FaCode className="icon text-4xl text-blue-600 mb-6" />
                        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Web Development</h3>
                        <p className="text-gray-600 mb-6">
                            We specialize in creating responsive, high-performing websites tailored to your business needs.
                            From e-commerce to custom web applications, our development team ensures seamless functionality and user experience.
                        </p>
                        <a href="#" className="btn inline-block bg-blue-600 text-white py-2 px-6 rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-300">
                            Read More
                        </a>
                    </div>

                    {/* Service Box 2: UI/UX Designing */}
                    <div className="services-box bg-white p-8 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                        <FaPalette className="icon text-4xl text-pink-600 mb-6" />
                        <h3 className="text-2xl font-semibold text-gray-800 mb-4">UI/UX Designing</h3>
                        <p className="text-gray-600 mb-6">
                            Our UI/UX design services focus on creating intuitive and engaging user interfaces. We combine creativity with user-centric design principles to deliver visually appealing and easy-to-navigate digital products.
                        </p>
                        <a href="#" className="btn inline-block bg-pink-600 text-white py-2 px-6 rounded-lg text-lg font-semibold hover:bg-pink-700 transition duration-300">
                            Read More
                        </a>
                    </div>

                    {/* Service Box 3: App Development */}
                    <div className="services-box bg-white p-8 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                        <FaAndroid className="icon text-4xl text-green-600 mb-6" />
                        <h3 className="text-2xl font-semibold text-gray-800 mb-4">App Development</h3>
                        <p className="text-gray-600 mb-6">
                            We develop custom mobile applications for Android and iOS platforms. Our team ensures smooth performance, user-friendly design, and robust functionality to provide your users with an exceptional app experience.
                        </p>
                        <a href="#" className="btn inline-block bg-green-600 text-white py-2 px-6 rounded-lg text-lg font-semibold hover:bg-green-700 transition duration-300">
                            Read More
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
