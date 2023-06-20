import { Movies } from "./pages/Movies";
import { useEffect, useState } from "react";
import axios from "axios";
import { Header } from "./pages/Header";

const API_KEY = "4715309";
const baseUrl = `https://www.omdbapi.com/?apikey=${API_KEY}&`;

function App() {
	const [movies, setMovies] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	const getMovies = async () => {
		setIsLoading(true);
		try {
			const { data } = await axios.get(baseUrl, { params: { s: "man" } });
			setMovies(data.Search);
		} catch (error) {
			console.log(error);
		} finally {
			setIsLoading(false);
		}
	};

	const searchMovies = async (title) => {
		setIsLoading(true);
		try {
			const { data } = await axios.get(baseUrl, { params: { s: title, type: "movie" } });
			setMovies(data.Search);
		} catch (error) {
			console.log(error);
		} finally {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		getMovies();
	}, []);

	return (
		<>
			<Header title="FinProH8" searchFn={searchMovies} />

			<main className="container mx-auto px-6">
				<h1 className="font-semibold text-4xl text-blue-700 py-8 mb-4">
					Show your favorite movies
				</h1>

				<ul className="flex flex-wrap gap-8 justify-center">
					{isLoading
						? "Loading..."
						: movies.length
						? movies?.map((movie) => (
								<Movies title={movie?.Title} poster={movie?.Poster} key={movie?.imdbID} />
						  ))
						: "Movies not found"}
				</ul>
			</main>
		</>
	);
}

export default App;
