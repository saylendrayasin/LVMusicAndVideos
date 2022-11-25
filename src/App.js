import Navigation from "./components/Navigation";
import "./App.css"
import { useState } from "react";


export default function App() {
  const [popularMovies, setPopularMovies] = useState([]);
  const search = (query) => {
    console.log({ query });
  };
  return (
    <div className="App">
      <Navigation />
      <header className="App-header">
        <h1>Hallo</h1>
        <input
          className="Movie-search"
          placeholder="Cari Film Kesayangan..."
          onChange={({ target }) => search(target.value)}
        />
        <div className="Movie-container">
          <div className="Movie-wrapper">
            <div className="Movie-title">Contoh</div>
            <img className="Movie-image" src="https://placehold.it/100x100" />
            <div className="Movie-date">20-11-2022</div>
            <div className="Movie-rate">7.9</div>
          </div>
        </div>
      </header>
      
    </div>
  );
}
