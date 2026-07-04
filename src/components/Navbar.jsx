export default function Navbar() {
  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
      display: "flex", justifyContent: "space-between", alignItems: "center",
      padding: "24px 60px",
      background: "rgba(8,12,24,0.8)",
      backdropFilter: "blur(12px)",
      borderBottom: "1px solid rgba(255,255,255,0.05)"
    }}>
        <div style={{ fontFamily: "monospace", fontSize: "14px", color: "#F5A623", letterSpacing: "0.05em" }}>
        Risha
        {[
          { label: "About", href: "#about-section" },
          { label: "Projects", href: "#projects" },
          { label: "Skills", href: "#skills" },
          { label: "Contact", href: "#contact" }
].map(item => (
          <a
            key={item.label}
            href={item.href}
            style={{ fontSize: "13px", color: "#7A8499", textDecoration: "none", letterSpacing: "0.04em", textTransform: "uppercase", transition: "color 0.2s" }}
            onMouseEnter={e => e.target.style.color = "white"}
            onMouseLeave={e => e.target.style.color = "#7A8499"}
          >
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  )
}