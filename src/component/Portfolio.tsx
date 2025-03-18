import { FaExternalLinkAlt } from "react-icons/fa";

const Portfolio = () => {
    const projects = [
        { id: 1, image: "public/1.jpg", title: "ThigmaSmartLearn", description: "ThigmaSmartLearn system developed for Thigma High Education Center in Galle. The system helps to manage students, classes, halls, staff, and their examinations.", link: "https://github.com/amashamaduwanthi/my-last-project.git" },
        { id: 2, image: "public/1.jpg", title: "Green Shadow Crop Management System", description: "Crop management system developed to manage Green Shadow (Pvt) Ltd.,using springBoot", link: "https://github.com/amashamaduwanthi/Crop_Monitoring_System.git" },
        { id: 3, image: "public/2.jpg", title: "Chat Application", description: "Mini chat app developed using Java Sockets.", link: "https://github.com/amashamaduwanthi/Chat-Application.git" },
        { id: 4, image: "public/3.jpg", title: "Green Shadow Crop Management System", description: "Using React and Express.js and ORM prisma", link: "https://github.com/amashamaduwanthi/Green-Shadow-React.git"},
        { id: 5, image: "public/4.jpg", title: "Medical Center", description:"Hospital Management System(Web Application) using raect,express.js, MongoDb", link: "https://github.com/amashamaduwanthi/Medical_Center_React.git" },
        { id: 6, image: "public/5.jpg", title: "Cake Store", description: "Mobile Application using ReactNative", link: "https://github.com/amashamaduwanthi/Cake-Store-front-End-Mobile-Application.git" },
    ];

    return (
        <section className="portfolio py-32 px-6 md:px-12 bg-pink-200" id="portfolio">
            <h2 className="heading text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
                Latest <span className="text-blue-600">Projects</span>
            </h2>
            <div className="portfolio-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {projects.map((project) => (
                    <div className="portfolio-box relative group" key={project.id}>
                        <img src={project.image} alt={project.title} className="w-full h-64 object-cover rounded-lg shadow-lg transition-transform transform group-hover:scale-105" />
                        <div className="portfolio-layer absolute inset-0 bg-gray-800 bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center text-center p-4 transition-opacity duration-300">
                            <div className="text-white">
                                <h4 className="text-lg font-semibold mb-2">{project.title}</h4>
                                <p className="text-sm mb-4">{project.description}</p>
                                <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-white text-xl">
                                    <FaExternalLinkAlt />
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Portfolio;