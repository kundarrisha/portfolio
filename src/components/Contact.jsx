export default function Contact() {
  return (
    <div id="contact" style={{ background: 'transparent', padding: '100px 60px', maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
      <p style={{ fontFamily: 'monospace', fontSize: '18px', color: '#F5A623', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '12px' }}>
        Contact
      </p>
      <h2 style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: '700', color: 'white', marginBottom: '16px', letterSpacing: '-0.02em' }}>
        Let's work together🤝
      </h2>
      <p style={{ color: '#7A8499', fontSize: '16px', marginBottom: '40px', maxWidth: '480px', margin: '0 auto 40px' }}>
        I'm currently open to new opportunities. Whether you have a question or just want to say hi — my inbox is always open!
      </p>
      <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
        <a href="mailto:kundarrisha@gmail.com"
          style={{ padding: '14px 32px', background: 'transparent', color: '#F5A623', border: '1px solid #F5A623', borderRadius: '4px', fontWeight: '500', fontSize: '14px', textDecoration: 'none', fontFamily: 'monospace' }}
          onMouseEnter={e => { e.target.style.background = '#F5A623'; e.target.style.color = '#080C18' }}
          onMouseLeave={e => { e.target.style.background = 'transparent'; e.target.style.color = '#F5A623' }}>
          Say Hi!!
        </a>
        <a href="https://linkedin.com/in/risha-kundar" target="_blank"
          style={{ padding: '14px 32px', background: 'transparent', color: 'white', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '4px', fontSize: '14px', textDecoration: 'none', fontFamily: 'monospace' }}>
          LinkedIn
        </a>
        <a href="https://github.com/kundarrisha" target="_blank"
          style={{ padding: '14px 32px', background: 'transparent', color: 'white', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '4px', fontSize: '14px', textDecoration: 'none', fontFamily: 'monospace' }}>
          GitHub
        </a>
      </div>

      <div style={{ marginTop: '80px', paddingTop: '40px', borderTop: '1px solid rgba(255,255,255,0.07)', color: '#7A8499', fontSize: '13px', fontFamily: 'monospace' }}>
        Designed & Built by Risha Kundar 
      </div>
    </div>
  )
}