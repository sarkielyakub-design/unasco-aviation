import { HomeHero } from '@/components/home/home-hero'
import { StatsBand } from '@/components/stats-band'
import { CompanyProfile } from '@/components/home/company-profile'
import { ServicesOverview } from '@/components/home/services-overview'
import { CargoTracking } from '@/components/cargo-tracking'
import { WhyChooseUs } from '@/components/home/why-choose-us'
import { QuoteCta } from '@/components/quote-cta'
import { Partners } from '@/components/home/partners'
import { LatestNews } from '@/components/home/latest-news'

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <StatsBand />
      <CompanyProfile />
      <ServicesOverview />
      <CargoTracking />
      <WhyChooseUs />
      <QuoteCta />
      <Partners />
      <LatestNews />
    </>
  )
}
