import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import list_movies from "../data/list_movies.json";
import styles from "styles/detail.css";

const detail = () => {
  const movie = list_movies.data.movies[0];
  //   console.log(Object.keys(movie));
  //   console.log(Object.values(movie));
  return (
    <article>
      <h2>{movie.title}</h2>
      <img src={movie.large_cover_image} alt={movie.title + "'s cover"} />
      <h3>synopsis</h3>
      <span>{movie.synopsis}</span>
      <h3>summary</h3>
      <p>{movie.summary}</p>
      <div className="desc_wrap">
        <h3>title : {movie.title_long}</h3>
        <span>id:{movie.id}</span>
        <span>year : {movie.year}</span>
        <span>rating : {movie.rating}</span>
        <span>runtime : {movie.runtime}</span>
        <span>genres : {movie.genres}</span>
        <p>{movie.description_full}</p>
      </div>
      <p className="below">date_uploaded : {movie.date_uploaded}</p>
    </article>
  );
};

export default detail;
