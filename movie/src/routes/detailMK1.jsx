import React from "react";
import styles from "styles/css/Detail.module.css";

const detail = (props) => {
  return (
    <article>
      <h2>{props.title}</h2>
      <img src={props.coverImage} alt={props.title + "'s cover"} />
      <h3>synopsis</h3>
      <h3>summary</h3>
      <p>{props.summary}</p>
      <div className={styles.desc_wrap}>
        <span>id:{props.id}</span>
        <span>year : {props.year}</span>
        <span>genres : {props.genres}</span>
      </div>
    </article>
  );
};

export default detail;
