import { Link } from 'react-router'
import type { Movies } from '@/stores/movie'

export default function MovieList({ movies }: { movies: Movies }) {
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
