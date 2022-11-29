import React from "react";
import { Link } from "react-router-dom";

function MoviesDetail(props) {
  return (
    <div className="flex flex-col w-full h-full text-white bg-black">
      <h1 className="font-bold self-center mt-6 mb-6 text-gray-400 text-3xl lg:text-4xl">
        Movie Details
      </h1>
      <div className="flex flex-col lg:flex-row h=[500px] mx-12 lg:mx-40 gap-8 justify-center items-center">
        <img
          className="lg:w-[400px] lg:h-[400px] w-[300px] h-[300px] rounded-md shadow-inherit"
          alt="Movies"
          src={`${process.env.REACT_APP_BASEIMGURL}/${props.movie.poster_path}`}
        />
        <div className="flex flex-col">
          <h1 className="font-bold text-3xl lg:text-4xl mb-6">
            {props.movie.title}
          </h1>

          {/* mapping genre list */}
          <div className="flex flex-row gap-2 mt-2">
            {props.movie.genres &&
              props.movie.genres.map((genre) => (
                <div className="bg-gray-400 rounded-md px-2 py-1 text-sm">
                  {genre.name}
                </div>
              ))}
          </div>

          <h1 className="text-sm md:text-base mt-6">{props.movie.overview}</h1>
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

      <h1 className="font-bold ml-12 lg:ml-20 mt-20 mb-6 text-gray-400 text-2xl lg:text-3xl">
        Similar Movies
      </h1>

      <div className="flex flex-wrap justify-center items-center gap-[30px]">
        {props.similarMovies.results &&
          props.similarMovies.results.map((movie) => (
            <Link to={`/details/${movie.id}`} target="_parent">
              <div className="flex flex-col bg-transparent hover:bg-gray-100 w-[300px] h-[500px] lg:w-[300px] lg:h-[500px] sm:h-auto text-white hover:text-black justify-center items-center gap-2 rounded-2xl overflow-hidden transition-shadow delay-150 shadow-2xl mb-8">
                <div className="h-25 md:h-15 mt-2 px-1 font-bold text-xl">
                  {movie.title}
                </div>

                <img
                  className="w-[250px] h-[400px] lg:w-[250px] lg:h-[450px] rounded-2xl mb-5"
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
