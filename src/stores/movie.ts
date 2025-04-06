import { create } from 'zustand'
import { combine } from 'zustand/middleware'

export interface Movie {
  Title: string
  Year: string
  imdbID: string
  Type: string
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
