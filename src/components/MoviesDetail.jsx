import React from "react";

function MoviesDetail(props) {
  console.log(props.movie);
  return (
    <div className="flex flex-col">
      <div className="flex flex-row justify-center align-middle items-center">
        <img
          alt="Movies"
          src={`${process.env.REACT_APP_BASEIMGURL}/${props.movie.poster_path}`}
        />
        <div className="flex flex-col">
          <h1>{props.movie.title}</h1>
          <h1>{props.movie.original_title}</h1>
          <h1>{props.movie.overview}</h1>
        </div>
      </div>
    </div>
  );
}

export default MoviesDetail;
