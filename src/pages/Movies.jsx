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
    <div className=" flex mt-20 text-center">
      <header className=" bg-slate-900 h-full w-full flex flex-col items-center justify-center text-[22px] md:text-[25px] text-white">
        <h1 className="font-bold text-3xl my-8 text-gray-400">
          LVMusicAndMovie
        </h1>
        <div className="flex w-[450px] lg:w-[650px] h-16 mb-6 py-2 gap-2">
          <input
            className="h-auto p-2 text-lg font-semibold font-serif w-3/4 text-black rounded-md"
            placeholder="Cari Film..."
            onChange={cari}
            value={textMovies}
          />
          <button
            className="font-bold text-[18px] text-black w-1/4 h-auto bg-slate-300 justify-center rounded-md hover:bg-slate-500 "
            onClick={clickCari}
          >
            Search
          </button>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-[20px]">
          <PopularMovie />
        </div>
      </header>
    </div>
  );
}
