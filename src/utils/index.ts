export const formatDate = (date: string) =>
  new Date(date).toLocaleDateString(window ? window.navigator.language : "en-EN")
export const createPostPath = (id: string) => `/post/${id}`
