import { Link } from "react-router-dom";

function Contents({ movie }) {
  return (
    <div>
      <h1>
        <Link to={`/movie/${movie.id}`}>{movie.title}</Link>
      </h1>
      <img src={movie.medium_cover_image} alt={movie.title + "'s cover"} />
    </div>
  );
}

export default Contents;
