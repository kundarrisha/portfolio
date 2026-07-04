import { useEffect, useState } from "react"

export default function BlurText({ text = "" }) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setTimeout(() => setVisible(true), 100)
  }, [])

  return (
    <h1 style={{ fontSize: 'clamp(48px, 8vw, 88px)', fontWeight: '700', marginBottom: '16px', lineHeight: 1.0, color: 'white', letterSpacing: '-0.03em' }}>
      {text.split("").map((char, i) => (
        <span
          key={i}
          style={{
            display: 'inline-block',
            whiteSpace: char === " " ? "pre" : "normal",
            opacity: visible ? 1 : 0,
            filter: visible ? 'blur(0px)' : 'blur(8px)',
            transform: visible ? 'translateY(0)' : 'translateY(20px)',
            transition: `opacity 0.5s ease ${i * 0.05}s, filter 0.5s ease ${i * 0.05}s, transform 0.5s ease ${i * 0.05}s`
          }}
        >
          {char}
        </span>
      ))}
    </h1>
  )
}