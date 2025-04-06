import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router'
import Header, { links } from '@/components/Header'

describe('Header', () => {
  test('헤더 컴포넌트가 각 링크를 렌더링해야 합니다', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    )
    links.forEach(link => {
      expect(screen.getByText(link.label)).toBeInTheDocument()
    })
  })
})
