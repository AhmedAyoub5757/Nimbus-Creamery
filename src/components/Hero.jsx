import { motion } from 'framer-motion'

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
}

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

function scrollToContact() {
  document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })
}

export default function Hero() {
  return (
    <section
      className="h-[70vh] min-h-[420px] flex items-center bg-cover bg-center px-6 sm:px-10 md:px-16"
      style={{ backgroundImage: "url('/hero-bg.png')" }}
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-xl"
      >
        <motion.h1
          variants={item}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-nimbus-cocoa leading-tight"
        >
          Small-batch ice cream, made for slow afternoons.
        </motion.h1>

        <motion.p
          variants={item}
          className="text-nimbus-cocoa/80 mt-4 text-base sm:text-lg max-w-md"
        >
          Three flavors. Zero shortcuts.
        </motion.p>

        <motion.button
          variants={item}
          onClick={scrollToContact}
          className="mt-8 bg-nimbus-cocoa text-white px-6 py-3 rounded-full text-sm sm:text-base font-medium hover:bg-nimbus-gold transition-colors"
        >
          Get in Touch
        </motion.button>
      </motion.div>
    </section>
  )
}