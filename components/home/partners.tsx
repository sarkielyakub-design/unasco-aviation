const partners = [
  'SkyBridge Logistics',
  'AeroFreight Global',
  'Continental Cargo',
  'MeridianAir',
  'TransGlobe Shipping',
  'Falcon Handling',
]

export function Partners() {
  return (
    <section className="border-y border-border bg-background py-14">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          Trusted by leading partners worldwide
        </p>
        <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-6 sm:grid-cols-3 lg:grid-cols-6">
          {partners.map((partner) => (
            <div
              key={partner}
              className="flex items-center justify-center rounded-lg border border-border/70 bg-secondary/50 px-4 py-5 text-center text-sm font-semibold text-foreground/60 transition-colors hover:text-primary"
            >
              {partner}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
