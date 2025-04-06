import { Link } from 'react-router'

export default function MovieList({ movies }) {
  return (
    <ul className="mt-2">
      {movies.map(movie => (
        <li key={movie.imdbID}>
          <Link
            to={`/movies/${movie.imdbID}`}
            className="block cursor-pointer rounded-md p-1 hover:bg-gray-100">
            {movie.Title}
          </Link>
        </li>
      ))}
    </ul>
  )
}
