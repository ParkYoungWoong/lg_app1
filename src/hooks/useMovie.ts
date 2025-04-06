import { useQuery } from '@tanstack/react-query'
import { useMovieStore } from '@/stores/movie'
import type { Movies, Movie, MovieDetails } from '@/stores/movie'

export function useMovieSearch() {
  const title = useMovieStore(state => state.searchTitle)
  return useQuery<Movies>({
    queryKey: ['movies', title],
    queryFn: async () => {
      const res = await fetch(`https://omdbapi.com/?apikey=7035c60c&s=${title}`)
      const { Search: movies } = await res.json()
      return movies
    },
    enabled: Boolean(title),
    staleTime: 1000 * 60 * 60 // 1시간
  })
}

export function useMovieDetail(id?: string) {
  return useQuery<MovieDetails | null>({
    queryKey: ['movie', id],
    queryFn: async () => {
      const res = await fetch(`https://omdbapi.com/?apikey=7035c60c&i=${id}`)
      const movie = await res.json()
      if (movie.Response === 'False') return null
      return movie
    },
    staleTime: 1000 * 60 * 60 // 1시간
  })
}
