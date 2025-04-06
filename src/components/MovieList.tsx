import { Link } from 'react-router'
import type { Movies } from '@/stores/movie'

export const emptyMessage = '영화 목록이 없습니다.'

export default function MovieList({ movies }: { movies: Movies }) {
  return (
    <>
      {movies.length ? (
        <ul className="mt-2">
          {movies.map(movie => (
            <li
              key={movie.imdbID}
              data-testid="movie-item">
              <Link
                to={`/movies/${movie.imdbID}`}
                className="block cursor-pointer rounded-md p-1 hover:bg-gray-100">
                {movie.Title}
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p data-testid="no-results">{emptyMessage}</p>
      )}
    </>
  )
}
