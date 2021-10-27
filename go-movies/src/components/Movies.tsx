import { useEffect, useState, Fragment } from "react";
import { Movie } from "../models/movie";
import { Link } from "react-router-dom";
const Movies = () => {
  const tmpData = [
    { id: 1, title: "hogehoge", runtime: 143 },
    { id: 2, title: "fugafuga", runtime: 325 },
    { id: 3, title: "ajrogha", runtime: 253 },
  ];

  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    (() => {
      setMovies(tmpData);
    })();
  }, []);
  return (
    <Fragment>
      <h2>Choose a movie</h2>
      <ul>
        {movies.map((m) => {
          return (
            <li key={m.id}>
              <Link to={`/movies/${m.id}`}>{m.title}</Link>
            </li>
          );
        })}
      </ul>
    </Fragment>
  );
};

export default Movies;
