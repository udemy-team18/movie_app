import React from "react";
import { Link } from "react-router-dom";
// import styles from "../styles/css/main.module.css";
import "../styles/css/main.module.css";

function Main({ id, coverImage, title, year, summary, genres }) {
  return (
    <div className="movie">
      <Link to={`/movie/${id}`}>
        <img src={coverImage} alt={title} />
      </Link>
      <div className="movie-data">
        <h2 className="movie-title">
          <Link to={`/movie/${id}`}>{title}</Link>
        </h2>
        <p className="movie-year">year : {year}</p>
        <ul className="movie-genres">
          genres :{" "}
          {genres == null ? "" : genres.map((g) => <li key={g}>{g}</li>)}
        </ul>
        <p className="movie-summary">
          summary :{" "}
          {/* {summary.length > 235 ? `${summary.slice(0, 235)}...` : summary} */}
        </p>
      </div>
    </div>
  );
}

export default Main;
