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
        h-[70px]
        w-[190px]
        shrink-0
        items-center
        justify-center
        rounded-full
        bg-[#561923]
        px-5
        shadow-sm
        transition-all
        duration-300
        ease-out
        hover:scale-[1.02]
        hover:shadow-md
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
          w-[145px]
          object-contain
          transition-transform
          duration-300
          ease-out
          group-hover:scale-[1.03]
        "
      />
    </Link>
  )
}