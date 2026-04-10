import styles from './FAQ.module.css'

import Link from 'next/link'

export function FAQ() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.question}>
          Event Structure and Draft Pod Organization
        </div>

        <p className={styles.answer}>
          Players will be organized into pods for each draft slot using the Cube
          tournament software.{' '}
          <Link href="/event-details/">
            Read more about how the event is structured.
          </Link>
        </p>
      </div>

      <div className={styles.item}>
        <div className={styles.question}>Which cubes will be played?</div>

        <p className={styles.answer}>
          The list has been selected from participant designed and submitted
          cubes. <Link href="/2025-event/">View last year&rsquo;s cubes</Link>.
        </p>
      </div>

      <div className={styles.item}>
        <div className={styles.question}>Local Amenities</div>

        <p className={styles.answer}>
          Visiting from out of town? Check out{' '}
          <a href="https://docs.google.com/document/d/18G72Y8J7KYxVT2_rzRQlG_LNvjAse6FCONMW6paaEAY/edit?tab=t.0">
            Andy&rsquo;s guide to local food and more
          </a>
          .
        </p>
      </div>

      <div className={styles.item}>
        <div className={styles.question}>Parking</div>
        <p className={styles.answer}>
          There&rsquo;s a large parking lot behind the church available to
          attendees.
        </p>
      </div>

      <div className={styles.item}>
        <div className={styles.question}>Accessible Entrances</div>
        <p className={styles.answer}>
          There is ramp and elevator access to the event space. For detailed
          info contact{' '}
          <a href="mailto:max.richards97@gmail.com">max.richards97@gmail.com</a>
          .
        </p>
      </div>

      <div className={styles.item}>
        <div className={styles.question}>Why &ldquo;The Salt Box&rdquo;?</div>
        <p className={styles.answer}>
          The event is named after the iconic &ldquo;Salt Boxes&rdquo; of
          Baltimore City. The city provides salt boxes filled with salt and sand
          for de-icing sidewalks to residents during the winter months.{' '}
          <a href="https://en.wikipedia.org/wiki/Baltimore_salt_box">
            More on Wikipedia
          </a>
        </p>
      </div>
    </div>
  )
}
