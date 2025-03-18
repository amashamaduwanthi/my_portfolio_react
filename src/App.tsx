import Home from "./component/Home.tsx";
import Header from "./component/Header.tsx";
import About from "./component/About.tsx";
import Portfolio from "./component/Portfolio.tsx";
import Contact from "./component/Contact.tsx";
import Footer from "./component/Footer.tsx";
import Skill from "./component/Skill.tsx";
import Services from "./component/Services.tsx";


function App() {
    return (
        <div>
            <Header />
            <Home />
            <About/>
            <Services />
            <Skill/>
            <Portfolio />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;