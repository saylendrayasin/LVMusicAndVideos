import "../App.css";
import { getMovieList } from "../api/api_movie";
import { useEffect, useState } from "react";
import MoviesItems from "../components/MoviesItems";

export default function App() {
  const [popularMovies, setPopularMovies] = useState([]);
  useEffect(() => {
    getMovieList().then((res) => {
      setPopularMovies(res);
    });
  }, []);

  const PopularMovie = () => {
    return popularMovies.map((movie) => {
      return (
        <div className="Movie-wrapper">
          <MoviesItems key={movie.id} movie={movie} />
        </div>
      );
    });
  };

  const search = (query) => {
    console.log({ query });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Hallo</h1>
        <input
          className="Movie-search"
          placeholder="Cari Film Kesayangan..."
          onChange={({ target }) => search(target.value)}
        />
        <div className="Movie-container">
          <PopularMovie />
        </div>
      </header>
    </div>
  );
}
