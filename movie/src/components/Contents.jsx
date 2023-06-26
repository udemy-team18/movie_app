import { Link } from "react-router-dom";

function Contents({ movie }) {
  return (
    <article>
      <h1>
        <Link to={`/movie/${movie.id}`}>{movie.title}</Link>
      </h1>
      <img src={movie.large_cover_image} alt={movie.title + "'s cover"} />
      <p>summary</p>
      <p>{movie.description_intro}</p>
    </article>
  );
}

export default Contents;
