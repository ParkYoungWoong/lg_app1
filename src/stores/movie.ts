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
      inputText: '',
      searchTitle: ''
    },
    set => ({
      setInputText(text: string) {
        set({ inputText: text })
      },
      setSearchTitle(title: string) {
        set({ searchTitle: title })
      }
    })
  )
)
