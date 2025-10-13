import Contact from "../contact/Contact";
import Education from "../education/Education";
import Hero from "../hero/Hero";
import Project from "../project/Project";
import Skills from "../skills/Skills";

const Home = () => {
	return (
		<>
			<Hero />
			<Skills />
			<Project />
			<Education />
			<Contact />
		</>
	);
};

export default Home;
