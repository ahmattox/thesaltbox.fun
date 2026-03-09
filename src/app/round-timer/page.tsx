import styles from './page.module.css'

import { useMemo } from 'react'
import { compact } from 'lodash'

import { RoundTimer } from '@/components/round-timer/RoundTimer'

import { getCubes } from '@/data/getCubes'

export default function RoundTimerPage() {
  const cubes = getCubes('2025')

  const cubeNames = useMemo(() => {
    return compact(cubes.map((cube) => cube.name))
  }, [cubes])

  return (
    <div className={styles.container}>
      <RoundTimer cubeNames={cubeNames} />
    </div>
  )
}
