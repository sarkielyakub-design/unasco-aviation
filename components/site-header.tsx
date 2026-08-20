'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Menu, X, ChevronRight } from 'lucide-react'

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
  const inverted = !solid

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
              'bg-gradient-to-b',
              'from-black/75',
              'via-black/35',
              'to-transparent',
            ]
      )}
    >

      {/* =====================================================
          HEADER CONTAINER
      ====================================================== */}

      <div
        className={cn(
          'mx-auto flex w-full max-w-7xl items-center',
          'justify-between',
          'px-5 sm:px-6 lg:px-8',
          'transition-all duration-500',

          solid
            ? 'h-[84px] lg:h-[92px]'
            : 'h-[88px] lg:h-[96px]'
        )}
      >

        {/* ===================================================
            LOGO
        ==================================================== */}

        <div className="relative z-[110] shrink-0">

          <Logo
            inverted={inverted}
            className="
              transition-transform
              duration-300
              hover:scale-[1.015]
            "
          />

        </div>


        {/* ===================================================
            DESKTOP NAVIGATION
        ==================================================== */}

        <nav
          className={cn(
            'hidden lg:flex',
            'items-center gap-1.5',
            'rounded-full',
            'px-2 py-2',
            'transition-all duration-500',

            solid
              ? [
                  'border border-neutral-200/80',
                  'bg-neutral-50/80',
                  'shadow-sm',
                ]
              : [
                  'border border-white/10',
                  'bg-white/5',
                  'backdrop-blur-xl',
                ]
          )}
          aria-label="Primary navigation"
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
                aria-current={
                  active ? 'page' : undefined
                }
                className={cn(
                  'relative rounded-full',
                  'px-5 py-2.5',
                  'text-sm font-semibold',
                  'transition-all duration-300',
                  'whitespace-nowrap',

                  inverted
                    ? [
                        'text-white/80',
                        'hover:bg-white/10',
                        'hover:text-white',
                      ]
                    : [
                        'text-neutral-700',
                        'hover:bg-primary/10',
                        'hover:text-primary',
                      ],

                  active &&
                    (inverted
                      ? [
                          'bg-white/15',
                          'text-white',
                          'shadow-sm',
                        ]
                      : [
                          'bg-primary',
                          'text-white',
                          'shadow-md',
                        ])
                )}
              >
                {link.label}
              </Link>
            )
          })}

        </nav>


        {/* ===================================================
            DESKTOP RIGHT SIDE
        ==================================================== */}

        <div className="hidden items-center lg:flex">

          <Link
            href="/contact"
            className={cn(
              buttonVariants(),

              'ml-4',
              'h-12',
              'rounded-full',
              'bg-primary',
              'px-7',
              'font-semibold',
              'text-white',
              'shadow-lg',
              'shadow-black/10',
              'transition-all duration-300',

              'hover:-translate-y-0.5',
              'hover:bg-[#561923]',
              'hover:shadow-xl'
            )}
          >
            Request a Quote
          </Link>

        </div>


        {/* ===================================================
            MOBILE MENU
        ==================================================== */}

        <div className="relative z-[110] lg:hidden">

          <Sheet
            open={open}
            onOpenChange={setOpen}
          >

            {/* =================================================
                MOBILE MENU TRIGGER
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
                  className={cn(
                    'relative z-[120]',
                    'flex h-11 w-11',
                    'items-center justify-center',
                    'rounded-full',
                    'border-0',
                    'p-0',
                    'shadow-none',
                    'touch-manipulation',
                    'transition-all duration-300',

                    inverted
                      ? [
                          'text-white',
                          'hover:bg-white/10',
                        ]
                      : [
                          'text-neutral-900',
                          'hover:bg-neutral-100',
                        ],

                    'focus-visible:outline-none',
                    'focus-visible:ring-2',
                    'focus-visible:ring-primary',
                    'focus-visible:ring-offset-2'
                  )}
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
              className={cn(
                'z-[200]',
                'flex h-full',
                'w-[90%] max-w-sm',
                'flex-col',
                'border-l border-neutral-200',
                'bg-white',
                'p-0',
                'shadow-2xl'
              )}
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
                          active
                            ? 'page'
                            : undefined
                        }
                        className={cn(
                          'group flex w-full',
                          'items-center justify-between',
                          'rounded-xl',
                          'px-4 py-3.5',
                          'text-base font-semibold',
                          'transition-all duration-200',
                          'touch-manipulation',

                          active
                            ? [
                                'bg-primary',
                                'text-white',
                                'shadow-md',
                              ]
                            : [
                                'text-neutral-700',
                                'hover:bg-neutral-100',
                                'hover:text-primary',
                                'active:bg-neutral-200',
                              ]
                        )}
                      >

                        <span>
                          {link.label}
                        </span>

                        <ChevronRight
                          className={cn(
                            'h-4 w-4',
                            'transition-transform duration-200',

                            active
                              ? 'text-white/70'
                              : [
                                  'text-neutral-300',
                                  'group-hover:translate-x-1',
                                  'group-hover:text-primary',
                                ]
                          )}
                        />

                      </Link>
                    )
                  })}

                </div>


                {/* ===========================================
                    MOBILE REQUEST QUOTE
                ============================================ */}

                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className={cn(
                    buttonVariants(),

                    'mt-7',
                    'flex h-13 w-full',
                    'items-center justify-center',
                    'rounded-xl',
                    'bg-primary',
                    'font-semibold',
                    'text-white',
                    'shadow-lg',
                    'transition-all duration-300',

                    'hover:bg-[#561923]',
                    'hover:shadow-xl'
                  )}
                >
                  Request a Quote
                </Link>


                {/* ===========================================
                    MOBILE BRANDING
                ============================================ */}

                <div className="mt-auto pt-10">

                  <div className="
                    border-t
                    border-neutral-200
                    pt-6
                  ">

                    <p className="
                      text-center
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-[0.2em]
                      text-neutral-400
                    ">
                      UNASCO Aviation Limited
                    </p>

                    <p className="
                      mt-2
                      text-center
                      text-xs
                      text-neutral-400
                    ">
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