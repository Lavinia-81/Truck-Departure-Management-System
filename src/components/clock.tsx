"use client"

import { useState, useEffect } from "react"
import { format } from "date-fns"

export default function Clock() {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date())
    }, 1000)

    return () => {
      clearInterval(timer)
    }
  }, [])

  return (
    <div className="text-sm font-medium text-foreground tabular-nums w-40 text-center">
      <div>{format(time, "EEE, d MMM yyyy")}</div>
      <div>{format(time, "HH:mm:ss")}</div>
    </div>
  )
}
