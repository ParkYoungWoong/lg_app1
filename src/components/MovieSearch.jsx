import { useState, useEffect } from 'react'

export default function MovieSearch({ value, onChange, onSubmit }) {
  const [searchTitle, setSearchTitle] = useState(value)

  useEffect(() => {
    onChange(searchTitle)
  }, [searchTitle])

  function handleKeyDown() {
    if (e.key === 'Enter' && !e.nativeEvent.isComposing) {
      onSubmit()
    }
  }

  return (
    <div className="flex gap-2">
      <input
        className="grow rounded-md border-2 border-gray-300 p-2"
        placeholder="영화 제목을 검색하세요!"
        name="search"
        value={searchTitle}
        onChange={e => setSearchTitle(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button
        className="rounded-md bg-blue-500 px-4 py-2 text-white"
        onClick={onSubmit}>
        검색
      </button>
    </div>
  )
}
