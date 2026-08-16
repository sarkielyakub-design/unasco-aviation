const stats = [
  { value: '25+', label: 'Years of experience' },
  { value: '120+', label: 'Global destinations' },
  { value: '48K+', label: 'Tonnes moved yearly' },
  { value: '99.4%', label: 'On-time delivery' },
]

export function StatsBand() {
  return (
    <section className="border-y border-border bg-secondary">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-2 gap-px overflow-hidden px-4 sm:px-6 lg:grid-cols-4 lg:px-8">
        {stats.map((stat) => (
          <div key={stat.label} className="px-2 py-10 text-center lg:py-12">
            <p className="font-display text-4xl font-extrabold tracking-tight text-primary lg:text-5xl">
              {stat.value}
            </p>
            <p className="mt-2 text-sm font-medium text-muted-foreground">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
