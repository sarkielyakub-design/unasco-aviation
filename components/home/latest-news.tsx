import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, CalendarDays } from 'lucide-react'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'

const news = [
  {
    image: '/news-new-route.png',
    category: 'Network',
    date: 'July 18, 2026',
    title: 'UNASCO launches new weekly freighter route to the Gulf',
    excerpt:
      'A new scheduled service strengthens capacity between West Africa and the Middle East for time-critical cargo.',
  },
  {
    image: '/news-warehouse-tech.png',
    category: 'Innovation',
    date: 'June 30, 2026',
    title: 'Smart warehousing upgrade brings real-time inventory visibility',
    excerpt:
      'Our expanded facility now features automated tracking and digital dashboards for full supply-chain transparency.',
  },
  
]

export function LatestNews() {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Newsroom
            </span>
            <h2 className="mt-4 text-balance font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
              Latest news &amp; insights
            </h2>
          </div>
          <Link
            href="#"
            className={cn(buttonVariants({ variant: 'outline' }), 'h-11 gap-2 px-5')}
          >
            View all news
            <ArrowRight className="size-4" />
          </Link>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {news.map((article) => (
            <article
              key={article.title}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-background transition-shadow hover:shadow-xl"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={article.image || "/placeholder.svg"}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                  {article.category}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <p className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
                  <CalendarDays className="size-3.5" />
                  {article.date}
                </p>
                <h3 className="mt-3 text-balance font-display text-lg font-bold leading-snug text-foreground transition-colors group-hover:text-primary">
                  {article.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {article.excerpt}
                </p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                  Read more
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
