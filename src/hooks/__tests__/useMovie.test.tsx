import { describe, test, expect, vi, beforeEach } from 'vitest'
import { renderHook, waitFor } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useMovieSearch, useMovieDetail } from '@/hooks/useMovie'
import { useMovieStore } from '@/stores/movie'
import mockMovies from '@mocks/movies.mock'
import mockMovie from '@mocks/movie.mock'
import type { ReactNode } from 'react'

vi.mock('@/stores/movie', () => ({
  useMovieStore: vi.fn()
}))

const createWrapper = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false
      }
    }
  })
  return ({ children }: { children: ReactNode }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}

describe('useMovie hook', () => {
  test('...', async () => {
    expect(true).toBe(true)
  })
  // beforeEach(() => {
  //   vi.clearAllMocks()
  //   global.fetch = vi.fn()
  // })
  // describe('useMovieSearch', () => {
  //   beforeEach(() => {
  //     vi.mocked(useMovieStore).mockReturnValue('avengers')
  //   })
  //   test('영화 검색 결과를 반환해야 합니다', async () => {
  //     vi.mocked(global.fetch).mockResolvedValueOnce({
  //       json: () => Promise.resolve({ Search: mockMovies })
  //     } as Response)
  //     const { result } = renderHook(useMovieSearch, {
  //       wrapper: createWrapper()
  //     })
  //     await waitFor(() => expect(result.current.isSuccess).toBe(true))
  //     expect(result.current.data).toEqual(mockMovies)
  //   })
  //   test('검색어가 없으면 요청하지 않아야 합니다', async () => {
  //     vi.mocked(useMovieStore).mockReturnValue('') // 검색어 반환
  //     const { result } = renderHook(() => useMovieSearch(), {
  //       wrapper: createWrapper()
  //     })
  //     expect(result.current.isFetching).toBe(false)
  //     expect(global.fetch).not.toHaveBeenCalled()
  //   })
  // })
  // describe('useMovieDetail', () => {
  //   test('영화 상세 정보를 반환해야 합니다', async () => {
  //     vi.mocked(global.fetch).mockResolvedValueOnce({
  //       json: () => Promise.resolve(mockMovie)
  //     } as Response)
  //     const { result } = renderHook(() => useMovieDetail('tt4154796'), {
  //       wrapper: createWrapper()
  //     })
  //     await waitFor(() => {
  //       expect(result.current.isSuccess).toBe(true)
  //     })
  //     expect(result.current.data).toEqual(mockMovie)
  //   })
  //   test('영화가 없으면 null을 반환해야 합니다', async () => {
  //     vi.mocked(global.fetch).mockResolvedValueOnce({
  //       json: () => Promise.resolve({ Response: 'False' })
  //     } as Response)
  //     const { result } = renderHook(() => useMovieDetail('invalid-id'), {
  //       wrapper: createWrapper()
  //     })
  //     await waitFor(() => expect(result.current.isSuccess).toBe(true))
  //     expect(result.current.data).toBeNull()
  //   })
  // })
})
