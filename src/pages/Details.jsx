import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MoviesDetail from "../components/MoviesDetail";
const apiKey = process.env.REACT_APP_APIKEY;
const baseUrl = process.env.REACT_APP_BASEURL;

function Details() {
  const [movie, setMovie] = useState([]);
  const [similarMovies, setSimilarMovies] = useState([]);
  const params = useParams();

  useEffect(() => {
    fetch(`${baseUrl}/movie/${params.movie_id}?api_key=${apiKey}`)
      .then((response) => response.json())
      .then((data) => setMovie(data));

    fetch(`${baseUrl}/movie/${params.movie_id}/similar?api_key=${apiKey}`)
      .then((response) => response.json())
      .then((data) => setSimilarMovies(data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(similarMovies);
  return (
    <div className="flex min-h-screen bg-black">
      <MoviesDetail
        key={movie.id}
        movie={movie}
        similarMovies={similarMovies}
      />
    </div>
  );
}

export default Details;
