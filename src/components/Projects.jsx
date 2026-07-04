import { motion } from "framer-motion"
const projects = [
  {
    title: "💰 AI Finance Advisor",
    desc: "30-day expense forecasting, investment allocation by risk profile, and spending health check. Deployed live.",
    stack: ["Python", "Streamlit", "statsmodels", "scikit-learn"],
    live: "https://aifinanceadvisor-blhtjb69np6a3hqunfn8ox.streamlit.app/",
    github: "https://github.com/kundarrisha/AI_Finance_Advisor",
    featured: true,
  },
  {
    title: "⚖️AI-Powered-Legal-Contract-Clause-extrcation-and-Risk-Assessment Public",
    desc: "AI-powered NLP pipeline for automated legal contract clause extraction, risk assessment, and actionable compliance insights.",
    stack: ["TypeScript", "PostgreSQL", "spaCy"],
    live : "https://github.com/kundarrisha/AI-Powered-Legal-Contract-Clause-extrcation-and-Risk-Assessment",
    github: "https://github.com/kundarrisha",
    featured : true,
  },
  {
    title: "📱 ManageGinix",
    desc: "Android app for student-teacher communication and attendance tracking with Firebase real-time database.",
    stack: ["Java", "XML", "Firebase", "Android"],
    live : "https://github.com/kundarrisha/Managenix",
    github: "https://github.com/kundarrisha",
  },
  {
    title: "🔬 Vision Semantics Captioner",
    desc: "IEEE published NLP + CV pipeline for automatic image captioning using deep learning.",
    stack: ["TensorFlow", "NLP", "Python"],
    live :"https://github.com/kundarrisha/Vision-Semantics-Image-Captioner",
    ieee: "https://doi.org/10.1109/ICITEICS61368.2024.10625415",
    github:"https://github.com/kundarrisha",
    featured : true,
  },
  {
    title: "📊Real-Time-Log-Analytics-and-Monitoring-System",
    desc: "A real-time log analytics pipeline that generates, ingests, stores, analyzes, and visualizes multi-service application logs using MongoDB, HDFS, and Streamlit.",
    stack: ["HDFS (Hadoop)", "Power BI", "Python"],
    live :"https://github.com/kundarrisha/Real-Time-Log-Analytics-and-Monitoring-System",
    github: "https://github.com/kundarrisha",
    featured:"true",
  },
  {
    title: "🛍️AutoSentiment",
    desc: "A multilingual product review sentiment and comparison platform that scrapes, analyzes, and visualizes aspect-based sentiment using a fine-tuned XLM-RoBERTa model.",
    stack: ["PyTorch", "Selenium", "Vite"],
    live :"https://github.com/kundarrisha/AutoSentiment",
    github: "https://github.com/kundarrisha",
    featured:"true",
  },
   {
    title: "🔗Product-Authenticity-Blockchain-main",
    desc: "A from-scratch Flask blockchain (Proof of Work, Merkle trees, digital signatures, QR codes) for registering and verifying product authenticity to combat counterfeiting.",
    stack: ["HTML/CSS/JS", " Custom-built", "Python"],
    live: "https://github.com/kundarrisha/Product-Authenticity-Blockchain-main",
    github: "https://github.com/kundarrisha",
    featured:"true",
  },
]

export default function Projects() {
  return (
    <div id="projects" style={{ padding: "100px 2rem" }}>
      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
        <p style={{ fontFamily: "monospace", fontSize: "18px", color: "#F5A623", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "12px" }}>
          Projects
        </p>
        <h2 style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: "700", color: "white", marginBottom: "48px", letterSpacing: "-0.02em" }}>
          Things I've built
        </h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "16px" }}>
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true }}
              style={{
                gridColumn: p.featured ? "span 2" : "span 1",
                border: "1px solid rgba(255, 255, 255, 0.07)",
                borderRadius: "12px",
                padding: "24px",
                cursor: "pointer",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {p.featured && (
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: "linear-gradient(90deg, #F5A623, #6C63FF)" }} />
              )}
              {p.featured && (
                <span style={{ fontSize: "10px", fontFamily: "monospace", color: "#4ade80", background: "rgba(74,222,128,0.1)", padding: "2px 8px", borderRadius: "4px", marginBottom: "12px", display: "inline-block" }}>
                  LIVE
                </span>
              )}
              <div style={{ fontSize: "17px", fontWeight: "600", color: "white", marginBottom: "10px" }}>{p.title}</div>
              <div style={{ fontSize: "13px", color: "#7A8499", lineHeight: "1.7", marginBottom: "16px" }}>{p.desc}</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "16px" }}>
                {p.stack.map(s => (
                  <span key={s} style={{ fontSize: "11px", fontFamily: "monospace", color: "#6C63FF", background: "rgba(108,99,255,0.12)", padding: "3px 8px", borderRadius: "4px" }}>{s}</span>
                ))}
              </div>
              <div style={{ display: "flex", gap: "16px" }}>
                {p.live && <a href={p.live} target="_blank" style={{ fontSize: "13px", color: "#F5A623", textDecoration: "none" }}>↗ Live App</a>}
                <a href={p.github} target="_blank" style={{ fontSize: "13px", color: "#F5A623", textDecoration: "none" }}>⌥ GitHub</a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      </div>
  )
}