import { test, expect } from '@playwright/test'
import mockMovies, { searchTitle } from './mocks/movies.mock'

test.describe('영화 검색', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/movies')
  })

  test('영화를 검색할 수 있어야 합니다', async ({ page }) => {
    // 검색어 입력
    await page.getByTestId('movie-search-input').fill(searchTitle)

    // 검색 버튼 클릭
    await page.getByTestId('movie-search-button').click()

    // 검색 결과가 표시될 때까지 대기
    await page.waitForSelector('[data-testid="movie-item"]')

    // 검색 결과 확인
    const movieItems = await page.getByTestId('movie-item').all()
    expect(movieItems).toHaveLength(10)

    // 모든 영화 제목 텍스트 가져오기
    const movieTitles = await Promise.all(
      movieItems.map(item => item.textContent())
    )

    // Mock 데이터의 제목이 포함되어 있는지 확인
    expect(
      movieTitles.some(title => title?.includes(mockMovies[0].Title))
    ).toBeTruthy()
  })

  test('검색 결과가 없을 때 메시지를 표시해야 합니다', async ({ page }) => {
    // 존재하지 않는 영화 검색
    await page.getByTestId('movie-search-input').fill('존재하지 않는 영화..')
    await page.getByTestId('movie-search-button').click()

    // 메시지 확인
    await expect(page.getByTestId('no-results')).toBeVisible()
  })

  test('Enter 키로 검색할 수 있어야 합니다', async ({ page }) => {
    // 검색어 입력 후 Enter 키 입력
    await page.getByTestId('movie-search-input').fill(searchTitle)
    await page.keyboard.press('Enter')

    // 검색 결과가 표시될 때까지 대기
    await page.waitForSelector('[data-testid="movie-item"]')

    const movieItems = await page.getByTestId('movie-item').all()
    const movieTitles = await Promise.all(
      movieItems.map(item => item.textContent())
    )

    expect(
      movieTitles.some(title => title?.includes(mockMovies[0].Title))
    ).toBeTruthy()
  })

  test('영화 상세 페이지로 이동할 수 있어야 합니다', async ({ page }) => {
    // 영화 검색
    await page.getByTestId('movie-search-input').fill(searchTitle)
    await page.getByTestId('movie-search-button').click()

    // 검색 결과가 표시될 때까지 대기
    await page.waitForSelector('[data-testid="movie-item"]')

    // 첫 번째 영화 클릭
    await page.getByTestId('movie-item').first().click()

    // URL이 영화 상세 페이지인지 확인
    await expect(page).toHaveURL(/\/movies\/tt\d+/)

    // 영화 제목이 표시되는지 확인
    await expect(page.getByRole('heading')).toContainText(mockMovies[0].Title)
  })
})
