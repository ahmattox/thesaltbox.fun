import styles from './page.module.css'

import { Metadata } from 'next'

import * as Typography from '@/components/general/Typography'
import { Header } from '@/components/layout/Header'
import { CubeList } from '@/components/CubeList'
import { getCubes } from '@/data/getCubes'

export const metadata: Metadata = {
  title: 'Salt Box 2025 Cubes',
}

export default function Event2025Page() {
  const cubes = getCubes('2025')

  return (
    <div>
      <Header />

      <div className={styles.container}>
        <Typography.SecondaryHeading>
          2025 Event Cubes
        </Typography.SecondaryHeading>

        <CubeList cubes={cubes} />
      </div>
    </div>
  )
}
