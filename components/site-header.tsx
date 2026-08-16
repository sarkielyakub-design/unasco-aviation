'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Menu, Phone, X } from 'lucide-react'

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

export function SiteHeader() {
  const pathname = usePathname()
  const isHome = pathname === '/'

  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30)
    }

    onScroll()

    window.addEventListener('scroll', onScroll, {
      passive: true,
    })

    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  // Close mobile menu whenever route changes
  useEffect(() => {
    setOpen(false)
  }, [pathname])

  const solid = scrolled || !isHome
  const inverted = !solid

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-[100] w-full transition-all duration-500',
        solid
          ? 'border-b border-slate-200/70 bg-white/95 shadow-xl backdrop-blur-2xl'
          : 'bg-gradient-to-b from-black/70 via-black/30 to-transparent'
      )}
    >
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-5 sm:px-6 lg:h-24">

        {/* ========================================================= */}
        {/* LOGO */}
        {/* ========================================================= */}

        <div className="relative z-[110] shrink-0">
          <Logo inverted={inverted} />
        </div>

        {/* ========================================================= */}
        {/* DESKTOP NAVIGATION */}
        {/* ========================================================= */}

        <nav
          className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 backdrop-blur-xl lg:flex"
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
                className={cn(
                  'rounded-full px-5 py-2 text-sm font-semibold transition-all duration-300',

                  inverted
                    ? 'text-white/80 hover:bg-white/10 hover:text-white'
                    : 'text-slate-700 hover:bg-primary/10 hover:text-primary',

                  active &&
                    (inverted
                      ? 'bg-white/15 text-white'
                      : 'bg-primary text-white shadow-lg')
                )}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>

        {/* ========================================================= */}
        {/* DESKTOP RIGHT SIDE */}
        {/* ========================================================= */}

        <div className="hidden items-center gap-5 lg:flex">

          <a
            href="tel:+2348063332227"
            className={cn(
              'flex items-center gap-3 rounded-full px-4 py-2 transition',

              inverted
                ? 'text-white'
                : 'text-slate-700'
            )}
          >
            <Phone className="h-5 w-5 shrink-0 text-[#FF6B00]" />

            <div className="leading-tight">
              <p className="text-xs opacity-70">
                Sales Manager
              </p>

              <p className="font-semibold">
                +234 806 333 2227
              </p>
            </div>
          </a>

          <Link
            href="/contact"
            className={cn(
              buttonVariants(),
              'h-12 rounded-full bg-[#FF6B00] px-7 font-semibold shadow-xl transition-all duration-300 hover:scale-105 hover:bg-[#ff7d1f]'
            )}
          >
            Request a Quote
          </Link>
        </div>

        {/* ========================================================= */}
        {/* MOBILE MENU */}
        {/* ========================================================= */}

        <div className="relative z-[110] lg:hidden">

          <Sheet
            open={open}
            onOpenChange={setOpen}
          >

            {/* ===================================================== */}
            {/* MOBILE MENU BUTTON */}
            {/* ===================================================== */}

            <SheetTrigger
              render={
                <Button
                  type="button"
                  variant={inverted ? 'ghost' : 'outline'}
                  size="icon"
                  aria-label={open ? 'Close menu' : 'Open menu'}
                  aria-expanded={open}
                  className={cn(
                    'relative z-[120] flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-0 p-0 shadow-none',
                    'touch-manipulation',
                    'cursor-pointer',
                    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2',

                    inverted
                      ? 'text-white hover:bg-white/10'
                      : 'text-slate-900 hover:bg-slate-100'
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

            {/* ===================================================== */}
            {/* MOBILE SHEET */}
            {/* ===================================================== */}

            <SheetContent
              side="right"
              className={cn(
                'z-[200] w-[88%] max-w-sm p-0',
                'border-l border-slate-200 bg-white',
                'shadow-2xl'
              )}
            >

              {/* =================================================== */}
              {/* SHEET HEADER */}
              {/* =================================================== */}

              <SheetHeader className="border-b border-slate-200 p-6">

                <SheetTitle className="text-left">
                  <Logo />
                </SheetTitle>

              </SheetHeader>

              {/* =================================================== */}
              {/* NAVIGATION */}
              {/* =================================================== */}

              <nav
                className="flex flex-col gap-2 overflow-y-auto p-6"
                aria-label="Mobile navigation"
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
                      onClick={() => setOpen(false)}
                      className={cn(
                        'block w-full rounded-xl px-4 py-3 text-base font-semibold',
                        'transition-colors duration-200',
                        'touch-manipulation',

                        active
                          ? 'bg-primary text-white shadow-sm'
                          : 'text-slate-700 hover:bg-slate-100 active:bg-slate-200'
                      )}
                    >
                      {link.label}
                    </Link>
                  )
                })}

                {/* ================================================= */}
                {/* REQUEST QUOTE */}
                {/* ================================================= */}

                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className={cn(
                    buttonVariants(),
                    'mt-6 flex h-12 w-full items-center justify-center rounded-xl bg-[#FF6B00] font-semibold text-white shadow-lg hover:bg-[#ff7d1f]'
                  )}
                >
                  Request a Quote
                </Link>

                {/* ================================================= */}
                {/* PHONE CONTACT */}
                {/* ================================================= */}

                <a
                  href="tel:+2348063332227"
                  className="mt-8 block rounded-xl border border-slate-200 p-4 transition-colors hover:bg-slate-50 active:bg-slate-100"
                >
                  <div className="flex items-center gap-3">

                    <Phone className="h-5 w-5 shrink-0 text-[#FF6B00]" />

                    <div>
                      <p className="text-sm font-semibold text-slate-900">
                        Hafiz Umar Ballah
                      </p>

                      <p className="text-sm text-slate-500">
                        Sales Manager
                      </p>

                      <p className="mt-1 font-bold text-primary">
                        +234 806 333 2227
                      </p>
                    </div>

                  </div>
                </a>

              </nav>

            </SheetContent>

          </Sheet>

        </div>

      </div>
    </header>
  )
}