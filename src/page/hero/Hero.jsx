import NeonButton from "../../components/Button";
import TypingExample from "../../components/UI/TypingText";
import heroImage from "../../assets/images/sanjay.png";
import Tilt from "react-parallax-tilt";
import { useEffect } from "react";

const Hero = () => {
	useEffect(() => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	}, []);
	
	return (
		<section className="min-h-screen pt-[80px]">
			<div className="section-container relative flex justify-between  min-h-screen flex-col md:flex-row gap-12 md:gap-0">
				{/* blob effect */}
				<div className="absolute top-15 left-15 w-72 h-72 bg-purple-500 opacity-30 rounded-full filter blur-3xl animate-pulse z-0" />

				{/*hero left  */}

				<div className="flex flex-col gap-4 flex-1 justify-center">
					<h1 className=" font-semibold text-white text-4xl lg:text-5xl mt-5 md:mt-[-50px]">
						Hi, I am <br /> Sanjay Maity{" "}
					</h1>

					<TypingExample />

					<p className="mt-2 mb-8 lg:w-4/5 text-gray-300">
						I’m a full stack developer skilled in JavaScript, React,
						Node.js, Express.js and MongoDB. I’ve built responsive,
						scalable projects and am eager to grow professionally
						while learning new technologies and creating impactful
						software.
					</p>

					<div className="flex justify-center md:justify-start">
						<NeonButton text="Download cv" className />
					</div>
				</div>

				{/* Hero right */}
				<div className="flex-1 flex justify-center items-center ">
					<Tilt
						tiltMaxAngleX={15}
						tiltMaxAngleY={15}
						className="flex justify-center items-center"
					>
						<img
							src={heroImage}
							alt="hero image"
							className="
							lg:w-[60%] 
							sm:w-[65%]
							w-[80%]
							md:mt-[-50px]
							rounded-full 
							shadow-[0_0_10px_#a855f7,0_0_10px_#a855f7,0_0_60px_#a855f7] 
							transition 
							duration-300 
						"
						/>
					</Tilt>
				</div>
			</div>
		</section>
	);
};

export default Hero;
