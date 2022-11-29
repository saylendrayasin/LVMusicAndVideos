import React from "react";
import { Link } from "react-router-dom";

function MoviesDetail(props) {
  return (
    <div className="flex h-full w-full flex-col bg-black text-white">
      <h1 className="mt-6 mb-6 self-center text-3xl font-bold text-gray-400 lg:text-4xl">
        Movie Details
      </h1>
      <div className="h=[500px] mx-12 flex flex-col items-center justify-center gap-8 lg:mx-40 lg:flex-row">
        <img
          className="h-[300px] w-[300px] rounded-md shadow-inherit lg:h-[400px] lg:w-[400px]"
          alt="Movies"
          src={`${process.env.REACT_APP_BASEIMGURL}/${props.movie.poster_path}`}
        />
        <div className="flex flex-col">
          <h1 className="mb-6 text-3xl font-bold lg:text-4xl">
            {props.movie.title}
          </h1>

          {/* mapping genre list */}
          <div className="mt-2 flex flex-row gap-2">
            {props.movie.genres &&
              props.movie.genres.map((genre) => (
                <div className="rounded-md bg-gray-400 px-2 py-1 text-sm">
                  {genre.name}
                </div>
              ))}
          </div>

          <h1 className="mt-6 text-sm md:text-base">{props.movie.overview}</h1>
          <h1 className="text-sm md:text-base ">
            Status : {props.movie.status}
          </h1>
          <h1 className="text-sm md:text-base ">
            Realase : {props.movie.release_date}
          </h1>
          <h1 className="text-sm md:text-base ">
            Rating : {props.movie.vote_average}
          </h1>
        </div>
      </div>

      <h1 className="ml-12 mt-20 mb-6 text-2xl font-bold text-gray-400 lg:ml-20 lg:text-3xl">
        Similar Movies
      </h1>

      <div className="flex flex-wrap items-center justify-center gap-[30px]">
        {props.similarMovies.results &&
          props.similarMovies.results.map((movie) => (
            <Link to={`/details/${movie.id}`} target="_parent">
              <div className="mb-8 flex h-[500px] w-[300px] flex-col items-center justify-center gap-2 overflow-hidden rounded-2xl bg-transparent text-white shadow-2xl transition-shadow delay-150 hover:bg-gray-100 hover:text-black sm:h-auto lg:h-[500px] lg:w-[300px]">
                <div className="h-25 md:h-15 mt-2 px-1 text-xl font-bold">
                  {movie.title}
                </div>

                <img
                  className="mb-5 h-[400px] w-[250px] rounded-2xl lg:h-[450px] lg:w-[250px]"
                  alt="Movies"
                  src={`${process.env.REACT_APP_BASEIMGURL}/${movie.poster_path}`}
                />
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
}

export default MoviesDetail;
