import Link from 'next/link'
import { Plane } from 'lucide-react'
import { cn } from '@/lib/utils'

export function Logo({
  className,
  inverted = false,
}: {
  className?: string
  inverted?: boolean
}) {
  return (
    <Link href="/" className={cn('group flex items-center gap-2.5', className)}>
      <span className="flex size-9 items-center justify-center rounded-md bg-primary text-primary-foreground shadow-sm">
        <Plane className="size-5 -rotate-45" aria-hidden="true" />
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            'font-display text-lg font-extrabold tracking-tight',
            inverted ? 'text-white' : 'text-foreground',
          )}
        >
          UNAS<span className="text-primary">CO</span>
        </span>
        <span
          className={cn(
            'text-[10px] font-medium uppercase tracking-[0.2em]',
            inverted ? 'text-white/70' : 'text-muted-foreground',
          )}
        >
          Aviation Ltd
        </span>
      </span>
    </Link>
  )
}
