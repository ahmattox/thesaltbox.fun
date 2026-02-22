'use client'

import styles from './RoundTimer.module.css'

import { useEffect, useState } from 'react'
import classNames from 'classnames'

import { formatDuration } from '@/utils/formatDuration'

import { useTimerState } from './useTimerState'

/**
 * TODO
 *
 * Make labels editable
 * Add times
 * Make times editable
 * Show times as countdowns
 * Add a dynamic layout, maximizing space for the number of timers
 * Add reset with one of each cube
 * Style it
 */

interface Props {
  cubeNames: string[]
}

export function RoundTimer(props: Props) {
  const { cubeNames } = props

  const { timers, reset, addTimer, updateTimer, removeTimer } =
    useTimerState(cubeNames)

  const [darkMode, setDarkMode] = useState(false)

  const [now, setNow] = useState(() => new Date())

  useEffect(() => {
    function updateTime() {
      setNow(new Date())
    }

    const timeoutId = setInterval(updateTime)

    return () => {
      clearInterval(timeoutId)
    }
  })

  return (
    <div
      className={classNames(styles.container, {
        [styles.dark]: darkMode,
      })}
    >
      <div className={styles.controls}>
        <button
          className={styles.controlButton}
          type="button"
          onClick={() => addTimer()}
        >
          Add Timer
        </button>
        <button
          className={styles.controlButton}
          type="button"
          onClick={() => removeTimer()}
        >
          Remove Timer
        </button>
        <button
          className={styles.controlButton}
          type="button"
          onClick={() => reset()}
        >
          Reset
        </button>

        <label className={styles.checkboxLabel}>
          Dark{' '}
          <input
            className={styles.checkbox}
            type="checkbox"
            onChange={(event) => setDarkMode(event.currentTarget.checked)}
            checked={darkMode}
          />
        </label>
      </div>

      <div className={styles.timers}>
        {timers.map((timer, index) => {
          const seconds =
            timer.endDate != null
              ? (timer.endDate.getTime() - now.getTime()) / 1000
              : null

          return (
            <div
              key={timer.id}
              className={classNames(styles.timer, {
                [styles.urgent]: seconds != null && seconds < 60 * 5,
              })}
            >
              <div className={styles.timerName}>
                <input
                  type="text"
                  className={styles.timerNameInput}
                  value={timer.label}
                  onChange={(event) =>
                    updateTimer(index, { label: event.currentTarget.value })
                  }
                />
              </div>

              <div className={styles.timerCountDown}>
                {seconds != null ? formatDuration(seconds) : <>--:--</>}
              </div>

              <div className={styles.timerEndTime}>
                <label className={styles.timerEndTimeLabel}>
                  Round Ends At
                </label>

                <input
                  type="text"
                  className={styles.timerEndTimeInput}
                  value={timer.endTimeInput}
                  onChange={(event) =>
                    updateTimer(index, {
                      endTimeInput: event.currentTarget.value,
                    })
                  }
                />
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
