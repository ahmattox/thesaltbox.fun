import styles from './CubeList.module.css'

const cornerWidth = 30
const cornerHeight = 30

interface Props {
  cubes: {
    name: string
    url: string
    designer: string | null
    designerURL: string | null
    imageURL: string
    description: string | null
  }[]
}

export function CubeList(props: Props) {
  const { cubes } = props

  return (
    <div className={styles.cubes}>
      {cubes.map((cube) => (
        <div key={cube.name} className={styles.cube}>
          <a href={cube.url} className={styles.cubeMain}>
            <img src={cube.imageURL} className={styles.image} alt="" />

            <div className={styles.details}>
              <div className={styles.name}>{cube.name}</div>

              <div className={styles.description}>{cube.description}</div>
            </div>

            <svg
              className={styles.cornerBevel}
              width={cornerWidth}
              height={cornerHeight}
              viewBox={`0 0 ${cornerWidth} ${cornerHeight}`}
            >
              <polygon
                points={`0,0 ${cornerWidth},0 ${cornerWidth},${cornerHeight}`}
                fill="var(--background-color)"
              />
              <line
                x1="0"
                y1="0"
                x2={cornerWidth}
                y2={cornerHeight}
                strokeWidth={2}
                stroke="var(--text-color)"
              />
            </svg>
          </a>
          {cube.designerURL != null ? (
            <div className={styles.designer}>
              <a className={styles.designerLink} href={cube.designerURL}>
                - {cube.designer}
              </a>
            </div>
          ) : cube.designer != null ? (
            <div className={styles.designer}>- {cube.designer}</div>
          ) : null}
        </div>
      ))}
    </div>
  )
}
