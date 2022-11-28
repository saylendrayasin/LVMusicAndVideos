import React from "react";

function MoviesDetail(props) {
  return (
    <div className="flex flex-col w-full h-full text-white bg-black">
      <h1 className="font-bold self-center mt-10 mb-20 text-gray-400 text-3xl lg:text-4xl">
        Movie Details
      </h1>
      <div className="flex flex-col lg:flex-row h=[500px] mx-12 lg:mx-60 gap-8 justify-center items-center">
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
            Vote : {props.movie.vote_average}
          </h1>
        </div>
      </div>
    </div>
  );
}

export default MoviesDetail;
