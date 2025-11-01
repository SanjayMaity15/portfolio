import React, { useEffect, useState } from "react";

const MouseShadow = () => {
	const [mouseX, setMouseX] = useState(null);
	const [mouseY, setMouseY] = useState(null);

	useEffect(() => {
		const animateCursorShadow = (event) => {
            setMouseX(event.clientX)
            setMouseY(event.clientY)
            
			
		};

		window.addEventListener("mousemove", animateCursorShadow);

		return () => {
			window.removeEventListener("mousemove", animateCursorShadow);
		};
	}, []);

	return (
		<div
			className="fixed left-0 top-0 w-[70px] h-[70px] bg-purple-600 filter blur-3xl pointer-events-none "
            style={{ left: mouseX, top: mouseY}}
		>
			
		</div>
	);
};

export default MouseShadow;
