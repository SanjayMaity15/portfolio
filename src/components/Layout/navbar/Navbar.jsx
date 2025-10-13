import React, { useEffect, useState } from "react";
import { FaBars, FaGithub, FaLinkedin, FaTimes } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

// Navigation menu items
const navMenuItems = [
	{ path: "/", label: "Home" },
	{ path: "/skill", label: "Skill" },
	{ path: "/project", label: "Project" },
	{ path: "/contact", label: "Contact" },
];

// Nav items component, reusable for desktop and mobile
const NavItems = ({ onClick }) => {
	return (
		<ul className="flex flex-col md:flex-row gap-8">
			{navMenuItems.map((currNavLink, index) => (
				<li key={index} className="text-white tracking-wide">
					<NavLink
						to={currNavLink.path}
						onClick={onClick} // This closes the mobile menu
						className={({ isActive }) =>
							isActive
								? "text-purple-600 font-bold transition-colors duration-300"
								: "hover:text-purple-400 transition-colors duration-300"
						}
					>
						{currNavLink.label}
					</NavLink>
				</li>
			))}
		</ul>
	);
};

const Navbar = () => {
	const [navBgActive, setNavBgActive] = useState(false);
	const [isMobileMenuActive, setIsMobileMenuActive] = useState(false);

	// Toggle background shadow on scroll
	useEffect(() => {
		const handleNavBg = () => {
			if (window.scrollY > 50) {
				setNavBgActive(true);
			} else {
				setNavBgActive(false);
			}
		};

		window.addEventListener("scroll", handleNavBg);
		return () => window.removeEventListener("scroll", handleNavBg);
	}, []);

	return (
		<section
			className={`fixed w-full z-10 transition-shadow ${
				navBgActive ? "shadow-xl backdrop-blur" : "bg-transparent"
			}`}
		>
			<div className="section-container h-[80px] flex justify-between items-center">
				{/* Logo / Name */}
				<div>
					<Link to="/">
						<p className="text-white font-semibold text-lg">
							<span className="text-purple-600">&lt; </span>Sanjay{" "}
							<span className="text-purple-600">/</span> Maity{" "}
							<span className="text-purple-600">&gt;</span>
						</p>
					</Link>
				</div>

				{/* Desktop Navigation */}
				<div className="hidden md:block">
					<NavItems />
				</div>

				{/* Social Icons (Desktop) */}
				<div className="text-white gap-4 hidden md:flex">
					<a
						href="https://github.com/SanjayMaity15"
						target="_blank"
						className="text-xl hover:text-purple-600 transition-colors duration-300"
					>
						<FaGithub />
					</a>
					<a
						href="https://www.linkedin.com/in/sanjaymaity15/"
						target="_blank"
						className="text-xl hover:text-purple-600 transition-colors duration-300"
					>
						<FaLinkedin />
					</a>
				</div>

				{/* Hamburger Toggle */}
				<div className="md:hidden z-50">
					<button
						onClick={() =>
							setIsMobileMenuActive(!isMobileMenuActive)
						}
						className="text-white text-xl"
					>
						{isMobileMenuActive ? <FaTimes /> : <FaBars />}
					</button>
				</div>

				{/* Mobile Menu */}
				<div
					className={`md:hidden fixed top-0 left-0 w-full mt-[80px] h-[50%] bg-black/75 flex justify-center items-center text-center transition-transform duration-300 z-40 ${
						isMobileMenuActive
							? "translate-x-0"
							: "-translate-x-full"
					}`}
				>
					<NavItems onClick={() => setIsMobileMenuActive(false)} />
				</div>
			</div>
		</section>
	);
};

export default Navbar;
