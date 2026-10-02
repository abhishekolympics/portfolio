import { useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Mail, Github, Linkedin, Phone, ExternalLink, FileText, Copy, Check } from 'lucide-react'

const EMAIL = 'abhishek19980402@gmail.com'

function CopyToast({ visible }) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -10, scale: 0.9 }}
          transition={{ duration: 0.25 }}
          className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[999] flex items-center gap-3 px-5 py-3 rounded-2xl shadow-2xl"
          style={{
            background: 'linear-gradient(135deg, rgba(0,240,255,0.15), rgba(145,94,255,0.15))',
            border: '1px solid rgba(0,240,255,0.35)',
            backdropFilter: 'blur(20px)',
          }}
        >
          <div className="w-7 h-7 rounded-full bg-green-400/20 flex items-center justify-center">
            <Check size={14} className="text-green-400" />
          </div>
          <span className="text-white text-sm font-medium">Email copied to clipboard!</span>
          <span className="text-cyan-400 text-xs font-mono">{EMAIL}</span>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default function Contact() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [copied, setCopied] = useState(false)

  const copyEmail = useCallback(async (e) => {
    e.preventDefault()
    try {
      await navigator.clipboard.writeText(EMAIL)
    } catch {
      // Fallback for browsers without clipboard API
      const ta = document.createElement('textarea')
      ta.value = EMAIL
      ta.style.position = 'fixed'
      ta.style.opacity = '0'
      document.body.appendChild(ta)
      ta.select()
      document.execCommand('copy')
      document.body.removeChild(ta)
    }
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }, [])

  const contactLinks = [
    {
      icon: Mail,
      label: 'Email',
      value: EMAIL,
      action: copyEmail,
      color: '#ff6b9d',
      desc: 'Click to copy',
      copyable: true,
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 6394875951',
      href: 'tel:+916394875951',
      color: '#00f0ff',
      desc: 'Available on WhatsApp too',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/abhishekolympics',
      href: 'https://www.github.com/abhishekolympics',
      color: '#e2e8f0',
      desc: 'See my open source work',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/abhishekolympics',
      href: 'https://www.linkedin.com/in/abhishekolympics/',
      color: '#0a66c2',
      desc: 'Connect professionally',
    },
    {
      icon: FileText,
      label: 'Resume',
      value: 'View resume',
      href: 'https://bit.ly/4dkh0MP',
      color: '#ffd700',
      desc: 'Download my full resume',
    },
  ]

  return (
    <section id="contact" className="relative py-16 sm:py-24 px-4 sm:px-6" ref={ref}>
      <CopyToast visible={copied} />

      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[400px] rounded-full bg-cyan-500/5 blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <p className="text-pink-400 text-sm font-semibold tracking-widest uppercase mb-3">Let's Connect</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black">
            Get In <span className="gradient-text">Touch</span>
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-gray-400 text-center text-base sm:text-lg mb-10 sm:mb-14 max-w-xl mx-auto"
        >
          I'm currently open to new opportunities. Whether you have a project, a question,
          or just want to say hi — reach out through any channel below.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mb-10 sm:mb-14">
          {contactLinks.map((link, i) => {
            const isEmail = link.copyable
            const Tag = isEmail ? 'button' : 'a'
            const props = isEmail
              ? { onClick: copyEmail, type: 'button' }
              : { href: link.href, target: '_blank', rel: 'noopener noreferrer' }

            return (
              <motion.div
                key={link.label}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.08 }}
              >
                <Tag
                  {...props}
                  className="w-full glass rounded-2xl p-4 sm:p-6 flex flex-col gap-3 sm:gap-4 hover:scale-[1.03] transition-all duration-200 group text-left text-sm sm:text-base"
                  style={{ borderColor: `${link.color}20` }}
                >
                  <div className="flex items-center justify-between">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center"
                      style={{
                        background: `${link.color}15`,
                        border: `1px solid ${link.color}30`,
                        boxShadow: `0 0 16px ${link.color}20`,
                      }}
                    >
                      <link.icon size={22} style={{ color: link.color }} />
                    </div>
                    {isEmail ? (
                      <Copy
                        size={14}
                        className="text-gray-600 group-hover:text-gray-400 transition-colors duration-200"
                      />
                    ) : (
                      <ExternalLink
                        size={14}
                        className="text-gray-600 group-hover:text-gray-400 transition-colors duration-200"
                      />
                    )}
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 mb-1 font-medium uppercase tracking-wider">
                      {link.label}
                    </div>
                    <div
                      className="text-sm font-semibold truncate mb-1"
                      style={{ color: link.color }}
                    >
                      {link.value}
                    </div>
                    <div className="text-xs text-gray-500">{link.desc}</div>
                  </div>
                </Tag>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom CTA — copy email */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center"
        >
          <div className="inline-flex flex-col items-center gap-4">
            <p className="text-gray-500 text-sm">Prefer a direct line?</p>
            <motion.button
              onClick={copyEmail}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="relative px-6 sm:px-10 py-3 sm:py-4 rounded-xl font-bold text-black text-base sm:text-lg overflow-hidden flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20"
              style={{ background: 'linear-gradient(135deg, #00f0ff, #915eff)' }}
            >
              <AnimatePresence mode="wait" initial={false}>
                {copied ? (
                  <motion.span
                    key="copied"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    className="flex items-center gap-2"
                  >
                    <Check size={18} /> Copied!
                  </motion.span>
                ) : (
                  <motion.span
                    key="email"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    className="flex items-center gap-2"
                  >
                    <Copy size={16} /> {EMAIL}
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
            <p className="text-xs text-gray-600">Clicks copy the email address to your clipboard</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
