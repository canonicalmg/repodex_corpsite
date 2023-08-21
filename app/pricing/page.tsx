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
      <Pricing />
      <Footer />
      <script dangerouslySetInnerHTML={{
        __html: `
          var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
          (function(){
            var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
            s1.async=true;
            s1.src='https://embed.tawk.to/64e3246a94cf5d49dc6b9442/1h8bkcggn';
            s1.charset='UTF-8';
            s1.setAttribute('crossorigin','*');
            s0.parentNode.insertBefore(s1,s0);
          })();
        `
      }} />
    </>
  )
}



