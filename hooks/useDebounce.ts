import { useEffect, useRef, useState } from 'react'

function useDebounce<T>(value: T, delay?: number): { debouncedValue: T; cancel: () => void } {
  const [debouncedValue, setDebouncedValue] = useState<T>(value)

  const timeoutRef = useRef<number | null>(null)
  const cancel = () => {
    console.log('timeoutRef.current --> ', timeoutRef.current!)
    window.clearTimeout(timeoutRef.current!)
  }

  useEffect(() => {
    // const timer = setTimeout(() => {
    timeoutRef.current = window.setTimeout(() => {
      setDebouncedValue(value)
    }, delay || 500)

    return () => window.clearTimeout(timeoutRef.current!)
  }, [value, delay])

  return { debouncedValue, cancel }
}

export default useDebounce
