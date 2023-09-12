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
      <script dangerouslySetInnerHTML={{
        __html: `
    (function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:3650474,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`}}
      />
    </>
  )
}



