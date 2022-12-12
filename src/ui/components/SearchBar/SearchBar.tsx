import React, { useState } from "react"
import { SearchBarContainer } from "./SearchBar.styled"

interface ISearchBarProps {
  dataTestId?: string
  placeholder: string
  value?: string
  onChange: (value: string) => void
}

const SearchBar: React.FC<ISearchBarProps> = ({ dataTestId = "searchbar", placeholder, value, onChange }) => {
  const [inputValue, setInputValue] = useState<string>(value || "")

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    const _value = event.currentTarget.value
    setInputValue(_value)
    onChange(_value)
  }

  return <SearchBarContainer data-test-id={dataTestId} placeholder={placeholder} value={inputValue} onChange={handleChange} type="text" />
}

export default SearchBar
