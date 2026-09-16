import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { SECTION_DATA } from './GalaxyScene'

const NAV_LINKS = [
  { label: 'About',        index: 1 },
  { label: 'Skills',       index: 2 },
  { label: 'Experience',   index: 3 },
  { label: 'Achievements', index: 4 },
  { label: 'Contact',      index: 5 },
]

export default function Navbar({ currentSection, onNavigate }) {
  const [open, setOpen] = useState(false)
  const color = SECTION_DATA[currentSection].color

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 py-4"
      style={{
        background: 'rgba(5,8,22,0.6)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: `1px solid ${color}18`,
        transition: 'border-color 0.8s ease',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Logo */}
        <motion.button
          onClick={() => onNavigate(0)}
          className="text-lg sm:text-xl font-black shimmer-text"
          whileHover={{ scale: 1.05 }}
        >
          AKS
        </motion.button>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-4 lg:gap-7">
          {NAV_LINKS.map((link) => (
            <li key={link.index}>
              <button
                onClick={() => onNavigate(link.index)}
                className="text-xs md:text-sm transition-colors duration-200 relative group"
                style={{ color: currentSection === link.index ? color : '#9ca3af' }}
              >
                {link.label}
                <span
                  className="absolute -bottom-1 left-0 h-px transition-all duration-300"
                  style={{
                    width: currentSection === link.index ? '100%' : '0%',
                    background: color,
                  }}
                />
              </button>
            </li>
          ))}
        </ul>

        {/* Resume CTA */}
        <a
          href="https://drive.google.com/file/d/1ysj3l8xNOufZDf9ZeeQJiGZHrhYqdk2p/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex items-center gap-2 px-3 md:px-4 py-1 md:py-1.5 rounded-lg border text-xs md:text-sm font-medium transition-all duration-200"
          style={{ borderColor: `${color}50`, color: color }}
        >
          Resume
        </a>

        {/* Mobile burger */}
        <button className="md:hidden text-white p-1" onClick={() => setOpen(!open)}>
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-white/5"
            style={{ background: 'rgba(5,8,22,0.95)' }}
          >
            <ul className="flex flex-col p-4 gap-3">
              {NAV_LINKS.map((link) => (
                <li key={link.index}>
                  <button
                    onClick={() => { onNavigate(link.index); setOpen(false) }}
                    className="text-gray-300 hover:text-white text-sm md:text-base transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li>
                <a
                  href="https://drive.google.com/file/d/1ysj3l8xNOufZDf9ZeeQJiGZHrhYqdk2p/view?usp=sharing"
                  target="_blank" rel="noopener noreferrer"
                  className="inline-flex text-xs md:text-sm px-3 md:px-4 py-2 rounded-lg border border-white/20 text-gray-300"
                >
                  Resume
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
