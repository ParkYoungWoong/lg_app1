import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router'
import MovieList, { emptyMessage } from '@/components/MovieList'
import mockMovies from '@/tests/movies.json'

describe('MovieList', () => {
  test('영화 목록이 없으면, 메시지를 렌더링해야 합니다', () => {
    render(
      <BrowserRouter>
        <MovieList movies={[]} />
      </BrowserRouter>
    )
    expect(screen.getByText(emptyMessage)).toBeInTheDocument()
  })

  test('영화 목록이 있으면, 목록을 렌더링해야 합니다', () => {
    render(
      <BrowserRouter>
        <MovieList movies={mockMovies} />
      </BrowserRouter>
    )
    const movieLinks = screen.getAllByRole('link')
    expect(movieLinks).toHaveLength(mockMovies.length)

    mockMovies.forEach((movie, index) => {
      expect(movieLinks[index]).toHaveTextContent(movie.Title)
      expect(movieLinks[index]).toHaveAttribute(
        'href',
        `/movies/${movie.imdbID}`
      )
    })
  })
})
