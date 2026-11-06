import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useCartStore } from '../store/cartStore'

export default function Navbar() {
  const itemCount = useCartStore((state) => state.itemCount)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center">
      <motion.nav
        initial={false}
        animate={scrolled ? 'pill' : 'bar'}
        variants={{
          bar: {
            marginTop: 0,
            maxWidth: '100%',
            borderRadius: 0,
            backgroundColor: 'rgba(255,255,255,0)',
            boxShadow: '0 0px 0px rgba(0,0,0,0)',
            paddingLeft: 32,
            paddingRight: 32,
            paddingTop: 16,
            paddingBottom: 16,
          },
          pill: {
            marginTop: 12,
            maxWidth: 672,
            borderRadius: 9999,
            backgroundColor: 'rgba(255,255,255,0.7)',
            boxShadow: '0 10px 30px rgba(0,0,0,0.12)',
            paddingLeft: 20,
            paddingRight: 20,
            paddingTop: 10,
            paddingBottom: 10,
          },
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className="flex items-center justify-between w-full mx-4 sm:mx-6 backdrop-blur-md"
      >
        {/* Logo */}
        <Link to="/" className="flex items-center shrink-0">
          <motion.img
            src="/logo.png"
            alt="Nimbus Creamery"
            animate={{ height: scrolled ? 28 : 36 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          />
        </Link>

        {/* Right side: Contact + Cart */}
        <div className="flex items-center gap-4 sm:gap-6">
          <Link
            to="/contact"
            className="text-sm sm:text-base text-nimbus-cocoa hover:text-nimbus-gold transition-colors"
          >
            Contact
          </Link>

          <Link to="/cart" className="relative text-nimbus-cocoa">
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              animate={{ height: scrolled ? 20 : 24, width: scrolled ? 20 : 24 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.8}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 1.994-4.693 2.609-7.164.139-.558-.306-1.085-.881-1.085H5.106M7.5 14.25L5.106 5.272M7.5 14.25L5.25 16.5m14.25-9.75l-2.25 9.75m0 0a3 3 0 100 6 3 3 0 000-6zm-9 0a3 3 0 100 6 3 3 0 000-6z"
              />
            </motion.svg>
            {itemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-nimbus-gold text-white text-[10px] font-semibold rounded-full h-4 w-4 flex items-center justify-center">
                {itemCount}
              </span>
            )}
          </Link>
        </div>
      </motion.nav>
    </div>
  )
}