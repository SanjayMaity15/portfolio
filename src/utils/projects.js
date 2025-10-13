// 🔁 Import images
import farnique from "../assets/images/farnique.png";
import nikee from "../assets/images/nikee.png";



// ✅ Example skills (you can reuse your actual skill data if you prefer)
export const frontendSkills = [
	{ id: 1, name: "HTML", icon: "skill-icons:html" },
	{ id: 2, name: "CSS", icon: "skill-icons:css" },
	{ id: 3, name: "JavaScript", icon: "skill-icons:javascript" },
	{ id: 4, name: "React", icon: "skill-icons:react-dark" },
	{ id: 5, name: "Tailwind CSS", icon: "skill-icons:tailwindcss-dark" },
	{ id: 6, name: "Redux", icon: "skill-icons:redux" },
	{ id: 7, name: "React Router", icon: "devicon:reactrouter" },
];


export const projects = [
	{
		id: 1,
		image: nikee,
		name: "Nikee - Shoe Website",
		skills: [
			frontendSkills[0],
			frontendSkills[1],
			frontendSkills[2],
			frontendSkills[3],
			frontendSkills[4],
			frontendSkills[5],
			frontendSkills[6],
		],
		github: "https://github.com/SanjayMaity15/NIKEE-SHOE-WEBSITE-USING-REACT-REDUX.git",
		link: "http://nikee-shoe.vercel.app",
	},
	{
		id: 2,
		image: farnique,
		name: "Farnique - Furniture Website",
		skills: [
			frontendSkills[0],
			frontendSkills[1],
			frontendSkills[2],
			frontendSkills[3],
			frontendSkills[4],
			frontendSkills[6],
		],
		github: "https://github.com/SanjayMaity15/farnique_furniture_website_react.git",
		link: "http://farnique.vercel.app",
	},
];
