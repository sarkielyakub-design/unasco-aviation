import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({
  className,
  inverted,
}: {
  className?: string;
  inverted?: boolean;
}) {
  return (
    <Link
      href="/"
      aria-label="UNASCO Aviation Limited"
      className={cn(
        "group flex shrink-0 items-center",
        className
      )}
    >
      {/* Logo Background */}
      <div
        className="
          flex
          items-center
          justify-center
          rounded-xl
          border
          border-white/10
          bg-[#12080A]/70
          px-3
          py-2
          shadow-[0_8px_30px_rgba(0,0,0,0.25)]
          backdrop-blur-xl
          transition-all
          duration-300
          group-hover:border-[#C9828D]/30
          group-hover:bg-[#7A2330]/40
          group-hover:shadow-[0_10px_35px_rgba(122,35,48,0.35)]
        "
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
            w-[115px]
            object-contain
            mix-blend-darken
            transition-all
            duration-300
            ease-out
            group-hover:scale-[1.03]
            sm:w-[130px]
            lg:w-[145px]
          "
        />
      </div>
    </Link>
  );
}