import NeonButton from "../../components/Button";
import TypingExample from "../../components/UI/TypingText";
import TypingText from "../../components/UI/TypingText";
import heroImage from "../../assets/images/myProfilepic.jpg"

const Hero = () => {
  return (
		<section className="min-h-screen">
			<div className="absolute top-15 left-15 w-72 h-72 bg-purple-500 opacity-30 rounded-full filter blur-3xl animate-pulse z-0" />{" "}
			<div className="section-container flex justify-between items-center h-screen">
				{/*hero left  */}

				<div className="flex flex-col gap-4 flex-1">
					<h1 className="mt-[80px] font-semibold text-white text-4xl md:text-5xl">
						Hi, I am <br /> Sanjay Maity{" "}
					</h1>

					<TypingExample />

					<p className="text-white mb-8 md:w-4/5">
						I’m a full stack developer skilled in JavaScript, React,
						Node.js, and MongoDB. I’ve built responsive, scalable
						projects and am eager to grow professionally while
						learning new technologies and creating impactful
						software.
					</p>

					<NeonButton text="Download cv" />
				</div>

				{/* Hero right */}
				<div className="flex-1 flex justify-center items-center">
					<img
						src={heroImage}
						alt="hero image"
						className="
						w-[60%] 
						rounded-full 
						shadow-[0_0_10px_#a855f7,0_0_10px_#a855f7,0_0_60px_#a855f7] 
						transition 
						duration-300 
						hover:shadow-[0_0_20px_#a855f7,0_0_20px_#a855f7,0_0_90px_#a855f7]
						"
					/>
				</div>
			</div>
		</section>
  );
}

export default Hero






