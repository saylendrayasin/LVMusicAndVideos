import React from "react";
import { Link } from "react-router-dom";

function MoviesItems(props) {
  console.log(props.movie);
  return (
    <div className="mb-8 flex h-[500px] w-[300px] flex-col items-center justify-center gap-2 overflow-hidden rounded-2xl bg-transparent text-white delay-150 hover:bg-gray-200 hover:text-black sm:h-auto lg:h-[650px] lg:w-[320px]">
      <div className="h-25 md:h-15 mt-2 px-1 text-xl font-bold">
        {props.movie.title}
      </div>

      <img
        className="h-[300px] w-[200px] rounded-2xl lg:h-[550px] lg:w-[300px]"
        alt="Movies"
        src={`${process.env.REACT_APP_BASEIMGURL}/${props.movie.poster_path}`}
      />

      <div className="mt-1 text-lg italic md:text-xl">
        Realase: {props.movie.release_date}
      </div>
      <div className="text-lg font-bold text-red-600 underline md:text-xl">
        {props.movie.vote_average}
      </div>
      <div className="mb-1 text-lg font-semibold hover:text-primary md:text-lg">
        <Link to={`/details/${props.movie.id}`}>Details</Link>
      </div>
    </div>
  );
}

export default MoviesItems;
