import { describe, test, expect, beforeEach } from 'vitest'
import { useMovieStore } from '@/stores/movie'

describe('Movie Store', () => {
  beforeEach(() => {
    useMovieStore.setState({
      inputText: '',
      searchTitle: ''
    })
  })

  test('setInputText 액션이 inputText를 업데이트해야 하고, searchTitle은 변경되지 않아야 합니다', () => {
    const newText = 'avengers'

    useMovieStore.getState().setInputText(newText)
    const state = useMovieStore.getState()

    expect(state.inputText).toBe(newText)
    expect(state.searchTitle).toBe('')
  })

  test('setSearchTitle 액션이 searchTitle을 업데이트해야 합니다', () => {
    const newTitle = 'avengers'

    useMovieStore.getState().setSearchTitle(newTitle)
    const state = useMovieStore.getState()

    expect(state.searchTitle).toBe(newTitle)
  })
})
