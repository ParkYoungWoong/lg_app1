import '@testing-library/jest-dom'
import { describe, test, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import MovieSearch, { searchPlaceholder } from '../MovieSearch'

describe('MovieSearch 컴포넌트', () => {
  const mockOnChange = vi.fn()
  const mockOnSubmit = vi.fn()
  const defaultProps = {
    value: '',
    onChange: mockOnChange,
    onSubmit: mockOnSubmit
  }
  let user: ReturnType<typeof userEvent.setup>

  beforeEach(() => {
    vi.clearAllMocks()
    user = userEvent.setup()
  })

  test('입력 필드와 검색 버튼이 렌더링되어야 합니다', () => {
    render(<MovieSearch {...defaultProps} />)

    expect(screen.getByPlaceholderText(searchPlaceholder)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: '검색' })).toBeInTheDocument()
  })

  test('입력값이 변경되면 onChange 함수가 호출되어야 합니다', async () => {
    render(<MovieSearch {...defaultProps} />)

    const input = screen.getByPlaceholderText(searchPlaceholder)
    await user.type(input, '테스트 영화')

    expect(mockOnChange).toHaveBeenCalledWith('테스트 영화')
  })

  test('검색 버튼 클릭 시 onSubmit 함수가 호출되어야 합니다', async () => {
    render(<MovieSearch {...defaultProps} />)

    const button = screen.getByRole('button', { name: '검색' })
    await user.click(button)

    expect(mockOnSubmit).toHaveBeenCalled()
  })

  test('입력 필드에서 Enter키 입력 시 onSubmit 함수가 호출되어야 합니다', async () => {
    render(<MovieSearch {...defaultProps} />)

    const input = screen.getByPlaceholderText(searchPlaceholder)
    await user.type(input, '{Enter}')

    expect(mockOnSubmit).toHaveBeenCalled()
  })
})
