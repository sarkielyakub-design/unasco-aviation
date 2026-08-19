import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/lib/utils'

export function Logo({
  className,
}: {
  className?: string
  inverted?: boolean
}) {
  return (
    <Link
      href="/"
      aria-label="UNASCO Aviation Limited"
      className={cn(
        'group flex shrink-0 items-center',
        className
      )}
    >
      <Image
        src="/unasco-logo.png"
        alt="UNASCO Aviation Limited"
        width={473}
        height={134}
        priority
        className="
          block
          h-auto
          w-[190px]
          object-contain
          sm:w-[205px]
          lg:w-[225px]
          transition-transform
          duration-300
          group-hover:scale-[1.02]
        "
      />
    </Link>
  )
}