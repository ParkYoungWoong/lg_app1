import { useParams } from 'react-router'
import { useMovieDetail } from '@/hooks/useMovie'
import Loader from '@/components/Loader'

export default function MoviePage() {
  const { id } = useParams()
  const { data: movie, isLoading } = useMovieDetail(id)

  return (
    <div className="container mx-auto px-3 py-5">
      {isLoading ? (
        <div className="flex justify-center">
          <Loader />
        </div>
      ) : movie ? (
        <div className="flex flex-col gap-4">
          <h1
            className="text-3xl font-bold"
            data-testid="movie-title">
            {movie.Title}
          </h1>
          <p
            className="text-gray-700"
            data-testid="movie-plot">
            {movie.Plot}
          </p>
          <img
            src={movie.Poster.replace('SX300', 'SX700')}
            alt={movie.Title}
            className="w-1/2 rounded-md"
            data-testid="movie-poster"
          />
        </div>
      ) : (
        <div className="flex justify-center">
          <p
            className="text-gray-700"
            data-testid="movie-not-found">
            영화를 찾을 수 없습니다.
          </p>
        </div>
      )}
    </div>
  )
}
