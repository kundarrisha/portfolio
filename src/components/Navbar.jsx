export default function Navbar() {
  return (
    <nav style={{
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "20px 60px",
      backgroundColor: "rgba(8,12,24,0.95)",
      borderBottom: "1px solid rgba(255,255,255,0.05)"
    }}>

      <div style={{ fontFamily: "monospace", fontSize: "14px", letterSpacing: "0.05em" }}>
        <span style={{ color: "#7A8499" }}>&lt;</span>
        <span style={{ color: "#F5A623", fontWeight: "700" }}>RK</span>
        <span style={{ color: "#6C63FF" }}> /</span>
        <span style={{ color: "#7A8499" }}>&gt;</span>
      </div>

      <div style={{ display: "flex", gap: "36px" }}>
        <a href="#about-section" style={{ fontSize: "13px", color: "#7A8499", textDecoration: "none", letterSpacing: "0.04em", textTransform: "uppercase" }} onMouseEnter={e => e.target.style.color = "white"} onMouseLeave={e => e.target.style.color = "#7A8499"}>About</a>
        <a href="#projects" style={{ fontSize: "13px", color: "#7A8499", textDecoration: "none", letterSpacing: "0.04em", textTransform: "uppercase" }} onMouseEnter={e => e.target.style.color = "white"} onMouseLeave={e => e.target.style.color = "#7A8499"}>Projects</a>
        <a href="#skills" style={{ fontSize: "13px", color: "#7A8499", textDecoration: "none", letterSpacing: "0.04em", textTransform: "uppercase" }} onMouseEnter={e => e.target.style.color = "white"} onMouseLeave={e => e.target.style.color = "#7A8499"}>Skills</a>
        <a href="#contact" style={{ fontSize: "13px", color: "#7A8499", textDecoration: "none", letterSpacing: "0.04em", textTransform: "uppercase" }} onMouseEnter={e => e.target.style.color = "white"} onMouseLeave={e => e.target.style.color = "#7A8499"}>Contact</a>
      </div>

    </nav>
  )
}