import styles from './LocalAmenities.module.css'

import * as Typography from '@/components/general/Typography'

export function LocalAmenities() {
  return (
    <div className={styles.container}>
      <div>
        <Typography.PrimaryHeading>Local Amenities</Typography.PrimaryHeading>
      </div>
    </div>
  )
}
