import { defineConfig, devices } from '@playwright/test'

export default defineConfig({
  testDir: './tests', // 테스트 파일이 있는 디렉토리
  fullyParallel: true, // 모든 테스트를 병렬로 실행합니다
  forbidOnly: !!process.env.CI, // CI 환경에서만 테스트를 실행합니다
  retries: process.env.CI ? 2 : 0, // CI 환경에서 실패한 테스트를 최대 2번까지 재시도합니다
  workers: process.env.CI ? 1 : undefined, // CI 환경에서 1개의 프로세스로 실행합니다
  reporter: 'html', // 테스트 결과를 HTML 파일로 저장합니다
  // 모든 테스트에 공통으로 적용되는 설정
  use: {
    baseURL: 'http://localhost:5173', // 테스트 실행 시 사용할 기본 URL
    trace: 'on-first-retry', // 첫 번째 재시도에서만 트레이스를 수집합니다
    video: 'on-first-retry' // 첫 번째 재시도에서만 비디오를 수집합니다
  },
  // 테스트 실행 시 사용할 브라우저 설정
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] }
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] }
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] }
    }
  ],
  // 테스트 실행 시 사용할 웹 서버 설정
  // GitHub Actions iimed out issue - https://github.com/microsoft/playwright/issues/16834
  webServer: {
    command: 'npm run dev', // 웹 서버 실행 명령어
    port: 5173, // 웹 서버 실행 시 사용할 포트
    reuseExistingServer: !process.env.CI, // CI 환경에서는 기존 서버를 재사용합니다
    timeout: 120 * 1000 // 웹 서버 실행 시간 제한
  }
})
