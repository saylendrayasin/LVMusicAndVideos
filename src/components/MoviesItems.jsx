import React from "react";
import { Link } from "react-router-dom";

function MoviesItems(props) {
  return (
    <div>
      <div className="Movie-title">{props.movie.title}</div>
      <img
        className="Movie-image"
        alt="Movies"
        src={`${process.env.REACT_APP_BASEIMGURL}/${props.movie.poster_path}`}
      />
      <div className="Movie-date">Realase: {props.movie.release_date}</div>
      <div className="Movie-rate">{props.movie.vote_average}</div>
      <Link className="Movie-button" to={`/details/${props.movie.id}`}>
        Details
      </Link>
    </div>
  );
}

export default MoviesItems;
