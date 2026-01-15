import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { projects } from "../../utils/projects";
import { Icon } from "@iconify/react";
import { useEffect } from "react";

const Project = () => {
	useEffect(() => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	}, []);

	
	return (
		<section className="pt-[80px]">
			<div className="section-container text-white">
				<h3 className="text-center text-4xl font-semibold uppercase">
					Projects
				</h3>
				<div className="h-1 w-20 m-auto mt-3  bg-purple-600" />
				<p className="text-center text-gray-300 mt-4 mb-16">
					A selection of projects that demonstrate my skills in
					building real-world web applications with clean code and
					modern technologies.
				</p>

				{/* project container */}
				<div>
					<ul className="grid md:grid-cols-2 gap-12 ">
						{projects.map((item) => (
							<li
								key={item.id}
								className="border rounded-2xl overflow-hidden"
							>
								
								<img src={item.image} alt={item.name} className="md:max-h-[50%] w-full md:min-h-[50%]"/>

								<h4 className="text-xl font-semibold p-4 text-yellow-400 uppercase">
									{item.name}
								</h4>

								<span className="p-4 flex gap-2 flex-wrap font-semibold">
									Tech Stack :
									{item.skills.map((item, index) => (
										<div
											key={index}
											className="flex items-center gap-1 bg-gray-100/10 px-4 py-1 rounded-full font-normal"
										>
											<span>
												<Icon
													icon={item.icon}
													width={16}
												/>
											</span>
											<span>{item.name}</span>
										</div>
									))}
								</span>

								<div className="flex gap-4 p-4 ">
									<div className="flex items-center bg-purple-600 hover:bg-purple-900 transition-colors duration-300 cursor-pointer px-4 py-2 rounded-sm gap-2">
										<FaGithub />
										<a
											href={item.github}
											className="cursor-pointer"
											target="_blank"
										>
											Code
										</a>
									</div>
									<div className="flex items-center bg-purple-600 hover:bg-purple-900 transition-colors duration-300 px-4 py-2 cursor-pointer rounded-sm gap-2">
										<FaExternalLinkAlt />
										<a
											href={item.link}
											className="cursor-pointer"
											target="_blank"
										>
											Live Preview
										</a>
									</div>
								</div>
							</li>
						))}
					</ul>
				</div>
			</div>
		</section>
	);
};

export default Project;
