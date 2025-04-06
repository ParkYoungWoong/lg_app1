import MovieSearch from '@/components/MovieSearch'
import MovieList from '@/components/MovieList'
import { useMovieStore } from '@/stores/movie'
import { useMovieSearch } from '@/hooks/useMovie'

export default function MoviesPage() {
  return (
    <div className="container mx-auto px-3 py-5">
      <MovieSearchContainer />
      <MovieListContainer />
    </div>
  )
}

function MovieSearchContainer() {
  const inputText = useMovieStore(state => state.inputText)
  const setInputText = useMovieStore(state => state.setInputText)
  const setSearchTitle = useMovieStore(state => state.setSearchTitle)

  return (
    <MovieSearch
      value={inputText}
      onChange={setInputText}
      onSubmit={() => setSearchTitle(inputText)}
    />
  )
}
function MovieListContainer() {
  const { data: movies = [] } = useMovieSearch()
  return <MovieList movies={movies} />
}
