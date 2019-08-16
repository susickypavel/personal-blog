import React, { useEffect, useState } from "react"

import { Input } from "./__styles__"
import { useDebounce } from "@hooks/useDebounce"

interface Props {
  setFiltered(value: string): void
}

const SearchBar: React.FC<Props> = ({ setFiltered }) => {
  const [searchedTerm, setTerm] = useState<string>()
  const debouncedSearchedTerm = useDebounce(searchedTerm, 500)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setTerm(e.target.value)

  useEffect(() => {
    setFiltered(searchedTerm)
  }, [debouncedSearchedTerm])

  return <Input type="text" onChange={handleChange} />
}

export default SearchBar
