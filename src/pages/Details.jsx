import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MoviesDetail from "../components/MoviesDetail";
const apiKey = process.env.REACT_APP_APIKEY;
const baseUrl = process.env.REACT_APP_BASEURL;

function Details() {
  const [movie, setMovie] = useState([]);
  const params = useParams();

  useEffect(() => {
    fetch(`${baseUrl}/movie/${params.movie_id}?api_key=${apiKey}`)
      .then((response) => response.json())
      .then((data) => setMovie(data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <MoviesDetail movie={movie} />
    </div>
  );
}

export default Details;
