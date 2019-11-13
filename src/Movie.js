import React from "react";
import "./Movie.css";
// import PropTypes from "prop-types";

export default function Movie({ id, year, title, summary, poster, genres }) {
  return <div className="movie">
    <img src={poster} alt={title} title={title} />
    <div>
      <h3 className="movie__title">{title}</h3>
      <h5 className="movie__year">{year}</h5>
      <ul className="genres">
        {genres.map((genre, i) => <li key={i} className="genres__genre">{genre}</li>)}
      </ul>
      <p className="movie__summary">{summary}</p>
    </div>
  </div>;
}
