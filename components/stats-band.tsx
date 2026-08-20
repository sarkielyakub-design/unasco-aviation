'use client'

import { useEffect, useRef, useState } from 'react'
import { MapPin, Package, ShieldCheck, Trophy } from 'lucide-react'

const stats = [
  {
    value: 0,
    suffix: '+',
    label: 'Years of Operations',
    icon: Trophy,
  },
  {
    value: 2,
    suffix: '',
    displayValue: 'China • Nigeria',
    label: 'China–Nigeria Cargo Corridor',
    icon: MapPin,
  },
  {
    value: 3840,
    suffix: '+',
    label: 'Tonnes of Cargo Handled Annually',
    icon: Package,
  },
  {
    value: 99.4,
    suffix: '%',
    label: 'On-Time Delivery Rate',
    icon: ShieldCheck,
  },
]

function AnimatedNumber({
  value,
  suffix,
  start,
}: {
  value: number
  suffix: string
  start: boolean
}) {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!start) return

    const duration = 1800
    const startTime = performance.now()

    const animate = (time: number) => {
      const progress = Math.min((time - startTime) / duration, 1)

      // Smooth ease-out animation
      const eased = 1 - Math.pow(1 - progress, 4)

      setCurrent(value * eased)

      if (progress < 1) {
        requestAnimationFrame(animate)
      } else {
        setCurrent(value)
      }
    }

    requestAnimationFrame(animate)
  }, [start, value])

  const formatted =
    value % 1 !== 0
      ? current.toFixed(1)
      : Math.floor(current).toLocaleString()

  return (
    <>
      {formatted}
      {suffix}
    </>
  )
}

export function StatsBand() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const section = sectionRef.current

    if (!section) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      {
        threshold: 0.25,
      }
    )

    observer.observe(section)

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden border-y border-border bg-secondary"
    >
      {/* Subtle background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute left-1/4 top-0 h-40 w-40 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-40 w-40 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="relative mx-auto grid w-full max-w-7xl grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon

          return (
            <div
              key={stat.label}
              className={[
                'group relative flex flex-col items-center justify-center',
                'px-4 py-12 text-center sm:px-6 lg:py-14',
                'transition-all duration-700 ease-out',
                visible
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-8 opacity-0',
                'border-border',
                index < 2 ? 'border-b lg:border-b-0' : '',
                index % 2 === 0 ? 'border-r' : '',
                index < 3 ? 'lg:border-r' : 'lg:border-r-0',
              ].join(' ')}
              style={{
                transitionDelay: `${index * 120}ms`,
              }}
            >
              {/* Hover glow */}
              <div
                aria-hidden="true"
                className="absolute inset-4 rounded-3xl bg-primary/0 transition-all duration-500 group-hover:bg-primary/[0.04]"
              />

              {/* Icon */}
              <div className="relative mb-5 flex h-11 w-11 items-center justify-center rounded-2xl border border-primary/10 bg-background shadow-sm transition-all duration-500 group-hover:-translate-y-1 group-hover:border-primary/30 group-hover:shadow-lg">
                <Icon className="h-5 w-5 text-primary transition-transform duration-500 group-hover:scale-110" />
              </div>

              {/* Number */}
              <p className="relative font-display text-4xl font-extrabold tracking-tight text-primary sm:text-5xl lg:text-[3.25rem]">
                {stat.displayValue ? (
                  <span className="whitespace-nowrap">
                    {stat.displayValue}
                  </span>
                ) : (
                  <AnimatedNumber
                    value={stat.value}
                    suffix={stat.suffix}
                    start={visible}
                  />
                )}
              </p>

              {/* Label */}
              <p className="relative mt-3 max-w-[180px] text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground sm:text-sm">
                {stat.label}
              </p>

              {/* Bottom accent */}
              <div className="relative mt-5 h-0.5 w-8 overflow-hidden rounded-full bg-primary/20">
                <div
                  className="h-full w-full origin-left scale-x-0 rounded-full bg-primary transition-transform duration-700 group-hover:scale-x-100"
                  style={{
                    transitionDelay: `${index * 100}ms`,
                  }}
                />
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}