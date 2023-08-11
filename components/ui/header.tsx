import Link from 'next/link'
import MobileMenu from './mobile-menu'
import logo from '@/public/images/logo_white.png';
import Image from 'next/image'

export default function Header() {
  return (
    <header className="header-fixed z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-17">
          {/* Site branding */}
          <div className="shrink-0 mr-4">
            <div className="flex justify-center items-center h-full">
              <Link href="/">
                <Image 
                    data-aos="fade-up" 
                    src={logo} 
                    alt="Logo" 
                    height={50} 
                  />
              </Link>
            </div>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop sign in links */}
            <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                <Link
                  href="https://app.repodex.ai/login"
                  className="font-medium text-purple-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  Sign in
                </Link>
              </li>
              <li>
                <Link href="https://app.repodex.ai/register" className="btn-sm text-white bg-purple-600 hover:bg-purple-700 ml-3">
                  Sign up
                </Link>
              </li>
              <li>
                <Link
                  href="https://repodex.ai/pricing"
                  className="font-medium text-purple-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  Pricing
                </Link>
              </li>
            </ul>
          </nav>

          <MobileMenu />

        </div>
      </div>
    </header>
  )
}
