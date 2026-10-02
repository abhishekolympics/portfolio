import { useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import {
  Github, Linkedin, Mail, Phone, FileText,
  Trophy, Medal, Star, Code2, Server, Cloud, Cpu,
  Copy, Check, ExternalLink, Calendar, Gamepad2, Radio,
} from 'lucide-react'
import { SECTION_DATA } from './GalaxyScene'

const EMAIL = 'abhishek19980402@gmail.com'

// ── Reusable tag ───────────────────────────────────────────────────────────────

function Tag({ color, children }) {
  return (
    <span
      className="mission-chip"
      style={{ background: `${color}14`, border: `1px solid ${color}38`, color, boxShadow: `0 0 18px ${color}12` }}
    >
      {children}
    </span>
  )
}

function MissionHeader({ color, code, title }) {
  return (
    <div className="mission-header">
      <div className="mission-code" style={{ color, textShadow: `0 0 18px ${color}90` }}>{code}</div>
      <div className="mission-title">{title}</div>
      <div className="mission-rule" style={{ background: `linear-gradient(90deg, ${color}, transparent)` }} />
    </div>
  )
}

// ── Home ───────────────────────────────────────────────────────────────────────

function HomeContent({ color, navigate }) {
  return (
    <div className="mission-stack">
      <MissionHeader color={color} code="COMMAND DECK" title="Engineer Profile" />
      <div
        className="mission-status"
        style={{ border: `1px solid ${color}45`, color, background: `${color}0d`, boxShadow: `0 0 24px ${color}16` }}
      >
        <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: color }} />
        Available for opportunities
      </div>

      <div>
        <div className="mission-eyebrow">Full Stack Software Engineer</div>
        <div className="mission-headline">
          Building systems <span style={{ color, textShadow: `0 0 20px ${color}80` }}>end-to-end</span>,<br />
          from APIs to polished UIs.
        </div>
      </div>

      <div className="mission-type" style={{ color }}>
        <TypeAnimation
          sequence={['Node.js · TypeScript', 2000, 'React · AWS Lambda', 2000, 'Event-driven systems', 2000, 'AI-augmented dev', 2000]}
          wrapper="span" speed={55} repeat={Infinity}
        />
      </div>

      <p className="mission-copy">
        3+ years building production-ready web applications. Obsessed with
        reliability, performance, and real customer impact.
      </p>

      <div className="flex flex-wrap gap-3">
        <button
          onClick={() => navigate(5)}
          className="mission-primary"
          style={{ background: `linear-gradient(135deg, ${color}, #915eff)` }}
        >
          Get In Touch
        </button>
        <a
          href="https://bit.ly/4dkh0MP"
          target="_blank" rel="noopener noreferrer"
          className="mission-secondary"
          style={{ border: `1px solid ${color}40`, background: `${color}08` }}
        >
          Resume
        </a>
      </div>

      <div className="flex gap-3">
        {[
          { icon: Github,   href: 'https://github.com/abhishekolympics',           label: 'GitHub' },
          { icon: Linkedin, href: 'https://www.linkedin.com/in/abhishekolympics/', label: 'LinkedIn' },
          { icon: Mail,     href: `mailto:${EMAIL}`,                               label: 'Email' },
        ].map(({ icon: Icon, href, label }) => (
          <a
            key={label} href={href} target="_blank" rel="noopener noreferrer"
            aria-label={label}
            className="mission-icon-link"
            style={{ border: `1px solid ${color}25`, background: `${color}08` }}
            onMouseEnter={e => e.currentTarget.style.color = color}
            onMouseLeave={e => e.currentTarget.style.color = ''}
          >
            <Icon size={16} />
          </a>
        ))}
      </div>
    </div>
  )
}

// ── About ──────────────────────────────────────────────────────────────────────

function AboutContent({ color }) {
  const stats  = [['3+', 'Years Exp.'], ['2', 'Companies'], ['35%', 'Defects ↓'], ['50%', 'Ops Effort ↓']]
  const traits = [
    { icon: Code2,  label: 'Clean Code' },
    { icon: Server, label: 'Backend' },
    { icon: Cloud,  label: 'Cloud Native' },
    { icon: Cpu,    label: 'AI-augmented' },
  ]
  return (
    <div className="mission-stack">
      <MissionHeader color={color} code="MISSION LOG" title="About Abhishek" />
      <p className="mission-copy strong">
        Full Stack Engineer who enjoys owning systems end-to-end. At{' '}
        <span style={{ color }} className="font-semibold">Transfi</span>, designed event-driven
        microservices, built webhook integrations with replay protection, and shipped admin dashboards
        that cut operational effort by 50%.
      </p>
      <p className="mission-copy">
        I thrive where <span className="text-white font-medium">ownership, reliability, and customer
        impact</span> matter most. Competitive programmer — Google CodeJam Round 2, ICPC Asia.
      </p>
      <div className="mission-stat-grid">
        {stats.map(([v, l]) => (
          <div key={l} className="mission-stat" style={{ background: `${color}10`, border: `1px solid ${color}28`, boxShadow: `inset 0 0 24px ${color}08` }}>
            <div className="mission-stat-value" style={{ color, textShadow: `0 0 16px ${color}90` }}>{v}</div>
            <div className="mission-stat-label">{l}</div>
          </div>
        ))}
      </div>
      <div className="flex flex-wrap gap-2">
        {traits.map(t => (
          <Tag key={t.label} color={color}>
            <t.icon size={11} />{t.label}
          </Tag>
        ))}
      </div>
    </div>
  )
}

// ── Skills ─────────────────────────────────────────────────────────────────────

