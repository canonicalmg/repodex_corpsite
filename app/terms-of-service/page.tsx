export const metadata = {
  title: 'Repodex',
  description: 'Find and fix your bugs',
}

import Hero from '@/components/pricing_hero'
import TermsOfService from '@/components/termsofservice'
import Footer from '@/components/ui/footer'

export default function Home() {
  return (
    <>
      <TermsOfService />
      <Footer />
    </>
  )
}



