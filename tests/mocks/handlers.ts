import { http, HttpResponse } from 'msw'
import mockMovies from './movies.mock'
import mockMovie from './movie.mock'

// handlers 배열은 모든 요청을 처리하는 핸들러 목록입니다.
export const handlers = [
  // 영화 검색 API
  http.get('https://omdbapi.com/', ({ request }) => {
    const url = new URL(request.url)
    const searchTitle = url.searchParams.get('s')
    const movieId = url.searchParams.get('i')

    // 상세 정보 요청
    if (movieId) {
      if (movieId) {
        return HttpResponse.json(mockMovie)
      }
      return HttpResponse.json({ Response: 'False' })
    }

    // 검색 요청
    if (searchTitle?.includes('avengers')) {
      return HttpResponse.json({ Search: mockMovies })
    }

    return HttpResponse.json({ Response: 'False' })
  })
]
