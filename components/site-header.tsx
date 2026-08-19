'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Menu, Phone, X, ChevronRight } from 'lucide-react'

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
   CONTACT INFORMATION
========================================================= */

const contacts = {
  ceo: {
    label: 'CEO',
    mobileLabel: 'Chief Executive Officer',
    phone: '+966 556 011 122',
    tel: 'tel:+966556011122',
    description: 'Executive & Corporate Enquiries',
  },

  seals: {
    label: 'Seals Manager',
    mobileLabel: 'Seals Manager',
    name: 'Hafiz Umar Ballah',
    phone: '+234 806 333 2227',
    tel: 'tel:+2348063332227',
  },
}

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
     HIDE HAJJ & UMRAH FROM NAVIGATION
  ======================================================= */

  const visibleNavLinks = navLinks.filter((link) => {
    const label = link.label.toLowerCase()

    return (
      !label.includes('hajj') &&
      !label.includes('umrah')
    )
  })

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
              'border-b border-slate-200/80',
              'bg-white/95',
              'shadow-[0_4px_30px_rgba(15,23,42,0.08)]',
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
            className="transition-transform duration-300 hover:scale-[1.015]"
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
                  'border border-slate-200/80',
                  'bg-slate-50/80',
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

          {visibleNavLinks.map((link) => {

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
                        'text-slate-700',
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
            DESKTOP CONTACT AREA
        ==================================================== */}

        <div className="hidden items-center gap-2 lg:flex">

          {/* -------------------------------------------------
              CEO
          -------------------------------------------------- */}

          <a
            href={contacts.ceo.tel}
            aria-label={`Call ${contacts.ceo.mobileLabel}`}
            className={cn(
              'group flex items-center gap-2.5',
              'rounded-full px-3 py-2',
              'transition-all duration-300',

              inverted
                ? [
                    'text-white',
                    'hover:bg-white/10',
                  ]
                : [
                    'text-slate-700',
                    'hover:bg-slate-100',
                  ]
            )}
          >

            <div
              className={cn(
                'flex h-9 w-9 shrink-0 items-center justify-center',
                'rounded-full',
                'transition-all duration-300',

                inverted
                  ? 'bg-white/10 group-hover:bg-white/15'
                  : 'bg-primary/10 group-hover:bg-primary/15'
              )}
            >
              <Phone
                className="h-4 w-4 text-[#FF6B00]"
                strokeWidth={2.2}
              />
            </div>

            <div className="leading-tight">

              <p
                className={cn(
                  'text-[9px] font-semibold uppercase',
                  'tracking-[0.16em]',
                  inverted
                    ? 'text-white/50'
                    : 'text-slate-400'
                )}
              >
                {contacts.ceo.label}
              </p>

              <p className="mt-0.5 text-xs font-bold">
                {contacts.ceo.phone}
              </p>

            </div>

          </a>

          {/* -------------------------------------------------
              DIVIDER
          -------------------------------------------------- */}

          <div
            className={cn(
              'h-8 w-px',
              inverted
                ? 'bg-white/15'
                : 'bg-slate-200'
            )}
            aria-hidden="true"
          />

          {/* -------------------------------------------------
              SEALS MANAGER
          -------------------------------------------------- */}

          <a
            href={contacts.seals.tel}
            aria-label={`Call ${contacts.seals.mobileLabel}`}
            className={cn(
              'group flex items-center gap-2.5',
              'rounded-full px-3 py-2',
              'transition-all duration-300',

              inverted
                ? [
                    'text-white',
                    'hover:bg-white/10',
                  ]
                : [
                    'text-slate-700',
                    'hover:bg-slate-100',
                  ]
            )}
          >

            <div
              className={cn(
                'flex h-9 w-9 shrink-0 items-center justify-center',
                'rounded-full',
                'transition-all duration-300',

                inverted
                  ? 'bg-white/10 group-hover:bg-white/15'
                  : 'bg-primary/10 group-hover:bg-primary/15'
              )}
            >
              <Phone
                className="h-4 w-4 text-[#FF6B00]"
                strokeWidth={2.2}
              />
            </div>

            <div className="leading-tight">

              <p
                className={cn(
                  'text-[9px] font-semibold uppercase',
                  'tracking-[0.16em]',
                  inverted
                    ? 'text-white/50'
                    : 'text-slate-400'
                )}
              >
                {contacts.seals.label}
              </p>

              <p className="mt-0.5 text-xs font-bold">
                {contacts.seals.phone}
              </p>

            </div>

          </a>

          {/* -------------------------------------------------
              REQUEST QUOTE
          -------------------------------------------------- */}

          <Link
            href="/contact"
            className={cn(
              buttonVariants(),

              'ml-2',
              'h-12',
              'rounded-full',
              'bg-[#FF6B00]',
              'px-7',
              'font-semibold',
              'text-white',
              'shadow-lg',
              'shadow-orange-500/20',
              'transition-all duration-300',
              'hover:-translate-y-0.5',
              'hover:bg-[#ff7d1f]',
              'hover:shadow-xl',
              'hover:shadow-orange-500/25'
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
                          'text-slate-900',
                          'hover:bg-slate-100',
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
                'border-l border-slate-200',
                'bg-white',
                'p-0',
                'shadow-2xl'
              )}
            >

              {/* =============================================
                  MOBILE HEADER
              ============================================== */}

              <SheetHeader
                className={cn(
                  'border-b border-slate-200',
                  'px-6 py-5'
                )}
              >

                <SheetTitle className="text-left">

                  <Logo />

                </SheetTitle>

              </SheetHeader>

              {/* =============================================
                  MOBILE NAVIGATION
              ============================================== */}

              <nav
                className="flex flex-1 flex-col overflow-y-auto px-5 py-6"
                aria-label="Mobile navigation"
              >

                <div className="space-y-1.5">

                  {visibleNavLinks.map((link) => {

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
                                'text-slate-700',
                                'hover:bg-slate-100',
                                'hover:text-primary',
                                'active:bg-slate-200',
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
                                  'text-slate-300',
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
                    'bg-[#FF6B00]',
                    'font-semibold',
                    'text-white',
                    'shadow-lg',
                    'transition-all duration-300',
                    'hover:bg-[#ff7d1f]',
                    'hover:shadow-xl'
                  )}
                >
                  Request a Quote
                </Link>

                {/* ===========================================
                    MOBILE CONTACTS
                ============================================ */}

                <div className="mt-8">

                  <div className="mb-4">

                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
                      Direct Contact
                    </p>

                    <p className="mt-1 text-sm text-slate-500">
                      Speak directly with our team
                    </p>

                  </div>

                  <div className="space-y-3">

                    {/* CEO */}

                    <a
                      href={contacts.ceo.tel}
                      className={cn(
                        'group block rounded-2xl',
                        'border border-slate-200',
                        'bg-slate-50',
                        'p-4',
                        'transition-all duration-300',
                        'hover:border-primary/30',
                        'hover:bg-white',
                        'hover:shadow-md',
                        'active:bg-slate-100'
                      )}
                    >

                      <div className="flex items-center gap-3">

                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/15">

                          <Phone
                            className="h-5 w-5 text-[#FF6B00]"
                            strokeWidth={2.2}
                          />

                        </div>

                        <div className="min-w-0">

                          <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400">
                            {contacts.ceo.mobileLabel}
                          </p>

                          <p className="mt-1 font-bold text-primary">
                            {contacts.ceo.phone}
                          </p>

                          <p className="mt-0.5 text-xs text-slate-500">
                            {contacts.ceo.description}
                          </p>

                        </div>

                      </div>

                    </a>

                    {/* Seals Manager */}

                    <a
                      href={contacts.seals.tel}
                      className={cn(
                        'group block rounded-2xl',
                        'border border-slate-200',
                        'bg-slate-50',
                        'p-4',
                        'transition-all duration-300',
                        'hover:border-primary/30',
                        'hover:bg-white',
                        'hover:shadow-md',
                        'active:bg-slate-100'
                      )}
                    >

                      <div className="flex items-center gap-3">

                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/15">

                          <Phone
                            className="h-5 w-5 text-[#FF6B00]"
                            strokeWidth={2.2}
                          />

                        </div>

                        <div className="min-w-0">

                          <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400">
                            {contacts.seals.mobileLabel}
                          </p>

                          <p className="mt-1 text-sm font-semibold text-slate-900">
                            {contacts.seals.name}
                          </p>

                          <p className="mt-0.5 font-bold text-primary">
                            {contacts.seals.phone}
                          </p>

                        </div>

                      </div>

                    </a>

                  </div>

                </div>

                {/* ===========================================
                    MOBILE FOOTER BRANDING
                ============================================ */}

                <div className="mt-auto pt-8">

                  <div className="border-t border-slate-200 pt-5">

                    <p className="text-center text-[10px] font-medium uppercase tracking-[0.18em] text-slate-400">
                      UNASCO Aviation Limited
                    </p>

                    <p className="mt-1 text-center text-xs text-slate-400">
                      Aviation • Cargo • Logistics
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