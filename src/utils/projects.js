// 🔁 Import images
import farnique from "../assets/images/farnique.png";
import wallkify from "../assets/images/wallkify.png";
import exp from "../assets/images/exp.png";
import brieflly from "../assets/images/brieflly.png";
import freshmart from "../assets/images/freshmart.png";
import skyfer from "../assets/images/skyfer.png";

// ✅ Example skills (you can reuse your actual skill data if you prefer)
export const skills = [
	// Frontend Skills
	{ id: 1, name: "HTML", icon: "skill-icons:html", type: "frontend" },
	{ id: 2, name: "CSS", icon: "skill-icons:css", type: "frontend" },
	{
		id: 3,
		name: "JavaScript",
		icon: "skill-icons:javascript",
		type: "frontend",
	},
	{ id: 4, name: "React", icon: "skill-icons:react-dark", type: "frontend" },
	{
		id: 5,
		name: "Tailwind CSS",
		icon: "skill-icons:tailwindcss-dark",
		type: "frontend",
	},
	{ id: 6, name: "Redux", icon: "skill-icons:redux", type: "frontend" },
	{
		id: 7,
		name: "React Router",
		icon: "devicon:reactrouter",
		type: "frontend",
	},

	// Backend Skills
	{
		id: 8,
		name: "Node.js",
		icon: "skill-icons:nodejs-dark",
		type: "backend",
	},
	{ id: 9, name: "Express.js", icon: "devicon:express", type: "backend" },
	{
		id: 10,
		name: "MongoDB",
		icon: "skill-icons:mongodb-dark",
		type: "backend",
	},
	{ id: 11, name: "MySQL", icon: "skill-icons:mysql", type: "backend" },
	{ id: 12, name: "REST APIs", icon: "mdi:api", type: "backend" },
	{
		id: 13,
		name: "JWT Authentication",
		icon: "mdi:shield-key",
		type: "backend",
	},
	{ id: 14, name: "Firebase", icon: "skill-icons:firebase", type: "backend" },
];

export const projects = [
	{
		id: 1,
		image: skyfer,
		name: "Skyfer - A cloud storage app",
		skills: [
			skills[3],
			skills[4],
			skills[6],
			skills[7],
			skills[8],
			skills[9],
			skills[11],
			skills[12],
		],
		github: "https://github.com/SanjayMaity15/skyfer-cloud-storage-web-app.git",
		link: "https://skyfer.cloud",
	},

	{
		id: 2,
		image: exp,
		name: "FinsTrack - an Expense tracker",
		skills: [
			skills[4],
			skills[5],
			skills[6],
			skills[7],
			skills[8],
			skills[9],
			skills[11],
			skills[12],
		],
		github: "https://github.com/SanjayMaity15/expense-tracker.git",
		link: "http://finstrack.vercel.app",
	},

	{
		id: 3,
		image: farnique,
		name: "Farnique - Furniture Website",
		skills: [
			skills[0],
			skills[1],
			skills[2],
			skills[3],
			skills[4],
			skills[6],
		],
		github: "https://github.com/SanjayMaity15/farnique_furniture_website_react.git",
		link: "http://farnique.vercel.app",
	},

	{
		id: 4,
		image: wallkify,
		name: "wallkify - Shoe Website",
		skills: [
			skills[0],
			skills[1],
			skills[2],
			skills[3],
			skills[4],
			skills[6],
		],
		github: "https://github.com/SanjayMaity15/WALLKIFY-SHOE-WEBSITE-USING-REACT-REDUX.git",
		link: "http://wallkify.vercel.app",
	},

	{
		id: 5,
		image: freshmart,
		name: "freshmart - A vegetables shop",
		skills: [
			skills[0],
			skills[1],
			skills[2],
			skills[3],
			skills[4],
			skills[6],
		],
		github: "https://github.com/SanjayMaity15/freshmart.git",
		link: "http://freshmartx.vercel.app",
	},
	{
		id: 6,
		image: brieflly,
		name: "brieflly - A news website",
		skills: [skills[3], skills[4], skills[6]],
		github: "https://github.com/SanjayMaity15/brieflly-news-app.git",
		link: "http://brieflly.vercel.app",
	},
];
