import React, { useState } from "react";

export const Movies = ({ title, poster }) => {
	const [fallback, setFallback] = useState(false);

	return (
		<li className="bg-white h-60 w-60 relative hover:shadow-xl hover:shadow-orange-900/25">
			{!fallback ? (
				<img
					src={poster}
					onError={() => setFallback(true)}
					className="w-full h-full object-cover object-center"
				/>
			) : (
				<div className="bg-slate-300 w-full h-full flex items-center justify-center pb-10">
					<span className="text-center text-slate-500">No image</span>
				</div>
			)}
			<div className="absolute bottom-0 left-0 right-0 bg-orange-600 px-6 py-3">
				<h3 className="text-white font-semibold text-center capitalize text-sm">{title}</h3>
			</div>
		</li>
	);
};
