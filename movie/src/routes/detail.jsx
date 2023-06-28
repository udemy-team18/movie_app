import Contents from 'components/Contents';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from '../styles/css/detail.module.css';

function Detail() {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState();
  const { id } = useParams();
  //   console.log(id);
  useEffect(() => {
    const getMovie = async () => {
      const json = await (await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
      setMovie(json.data.movie);
      setLoading(false);
    };
    getMovie();
  }, [id]);

  console.log(movie);

  return (
    <div>
      {loading ? (
        <h1>loading...</h1>
      ) : (
        <div className={styles.article_wrapper}>
          <Contents movie={movie} />
        </div>
      )}
    </div>
  );
}

export default Detail;
