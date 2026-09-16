import { useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import {
  Github, Linkedin, Mail, Phone, FileText,
  Code2, Server, Cloud, Cpu, Trophy, Medal, Star,
  Copy, Check, ExternalLink, Briefcase, Calendar,
} from 'lucide-react'

const EMAIL = 'abhishek19980402@gmail.com'

// ── Home ─────────────────────────────────────────────────────────────────────

function HomeContent({ navigate }) {
  return (
    <div className="flex flex-col gap-4">
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }}>
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-400/30 bg-cyan-400/5 text-cyan-400 text-xs font-medium">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          Available for opportunities
        </span>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
        className="text-4xl md:text-5xl font-black leading-tight"
      >
        Hi, I'm <span className="gradient-text">Abhishek</span>
      </motion.h1>

      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.15 }}
        className="text-lg font-semibold text-cyan-400 h-7"
      >
        <TypeAnimation
          sequence={['Full Stack Engineer', 2000, 'Node.js Expert', 2000, 'React Developer', 2000, 'AWS Architect', 2000]}
          wrapper="span" speed={50} repeat={Infinity}
        />
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
        className="text-gray-400 text-sm leading-relaxed max-w-lg"
      >
        Building production-ready web apps end-to-end — scalable APIs, event-driven microservices, and polished React UIs.
        I care deeply about reliability, performance, and real-world impact.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }}
        className="flex flex-wrap gap-3"
      >
        <button
          onClick={() => navigate(5)}
          className="px-6 py-2.5 rounded-xl font-semibold text-black text-sm hover:scale-105 transition-all shadow-lg shadow-cyan-500/20"
          style={{ background: 'linear-gradient(135deg, #00f0ff, #915eff)' }}
        >
          Get In Touch
        </button>
        <a
          href="https://drive.google.com/file/d/1ysj3l8xNOufZDf9ZeeQJiGZHrhYqdk2p/view?usp=sharing"
          target="_blank" rel="noopener noreferrer"
          className="px-6 py-2.5 rounded-xl font-semibold text-white border border-white/20 hover:border-white/40 text-sm hover:scale-105 transition-all glass"
        >
          Resume
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
        className="flex items-center gap-3"
      >
        {[
          { icon: Github,   href: 'https://www.github.com/abhishekolympics',         label: 'GitHub' },
          { icon: Linkedin, href: 'https://www.linkedin.com/in/abhishekolympics/',    label: 'LinkedIn' },
          { icon: Mail,     href: 'mailto:abhishek19980402@gmail.com',               label: 'Email' },
        ].map(({ icon: Icon, href, label }) => (
          <a
            key={label} href={href} target="_blank" rel="noopener noreferrer"
            className="w-9 h-9 rounded-lg glass flex items-center justify-center text-gray-400 hover:text-cyan-400 transition-all hover:scale-110"
            aria-label={label}
          >
            <Icon size={16} />
          </a>
        ))}
      </motion.div>
    </div>
  )
}

// ── About ─────────────────────────────────────────────────────────────────────

const stats  = [
  { v: '3+',  l: 'Years Exp.' },
  { v: '2',   l: 'Companies' },
  { v: '35%', l: 'Defects ↓' },
  { v: '50%', l: 'Ops Effort ↓' },
]
const traits = [
  { icon: Code2,  label: 'Clean Code',      color: '#00f0ff' },
  { icon: Server, label: 'Backend Mastery', color: '#915eff' },
  { icon: Cloud,  label: 'Cloud Native',    color: '#ff6b9d' },
  { icon: Cpu,    label: 'AI-Augmented',    color: '#ffd700' },
]

function AboutContent() {
  return (
    <div className="flex flex-col gap-4">
      <SectionLabel color="#4a9eff">About Me</SectionLabel>
      <p className="text-gray-300 text-sm leading-relaxed max-w-2xl">
        I'm a <span className="text-cyan-400 font-semibold">Full Stack Software Engineer</span> who enjoys
        owning systems end-to-end. At Transfi I designed event-driven microservices, webhook integrations with
        replay protection, and admin dashboards that cut operational effort by&nbsp;50%.
        I thrive in fast-moving environments where <span className="text-white font-medium">ownership, reliability,
        and customer impact</span> matter.
      </p>
      <div className="grid grid-cols-4 gap-2">
        {stats.map(s => (
          <div key={s.l} className="glass rounded-xl p-3 text-center">
            <div className="text-xl font-black gradient-text">{s.v}</div>
            <div className="text-gray-500 text-xs mt-0.5">{s.l}</div>
          </div>
        ))}
      </div>
      <div className="flex flex-wrap gap-2">
        {traits.map(t => (
          <span
            key={t.label}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium"
            style={{ background: `${t.color}12`, border: `1px solid ${t.color}30`, color: t.color }}
          >
            <t.icon size={12} /> {t.label}
          </span>
        ))}
      </div>
    </div>
  )
}

// ── Skills ────────────────────────────────────────────────────────────────────

