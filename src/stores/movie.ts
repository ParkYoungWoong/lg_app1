import { create } from 'zustand'
import { combine } from 'zustand/middleware'

export interface Movie {
  imdbID: string
  Title: string
  Plot: string
  Poster: string
}
export type Movies = Movie[]

export const useMovieStore = create(
  combine(
    {
      searchTitle: '',
      movies: [] satisfies Movies as Movies,
      movie: null satisfies Movie | null as Movie | null
    },
    (set, get) => ({
      setSearchTitle(title: string) {
        set({ searchTitle: title })
      },
      async fetchMovies(): Promise<Movies> {
        const title = get().searchTitle
        const res = await fetch(
          `https://omdbapi.com/?apikey=7035c60c&s=${title}`
        )
        const { Search: movies } = await res.json()
        set({ movies })
        return movies
      },
      async fetchMovie(id: string): Promise<Movie | null> {
        const res = await fetch(`https://omdbapi.com/?apikey=7035c60c&i=${id}`)
        const movie = await res.json()
        if (movie.Response === 'False') {
          set({ movie: null })
          return null
        }
        set({ movie })
        return movie
      }
    })
  )
)
