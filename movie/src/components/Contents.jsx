import React from 'react';
import styles from '../styles/css/detail.module.css';

function Contents({ movie }) {
  return (
    <article className={styles.content_wrapper}>
      <div className={styles.left}>
        <img src={movie.large_cover_image} alt={movie.title + "'s cover"} />
      </div>
      <div className={styles.right}>
        <h1 className={styles.title}>{movie.title_long}</h1>
        <div className={styles.info}>
          <p className={styles.amp}>genres</p>
          <p>{movie.genres}</p>
          <p className={styles.amp}>rating</p>
          <p>{movie.rating}</p>
          <p>runtime : {movie.runtime}</p>
          <p>downLoad count : {movie.download_count}</p>
          <p>likes : {movie.like_count}</p>
        </div>
        <span>{movie.description_full}</span>
      </div>
    </article>
  );
}

export default Contents;