const skillGroups = [
  { cat: 'Backend',   color: '#00f0ff', skills: ['Node.js', 'Express.js', 'NestJS', 'REST APIs', 'GraphQL'] },
  { cat: 'Frontend',  color: '#915eff', skills: ['React.js', 'TypeScript', 'Gatsby.js', 'Tailwind', 'AgGrid'] },
  { cat: 'Databases', color: '#ff6b9d', skills: ['MongoDB', 'SQL', 'Redis', 'Mongoose'] },
  { cat: 'DevOps',    color: '#ffd700', skills: ['AWS Lambda', 'EventBridge', 'Docker', 'CI/CD', 'Git'] },
  { cat: 'Languages', color: '#00ff87', skills: ['JavaScript', 'TypeScript', 'C++'] },
  { cat: 'AI Tools',  color: '#ff8c00', skills: ['Claude Code', 'Cursor', 'Codex', 'LLM integrations'] },
]

function SkillsContent() {
  return (
    <div className="flex flex-col gap-3">
      <SectionLabel color="#915eff">Tech Stack</SectionLabel>
      <div className="grid sm:grid-cols-2 gap-2">
        {skillGroups.map(g => (
          <div key={g.cat} className="flex items-start gap-2">
            <span
              className="text-xs font-bold w-20 flex-shrink-0 pt-0.5"
              style={{ color: g.color }}
            >
              {g.cat}
            </span>
            <div className="flex flex-wrap gap-1">
              {g.skills.map(s => (
                <span
                  key={s}
                  className="px-2 py-0.5 rounded-md text-xs font-medium"
                  style={{ background: `${g.color}12`, border: `1px solid ${g.color}28`, color: g.color }}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// ── Experience ────────────────────────────────────────────────────────────────

const jobs = [
  {
    company: 'Transfi',
    role: 'Senior Software Engineer',
    period: 'Nov 2024 – Jan 2026',
    color: '#00f0ff',
    bullets: [
      'Designed event-driven microservices enabling independent scaling.',
      'Built webhook integrations with replay protection (Node.js).',
      'Admin dashboards (React + AgGrid) cut ops effort by ~50%.',
      'Serverless systems via AWS Lambda & EventBridge.',
    ],
    tech: ['Node.js', 'TypeScript', 'React', 'AWS'],
  },
  {
    company: 'Sifars',
    role: 'Associate Software Engineer',
    period: 'Jun 2023 – Jul 2024',
    color: '#915eff',
    bullets: [
      'MERN stack apps with Gatsby for content management (+25% flow).',
      'REST APIs via CI/CD cadence, improving performance by 20%.',
      'Multilingual email templates with EJS & i18n (+15% engagement).',
    ],
    tech: ['Node.js', 'React', 'MongoDB', 'CI/CD'],
  },
]

function ExperienceContent() {
  return (
    <div className="flex flex-col gap-3">
      <SectionLabel color="#00ff87">Work Experience</SectionLabel>
      <div className="grid md:grid-cols-2 gap-3">
        {jobs.map(j => (
          <div
            key={j.company}
            className="glass rounded-xl p-4"
            style={{ borderColor: `${j.color}20` }}
          >
            <div className="flex items-start justify-between mb-2">
              <div>
                <div className="font-black text-white text-sm">{j.company}</div>
                <div className="text-xs font-semibold" style={{ color: j.color }}>{j.role}</div>
              </div>
              <span className="text-xs text-gray-500 flex items-center gap-1 whitespace-nowrap ml-2">
                <Calendar size={10} />{j.period}
              </span>
            </div>
            <ul className="space-y-1 mb-3">
              {j.bullets.map((b, i) => (
                <li key={i} className="flex items-start gap-1.5 text-xs text-gray-400 leading-relaxed">
                  <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ background: j.color }} />
                  {b}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-1">
              {j.tech.map(t => (
                <span key={t} className="px-1.5 py-0.5 rounded text-xs" style={{ background: `${j.color}12`, color: j.color }}>
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// ── Achievements ──────────────────────────────────────────────────────────────

const achievements = [
  { icon: Trophy, title: 'Google CodeJam',    sub: 'Qualified Round 2',         color: '#ffd700' },
  { icon: Medal,  title: 'CodeChef Starters', sub: 'Rank 212 / 11,540',         color: '#00f0ff' },
  { icon: Star,   title: 'ICPC 2023 Asia',    sub: 'Regional Participant',       color: '#915eff' },
  { icon: Code2,  title: 'Google KickStart',  sub: '+ Facebook HackerCup',      color: '#ff6b9d' },
]

const education = [
  { deg: 'Master of Computer Applications', inst: 'LPU, Punjab',      period: 'Oct 2021 – May 2023', color: '#00f0ff' },
  { deg: 'Bachelor of Computer Applications', inst: 'UIET, CSJMU',    period: 'Aug 2017 – Nov 2020', color: '#915eff' },
]

function AchievementsContent() {
  return (
    <div className="flex flex-col gap-3">
      <SectionLabel color="#ffd700">Achievements & Education</SectionLabel>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
        {achievements.map(a => (
          <div
            key={a.title}
            className="glass rounded-xl p-3 flex flex-col items-center text-center gap-2"
            style={{ borderColor: `${a.color}20` }}
          >
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center"
              style={{ background: `${a.color}18`, border: `1px solid ${a.color}30`, boxShadow: `0 0 12px ${a.color}30` }}
            >
              <a.icon size={16} style={{ color: a.color }} />
            </div>
            <div>
              <div className="text-white text-xs font-bold leading-tight">{a.title}</div>
              <div className="text-xs mt-0.5" style={{ color: a.color }}>{a.sub}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="grid sm:grid-cols-2 gap-2">
        {education.map(e => (
          <div key={e.deg} className="glass rounded-xl p-3" style={{ borderColor: `${e.color}18` }}>
            <div className="text-xs font-semibold mb-0.5" style={{ color: e.color }}>{e.period}</div>
            <div className="text-white text-xs font-bold">{e.deg}</div>
            <div className="text-gray-500 text-xs">{e.inst}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

// ── Contact ───────────────────────────────────────────────────────────────────

const contactLinks = [
  { icon: Mail,     label: 'Email',    value: EMAIL,                                              href: null,                                                                      color: '#ff6b9d', copy: true },
  { icon: Phone,    label: 'Phone',    value: '+91 6394875951',                                  href: 'tel:+916394875951',                                                       color: '#00f0ff' },
  { icon: Github,   label: 'GitHub',   value: 'github.com/abhishekolympics',                     href: 'https://www.github.com/abhishekolympics',                                  color: '#e2e8f0' },
  { icon: Linkedin, label: 'LinkedIn', value: 'linkedin.com/in/abhishekolympics',                href: 'https://www.linkedin.com/in/abhishekolympics/',                             color: '#0a66c2' },
  { icon: FileText, label: 'Resume',   value: 'Google Drive',                                    href: 'https://drive.google.com/file/d/1ysj3l8xNOufZDf9ZeeQJiGZHrhYqdk2p/view?usp=sharing', color: '#ffd700' },
]

function ContactContent() {
  const [copied, setCopied] = useState(false)

  const copyEmail = useCallback(async (e) => {
    e?.preventDefault()
    try { await navigator.clipboard.writeText(EMAIL) } catch {
      const ta = document.createElement('textarea')
      ta.value = EMAIL; ta.style.cssText = 'position:fixed;opacity:0'
      document.body.appendChild(ta); ta.select(); document.execCommand('copy')
      document.body.removeChild(ta)
    }
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }, [])

  return (
    <div className="flex flex-col gap-3">
      <SectionLabel color="#ff6b9d">Get In Touch</SectionLabel>
      <p className="text-gray-400 text-xs">Open to new opportunities — reach out through any channel.</p>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
        {contactLinks.map(l => {
          const Tag = l.copy ? 'button' : 'a'
          const props = l.copy
            ? { onClick: copyEmail, type: 'button' }
            : { href: l.href, target: '_blank', rel: 'noopener noreferrer' }
          return (
            <Tag
              key={l.label}
              {...props}
              className="glass rounded-xl p-3 flex items-center gap-2.5 hover:scale-[1.02] transition-all text-left w-full"
              style={{ borderColor: `${l.color}20` }}
            >
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ background: `${l.color}15`, border: `1px solid ${l.color}30` }}
              >
                <l.icon size={14} style={{ color: l.color }} />
              </div>
              <div className="min-w-0">
                <div className="text-gray-500 text-xs">{l.label}</div>
                <div className="text-xs font-semibold truncate" style={{ color: l.color }}>
                  {l.copy ? (copied ? '✓ Copied!' : EMAIL.slice(0, 22) + '…') : l.value}
                </div>
              </div>
            </Tag>
          )
        })}
      </div>

      {/* Big copy CTA */}
      <motion.button
        onClick={copyEmail}
        whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}
        className="mt-1 py-3 rounded-xl font-bold text-black text-sm flex items-center justify-center gap-2 shadow-lg shadow-pink-500/20"
        style={{ background: 'linear-gradient(135deg, #ff6b9d, #915eff)' }}
      >
        <AnimatePresence mode="wait" initial={false}>
          {copied
            ? <motion.span key="ok"  initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }} className="flex items-center gap-2"><Check size={14} /> Email Copied!</motion.span>
            : <motion.span key="cp"  initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }} className="flex items-center gap-2"><Copy  size={14} /> Copy Email Address</motion.span>
          }
        </AnimatePresence>
      </motion.button>
    </div>
  )
}

// ── Shared helpers ────────────────────────────────────────────────────────────

function SectionLabel({ color, children }) {
  return (
    <div className="flex items-center gap-2 mb-1">
      <span className="w-2 h-2 rounded-full" style={{ background: color, boxShadow: `0 0 8px ${color}` }} />
      <span className="text-xs font-bold tracking-widest uppercase" style={{ color }}>{children}</span>
    </div>
  )
}

// ── Main switch ───────────────────────────────────────────────────────────────

export default function PlanetContent({ section, navigate }) {
  const panels = [
    <HomeContent navigate={navigate} />,
    <AboutContent />,
    <SkillsContent />,
    <ExperienceContent />,
    <AchievementsContent />,
    <ContactContent />,
  ]
  return panels[section] ?? null
}
