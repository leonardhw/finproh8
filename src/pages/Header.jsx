import React from "react";
import { Search } from "./Search";

export const Header = ({ title, searchFn }) => {
	return (
		<nav className="bg-orange-600 w-full">
			<div className=" py-3 flex items-center justify-between mx-auto container px-6">
				<h1 className="text-white font-semibold text-2xl">{title}</h1>
				<Search searchFn={searchFn} />
			</div>
		</nav>
	);
};
