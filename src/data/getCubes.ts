import fs from 'node:fs'
import yaml from 'yaml'

interface Cube {
  name: string
  url: string
  designer: string | null
  designerURL: string | null
  imageURL: string
  description: string | null
}

const eventYears = {
  '2025': './src/data/2025-cubes.yml',
}

export function getCubes(year: keyof typeof eventYears) {
  const data = fs.readFileSync(eventYears[year]).toString()

  const cubes = yaml.parse(data)

  return cubes as Cube[]
}
