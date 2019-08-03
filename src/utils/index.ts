export const formatDate = (date: string) =>
  new Date(date).toLocaleDateString(typeof window !== "undefined" ? window.navigator.language : "en-EN")
export const createPostPath = (slug: string) => `/post${slug}`
