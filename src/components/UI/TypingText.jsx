import React from "react";
import { Typewriter } from "react-simple-typewriter";

const TypingExample = () => {
	return (
		<h2 className="text-white text-3xl font-semibold">
			<Typewriter
				words={[
					"I am a Coder",
					"I am a Fullstack Developer",
					"I am a Engineer",
				]}
				loop={Infinity}
				cursor
				cursorStyle="✏️"
				typeSpeed={70}
				deleteSpeed={50}
				delaySpeed={1000}
			/>
		</h2>
	);
};

export default TypingExample;
