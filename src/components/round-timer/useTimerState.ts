'use client'

import { useCallback, useMemo } from 'react'
import { difference, random, uniqueId } from 'lodash'

import { usePersistentState } from '@/utils/usePersistentState'
import { parseLooseTime } from '@/utils/parseLooseTime'

interface TimerState {
  id: string
  label: string
  endTimeInput: string
}

interface InternalTimerState {
  timers: TimerState[]
  timerCount: number
}

const defaultState: InternalTimerState = {
  timers: [],
  timerCount: 0,
}

export function useTimerState(cubeNames: string[]) {
  const [state, setState] = usePersistentState<InternalTimerState>(
    'round-timers-state',
    defaultState,
  )

  const reset = useCallback(() => {
    setState(defaultState)
  }, [setState])

  const addTimer = useCallback(() => {
    const unusedCubeNames = difference(
      cubeNames,
      state.timers.map((timer) => timer.label),
    )

    if (state.timerCount < state.timers.length) {
      setState({
        ...state,
        timerCount: state.timerCount + 1,
      })
    } else {
      setState({
        ...state,
        timerCount: state.timerCount + 1,
        timers: [
          ...state.timers,
          {
            id: uniqueId(),
            label:
              unusedCubeNames[random(unusedCubeNames.length - 1)] ??
              cubeNames[random(cubeNames.length - 1)] ??
              'New Timer',
            endTimeInput: '12:00',
          },
        ],
      })
    }
  }, [cubeNames, setState, state])

  const removeTimer = useCallback(
    (index?: number) => {
      if (index == null) {
        setState({
          ...state,
          timerCount: state.timerCount - 1,
        })
      } else {
        setState({
          ...state,
          timers: state.timers.splice(index, 1),
          timerCount: state.timerCount - 1,
        })
      }
    },
    [setState, state],
  )

  const updateTimer = useCallback(
    (index: number, newValue: Partial<TimerState>) => {
      const timers = [...state.timers]
      timers[index] = { ...state.timers[index], ...newValue }
      setState({
        ...state,
        timers,
      })
    },
    [setState, state],
  )

  const exportTimers = useMemo(
    () =>
      state.timers.slice(0, state.timerCount).map((timer) => {
        const endTime = parseLooseTime(timer.endTimeInput)

        const now = new Date()
        const endDate =
          endTime != null
            ? new Date(
                now.getFullYear(),
                now.getMonth(),
                now.getDate(),
                endTime.hours,
                endTime.minutes,
              )
            : null

        return {
          ...timer,
          endDate,
        }
      }),
    [state.timerCount, state.timers],
  )

  return {
    timers: exportTimers,
    reset,
    addTimer,
    updateTimer,
    removeTimer,
  }
}
