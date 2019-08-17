import React, { useEffect, useState } from "react"

import { Input, SearchingState } from "./__styles__"
import { useDebounce } from "@hooks/useDebounce"

interface Props {
  setFiltered(value: string): void
}

const SearchBar: React.FC<Props> = ({ setFiltered, children }) => {
  const [searchedTerm, setTerm] = useState<string>()
  const [searching, setSearching] = useState(false)
  const debouncedSearchedTerm = useDebounce(searchedTerm, 500)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearching(true)
    setTerm(e.target.value)
  }

  useEffect(() => {
    setSearching(false)
    setFiltered(searchedTerm)
  }, [debouncedSearchedTerm])

  return (
    <>
      <Input type="text" onChange={handleChange} />
      {searching ? <SearchingState>Searching...</SearchingState> : children}
    </>
  )
}

export default SearchBar
