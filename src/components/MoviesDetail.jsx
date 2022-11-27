import React from "react";

function MoviesDetail(props) {
  return (
    <div className="flex flex-col w-full h-screen mt-20 text-white bg-slate-900">
      <h1 className="font-bold self-center mt-10 mb-20 text-gray-400 text-3xl lg:text-4xl">
        Movie Details
      </h1>
      <div className="flex flex-row h=[400px] mx-12 lg:mx-60 gap-8 justify-center items-center">
        <img
          className="lg:w-[400px] lg:h-[400px] w-[300px] h-[300px] rounded-md shadow-inherit"
          alt="Movies"
          src={`${process.env.REACT_APP_BASEIMGURL}/${props.movie.poster_path}`}
        />
        <div className="flex flex-col">
          <h1 className="self-center font-bold text-2xl lg:text-3xl">
            {props.movie.title}
          </h1>
          <h1 className="text-sm md:text-base mt-6">{props.movie.overview}</h1>
          <h1 className="text-sm md:text-base ">
            Realase : {props.movie.release_date}
          </h1>
        </div>
      </div>
    </div>
  );
}

export default MoviesDetail;
