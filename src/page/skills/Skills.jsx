import {
	programmingLanguages,
	mernTools,
	mernBackendSkills,
	mernFrontendSkills,
} from "../../utils/techSkill"; 
import Tilt from "react-parallax-tilt";

const Skills = () => {
	console.log(programmingLanguages);
	console.log(mernTools);
	console.log(mernBackendSkills);
	console.log(mernFrontendSkills);

	return (
		<section className="pt-[80px]">
			<div className="section-container text-white">
				<h2 className="text-center text-4xl font-semibold">
					My Skills
				</h2>
				<p className="text-center text-gray-300 mt-4">
					This section showcases the technical skills and development
					expertise I’ve refined through building real-world web
					projects.
				</p>

				<div className="grid md:grid-cols-2 mt-16 gap-8">
					{/* frontend */}

					<Tilt
						tiltMaxAngleX={15}
						tiltMaxAngleY={15}
						className="flex justify-center items-center"
					>
						<div className="min-h-[150px] border p-4 rounded-2xl border-purple-900">
							<h3 className="text-xl text-center font-bold text-purple-600 m-3">
								Frontend
							</h3>
							<ul className=" flex items-center rounded-2xl flex-wrap p-4 gap-x-4 gap-y-6">
								{mernFrontendSkills.map((item) => (
									<li key={item.id}>
										<span className="bg-gray-100/10 px-6 py-2 w-[200px] rounded-full">
											{item.name}
										</span>
									</li>
								))}
							</ul>
						</div>
					</Tilt>

					{/* backend */}

					<Tilt
						tiltMaxAngleX={15}
						tiltMaxAngleY={15}
						className="flex justify-center items-center"
					>
						<div className="min-h-[150px] border p-4  rounded-2xl border-purple-900">
							<h3 className="text-xl text-center font-bold text-purple-600 m-3">
								Backend
							</h3>
							<ul className=" flex items-center p-4 gap-x-4 gap-y-6 flex-wrap">
								{mernBackendSkills.map((item) => (
									<li key={item.id}>
										<span className="bg-gray-100/10 px-6 py-2 w-[200px] rounded-full">
											{item.name}
										</span>
									</li>
								))}
							</ul>
						</div>
					</Tilt>

					{/* language */}
					<Tilt
						tiltMaxAngleX={15}
						tiltMaxAngleY={15}
						className="flex justify-center items-center"
					>
						<div className="min-h-[150px] border w-full p-4 border-purple-900  rounded-2xl">
							<h3 className="text-xl text-center font-bold m-3 text-purple-600">
								Language
							</h3>
							<ul className=" flex items-center p-4 gap-x-4 gap-y-6 flex-wrap ">
								{programmingLanguages.map((item) => (
									<li key={item.id}>
										<span className="bg-gray-100/10 px-6 py-2 w-[200px] rounded-full">
											{item.name}
										</span>
									</li>
								))}
							</ul>
						</div>
					</Tilt>

					{/* tool */}
					<Tilt
						tiltMaxAngleX={15}
						tiltMaxAngleY={15}
						className="flex justify-center items-center"
					>
						<div className="min-h-[150px] border p-4 rounded-2xl border-purple-900 ">
							<h3 className="text-xl text-center font-bold m-3 text-purple-600">
								Tools
							</h3>
							<ul className=" flex items-center p-4 gap-x-4 gap-y-6 flex-wrap ">
								{mernTools.map((item) => (
									<li key={item.id}>
										<span className="bg-gray-100/10 px-6 py-2 w-[200px] rounded-full">
											{item.name}
										</span>
									</li>
								))}
							</ul>
						</div>
					</Tilt>
				</div>
			</div>
		</section>
	);
};

export default Skills;
