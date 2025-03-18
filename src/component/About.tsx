const About = () => {
    return (
        <section className="about py-16 px-6 md:px-12 bg-pink-200" id="about">
            <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center">
                {/* About Image */}
                <div className="about-img md:w-1/2 mb-12 md:mb-0">
                    <img
                        src="../../public/WhatsApp_Image_2025-03-17_at_20.44.11-removebg-preview.png"
                        alt="About Me"
                        className="w-10/12 rounded-lg shadow-lg transform transition duration-500 hover:scale-105"
                    />
                </div>

                {/* About Content */}
                <div className="about-content md:w-1/2 text-center md:text-left">
                    <h2 className="heading text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        ABOUT <span className="text-blue-600">Me</span>
                    </h2>
                    <h3 className="text-xl text-gray-700 mb-6">Fullstack Developer</h3>
                    <p className="text-lg text-gray-600 leading-relaxed mb-6">
                        I am a dedicated Undergraduate Software Engineering student at IJSE, passionate about leveraging technology to create efficient and impactful solutions. From an early age, I’ve been fascinated by the potential of software to solve real-world problems, which inspired me to pursue a career in this field.
                    </p>
                    <p className="text-lg text-gray-600 leading-relaxed mb-6">
                        Through my studies, I’ve developed a strong foundation in various programming languages, including Java, Python, and JavaScript, along with hands-on experience in frameworks like React and Spring Boot. I thrive in environments that challenge me to think critically and innovate.
                    </p>
                    <p className="text-lg text-gray-600 leading-relaxed mb-6">
                        My focus extends beyond writing clean code—I’m deeply invested in understanding system architecture, software design principles, and scalable development practices. Whether it’s collaborating on a team project or working independently, I approach every task with a solution-oriented mindset and a passion for learning.
                    </p>
                    <a
                        href="#"
                        className="btn inline-block bg-blue-600 text-white py-3 px-8 rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-300 transform hover:scale-105"
                    >
                        Read More
                    </a>
                </div>
            </div>
        </section>
    );
};

export default About;
