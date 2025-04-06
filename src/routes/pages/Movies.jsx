import MovieSearch from '@/components/MovieSearch'
import MovieList from '@/components/MovieList'
import { useMovieStore } from '@/stores/movie'

export default function MoviesPage() {
  return (
    <div className="container mx-auto px-3 py-5">
      <MovieSearchContainer />
      <MovieListContainer />
    </div>
  )
}

function MovieSearchContainer() {
  const searchTitle = useMovieStore(state => state.searchTitle)
  const setSearchTitle = useMovieStore(state => state.setSearchTitle)
  const fetchMovies = useMovieStore(state => state.fetchMovies)

  return (
    <MovieSearch
      value={searchTitle}
      onChange={setSearchTitle}
      onSubmit={fetchMovies}
    />
  )
}
function MovieListContainer() {
  const movies = useMovieStore(state => state.movies)
  return <MovieList movies={movies} />
}
