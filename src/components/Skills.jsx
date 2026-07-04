import { motion } from "framer-motion"

const skillGroups = [
  { label: "ML & CV", skills: ["TensorFlow", "OpenCV", "YOLOv8", "scikit-learn", "statsmodels", "Pandas"] },
  { label: "Languages", skills: ["Python", "Java", "JavaScript", "C++", "SQL"] },
  { label: "Web & Backend", skills: ["React.js", "Flask", "Streamlit", "REST APIs", "HTML", "CSS"] },
  { label: "Cloud & DBs", skills: ["Azure", "Firebase", "MySQL", "MongoDB"] },
  { label: "Tools", skills: ["Git", "GitHub", "VS Code", "Excel", "VBA"] },
]

export default function Skills() {
  return (
    <div id="skills" style={{padding: "100px 60px" }}>
      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>

        <p style={{ fontFamily: "monospace", fontSize: "18px", color: "#F5A623", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "12px" }}>
          Skills
        </p>
        <h2 style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: "700", color: "white", marginBottom: "64px", letterSpacing: "-0.02em" }}>
          The Toolkit
        </h2>

        <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              style={{ display: "flex", alignItems: "flex-start", gap: "40px" }}
            >
              <div style={{
                minWidth: "140px",
                fontFamily: "monospace",
                fontSize: "11px",
                color: "#F5A623",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                paddingTop: "6px",
                borderRight: "1px solid rgba(245,166,35,0.3)",
                paddingRight: "24px"
              }}>
                {group.label}
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                {group.skills.map((skill, j) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{ y: -4, borderColor: "#F5A623", color: "#F5A623" }}
                    transition={{ duration: 0.3, delay: j * 0.05 }}
                    viewport={{ once: true }}
                    style={{
                      fontSize: "13px",
                      padding: "6px 16px",
                      borderRadius: "4px",
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      color: "#E8ECF4",
                      cursor: "default",
                      fontFamily: "monospace",
                      letterSpacing: "0.03em",
                      transition: "all 0.2s"
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}