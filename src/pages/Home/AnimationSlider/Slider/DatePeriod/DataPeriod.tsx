import { Flex } from '@/components/Flex/Flex'
import styles from './DataPeriod.module.scss'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

interface DateProps {
    periodStart: number,
    periodEnd: number,
}

export const DatePeriod = ({ periodStart, periodEnd }: DateProps) => {
  const startRef = useRef<HTMLSpanElement>(null)
  const endRef = useRef<HTMLSpanElement>(null)
  const prevStart = useRef(periodStart)
  const prevEnd = useRef(periodEnd)

  useEffect(() => {
    if (!startRef.current || !endRef.current) return

    if (periodStart !== prevStart.current) {
      const duration = Math.min(1, Math.abs(periodStart - prevStart.current) * 0.2)
      
      gsap.fromTo(startRef.current, 
        { textContent: prevStart.current.toString() },
        {
          textContent: periodStart.toString(),
          duration: duration,
          ease: "power2.out",
          snap: { textContent: 1 },
          onUpdate: function() {
            if (startRef.current) {
              startRef.current.textContent = Math.floor(Number(this.targets()[0].textContent)).toString()
            }
          }
        }
      )
      prevStart.current = periodStart
    }

    if (periodEnd !== prevEnd.current) {
      const duration = Math.min(1, Math.abs(periodEnd - prevEnd.current) * 0.2)
      
      gsap.fromTo(endRef.current, 
        { textContent: prevEnd.current.toString() },
        {
          textContent: periodEnd.toString(),
          duration: duration,
          ease: "power2.out",
          snap: { textContent: 1 },
          onUpdate: function() {
            if (endRef.current) {
              endRef.current.textContent = Math.floor(Number(this.targets()[0].textContent)).toString()
            }
          }
        }
      )
      prevEnd.current = periodEnd
    }
  }, [periodStart, periodEnd])

  return (
    <Flex className={styles.periodWrapper}>
      <span ref={startRef}>{periodStart}</span>
      <span ref={endRef}>{periodEnd}</span>
    </Flex>
  )
}