import { test, expect } from '@playwright/test'
import mockMovie from './mocks/movie.mock'

test.describe('영화 상세 정보', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`/movies/${mockMovie.imdbID}`) // The Avengers
  })

  test('영화 상세 정보가 표시돼야 합니다', async ({ page }) => {
    // 제목 확인
    await expect(page.getByTestId('movie-title')).toHaveText(mockMovie.Title)

    // 줄거리 확인
    await expect(page.getByTestId('movie-plot')).toHaveText(mockMovie.Plot)

    // 포스터 이미지 확인
    const poster = page.getByTestId('movie-poster')
    await expect(poster).toBeVisible()
    await expect(poster).toHaveAttribute(
      'src',
      mockMovie.Poster.replace('SX300', 'SX700')
    )
  })

  test('존재하지 않는 영화는 에러 메시지가 표시돼야 합니다', async ({
    page
  }) => {
    await page.goto('/movies/invalid-movie-id')
    await expect(page.getByTestId('movie-not-found')).toHaveText(
      '영화를 찾을 수 없습니다.'
    )
  })
})
