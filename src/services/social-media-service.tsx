import React, { useContext, createContext } from "react"

const SocialMediaContext = createContext(null)

interface Links {
  name: string
  url: string
}

export const SocialMediaProvider: React.FC = ({ children }) => {
  const value: Links[] = [{ name: "Twitter", url: "https://twitter.com/thesoreon" }]
  return <SocialMediaContext.Provider value={value}>{children}</SocialMediaContext.Provider>
}

export const useSocialMedia = () => {
  return useContext(SocialMediaContext)
}