const SKILL_GROUPS = [
  { cat: 'Languages',     color: '#00ff87', skills: ['TypeScript', 'JavaScript'] },
  { cat: 'Backend',       color: '#00f0ff', skills: ['Node.js', 'NestJS', 'Express'] },
  { cat: 'Frontend',      color: '#915eff', skills: ['React', 'AgGrid'] },
  { cat: 'APIs',          color: '#6bd8ff', skills: ['REST', 'GraphQL', 'Webhooks'] },
  { cat: 'Databases',     color: '#ff6b9d', skills: ['MongoDB', 'PostgreSQL', 'Redis'] },
  { cat: 'Cloud',         color: '#ffd700', skills: ['AWS', 'Azure'] },
  { cat: 'AWS',           color: '#ff9a5f', skills: ['Lambda', 'EventBridge', 'SQS', 'S3', 'Cognito'] },
  { cat: 'Delivery',      color: '#c084fc', skills: ['Docker', 'GitHub Actions', 'CI/CD'] },
  { cat: 'Observability', color: '#4ade80', skills: ['Datadog', 'AWS CloudWatch'] },
  { cat: 'AI',            color: '#ff8c00', skills: ['LLM integrations', 'Agentic workflows'] },
]

const DESIGN_GROUPS = [
  { cat: 'Architecture', color: '#00f0ff', skills: ['Event-driven microservices', 'Webhooks', 'Scheduled / cron jobs'] },
  { cat: 'Messaging',    color: '#915eff', skills: ['Message queues', 'Dead-letter queues'] },
  { cat: 'Reliability',  color: '#00ff87', skills: ['Retries', 'Duplicate events', 'Partial failures'] },
  { cat: 'Caching',      color: '#ff6b9d', skills: ['Cache management'] },
  { cat: 'Integrations', color: '#ffd700', skills: ['Third-party APIs', 'Email / SMS via SendGrid & Twilio'] },
  { cat: 'Monitoring',   color: '#ff8c00', skills: ['Alerts', 'Datadog monitors', 'CloudWatch alarms'] },
]

const SKILL_TABS = [
  { key: 'stack',  label: 'Tech Stack',    groups: SKILL_GROUPS },
  { key: 'design', label: 'System Design', groups: DESIGN_GROUPS },
]

