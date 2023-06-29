<<<<<<< HEAD
import React from "react";
import { useState, useEffect } from "react";
import Main from "../pages/Main";
import Navi from "../components/Navigation";
import Footer from "../components/Footer";
import style from "../styles/css/Main.module.css";
import Search from "../components/Search";
=======
import React from 'react';
import { useState, useEffect } from 'react';
import Main from '../pages/main';
import Navi from '../components/navigation';
import Footer from '../components/footer';
import style from '../styles/css/main.module.css';
import Search from '../components/Search';
>>>>>>> f28d4c55504c23b8bd8f442bf552c362e4699f10

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState();
<<<<<<< HEAD
  const [child, setChild] = useState("");

  const getData = (child) => {
=======
  const [input, setInput] = useState('');
  const [child, setChild] = useState('');

  const getData = child => {
>>>>>>> f28d4c55504c23b8bd8f442bf552c362e4699f10
    setChild(child);
  };

  console.log(`${child} : 잘 됐다면 여기에 배열이 뜰꺼야`);
  const getMovies = async () => {
    const json = await (await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`)).json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      <Navi />
<<<<<<< HEAD
      <Search object={movies} getData={getData} />
=======

      <Search object={movies} getData={getData} />

>>>>>>> f28d4c55504c23b8bd8f442bf552c362e4699f10
      {loading ? (
        <h1 className={style.loading}>loading...</h1>
      ) : child === "" ? (
        <div className={style.container}>
          {movies.map(movie => (
            <Main
              movie={movie}
              key={movie.id}
              id={movie.id}
              coverImage={movie.medium_cover_image}
              title={movie.title}
              year={movie.year}
              summary={movie.summary}
              genres={movie.genres}
            />
          ))}
        </div>
      ) : (
        <div className={style.container}>
          {child.map(movie => (
            <Main
              movie={movie}
              key={movie.id}
              id={movie.id}
              coverImage={movie.medium_cover_image}
              title={movie.title}
              year={movie.year}
              summary={movie.summary}
              genres={movie.genres}
            />
          ))}
        </div>
      )}
      <Footer />
    </div>
  );
}

export default Home;
