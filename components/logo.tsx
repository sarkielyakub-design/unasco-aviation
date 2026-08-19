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
          w-[125px]
          object-contain
          transition-all
          duration-300
          ease-out
          group-hover:scale-[1.03]
          sm:w-[140px]
          lg:w-[155px]
        "
      />
    </Link>
  )
}