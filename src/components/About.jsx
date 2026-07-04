import { motion } from "framer-motion"

export default function About() {
  return (
    <div id="about-section" style={{ padding: '100px 60px', maxWidth: '1000px', margin: '0 auto' }}>
      
      <p style={{ fontFamily: 'monospace', fontSize: '18px', color: '#F5A623', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '12px' }}>
         About me
      </p>
      <h2 style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: '700', color: 'white', marginBottom: '48px', letterSpacing: '-0.02em' }}>
        Who I am.
      </h2>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'start' }}>
        
        {/* Left - Text */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p style={{ color: '#7A8499', fontSize: '15px', lineHeight: '1.9', marginBottom: '16px' }}>
            I'm a <span style={{ color: 'white' }}>B.E. Computer Engineering Graduate</span> from Don Bosco Institute of Technology, Mumbai (June 2026) with a CGPA of 6.3. I've built systems across machine learning, computer vision, full-stack, and Android development.
          </p>
          <p style={{ color: '#7A8499', fontSize: '15px', lineHeight: '1.9', marginBottom: '16px' }}>
            I published a research paper at <span style={{ color: 'white' }}>IEEE ICITEICS 2024</span> on Vision Semantics Captioning — combining NLP and deep learning for automatic image captioning.
          </p>
          <p style={{ color: '#7A8499', fontSize: '15px', lineHeight: '1.9' }}>
            When I'm not coding, I'm exploring new technologies, working on personal projects, and continuously leveling up my skills. I'm currently open to <span style={{ color: '#F5A623' }}>full-time opportunities</span> in ML, Data Science, or Software Engineering.
          </p>
        </motion.div>

        {/* Right - Details */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
        >
          {[
            { icon: '🎓', label: 'Education', value: 'B.E. Computer Engineering — DBIT Mumbai' },
            { icon: '📍', label: 'Location', value: 'Mumbai, India' },
            { icon: '📄', label: 'Publication', value: 'IEEE ICITEICS 2024 — Vision Semantics Captioner' },
            { icon: '💼', label: 'Status', value: 'Open to opportunities' },
            { icon: '✉', label: 'Email', value: 'kundarrisha@gmail.com' },
          ].map(item => (
            <div key={item.label} style={{
              display: 'flex', gap: '16px', alignItems: 'flex-start',
              padding: '16px', borderRadius: '8px',
              background: 'rgba(14,20,37,0.8)',
              border: '1px solid rgba(255,255,255,0.07)'
            }}>
              <span style={{ fontSize: '18px', flexShrink: 0 }}>{item.icon}</span>
              <div>
                <div style={{ fontSize: '11px', color: '#7A8499', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{item.label}</div>
                <div style={{ fontSize: '14px', color: 'white', fontWeight: '500', marginTop: '2px' }}>{item.value}</div>
              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </div>
  )
}