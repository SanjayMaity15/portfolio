import React from "react";

const NeonButton = ({ text, onClick }) => {
	return (
		<button
			onClick={onClick}
			className={`
        relative 
        inline-block 
        px-6 
        py-2
        max-w-[200px] 
        text-lg 
        font-bold 
        text-white
        uppercase 
        border-2 
        border-purple-500 
        
        bg-purple-600
        rounded-full
        transition-all 
        duration-300 
        hover:text-white 
        hover:bg-purple-800 
        shadow-[0_0_5px_#a855f7,0_0_10px_#a855f7,0_0_20px_#a855f7] 
        hover:shadow-[0_0_10px_#a855f7,0_0_20px_#a855f7,0_0_40px_#a855f7]
        focus:outline-none 
        focus:ring-2 
        focus:ring-purple-500
      `}
		>
			{text}
		</button>
	);
};

export default NeonButton;
