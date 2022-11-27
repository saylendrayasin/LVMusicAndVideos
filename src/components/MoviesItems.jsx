import React from "react";
import { Link } from "react-router-dom";

function MoviesItems(props) {
  return (
    <div className="flex flex-col bg-yellow-50 w-[420px] h-[900px] sm:h-auto text-black justify-center items-center gap-2 rounded-2xl">
      <div className="h-30 md:h-20 mt-2 px-1 font-bold">
        {props.movie.title}
      </div>

      <img
        className="w-[400px] h-[600px] rounded-2xl"
        alt="Movies"
        src={`${process.env.REACT_APP_BASEIMGURL}/${props.movie.poster_path}`}
      />

      <div className="mt-2 italic">Realase: {props.movie.release_date}</div>
      <div className="text-red-600 text-xl md:text-3xl font-bold underline">
        {props.movie.vote_average}
      </div>
      <div className="mb-2 font-semibold hover:text-primary">
        <Link to={`/details/${props.movie.id}`}>Details</Link>
      </div>
    </div>
  );
}

export default MoviesItems;
