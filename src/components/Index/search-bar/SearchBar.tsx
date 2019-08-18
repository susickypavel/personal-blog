import React, { useEffect, useState, useRef } from "react"

import { Input, SearchingState, InputHolder, ClearButton } from "./__styles__"
import { useDebounce } from "@hooks/useDebounce"

interface Props {
  setFiltered(value: string): void
}

const SearchBar: React.FC<Props> = ({ setFiltered, children }) => {
  const input = useRef<HTMLInputElement>()
  const [searchedTerm, setTerm] = useState<string>()
  const [searching, setSearching] = useState(false)
  const debouncedSearchedTerm = useDebounce(searchedTerm, 500)

  const handleFocus = () => {
    input.current.focus()
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearching(true)
    setTerm(e.target.value)
  }

  const handleClick = () => {
    input.current.value = ""
    setSearching(false)
    setFiltered(null)
    setTerm("")
    handleFocus()
  }

  const disabled = !input.current || input.current.value === ""

  useEffect(() => {
    setSearching(false)
    setFiltered(searchedTerm)
  }, [debouncedSearchedTerm])

  return (
    <>
      <InputHolder>
        <Input type="text" onChange={handleChange} ref={input} />
        <ClearButton disabled={disabled} onBlur={handleFocus} onClick={handleClick}>
          x
        </ClearButton>
      </InputHolder>
      {searching ? <SearchingState>Searching...</SearchingState> : children}
    </>
  )
}

export default SearchBar
