import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/css/navi.module.css';

function Navi() {
  return (
    <nav className={styles.nav}>
      <div className={styles.nav__logo}>
        <a href="/">MOVIE</a>
      </div>
      <ul className={styles.nav__menu}>
        <li>
          <Link to="/fantasy">Fantasy</Link>
        </li>
        <li>
          <Link to="/romance">Romance</Link>
        </li>
        <li>
          <Link to="/thriller">Thriller</Link>
        </li>
        <li>
          <Link to="/animation">Animation</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navi;
