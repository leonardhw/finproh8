import React, { useState } from "react";

export const Search = ({ searchFn }) => {
	const [search, setSearch] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		searchFn(search);
		setSearch("");
	};

	return (
		<form onSubmit={handleSubmit} className="flex items-center bg-white rounded-md overflow-auto">
			<div className="px-4 py-2">
				<input
					type="text"
					value={search}
					onChange={(e) => setSearch(e.target.value)}
					placeholder="Search..."
					className="focus:outline-none"
				/>
			</div>
			<button className="bg-slate-900 text-white px-4 py-2">Search</button>
		</form>
	);
};
