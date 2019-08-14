import { useEffect, useState } from "react"

export function useDebounce(searchedString: string, timing: number) {
  const [debouncedValue, setValue] = useState(searchedString)

  useEffect(() => {
    const handler = setTimeout(() => {
      setValue(searchedString)
    }, timing)

    return () => {
      clearTimeout(handler)
    }
  }, [searchedString])

  return debouncedValue
}
