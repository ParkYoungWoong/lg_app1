import { useParams } from 'react-router'
import { useEffect, useState } from 'react'
import { useMovieStore } from '@/stores/movie'
import Loader from '@/components/Loader'
export default function MoviePage() {
  const { id } = useParams()
  const movie = useMovieStore(state => state.movie)
  const fetchMovie = useMovieStore(state => state.fetchMovie)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    init()
  }, [id])

  async function init() {
    if (!id) return
    setIsLoading(true)
    await fetchMovie(id)
    setIsLoading(false)
  }

  return (
    <div className="container mx-auto px-3 py-5">
      {isLoading ? (
        <div className="flex justify-center">
          <Loader />
        </div>
      ) : (
        movie && (
          <div className="flex flex-col gap-4">
            <h1 className="text-3xl font-bold">{movie.Title}</h1>
            <p className="text-gray-700">{movie.Plot}</p>
            <img
              src={movie.Poster.replace('SX300', 'SX700')}
              alt={movie.Title}
              className="w-1/2 rounded-md"
            />
          </div>
        )
      )}
    </div>
  )
}