function SkillsContent({ color, onLaunchGame }) {
  const [tab, setTab] = useState('stack')
  const groups = SKILL_TABS.find(t => t.key === tab).groups
  return (
    <div className="mission-stack">
      <MissionHeader color={color} code="SYSTEMS MATRIX" title="Tech Arsenal" />
      <p className="mission-copy">What I build with, and how I design it to hold up in production.</p>
      <div className="mission-skill-bar">
        <div className="mission-skill-tabs" role="tablist">
          {SKILL_TABS.map(t => (
            <button
              key={t.key}
              role="tab"
              aria-selected={tab === t.key}
              className="mission-skill-tab"
              style={tab === t.key
                ? { borderColor: `${color}70`, color, background: `${color}14`, boxShadow: `0 0 18px ${color}22` }
                : { borderColor: 'rgba(255,255,255,0.1)', color: 'rgba(203,213,225,0.6)' }}
              onClick={() => setTab(t.key)}
            >
              {t.label}
            </button>
          ))}
        </div>
        <button
          className="mission-game-button"
          style={{ borderColor: `${color}45`, color, boxShadow: `0 0 28px ${color}18` }}
          onClick={onLaunchGame}
        >
          <Gamepad2 size={17} />
          Launch Asteroid Dodger
        </button>
      </div>
      <div className={`mission-skill-grid${tab === 'stack' ? ' two-col' : ''}`}>
        {groups.map(g => (
          <div key={g.cat} className={`mission-skill-row${tab === 'stack' ? ' stacked' : ''}`} style={{ borderColor: `${g.color}22`, background: `${g.color}08` }}>
            <span className="mission-skill-cat" style={{ color: g.color, textShadow: `0 0 14px ${g.color}80` }}>
              {g.cat}
            </span>
            <div className="flex flex-wrap gap-2">
              {g.skills.map(s => (
                <span
                  key={s}
                  className="mission-skill-chip"
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

// ── Experience ─────────────────────────────────────────────────────────────────

const JOBS = [
  {
    company: 'Transfi',
    role: 'Senior Software Engineer',
    period: 'Nov 2024 – Jan 2026',
    color: '#00f0ff',
    bullets: [
      'Event-driven microservices enabling independent scaling & safer deployments.',
      'Webhook integrations with replay protection; reduced integration defects ~35%.',
      'Admin dashboards (React + AgGrid) cut operational effort by ~50%.',
      'Serverless systems: AWS Lambda & EventBridge.',
    ],
  },
  {
    company: 'Sifars',
    role: 'Associate Software Engineer',
    period: 'Jun 2023 – Jul 2024',
    color: '#915eff',
    bullets: [
      'MERN stack apps + Gatsby CMS, improved data delivery by 25%.',
      'REST APIs via CI/CD cadence → 20% performance improvement.',
      'Multilingual email templates (EJS + i18n) boosted engagement 15%.',
    ],
  },
]

function ExperienceContent({ color }) {
  const [activeJob, setActiveJob] = useState(0)
  return (
    <div className="mission-stack">
      <MissionHeader color={color} code="FLIGHT RECORD" title="Experience Trail" />
      <div
        className="mission-exp-scroll"
        onScroll={e => {
          const w = e.currentTarget.clientWidth * 0.87
          setActiveJob(Math.min(Math.round(e.currentTarget.scrollLeft / w), JOBS.length - 1))
        }}
      >
        {JOBS.map(j => (
          <div key={j.company} className="mission-exp-card mission-card" style={{ background: `${j.color}08`, border: `1px solid ${j.color}25`, boxShadow: `0 0 28px ${j.color}10` }}>
            <div className="flex justify-between items-start mb-2 gap-2 flex-wrap">
              <div>
                <div className="mission-card-title">{j.company}</div>
                <div className="mission-card-subtitle" style={{ color: j.color }}>{j.role}</div>
              </div>
              <span className="mission-date">
                <Calendar size={12} />{j.period}
              </span>
            </div>
            <ul className="mission-bullets">
              {j.bullets.map((b, i) => (
                <li key={i}>
                  <span style={{ background: j.color, boxShadow: `0 0 10px ${j.color}` }} />
                  {b}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mission-exp-pager">
        {JOBS.map((j, i) => (
          <span
            key={i}
            className={`mission-exp-dot${i === activeJob ? ' active' : ''}`}
            style={i === activeJob ? { background: j.color, boxShadow: `0 0 8px ${j.color}80` } : {}}
          />
        ))}
      </div>
    </div>
  )
}

// ── Achievements ───────────────────────────────────────────────────────────────

const ACHVS = [
  { icon: Trophy, title: 'Google CodeJam',       sub: 'Qualified Round 2',   color: '#ffd700' },
  { icon: Medal,  title: 'CodeChef Starters',    sub: 'Rank 212 / 11,540',   color: '#00f0ff' },
  { icon: Star,   title: 'ICPC 2023 Asia',        sub: 'Regional Participant', color: '#915eff' },
  { icon: Code2,  title: 'KickStart + HackerCup', sub: 'Global Competitions', color: '#ff6b9d' },
]
const EDU = [
  { deg: 'Master of Computer Applications',   inst: 'LPU, Punjab',   period: '2021–2023', color: '#00f0ff' },
  { deg: 'Bachelor of Computer Applications', inst: 'UIET, CSJMU',   period: '2017–2020', color: '#915eff' },
]

function AchievementsContent({ color }) {
  return (
    <div className="mission-stack">
      <MissionHeader color={color} code="ORBIT BADGES" title="Achievements" />
      <div className="mission-achievement-grid">
        {ACHVS.map(a => (
          <div
            key={a.title}
            className="mission-achievement"
            style={{ background: `${a.color}08`, border: `1px solid ${a.color}25`, boxShadow: `0 0 20px ${a.color}0f` }}
          >
            <div
              className="mission-achievement-icon"
              style={{ background: `${a.color}18`, border: `1px solid ${a.color}30`, boxShadow: `0 0 10px ${a.color}30` }}
            >
              <a.icon size={18} style={{ color: a.color }} />
            </div>
            <div>
              <div className="mission-achievement-title">{a.title}</div>
              <div className="mission-achievement-sub" style={{ color: a.color }}>{a.sub}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="mission-section-label">Education</div>
      <div className="grid gap-2">
        {EDU.map(e => (
          <div key={e.deg} className="mission-education" style={{ background: `${e.color}08`, border: `1px solid ${e.color}22` }}>
            <div className="flex items-start justify-between gap-2">
              <div>
                <div className="mission-education-degree">{e.deg}</div>
                <div className="mission-education-inst">{e.inst}</div>
              </div>
              <span className="mission-education-period" style={{ color: e.color }}>{e.period}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// ── Contact ────────────────────────────────────────────────────────────────────

const CONTACT_LINKS = [
  {
    icon: Mail,     label: 'Email',
    value: EMAIL,   copyValue: EMAIL,
    href: `mailto:${EMAIL}`,
    color: '#ff6b9d',
  },
  {
    icon: Phone,    label: 'Phone',
    value: '+91 6394875951', copyValue: '+916394875951',
    href: 'tel:+916394875951',
    color: '#00f0ff',
  },
  {
    icon: Github,   label: 'GitHub',
    value: 'abhishekolympics', copyValue: 'https://github.com/abhishekolympics',
    href: 'https://github.com/abhishekolympics',
    color: '#e2e8f0',
  },
  {
    icon: Linkedin, label: 'LinkedIn',
    value: 'abhishekolympics', copyValue: 'https://www.linkedin.com/in/abhishekolympics/',
    href: 'https://www.linkedin.com/in/abhishekolympics/',
    color: '#4a9eff',
  },
  {
    icon: FileText, label: 'Resume',
    value: 'View resume', copyValue: 'https://bit.ly/4dkh0MP',
    href: 'https://bit.ly/4dkh0MP',
    color: '#ffd700',
  },
]

function ContactContent({ color }) {
  const [copiedLabel, setCopiedLabel] = useState(null)
  const [transmission, setTransmission] = useState(null)

  const copyText = useCallback(async (text, label) => {
    try {
      await navigator.clipboard.writeText(text)
    } catch {
      const ta = document.createElement('textarea')
      ta.value = text
      ta.style.cssText = 'position:fixed;opacity:0'
      document.body.appendChild(ta)
      ta.select()
      document.execCommand('copy')
      document.body.removeChild(ta)
    }
    setCopiedLabel(label)
    setTransmission({ label, mode: 'copied' })
    setTimeout(() => setCopiedLabel(l => l === label ? null : l), 2500)
    setTimeout(() => setTransmission(t => t?.label === label ? null : t), 1700)
  }, [])

  const markOpened = useCallback((label) => {
    setTransmission({ label, mode: 'opened' })
    setTimeout(() => setTransmission(t => t?.label === label ? null : t), 1500)
  }, [])

  return (
    <div className="mission-stack">
      <MissionHeader color={color} code="TRANSMISSION BAY" title="Contact Links" />
      <p className="mission-copy">Open to new opportunities. Let's build something great together.</p>
      <AnimatePresence>
        {transmission && (
          <motion.div
            className="mission-transmission"
            initial={{ opacity: 0, y: 10, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            style={{ borderColor: `${color}45`, color }}
          >
            <Radio size={16} />
            {transmission.mode === 'copied' ? `${transmission.label} signal copied` : `${transmission.label} channel opened`}
            <span />
          </motion.div>
        )}
      </AnimatePresence>
      <div className="mission-contact-grid">
        {CONTACT_LINKS.map(l => (
          <div
            key={l.label}
            className="mission-contact-row"
            style={{ background: `${l.color}08`, border: `1px solid ${l.color}24`, boxShadow: `0 0 18px ${l.color}0d` }}
          >
            <div
              className="mission-contact-icon"
              style={{ background: `${l.color}18`, border: `1px solid ${l.color}30` }}
            >
              <l.icon size={16} style={{ color: l.color }} />
            </div>
            <div className="min-w-0 flex-1">
              <div className="mission-contact-label">{l.label}</div>
              <div
                className="mission-contact-value"
                style={{ color: copiedLabel === l.label ? '#00ff87' : l.color }}
              >
                {copiedLabel === l.label ? '✓ Copied!' : l.value}
              </div>
            </div>
            <div className="flex items-center gap-1 flex-shrink-0">
              <button
                onClick={() => copyText(l.copyValue, l.label)}
                title={`Copy ${l.label}`}
                className="mission-action-button"
                style={{ background: `${l.color}12` }}
              >
                {copiedLabel === l.label
                  ? <Check size={13} style={{ color: '#00ff87' }} />
                  : <Copy size={13} />
                }
              </button>
              <a
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                title={`Open ${l.label}`}
                className="mission-action-button"
                style={{ background: `${l.color}12` }}
                onClick={() => markOpened(l.label)}
              >
                <ExternalLink size={13} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// ── Content registry ───────────────────────────────────────────────────────────

const CONTENT_COMPONENTS = [
  HomeContent, AboutContent, SkillsContent,
  ExperienceContent, AchievementsContent, ContactContent,
]

// ── Main Overlay ───────────────────────────────────────────────────────────────

export default function SectionOverlay({ current, navigate, onLaunchGame }) {
  const data    = SECTION_DATA[current]
  const color   = data.color
  const isLeft  = data.side === 'left'   // content on left half
  const Content = CONTENT_COMPONENTS[current]

  // Gradient fades inward from the content edge toward the planet
  const gradient = isLeft
    ? `linear-gradient(to right, rgba(3,6,20,0.92) 40%, rgba(3,6,20,0.5) 75%, transparent 100%)`
    : `linear-gradient(to left,  rgba(3,6,20,0.92) 40%, rgba(3,6,20,0.5) 75%, transparent 100%)`

  return (
    <>
      <style>{`
        /* ── Desktop / tablet ─────────────────────────────────────── */
        .overlay-panel {
          position: fixed;
          top: 0; bottom: 0;
          width: min(48%, 660px);
          display: flex;
          flex-direction: column;
          z-index: 20;
          pointer-events: auto;
          background: var(--panel-grad);
          /* content taller than the screen scrolls instead of being clipped top and bottom */
          overflow-y: auto;
          overscroll-behavior: contain;
          scrollbar-width: thin;
          scrollbar-color: color-mix(in srgb, var(--section-color, #6bd8ff) 40%, transparent) transparent;
        }
        .overlay-panel::-webkit-scrollbar { width: 4px; }
        .overlay-panel::-webkit-scrollbar-thumb {
          background: color-mix(in srgb, var(--section-color, #6bd8ff) 40%, transparent);
          border-radius: 999px;
        }
        .overlay-panel.left  { left: 0; }
        .overlay-panel.right { right: 0; }
        .panel-inner {
          /* auto margins centre it when it fits and collapse to 0 when it overflows (no clipped top) */
          margin-block: auto;
          padding: 5.25rem 3.1rem 3rem;
        }
        .overlay-panel.left  .panel-inner { padding-right: 4.2rem; }
        .overlay-panel.right .panel-inner { padding-left: 4.2rem;  }

        .mission-stack {
          display: flex;
          flex-direction: column;
          gap: 1.1rem;
          font-family: "Exo 2", system-ui, sans-serif;
        }
        .mission-header {
          display: grid;
          gap: 0.35rem;
          margin-bottom: 0.15rem;
        }
        .mission-code {
          font-family: "Orbitron", monospace;
          font-size: clamp(0.72rem, 0.95vw, 0.9rem);
          font-weight: 900;
          letter-spacing: 0.22em;
          text-transform: uppercase;
        }
        .mission-title {
          font-family: "Rajdhani", "Exo 2", sans-serif;
          font-size: clamp(1.8rem, 2.8vw, 3rem);
          line-height: 0.92;
          font-weight: 700;
          letter-spacing: 0.02em;
          color: rgba(255,255,255,0.96);
          text-shadow: 0 0 18px rgba(255,255,255,0.18);
        }
        .mission-rule {
          width: min(18rem, 70%);
          height: 2px;
          border-radius: 999px;
          opacity: 0.85;
        }
        .mission-status {
          width: fit-content;
          display: inline-flex;
          align-items: center;
          gap: 0.55rem;
          border-radius: 999px;
          padding: 0.45rem 0.85rem;
          font-family: "Orbitron", monospace;
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }
        .mission-eyebrow {
          margin-bottom: 0.55rem;
          font-family: "Orbitron", monospace;
          font-size: clamp(0.72rem, 0.9vw, 0.9rem);
          font-weight: 900;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.48);
        }
        .mission-headline {
          font-family: "Rajdhani", "Exo 2", sans-serif;
          font-size: clamp(2.2rem, 3.8vw, 4.25rem);
          line-height: 0.9;
          font-weight: 700;
          letter-spacing: 0.01em;
          color: #fff;
          text-wrap: balance;
          text-shadow: 0 12px 34px rgba(0,0,0,0.55);
        }
        .mission-type {
          min-height: 2rem;
          font-family: "Orbitron", monospace;
          font-size: clamp(0.95rem, 1.45vw, 1.35rem);
          font-weight: 900;
          letter-spacing: 0.05em;
          text-shadow: 0 0 16px currentColor;
        }
        .mission-copy {
          max-width: 34rem;
          font-size: clamp(1.02rem, 1.34vw, 1.25rem);
          line-height: 1.55;
          font-weight: 500;
          color: rgba(226,232,240,0.78);
          text-shadow: 0 3px 18px rgba(0,0,0,0.42);
        }
        .mission-copy.strong {
          color: rgba(248,250,252,0.92);
          font-size: clamp(1.08rem, 1.45vw, 1.35rem);
          font-weight: 600;
        }
        .mission-primary,
        .mission-secondary {
          border-radius: 0.9rem;
          padding: 0.82rem 1.15rem;
          font-family: "Orbitron", monospace;
          font-size: 0.82rem;
          font-weight: 900;
          letter-spacing: 0.04em;
          transition: transform 180ms ease, box-shadow 180ms ease, border-color 180ms ease;
        }
        .mission-primary {
          color: #050816;
          box-shadow: 0 0 30px rgba(0,240,255,0.22);
        }
        .mission-secondary {
          color: white;
        }
        .mission-primary:hover,
        .mission-secondary:hover,
        .mission-icon-link:hover,
        .mission-contact-row:hover {
          transform: translateY(-2px) scale(1.025);
        }
        .mission-icon-link {
          width: 2.65rem;
          height: 2.65rem;
          border-radius: 0.85rem;
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(203,213,225,0.72);
          transition: transform 180ms ease, color 180ms ease, border-color 180ms ease;
        }
        .mission-chip {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          border-radius: 0.75rem;
          padding: 0.42rem 0.72rem;
          font-family: "Rajdhani", sans-serif;
          font-size: 0.92rem;
          font-weight: 700;
          letter-spacing: 0.02em;
        }
        .mission-stat-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 0.65rem;
        }
        .mission-stat {
          border-radius: 1rem;
          padding: 0.95rem 0.65rem;
          text-align: center;
          backdrop-filter: blur(14px);
        }
        .mission-stat-value {
          font-family: "Orbitron", monospace;
          font-size: clamp(1.15rem, 1.85vw, 1.65rem);
          font-weight: 900;
          line-height: 1;
        }
        .mission-stat-label {
          margin-top: 0.45rem;
          color: rgba(203,213,225,0.58);
          font-family: "Rajdhani", sans-serif;
          font-size: 0.88rem;
          font-weight: 700;
          line-height: 1.08;
        }
        .mission-skill-grid {
          display: grid;
          gap: 0.7rem;
        }
        .mission-skill-grid.two-col { grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 0.55rem; }
        .mission-skill-row.stacked { grid-template-columns: 1fr; gap: 0.4rem; padding: 0.5rem 0.65rem; }
        .mission-skill-row.stacked .mission-skill-cat { font-size: 0.68rem; padding-top: 0; }
        .mission-skill-row.stacked .flex { gap: 0.35rem; }
        .mission-skill-row.stacked .mission-skill-chip { font-size: 0.86rem; padding: 0.24rem 0.45rem; }
        .mission-skill-bar { display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 0.6rem; }
        .mission-skill-bar .mission-game-button { font-size: 0.66rem; padding: 0.45rem 0.7rem; border-radius: 0.75rem; gap: 0.4rem; }
        .mission-skill-tabs {
          display: flex;
          gap: 0.5rem;
        }
        .mission-skill-tab {
          border: 1px solid;
          border-radius: 0.75rem;
          padding: 0.45rem 0.8rem;
          background: rgba(3,6,20,0.45);
          font-family: "Orbitron", monospace;
          font-size: 0.68rem;
          font-weight: 900;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          transition: color 160ms ease, background 160ms ease, border-color 160ms ease;
        }
        .mission-exp-scroll {
          display: grid;
          gap: 1.1rem;
        }
        .mission-exp-pager { display: none; }
        .mission-exp-dot {
          width: 0.4rem; height: 0.4rem;
          border-radius: 999px;
          background: rgba(255,255,255,0.2);
          transition: background 250ms ease, transform 250ms ease, box-shadow 250ms ease;
        }
        .mission-exp-dot.active { transform: scaleX(2.4); }
        .mission-game-button {
          width: fit-content;
          display: inline-flex;
          align-items: center;
          gap: 0.55rem;
          border: 1px solid;
          border-radius: 0.9rem;
          padding: 0.72rem 0.9rem;
          background: rgba(3,6,20,0.5);
          font-family: "Orbitron", monospace;
          font-size: 0.78rem;
          font-weight: 900;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          transition: transform 160ms ease, background 160ms ease;
        }
        .mission-game-button:hover {
          transform: translateY(-2px);
          background: rgba(255,255,255,0.055);
        }
        .mission-skill-row {
          display: grid;
          grid-template-columns: 7.5rem 1fr;
          gap: 0.9rem;
          align-items: start;
          border: 1px solid;
          border-radius: 1rem;
          padding: 0.8rem 0.9rem;
          backdrop-filter: blur(12px);
        }
        .mission-skill-cat {
          font-family: "Orbitron", monospace;
          font-size: 0.78rem;
          font-weight: 900;
          letter-spacing: 0.09em;
          text-transform: uppercase;
          padding-top: 0.2rem;
        }
        .mission-skill-chip {
          border-radius: 0.6rem;
          padding: 0.32rem 0.58rem;
          font-family: "Rajdhani", sans-serif;
          font-size: 0.95rem;
          font-weight: 700;
          line-height: 1;
        }
        .mission-card {
          border-radius: 1.1rem;
          padding: 1.15rem;
          backdrop-filter: blur(14px);
        }
        .mission-card-title {
          font-family: "Orbitron", monospace;
          font-size: clamp(1rem, 1.45vw, 1.35rem);
          font-weight: 900;
          color: white;
        }
        .mission-card-subtitle,
        .mission-date {
          font-family: "Rajdhani", sans-serif;
          font-size: 0.98rem;
          font-weight: 700;
        }
        .mission-date {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          color: rgba(203,213,225,0.58);
          white-space: nowrap;
        }
        .mission-bullets {
          display: grid;
          gap: 0.55rem;
          margin-top: 0.75rem;
        }
        .mission-bullets li {
          display: flex;
          align-items: flex-start;
          gap: 0.62rem;
          color: rgba(226,232,240,0.72);
          font-size: clamp(0.92rem, 1.12vw, 1.08rem);
          line-height: 1.42;
          font-weight: 500;
        }
        .mission-bullets li span {
          width: 0.35rem;
          height: 0.35rem;
          margin-top: 0.5rem;
          border-radius: 999px;
          flex-shrink: 0;
        }
        .mission-achievement-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 0.75rem;
        }
        .mission-achievement,
        .mission-education,
        .mission-contact-row {
          border-radius: 1rem;
          backdrop-filter: blur(14px);
        }
        .mission-achievement {
          display: flex;
          gap: 0.85rem;
          align-items: center;
          padding: 0.9rem;
        }
        .mission-achievement-icon,
        .mission-contact-icon {
          width: 2.45rem;
          height: 2.45rem;
          border-radius: 0.85rem;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .mission-achievement-title,
        .mission-education-degree {
          font-family: "Rajdhani", sans-serif;
          font-size: 1rem;
          line-height: 1.05;
          font-weight: 700;
          color: white;
        }
        .mission-achievement-sub,
        .mission-education-inst,
        .mission-education-period {
          font-family: "Rajdhani", sans-serif;
          font-size: 0.9rem;
          font-weight: 700;
        }
        .mission-section-label {
          margin-top: 0.2rem;
          font-family: "Orbitron", monospace;
          font-size: 0.78rem;
          font-weight: 900;
          letter-spacing: 0.2em;
          color: rgba(226,232,240,0.42);
          text-transform: uppercase;
        }
        .mission-education {
          padding: 0.9rem;
        }
        .mission-education-inst {
          color: rgba(203,213,225,0.58);
        }
        .mission-contact-grid {
          display: grid;
          gap: 0.7rem;
        }
        .mission-transmission {
          position: relative;
          display: flex;
          align-items: center;
          gap: 0.55rem;
          overflow: hidden;
          border: 1px solid;
          border-radius: 0.95rem;
          padding: 0.7rem 0.85rem;
          background: rgba(3,6,20,0.58);
          font-family: "Orbitron", monospace;
          font-size: 0.76rem;
          font-weight: 900;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          box-shadow: 0 0 34px rgba(255,201,154,0.16);
        }
        .mission-transmission span {
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.25), transparent);
          transform: translateX(-100%);
          animation: transmissionSweep 1.2s ease-out infinite;
        }
        @keyframes transmissionSweep {
          to { transform: translateX(100%); }
        }
        @keyframes panelGlow {
          0%, 100% { opacity: 0.14; transform: scaleX(0.45); }
          50% { opacity: 0.58; transform: scaleX(1); }
        }
        .mission-contact-row {
          display: flex;
          align-items: center;
          gap: 0.9rem;
          padding: 0.85rem 1rem;
          transition: transform 180ms ease, border-color 180ms ease;
        }
        .mission-contact-label {
          font-family: "Orbitron", monospace;
          font-size: 0.72rem;
          font-weight: 900;
          letter-spacing: 0.1em;
          color: rgba(203,213,225,0.5);
          text-transform: uppercase;
        }
        .mission-contact-value {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          font-family: "Rajdhani", sans-serif;
          font-size: 1.08rem;
          font-weight: 700;
          transition: color 250ms ease;
        }
        .mission-action-button {
          width: 2rem;
          height: 2rem;
          border-radius: 0.65rem;
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(203,213,225,0.65);
          transition: color 160ms ease, transform 160ms ease;
        }
        .mission-action-button:hover {
          color: white;
          transform: translateY(-1px);
        }

        /* ── Portrait mobile (≤ 768 px) ─ glass card ────────────── */
        @media (max-width: 768px) {
          .overlay-panel {
            left: 0 !important; right: 0 !important;
            top: auto; bottom: 0;
            width: 100% !important;
            /* 54dvh leaves the top 46% clean for the planet */
            height: 54dvh; height: 54vh;
            overflow: hidden;
            z-index: 30;
            /* ── Frosted glass card ──────────────────────────── */
            background: rgba(3,6,20,0.82) !important;
            backdrop-filter: blur(18px) saturate(1.35) !important;
            -webkit-backdrop-filter: blur(18px) saturate(1.35) !important;
            border-radius: 1.5rem 1.5rem 0 0;
            /* Fallback border then dynamic accent colour */
            border-top: 1px solid rgba(107,216,255,0.22);
            border-top: 1px solid color-mix(in srgb, var(--section-color, #6bd8ff) 32%, transparent);
            box-shadow:
              0 -18px 70px color-mix(in srgb, var(--section-color, #6bd8ff) 16%, transparent),
              inset 0 1px 0 rgba(255,255,255,0.06);
          }
          /* Pulsing accent line on the rim — the HUD glow */
          .overlay-panel::before {
            content: '';
            position: absolute;
            top: 0; left: 18%; right: 18%;
            height: 1px;
            background: var(--section-color, #6bd8ff);
            border-radius: 999px;
            animation: panelGlow 3s ease-in-out infinite;
            pointer-events: none;
            z-index: 2;
          }
          .panel-inner {
            margin-block: 0;
            padding: 0.9rem 1.1rem !important;
            padding-bottom: max(1.2rem, env(safe-area-inset-bottom)) !important;
            overflow-y: auto;
            overscroll-behavior: contain;
            -webkit-overflow-scrolling: touch;
            height: 100%;
            scrollbar-width: thin;
            scrollbar-color: rgba(107,216,255,0.3) transparent;
            /* soft fade at the bottom edge hints that the card scrolls */
            -webkit-mask-image: linear-gradient(to bottom, #000 calc(100% - 1.5rem), transparent);
            mask-image: linear-gradient(to bottom, #000 calc(100% - 1.5rem), transparent);
          }
          .panel-inner::-webkit-scrollbar { width: 3px; }
          .panel-inner::-webkit-scrollbar-track { background: transparent; }
          .panel-inner::-webkit-scrollbar-thumb {
            background: color-mix(in srgb, var(--section-color, #6bd8ff) 45%, transparent);
            border-radius: 999px;
          }
          .mission-stack    { gap: 0.6rem; }
          .mission-header   { gap: 0.2rem; margin-bottom: 0; }
          .mission-code     { font-size: 0.58rem; }
          .mission-title    { font-size: clamp(1.3rem, 6.5vw, 1.85rem); }
          .mission-headline { font-size: clamp(1.6rem, 8vw, 2.45rem); }
          .mission-copy     { font-size: 0.9rem; line-height: 1.42; }
          .mission-copy.strong { font-size: 0.93rem; }
          .mission-type     { min-height: 1.3rem; font-size: 0.8rem; }
          .mission-stat-grid,
          .mission-achievement-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 0.48rem; }
          .mission-stat     { padding: 0.58rem 0.42rem; }
          .mission-stat-value { font-size: 1rem; }
          .mission-stat-label { font-size: 0.76rem; margin-top: 0.25rem; }
          .mission-skill-grid { gap: 0.45rem; }
          .mission-skill-row { grid-template-columns: 5.8rem 1fr; gap: 0.38rem; padding: 0.52rem 0.62rem; }
          .mission-skill-cat { font-size: 0.66rem; }
          .mission-skill-chip { font-size: 0.82rem; padding: 0.2rem 0.4rem; }
          .mission-skill-tab { font-size: 0.6rem; padding: 0.38rem 0.6rem; }
          /* Tech Stack keeps two columns (label above chips): half the height of one row per group */
          .mission-skill-grid.two-col { grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 0.4rem; }
          .mission-skill-row.stacked { grid-template-columns: 1fr; gap: 0.28rem; padding: 0.45rem 0.5rem; }
          .mission-skill-row.stacked .mission-skill-cat { font-size: 0.58rem; }
          .mission-skill-row.stacked .flex { gap: 0.28rem; }
          .mission-skill-row.stacked .mission-skill-chip { font-size: 0.78rem; padding: 0.2rem 0.36rem; }
          .mission-card     { padding: 0.72rem; }
          .mission-card-title { font-size: 0.92rem; }
          .mission-bullets  { gap: 0.38rem; margin-top: 0.48rem; }
          .mission-bullets li { font-size: 0.84rem; }
          .mission-achievement { padding: 0.6rem; gap: 0.58rem; }
          .mission-achievement-icon,
          .mission-contact-icon { width: 2rem; height: 2rem; }
          .mission-achievement-title,
          .mission-education-degree { font-size: 0.86rem; }
          .mission-achievement-sub,
          .mission-education-inst,
          .mission-education-period { font-size: 0.78rem; }
          .mission-contact-row { padding: 0.58rem 0.68rem; gap: 0.65rem; }
          .mission-contact-label { font-size: 0.62rem; }
          .mission-contact-value { font-size: 0.88rem; }
          .mission-game-button { font-size: 0.7rem; padding: 0.58rem 0.75rem; }
          .mission-action-button { width: 2.2rem; height: 2.2rem; border-radius: 0.75rem; }
          .mission-primary, .mission-secondary { padding: 0.7rem 0.9rem; font-size: 0.74rem; }
          .mission-icon-link { width: 2.55rem; height: 2.55rem; }

          /* ── Horizontal swipe carousel for Experience ─────────── */
          .mission-exp-scroll {
            display: flex;
            gap: 0.7rem;
            overflow-x: auto;
            scroll-snap-type: x mandatory;
            -webkit-overflow-scrolling: touch;
            scroll-behavior: smooth;
            /* bleed to panel edges so next card peeks through */
            margin: 0 -1.1rem;
            padding: 0 1.1rem 0.15rem;
            scrollbar-width: none;
          }
          .mission-exp-scroll::-webkit-scrollbar { display: none; }
          .mission-exp-card {
            flex: 0 0 87%;
            scroll-snap-align: start;
            min-width: 0;
          }
          .mission-exp-pager {
            display: flex;
            justify-content: center;
            gap: 0.44rem;
            margin-top: 0.05rem;
          }

          /* ── Section-adaptive panel heights ──────────────────── */
          /* Each section gets exactly the room its content needs  */
          .overlay-panel[data-section="0"] { height: 52dvh; height: 52vh; } /* Home    — hero, short  */
          .overlay-panel[data-section="1"] { height: 58dvh; height: 58vh; } /* About   — stats grid   */
          .overlay-panel[data-section="2"] { height: 64dvh; height: 64vh; } /* Skills  — 6 rows       */
          .overlay-panel[data-section="3"] { height: 58dvh; height: 58vh; } /* Exp     — swipe cards  */
          .overlay-panel[data-section="4"] { height: 62dvh; height: 62vh; } /* Achvmt  — badges + edu */
          .overlay-panel[data-section="5"] { height: 56dvh; height: 56vh; } /* Contact — 5 rows       */
        }

        /* ── Landscape mobile (height ≤ 500 px) ─ side glass panel ─ */
        @media (max-height: 500px) and (orientation: landscape) {
          .overlay-panel {
            top: 0 !important; bottom: 0 !important;
            left: auto !important; right: auto !important;
            width: min(44%, 360px) !important;
            height: 100% !important;
            overflow: hidden !important;
            border-radius: 0 !important;
            border-top: none !important;
            /* Side glass panel */
            background: rgba(3,6,20,0.84) !important;
            backdrop-filter: blur(16px) saturate(1.3) !important;
            -webkit-backdrop-filter: blur(16px) saturate(1.3) !important;
            box-shadow: none !important;
          }
          .overlay-panel::before { display: none; }
          .overlay-panel.left  {
            left: 0 !important;
            border-right: 1px solid color-mix(in srgb, var(--section-color, #6bd8ff) 25%, transparent);
          }
          .overlay-panel.right {
            right: 0 !important;
            border-left: 1px solid color-mix(in srgb, var(--section-color, #6bd8ff) 25%, transparent);
          }
          .panel-inner {
            margin-block: 0;
            padding: 3.8rem 1.3rem 1.2rem !important;
            overflow-y: auto !important;
            overscroll-behavior: contain;
            -webkit-overflow-scrolling: touch;
            height: 100% !important;
          }
          .overlay-panel.left  .panel-inner { padding-right: 1.8rem !important; }
          .overlay-panel.right .panel-inner { padding-left:  1.8rem !important; }
          .mission-stack    { gap: 0.55rem; }
          .mission-title    { font-size: 1.15rem; }
          .mission-headline { font-size: 1.5rem; line-height: 1; }
          .mission-code     { font-size: 0.52rem; }
          .mission-copy     { font-size: 0.82rem; }
          .mission-copy.strong { font-size: 0.85rem; }
          .mission-stat-grid { grid-template-columns: repeat(4, minmax(0, 1fr)); }
          .mission-achievement-grid { grid-template-columns: 1fr; }
          .mission-skill-row { grid-template-columns: 5.2rem 1fr; }
        }

        /* ── Small tablet (769–1024 px) ──────────────────────────── */
        @media (min-width: 769px) and (max-width: 1024px) {
          .overlay-panel { width: min(46%, 520px); }
          .panel-inner { padding: 4.75rem 2.2rem 2.5rem; }
          .overlay-panel.left  .panel-inner { padding-right: 3rem; }
          .overlay-panel.right .panel-inner { padding-left:  3rem; }
          .mission-headline { font-size: clamp(1.9rem, 3.2vw, 3.2rem); }
        }

        /* ── Short desktop screens (laptops, zoomed browsers) ─────── */
        /* Tighten spacing so the tallest panels fit; anything left over scrolls */
        @media (min-width: 769px) and (max-height: 820px) {
          .panel-inner { padding-top: 4.4rem; padding-bottom: 1.6rem; }
          .mission-stack { gap: 0.8rem; }
          .mission-title { font-size: clamp(1.6rem, 2.4vw, 2.4rem); }
          .mission-headline { font-size: clamp(2rem, 3.3vw, 3.4rem); }
          .mission-copy { font-size: clamp(0.95rem, 1.15vw, 1.08rem); line-height: 1.45; }
          .mission-copy.strong { font-size: clamp(1rem, 1.25vw, 1.15rem); }
          .mission-skill-grid { gap: 0.5rem; }
          .mission-skill-grid.two-col { gap: 0.45rem; }
          .mission-skill-row { padding: 0.55rem 0.75rem; gap: 0.7rem; }
          .mission-skill-row.stacked { padding: 0.42rem 0.6rem; gap: 0.3rem; }
          .mission-skill-chip { font-size: 0.88rem; padding: 0.26rem 0.5rem; }
          .mission-card { padding: 0.9rem 1rem; }
          .mission-exp-scroll { gap: 0.75rem; }
          .mission-bullets { gap: 0.38rem; margin-top: 0.5rem; }
          .mission-bullets li { font-size: clamp(0.88rem, 1vw, 0.98rem); line-height: 1.35; }
          .mission-stat { padding: 0.7rem 0.5rem; }
          .mission-achievement { padding: 0.65rem; }
          .mission-contact-row { padding-top: 0.55rem; padding-bottom: 0.55rem; }
        }
        @media (min-width: 769px) and (max-height: 660px) {
          .panel-inner { padding-top: 3.9rem; padding-bottom: 1.2rem; }
          .mission-stack { gap: 0.6rem; }
          .mission-header { gap: 0.2rem; }
          .mission-copy { font-size: 0.92rem; }
          .mission-bullets li { font-size: 0.88rem; }
        }
      `}</style>

      {/* Side content panel — pass gradient via CSS variable so mobile media query can override it */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`panel-${current}`}
          className={`overlay-panel ${isLeft ? 'left' : 'right'}`}
          data-section={current}
          style={{ '--panel-grad': gradient, '--section-color': color }}
          initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
          animate={{ opacity: 1, x: 0, transition: { delay: 0.9, duration: 0.5, ease: 'easeOut' } }}
          exit={{ opacity: 0, x: isLeft ? -30 : 30, transition: { duration: 0.2 } }}
        >
          <div className="panel-inner">
            <Content color={color} navigate={navigate} onLaunchGame={onLaunchGame} />
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  )
}
