import React, { useEffect, useState } from "react"

import { Input } from "./__styles__"
import { useDebounce } from "@hooks/useDebounce"

const SearchBar: React.FC = () => {
  const [searchedTerm, setTerm] = useState<string>()
  const debouncedSearchedTerm = useDebounce(searchedTerm, 500)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setTerm(e.target.value)

  useEffect(() => {
    console.log("Searched")
  }, [debouncedSearchedTerm])

  return <Input type="text" onChange={handleChange} />
}

export default SearchBar
