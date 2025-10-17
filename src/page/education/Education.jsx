import { useEffect } from "react";
import { educationData } from "../../utils/education";

const Education = () => {
	useEffect(() => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	}, []);

	return (
		<section className="pt-[80px]">
			<div className="section-container text-white relative">
				<h3 className="text-4xl font-semibold text-center uppercase">
					Education
				</h3>

				<div className="h-1 w-20 m-auto mt-3  bg-purple-600" />
				<p className="text-gray-300 text-center mt-4">
					A summary of my academic background, highlighting the
					knowledge and skills gained
				</p>

				{/* Timeline */}
				<div className="mt-16 relative">
					{/* Vertical line */}
					<div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gray-400"></div>

					<ul className="flex flex-col gap-12">
						{educationData.map((education, index) => (
							<li
								key={education.id}
								className={`relative max-w-[90%] lg:max-w-[30%] md:max-w-[40%] p-5 rounded-2xl bg-gray-900/80 border border-purple-700
								 ${
										index % 2 !== 0
											? "self-center md:self-end lg:mr-50 md:mr-10"
											: "self-center md:self-start lg:ml-50 md:ml-10"
									}
                                 
								`}
							>
								{/* Dot on line */}
								<span className="absolute left-[-8px] md:left-[-12px] top-4 w-4 h-4 bg-blue-500 rounded-full border-2 border-white" />

								<h3 className="text-xl font-semibold mb-2 text-purple-600">
									{education.title}
								</h3>
								<div className="flex items-center gap-2 mb-3">
									<img
										src={education.image}
										alt={education.institute}
										className="w-[50px] h-[50px] rounded-full object-cover"
									/>
									<p className="text-lg font-semibold capitalize">
										{education.institute}
									</p>
								</div>
								<p className="mb-3 text-gray-300">
									{education.description}
								</p>
								<p className="text-sm text-gray-400">
									{education.year}
								</p>
							</li>
						))}
					</ul>
				</div>
			</div>
		</section>
	);
};

export default Education;
