'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Menu, X, ChevronRight, ArrowRight } from 'lucide-react'

import { cn } from '@/lib/utils'
import { navLinks } from '@/lib/site'
import { Logo } from '@/components/logo'
import { Button, buttonVariants } from '@/components/ui/button'

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'

/* =========================================================
   BRAND COLORS
========================================================= */

const MAROON = '#561923'
const MAROON_LIGHT = '#7A2330'
const MAROON_SOFT = '#F2C6CC'

/* =========================================================
   SITE HEADER
========================================================= */

export function SiteHeader() {
  const pathname = usePathname()
  const isHome = pathname === '/'

  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  /* =======================================================
     SCROLL DETECTION
  ======================================================= */

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24)
    }

    handleScroll()

    window.addEventListener('scroll', handleScroll, {
      passive: true,
    })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  /* =======================================================
     CLOSE MOBILE MENU WHEN ROUTE CHANGES
  ======================================================= */

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  /* =======================================================
     HEADER STATE
  ======================================================= */

  const solid = scrolled || !isHome

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-[100] w-full',
        'transition-all duration-500 ease-out',

        solid
          ? [
              'border-b border-neutral-200/80',
              'bg-white/95',
              'shadow-[0_4px_30px_rgba(0,0,0,0.08)]',
              'backdrop-blur-2xl',
            ]
          : [
              'bg-white',
              'shadow-[0_4px_25px_rgba(0,0,0,0.08)]',
            ],
      )}
    >
      {/* =====================================================
          HEADER CONTAINER
      ====================================================== */}

      <div
        className={cn(
          'mx-auto flex w-full max-w-[1800px] items-center',
          'gap-2 px-3 sm:px-4 lg:px-5 xl:px-6',
          'transition-all duration-500',

          solid
            ? 'h-[78px] lg:h-[82px]'
            : 'h-[82px] lg:h-[88px]',
        )}
      >
        {/* ===================================================
            UNASCO LOGO
        ==================================================== */}

        <div className="relative z-[110] shrink-0">
          <Logo
            className="
              scale-[0.90]
              transition-transform
              duration-300
              hover:scale-[0.93]
            "
          />
        </div>

        {/* ===================================================
            IATA BADGE
        ==================================================== */}

        <div
          className="
            hidden
            h-[50px]
            w-[76px]
            shrink-0
            items-center
            justify-center
            rounded-full
            border
            border-neutral-200
            bg-white
            px-2
            shadow-[0_4px_14px_rgba(0,0,0,0.10)]
            transition-all
            duration-300
            hover:-translate-y-0.5
            hover:shadow-[0_7px_20px_rgba(0,0,0,0.14)]
            lg:flex
          "
        >
          <Image
            src="/logos/iata.png"
            alt="IATA"
            width={90}
            height={55}
            priority
            className="
              h-auto
              max-h-[34px]
              w-auto
              max-w-[60px]
              object-contain
            "
          />
        </div>

        {/* ===================================================
            DESKTOP NAVIGATION

            IMPORTANT:
            This navigation now has a controlled width.
            It cannot expand underneath NANTA.
        ==================================================== */}

        <nav
          className="
            hidden
            min-w-0
            flex-1
            items-center
            justify-center
            lg:flex
          "
          aria-label="Primary navigation"
        >
          <div
            className="
              flex
              w-full
              max-w-[800px]
              min-w-0
              items-center
              justify-center
              gap-0
              rounded-full
              border
              border-neutral-200
              bg-white
              px-1
              py-1.5
              shadow-[0_4px_16px_rgba(0,0,0,0.08)]
            "
          >
            {navLinks.map((link) => {
              const active =
                link.href === '/'
                  ? pathname === '/'
                  : pathname.startsWith(link.href)

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? 'page' : undefined}
                  className={cn(
                    'relative',
                    'shrink-0',
                    'rounded-full',
                    'px-2 lg:px-2.5 xl:px-3',
                    'py-2.5',
                    'text-[12px] xl:text-[13px]',
                    'font-semibold',
                    'whitespace-nowrap',
                    'transition-all',
                    'duration-300',

                    active
                      ? [
                          'bg-[#561923]',
                          'text-white',
                          'shadow-md',
                        ]
                      : [
                          'text-neutral-800',
                          'hover:bg-[#F2C6CC]',
                          'hover:text-[#561923]',
                        ],
                  )}
                >
                  {link.label}
                </Link>
              )
            })}
          </div>
        </nav>

        {/* ===================================================
            RIGHT SIDE
        ==================================================== */}

        <div
          className="
            hidden
            shrink-0
            items-center
            gap-2
            lg:flex
          "
        >
          {/* =================================================
              NANTA BADGE
          ================================================== */}

          <div
            className="
              flex
              h-[50px]
              w-[76px]
              shrink-0
              items-center
              justify-center
              rounded-full
              border
              border-neutral-200
              bg-white
              px-2
              shadow-[0_4px_14px_rgba(0,0,0,0.10)]
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:shadow-[0_7px_20px_rgba(0,0,0,0.14)]
            "
          >
            <Image
              src="/logos/nanta.png"
              alt="NANTA"
              width={90}
              height={55}
              priority
              className="
                h-auto
                max-h-[34px]
                w-auto
                max-w-[60px]
                object-contain
              "
            />
          </div>

          {/* =================================================
              REQUEST A QUOTE
          ================================================== */}

          <Link
            href="/contact"
            className={cn(
              buttonVariants(),

              'flex',
              'h-[50px]',
              'min-w-[155px]',
              'shrink-0',
              'items-center',
              'justify-center',
              'gap-2',
              'rounded-full',
              'bg-[#561923]',
              'px-4',
              'text-[12px]',
              'font-semibold',
              'text-white',
              'shadow-[0_6px_18px_rgba(86,25,35,0.22)]',
              'transition-all',
              'duration-300',
              'hover:-translate-y-0.5',
              'hover:bg-[#7A2330]',
              'hover:shadow-[0_9px_24px_rgba(86,25,35,0.28)]',
            )}
          >
            <span>Request a Quote</span>

            <ArrowRight
              className="h-4 w-4"
              strokeWidth={2}
            />
          </Link>
        </div>

        {/* ===================================================
            MOBILE MENU
        ==================================================== */}

        <div className="relative z-[110] ml-auto lg:hidden">
          <Sheet
            open={open}
            onOpenChange={setOpen}
          >
            {/* =================================================
                MOBILE MENU BUTTON
            ================================================== */}

            <SheetTrigger
              render={
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  aria-label={
                    open
                      ? 'Close navigation menu'
                      : 'Open navigation menu'
                  }
                  aria-expanded={open}
                  className="
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-full
                    bg-[#561923]
                    p-0
                    text-white
                    shadow-md
                    transition-all
                    duration-300
                    hover:bg-[#7A2330]
                  "
                />
              }
            >
              {open ? (
                <X
                  className="pointer-events-none h-6 w-6"
                  strokeWidth={2}
                />
              ) : (
                <Menu
                  className="pointer-events-none h-6 w-6"
                  strokeWidth={2}
                />
              )}
            </SheetTrigger>

            {/* =================================================
                MOBILE SHEET
            ================================================== */}

            <SheetContent
              side="right"
              className="
                z-[200]
                flex
                h-full
                w-[90%]
                max-w-sm
                flex-col
                border-l
                border-neutral-200
                bg-white
                p-0
                shadow-2xl
              "
            >
              {/* =============================================
                  MOBILE HEADER
              ============================================== */}

              <SheetHeader
                className="
                  border-b
                  border-neutral-200
                  px-6
                  py-5
                "
              >
                <SheetTitle className="text-left">
                  <Logo />
                </SheetTitle>
              </SheetHeader>

              {/* =============================================
                  MOBILE NAVIGATION
              ============================================== */}

              <nav
                className="
                  flex
                  flex-1
                  flex-col
                  overflow-y-auto
                  px-5
                  py-6
                "
                aria-label="Mobile navigation"
              >
                <div className="space-y-1.5">
                  {navLinks.map((link) => {
                    const active =
                      link.href === '/'
                        ? pathname === '/'
                        : pathname.startsWith(link.href)

                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setOpen(false)}
                        aria-current={
                          active ? 'page' : undefined
                        }
                        className={cn(
                          'group flex w-full',
                          'items-center justify-between',
                          'rounded-xl',
                          'px-4 py-3.5',
                          'text-base font-semibold',
                          'transition-all duration-200',

                          active
                            ? [
                                'bg-[#561923]',
                                'text-white',
                                'shadow-md',
                              ]
                            : [
                                'text-neutral-700',
                                'hover:bg-[#F2C6CC]',
                                'hover:text-[#561923]',
                              ],
                        )}
                      >
                        <span>{link.label}</span>

                        <ChevronRight
                          className={cn(
                            'h-4 w-4',
                            'transition-transform duration-200',

                            active
                              ? 'text-white'
                              : [
                                  'text-neutral-300',
                                  'group-hover:translate-x-1',
                                  'group-hover:text-[#561923]',
                                ],
                          )}
                        />
                      </Link>
                    )
                  })}
                </div>

                {/* ===========================================
                    MOBILE PARTNERS
                ============================================ */}

                <div className="mt-8 grid grid-cols-2 gap-3">
                  {/* IATA */}

                  <div
                    className="
                      flex
                      h-[64px]
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-neutral-200
                      bg-white
                      px-3
                      shadow-sm
                    "
                  >
                    <Image
                      src="/logos/iata.png"
                      alt="IATA"
                      width={100}
                      height={60}
                      className="
                        h-auto
                        max-h-[40px]
                        w-auto
                        max-w-[72px]
                        object-contain
                      "
                    />
                  </div>

                  {/* NANTA */}

                  <div
                    className="
                      flex
                      h-[64px]
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-neutral-200
                      bg-white
                      px-3
                      shadow-sm
                    "
                  >
                    <Image
                      src="/logos/nanta.png"
                      alt="NANTA"
                      width={100}
                      height={60}
                      className="
                        h-auto
                        max-h-[40px]
                        w-auto
                        max-w-[72px]
                        object-contain
                      "
                    />
                  </div>
                </div>

                {/* ===========================================
                    MOBILE REQUEST QUOTE
                ============================================ */}

                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className={cn(
                    buttonVariants(),

                    'mt-6',
                    'flex',
                    'h-14',
                    'w-full',
                    'items-center',
                    'justify-center',
                    'gap-3',
                    'rounded-full',
                    'bg-[#561923]',
                    'font-semibold',
                    'text-white',
                    'shadow-lg',
                    'transition-all',
                    'duration-300',
                    'hover:bg-[#7A2330]',
                  )}
                >
                  <span>Request a Quote</span>

                  <ArrowRight
                    className="h-5 w-5"
                    strokeWidth={2}
                  />
                </Link>

                {/* ===========================================
                    MOBILE BRANDING
                ============================================ */}

                <div className="mt-auto pt-10">
                  <div
                    className="
                      border-t
                      border-neutral-200
                      pt-6
                    "
                  >
                    <p
                      className="
                        text-center
                        text-[10px]
                        font-bold
                        uppercase
                        tracking-[0.2em]
                        text-neutral-400
                      "
                    >
                      UNASCO Aviation Limited
                    </p>

                    <p
                      className="
                        mt-2
                        text-center
                        text-xs
                        text-neutral-400
                      "
                    >
                      Aviation • Cargo • Logistics • Hajj & Umrah
                    </p>
                  </div>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}