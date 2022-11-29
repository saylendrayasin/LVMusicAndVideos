import "../App.css";
import { getMovieList, searchMovie } from "../api/api_movie";
import { useEffect, useState } from "react";
import MoviesItems from "../components/MoviesItems";

export default function App() {
  const [popularMovies, setPopularMovies] = useState([]);
  const [textMovies, setTextMovies] = useState("");
  useEffect(() => {
    getMovieList().then((res) => {
      setPopularMovies(res);
    });
  }, []);

  const PopularMovie = () => {
    return popularMovies.map((movie) => {
      console.log(movie);
      return <MoviesItems key={movie.id} movie={movie} />;
    });
  };

  const cari = (e) => setTextMovies(e.target.value);

  //function click cari
  const clickCari = () => {
    searchMovie(textMovies).then((res) => {
      setPopularMovies(res.results);
    });
  };

  // const search = async (q) => {
  //   if (q.length > 3) {
  //     const query = await searchMovie(q);
  //     setPopularMovies(query.results);
  //   }
  // }

  return (
    <div className=" mt-0 flex text-center">
      <header className=" flex h-full w-full flex-col items-center justify-center bg-black text-[22px] text-white md:text-[25px]">
        <h1 className="my-8 text-3xl font-bold text-gray-400">
          LVMusicAndMovies
        </h1>
        <div className="mb-6 flex h-16 w-[300px] gap-2 py-2 lg:w-[650px]">
          <input
            className="focus:ring-3 h-auto w-4/5 rounded-md p-2 font-serif text-sm font-semibold text-primary hover:ring-2 hover:ring-primary focus:border-primary focus:outline-primary focus:ring-primary focus:ring-opacity-90 lg:text-lg"
            placeholder="Search Movies..."
            onChange={cari}
            value={textMovies}
          />
          <button
            className="h-auto w-1/5 justify-center rounded-md bg-gray-400 text-[14px] font-bold text-primary hover:bg-primary hover:text-white lg:text-lg "
            onClick={clickCari}
          >
            Search
          </button>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-[20px]">
          <PopularMovie />
        </div>
      </header>
    </div>
  );
}
