import React from 'react';
import { Link } from 'react-router-dom';
import style from '../styles/css/main.module.css';

function Main({ id, coverImage, title, year, summary, genres }) {
  return (
    <div className={style.movie}>
      <Link to={`/movie/${id}`}>
        <img src={coverImage} alt={title} />
      </Link>
      <div className={style.movie__data}>
        <h2 className={style.movie__title}>
          <Link to={`/movie/${id}`}>{title}</Link>
        </h2>
        <p className={style.movie__year}>year : {year}</p>
        <ul className={style.movie__genres}>genres : {genres == null ? '' : genres.map(g => <li key={g}>{g}</li>)}</ul>
        <p className={style.movie__summary}>{summary.length > 100 ? `${summary.slice(0, 100)}...` : summary}</p>
      </div>
    </div>
  );
}

export default Main;
