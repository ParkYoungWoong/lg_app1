import { create } from 'zustand'

export const useMovieStore = create((set, get) => ({
  searchTitle: '',
  movies: [],
  movie: null,
  setSearchTitle(title) {
    set({ searchTitle: title })
  },
  async fetchMovies() {
    const title = get().searchTitle
    const res = await fetch(`https://omdbapi.com/?apikey=7035c60c&s=${title}`)
    const { Search: movies } = await res.json()
    set({ movies })
    return movies
  },
  async fetchMovie(id) {
    const res = await fetch(`https://omdbapi.com/?apikey=7035c60c&i=${id}`)
    const movie = await res.json()
    if (movie.Response === 'False') {
      set({ movie: null })
      return null
    }
    set({ movie })
    return movie
  }
}))
