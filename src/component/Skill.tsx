const Skill = () => {
    const skills = [
        { id: 1, image: "icons8-html-64.png", name: "HTML 5" },
        { id: 2, image: "icons8-css-48.png", name: "CSS" },
        { id: 3, image: "icons8-java-48.png", name: "JAVA" },
        { id: 4, image: "javascript.png", name: "JAVASCRIPT" },
        { id: 5, image: "python.png", name: "Python" },
        { id: 6, image: "icons8-mysql-48.png", name: "MySQL" },
        { id: 7, image: "mongo.png", name: "MongoDB" },
        { id: 8, image: "react.png", name: "React" },
        { id: 9, image: "typeScript.png", name: "TypeScript" },
        { id: 11, image: "node.png", name: "Node.js" },
        { id: 12, image: "react.png", name: "React Native" },
        { id: 8, image: "springboot.png", name: "SpringBoot" },

    ];

    return (
        <section className="inner py-32 px-6 md:px-12 bg-pink-200" id="inner">
            <div className="max-w-screen-xl mx-auto text-center">
                <h2 className="heading text-3xl md:text-4xl font-bold text-gray-900 mb-12">
                    My <span className="text-blue-600">Skills</span>
                </h2>

                <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {skills.map((skill) => (
                        <div className="skill-box bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105" key={skill.id}>
                            <div className="skill-title flex items-center justify-center mb-6">
                                <div className="img w-16 h-16 flex justify-center items-center bg-gray-200 rounded-full">
                                    <img src={skill.image} alt={skill.name} className="skill-icon w-12 h-12 object-contain" />
                                </div>
                                <h3 className="ml-4 text-xl font-semibold text-gray-800">{skill.name}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skill;
