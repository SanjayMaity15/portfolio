import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
	return (
		<section className="pt-12">
			<div className="section-container text-gray-300 py-8 mx-auto px-4 flex flex-col-reverse items-center justify-center gap-4">
				{/* Center: Navigation Links */}
				<nav className="flex md:space-x-6 md:flex-row flex-col items-center text-center justify-center">
					<a href="/" className="hover:text-purple-500 transition">
						Home
					</a>
					<a
						href="/skill"
						className="hover:text-purple-500 transition"
					>
						Skill
					</a>
					<a
						href="/project"
						className="hover:text-purple-500 transition"
					>
						Projects
					</a>
					<a
						href="/education"
						className="hover:text-purple-500 transition"
					>
						Education
					</a>
					<a
						href="/contact"
						className="hover:text-purple-500 transition"
					>
						Contact
					</a>
				</nav>

				{/* Right: Social Icons */}
				<div className="flex space-x-6 text-2xl text-white">
					<a
						href="https://github.com/SanjayMaity15"
						target="_blank"
						className="text-2xl hover:text-purple-600  transition-colors duration-300"
					>
						<FaGithub />
					</a>
					<a
						href="https://www.linkedin.com/in/sanjaymaity15/"
						target="_blank"
						className="text-2xl hover:text-purple-600 transition-colors duration-300"
					>
						<FaLinkedin />
					</a>
				</div>

				<div className="w-full h-0.5 bg-gray-500/60 mb-4" />
			</div>
			{/* Bottom copyright */}
			<div className="text-center text-gray-400 mb-12 text-sm mt-6">
				&copy; {new Date().getFullYear()} Sanjay Maity. All rights
				reserved.
			</div>
		</section>
	);
};

export default Footer;
