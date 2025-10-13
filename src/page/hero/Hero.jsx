import NeonButton from "../../components/Button";
import TypingExample from "../../components/UI/TypingText";
import heroImage from "../../assets/images/myProfilepic.jpg";
import Tilt from "react-parallax-tilt";

const Hero = () => {
	return (
		<section className="min-h-screen">
			<div className="absolute top-15 left-15 w-72 h-72 bg-purple-500 opacity-30 rounded-full filter blur-3xl animate-pulse z-0" />{" "}
			<div className="section-container flex justify-between  min-h-screen flex-col md:flex-row">
				{/*hero left  */}

				<div className="flex flex-col gap-4 flex-1 mt-[80px] justify-center">
					<h1 className=" font-semibold text-white text-4xl md:text-5xl mt-5 md:mt-[-50px]">
						Hi, I am <br /> Sanjay Maity{" "}
					</h1>

					<TypingExample />

					<p className="text-white mt-2 mb-8 md:w-4/5">
						I’m a full stack developer skilled in JavaScript, React,
						Node.js, and MongoDB. I’ve built responsive, scalable
						projects and am eager to grow professionally while
						learning new technologies and creating impactful
						software.
					</p>

					<div className="flex justify-center md:justify-start">
						<NeonButton text="Download cv" className />
					</div>
				</div>

				{/* Hero right */}
				<div className="flex-1 flex justify-center items-center mt-[80px]">
					<Tilt
						tiltMaxAngleX={15}
						tiltMaxAngleY={15}
						className="flex justify-center items-center"
					>
						<img
							src={heroImage}
							alt="hero image"
							className="
							md:w-[60%] 
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
