import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Briefcase, Calendar } from 'lucide-react'

const experiences = [
  {
    company: 'Transfi',
    role: 'Senior Software Engineer',
    period: 'Nov 2024 – Jan 2026',
    type: 'Remote',
    color: '#00f0ff',
    highlights: [
      'Designed event-driven microservices architecture with product & architecture teams, enabling independent scaling and safer deployments.',
      'Built webhook integrations with replay protection and failure handling using NodeJS for reliable third-party event processing.',
      'Integrated multiple external APIs (payments, messaging, email) via standardized adapters, reducing integration defects by ~35%.',
      'Developed data-heavy admin dashboards with React, TypeScript, and AgGrid, cutting operational & support effort by ~50%.',
      'Improved UI/UX and frontend performance in admin workflows, reducing task completion time by ~30%.',
      'Designed and deployed serverless event-driven systems using AWS Lambda and EventBridge.',
    ],
    tech: ['Node.js', 'TypeScript', 'React', 'AgGrid', 'AWS Lambda', 'EventBridge', 'MongoDB'],
  },
  {
    company: 'Sifars',
    role: 'Associate Software Engineer',
    period: 'June 2023 – July 2024',
    type: 'Remote',
    color: '#915eff',
    highlights: [
      'Built full-stack applications with MERN stack alongside Gatsby for content management, enhancing data flow by 25%.',
      'Developed and deployed REST APIs using Node.js via CI/CD release cadence, improving performance by 20%.',
      'Created and styled multilingual email templates with EJS and i18n, increasing engagement by 15%.',
      'Deployed services via CI/CD pipelines using Git-based workflows.',
    ],
    tech: ['Node.js', 'React', 'MongoDB', 'Gatsby.js', 'EJS', 'i18n', 'CI/CD'],
  },
]

function ExperienceCard({ exp, index, inView }) {
  const isLeft = index % 2 === 0

  return (
    <div className={`relative flex flex-col md:flex-row items-start gap-4 md:gap-8 mb-12 md:mb-16 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
      {/* Timeline dot */}
      <div className="hidden md:flex flex-col items-center flex-shrink-0">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={inView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.4, delay: index * 0.2 }}
          className="w-14 h-14 rounded-full flex items-center justify-center z-10"
          style={{
            background: `${exp.color}15`,
            border: `2px solid ${exp.color}`,
            boxShadow: `0 0 20px ${exp.color}50`,
          }}
        >
          <Briefcase size={20} style={{ color: exp.color }} />
        </motion.div>
        {index < experiences.length - 1 && (
          <motion.div
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 0.8, delay: index * 0.2 + 0.4 }}
            className="w-px h-full mt-2 origin-top"
            style={{ background: `linear-gradient(to bottom, ${exp.color}, transparent)` }}
          />
        )}
      </div>

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, delay: index * 0.2 + 0.1 }}
        className="flex-1 glass rounded-2xl p-5 md:p-7 hover:scale-[1.01] transition-all duration-300 text-sm md:text-base"
        style={{ borderColor: `${exp.color}20` }}
      >
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 md:gap-4 mb-4 md:mb-6">
          <div>
            <h3 className="text-lg md:text-2xl font-black text-white mb-1">{exp.company}</h3>
            <p className="font-semibold text-sm md:text-base" style={{ color: exp.color }}>{exp.role}</p>
          </div>
          <div className="flex flex-col items-end gap-1 text-right">
            <span className="flex items-center gap-2 text-gray-400 text-sm">
              <Calendar size={14} />
              {exp.period}
            </span>
            <span className="text-xs text-gray-500 bg-white/5 px-3 py-1 rounded-full">{exp.type}</span>
          </div>
        </div>

        <ul className="space-y-3 mb-6">
          {exp.highlights.map((h, i) => (
            <li key={i} className="flex items-start gap-3 text-gray-300 text-sm leading-relaxed">
              <span
                className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0"
                style={{ background: exp.color }}
              />
              {h}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2">
          {exp.tech.map((t) => (
            <span
              key={t}
              className="px-3 py-1 rounded-lg text-xs font-medium"
              style={{
                background: `${exp.color}10`,
                border: `1px solid ${exp.color}25`,
                color: exp.color,
              }}
            >
              {t}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

export default function Experience() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 })

  return (
    <section id="experience" className="relative py-16 sm:py-24 px-4 sm:px-6" ref={ref}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />

      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-3">Where I've Worked</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black">
            Work <span className="gradient-text">Experience</span>
          </h2>
        </motion.div>

        <div>
          {experiences.map((exp, i) => (
            <ExperienceCard key={exp.company} exp={exp} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  )
}
