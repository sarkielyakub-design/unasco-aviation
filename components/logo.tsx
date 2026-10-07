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
        `
        group
        flex
        h-[74px]
        w-[220px]
        shrink-0
        items-center
        justify-center
        overflow-hidden
        rounded-full
        bg-[#561923]
        px-2
        shadow-[0_5px_18px_rgba(86,25,35,0.18)]
        transition-all
        duration-300
        ease-out
        hover:shadow-[0_8px_24px_rgba(86,25,35,0.24)]
        `,
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
          w-full
          max-w-[208px]
          object-contain
          transition-transform
          duration-300
          ease-out
          group-hover:scale-[1.02]
        "
      />
    </Link>
  )
}