import React from "react";
import { Link } from "react-router-dom";

function MoviesItems(props) {
  console.log(props.movie);
  return (
    <div className="flex flex-col bg-gray-200 w-[300px] h-[500px] lg:w-[320px] lg:h-[650px] sm:h-auto text-black justify-center items-center gap-2 rounded-2xl overflow-hidden">
      <div className="h-25 md:h-15 mt-2 px-1 font-bold text-xl">
        {props.movie.title}
      </div>

      <img
        className="w-[200px] h-[300px] lg:w-[300px] lg:h-[550px] rounded-2xl"
        alt="Movies"
        src={`${process.env.REACT_APP_BASEIMGURL}/${props.movie.poster_path}`}
      />

      <div className="mt-1 italic text-lg md:text-xl">
        Realase: {props.movie.release_date}
      </div>
      <div className="text-red-600 text-lg md:text-xl font-bold underline">
        {props.movie.vote_average}
      </div>
      <div className="mb-1 font-semibold hover:text-primary text-lg md:text-xl">
        <Link to={`/details/${props.movie.id}`}>Details</Link>
      </div>
    </div>
  );
}

export default MoviesItems;
