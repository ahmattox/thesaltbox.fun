interface Cube {
  name: string
  url: string
  designer: string | null
  designerURL: string | null
  imageURL: string
  description: string | null
}

export function getCubes() {
  // TODO: Load cubes from a YML file
  return [] as Cube[]
}
