import { useState, useEffect } from 'react'

export const searchPlaceholder = '영화 제목을 검색하세요!'

export default function MovieSearch({
  value,
  onChange,
  onSubmit
}: {
  value: string
  onChange: (value: string) => void
  onSubmit: () => void
}) {
  const [searchTitle, setSearchTitle] = useState(value)

  useEffect(() => {
    onChange(searchTitle)
  }, [searchTitle])

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter' && !e.nativeEvent.isComposing) {
      onSubmit()
    }
  }

  return (
    <div className="flex gap-2">
      <input
        className="grow rounded-md border-2 border-gray-300 p-2"
        placeholder={searchPlaceholder}
        name="search"
        value={searchTitle}
        onChange={e => setSearchTitle(e.target.value)}
        onKeyDown={handleKeyDown}
        data-testid="movie-search-input"
      />
      <button
        className="rounded-md bg-blue-500 px-4 py-2 text-white"
        onClick={onSubmit}
        data-testid="movie-search-button">
        검색
      </button>
    </div>
  )
}
