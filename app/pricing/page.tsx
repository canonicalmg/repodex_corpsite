export const metadata = {
  title: 'Repodex',
  description: 'Find and fix your bugs',
}

import Hero from '@/components/pricing_hero'
import Pricing from '@/components/pricing'
import Footer from '@/components/ui/footer'

export default function Home() {
  return (
    <>
      <Hero />
      <Pricing />
      <Footer />
    </>
  )
}



