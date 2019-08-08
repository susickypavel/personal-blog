import { ImageSharpEdge } from "@generated/graphql.d"

export const getThumbnailForPost = (images: ImageSharpEdge[], searchedThumbnailName: string) => {
  return images.find(image => image.node.fluid.originalName === searchedThumbnailName)
}
