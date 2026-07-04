import BlurText from "./BlurText"
import AstroScene from "./AstroScene"

export default function Hero() {
  return (
    <div id="about" style={{
      width: "100%",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      position: "relative",
      padding: "80px 60px 40px",
      gap: "40px",
    }}>

      {/* Top text - centered */}
      <div style={{ textAlign: "center", position: "relative", zIndex: 10, maxWidth: "700px" }}>
        <p style={{ color: "#F5A623", fontFamily: "monospace", letterSpacing: "0.2em", fontSize: "16px", textTransform: "uppercase", marginBottom: "16px" }}>
          Hi, my name is
        </p>
        <BlurText text="Risha Kundar" />
        <h2 style={{ fontSize: "clamp(24px, 4vw, 42px)", fontWeight: "700", color: "#7A8499", marginBottom: "16px", lineHeight: 1.1 }}>
          I build intelligent systems.
        </h2>
        <p style={{ color: "#7A8499", fontSize: "15px", maxWidth: "500px", lineHeight: "1.8", marginBottom: "32px", margin: "0 auto 32px" }}>
          B.E. Computer Engineering Graduate · IEEE published researcher · specializing in{" "}
          <span style={{ color: "white" }}>Machine Learning</span>,{" "}
          <span style={{ color: "white" }}>Computer Vision</span>, and{" "}
          <span style={{ color: "white" }}>Full-Stack Development</span>.
        </p>
        <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
          <a href="mailto:kundarrisha@gmail.com"
            style={{ padding: "13px 28px", background: "transparent", color: "#F5A623", border: "1px solid #F5A623", borderRadius: "4px", fontWeight: "500", fontSize: "14px", textDecoration: "none", fontFamily: "monospace", transition: "all 0.2s" }}
            onMouseEnter={e => { e.target.style.background = "#F5A623"; e.target.style.color = "#080C18" }}
            onMouseLeave={e => { e.target.style.background = "transparent"; e.target.style.color = "#F5A623" }}>
            Get in touch →
          </a>
          <a href="https://github.com/kundarrisha" target="_blank"
            style={{ padding: "13px 28px", background: "transparent", color: "white", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "4px", fontSize: "14px", textDecoration: "none", fontFamily: "monospace" }}>
            GitHub
          </a>
        </div>
      </div>

      {/* Astro scene - centered below text */}
      <div style={{ width: "100%", maxWidth: "600px", height: "500px", position: "relative", zIndex: 5 }}>
        <AstroScene />
      </div>

    </div>
  )
}