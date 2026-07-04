import alienImg from "../assets/alien.png"
import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

function Astronaut() {
  return (
    <motion.div
      style={{
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -70%)",
        zIndex: 20,
        width: 120,
        height: 120,
      }}
      animate={{ y: [-8, 8, -8] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
    >
      <img
        src={alienImg}
        alt="alien"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "contain",
          filter: "drop-shadow(0 0 20px rgba(0,255,150,0.4)) drop-shadow(0 0 40px rgba(108,99,255,0.3))",
        }}
      />
    </motion.div>
  )
}
const planets = [
  { name: "Machine Learning", icon: "🧠", color: "#6C63FF", size: 56, radiusX: 180, radiusY: 140, duration: 22, delay: 0 },
  { name: "Computer Vision", icon: "👁️", color: "#00CFFF", size: 52, radiusX: 180, radiusY: 140, duration: 22, delay: -11 },
  { name: "Python", icon: "🐍", color: "#F5A623", size: 44, radiusX: 130, radiusY: 100, duration: 16, delay: 0 },
  { name: "Full-Stack", icon: "💻", color: "#FF6F00", size: 44, radiusX: 130, radiusY: 100, duration: 16, delay: -8 },
  { name: "React", icon: "⚛️", color: "#61DAFB", size: 34, radiusX: 220, radiusY: 170, duration: 28, delay: 0 },
]

export default function AstroScene() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")

    const resize = () => {
      canvas.width = canvas.parentNode.offsetWidth
      canvas.height = canvas.parentNode.offsetHeight
    }
    resize()
    window.addEventListener("resize", resize)

    const stars = Array.from({ length: 120 }, () => ({
      x: Math.random() * 600,
      y: Math.random() * 500,
      r: Math.random() * 1.5 + 0.2,
      a: Math.random() * 0.7 + 0.1,
      speed: Math.random() * 0.008 + 0.003,
    }))

    let animId
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Twinkling stars
      stars.forEach(s => {
        s.a += s.speed
        if (s.a > 0.9 || s.a < 0.1) s.speed = -s.speed
        ctx.beginPath()
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(180,210,255,${s.a})`
        ctx.fill()
      })

      // Central glow
      const grad = ctx.createRadialGradient(300, 250, 0, 300, 250, 180)
      grad.addColorStop(0, "rgba(108,99,255,0.12)")
      grad.addColorStop(0.5, "rgba(245,166,35,0.05)")
      grad.addColorStop(1, "transparent")
      ctx.fillStyle = grad
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      animId = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener("resize", resize)
    }
  }, [])

  return (
    <div style={{
      position: "relative",
      width: "100%",
      height: "100%",
      minHeight: "500px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}>
      {/* Stars canvas */}
      <canvas ref={canvasRef} style={{
        position: "absolute", inset: 0,
        width: "100%", height: "100%",
        pointerEvents: "none"
      }} />

      {/* Scene container - centered */}
      <div style={{ position: "relative", width: "500px", height: "500px" }}>

        {/* Orbit rings */}
        {[
         { rx: 220, ry: 170, color: "#61DAFB" },
         { rx: 180, ry: 140, color: "#6C63FF" },
         { rx: 130, ry: 100, color: "#F5A623" },
        ].map((o, i) => (
          <div key={i} style={{
            position: "absolute",
            left: "50%", top: "50%",
            width: o.rx * 2, height: o.ry * 2,
            transform: "translate(-50%, -50%)",
            borderRadius: "50%",
            border: `1px solid ${o.color}25`,
            pointerEvents: "none",
          }} />
        ))}

        {/* Planets */}
        {planets.map(planet => {
          const steps = 60
          const xFrames = []
          const yFrames = []

          for (let i = 0; i <= steps; i++) {
            const angle = (i / steps) * Math.PI * 2
            xFrames.push(Math.cos(angle) * planet.radiusX)
            yFrames.push(Math.sin(angle) * planet.radiusY)
          }

          return (
            <motion.div
              key={planet.name}
              style={{
                position: "absolute",
                left: "50%", top: "50%",
                zIndex: 3,
              }}
              animate={{ x: xFrames, y: yFrames }}
              transition={{
                duration: planet.duration,
                repeat: Infinity,
                ease: "linear",
                delay: planet.delay,
              }}
            >
              <div style={{
                transform: "translate(-50%, -50%)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "6px",
              }}>
                <div style={{
                  width: planet.size,
                  height: planet.size,
                  borderRadius: "50%",
                  background: `radial-gradient(circle at 30% 30%, ${planet.color}44, ${planet.color}11)`,
                  border: `2px solid ${planet.color}88`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: planet.size * 0.48,
                  boxShadow: `0 0 16px ${planet.color}44`,
                }}>
                  {planet.icon}
                </div>
                <span style={{
                  fontSize: "10px",
                  color: "#A0AEC0",
                  fontFamily: "monospace",
                  whiteSpace: "nowrap",
                  background: "rgba(5,8,20,0.8)",
                  padding: "2px 7px",
                  borderRadius: "4px",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}>
                  {planet.name}
                </span>
              </div>
            </motion.div>
          )
        })}
{/* Waving astronaut - center */}
<div style={{
  position: "absolute",
  left: "50%", top: "50%",
  transform: "translate(-50%, -50%)",
  zIndex: 10,
}}>
  {/* Glow */}
  <div style={{
    position: "absolute",
    left: "50%", top: "50%",
    transform: "translate(-50%, -50%)",
    width: 180, height: 180,
    borderRadius: "50%",
    background: "radial-gradient(circle, rgba(108,99,255,0.25) 0%, transparent 70%)",
    pointerEvents: "none",
  }} />
  <Astronaut />
</div>
        </div>

      </div>
  )
}