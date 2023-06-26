import React from "react";
import { useState, useEffect } from "react";
import Main from "../pages/main";
import Navi from "../components/navigation";
import Footer from "../components/footer";
import style from "../styles/css/main.module.css";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState();
  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      <Navi />
      {loading ? (
        <h1 className={style.loading}>loading...</h1>
      ) : (
        <div className={style.container}>
          {movies.map((movie) => (
            <Main
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
