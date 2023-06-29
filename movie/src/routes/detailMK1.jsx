import React from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import list_movies from "../data/list_movies.json";
import styles from "styles/css/detail.module.css";
// import "../styles/detail.module.css"

const detail = (props) => {
  //   const movie = list_movies.data.movies[0];
  //   console.log(Object.keys(movie));
  //   console.log(Object.values(movie));
  return (
    <article>
      <h2>{props.title}</h2>
      <img src={props.coverImage} alt={props.title + "'s cover"} />
      <h3>synopsis</h3>
      {/* <span>{movie.synopsis}</span> */}
      <h3>summary</h3>
      <p>{props.summary}</p>
      <div className={styles.desc_wrap}>
        {/* <h3>title : {movie.title_long}</h3> */}
        <span>id:{props.id}</span>
        <span>year : {props.year}</span>
        {/* <span>rating : {movie.rating}</span> */}
        {/* <span>runtime : {movie.runtime}</span> */}
        <span>genres : {props.genres}</span>
        {/* <p>{movie.description_full}</p> */}
      </div>
      {/* <p className={styles.below}>date_uploaded : {movie.date_uploaded}</p> */}
    </article>
  );
};

export default detail;
