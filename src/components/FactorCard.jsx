import React, { useState } from "react";

export function FactorCard({ title, desc, delay, parentVisible }) {
  const [hover, setHover] = useState(false);
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        background: hover ? "#e30613" : "#ffffff",
        border: "2px solid #e30613",
        borderRadius: 12, padding: 28, cursor: "default",
        opacity: parentVisible ? 1 : 0,
        transform: parentVisible ? "translateY(0)" : "translateY(30px)",
        transition: "all 300ms ease",
        boxShadow: hover ? "0 10px 30px rgba(227,6,19,0.2)" : "0 4px 20px rgba(0,0,0,0.02)",
      }}
    >
      <div style={{ width: 32, height: 3, background: hover ? "#fff" : "#e30613", borderRadius: 2, marginBottom: 18, transition: "background 300ms" }} />
      <h3 style={{ color: hover ? "#fff" : "#e30613", fontSize: 18, fontWeight: 900, marginBottom: 12, transition: "color 300ms" }}>{title}</h3>
      <p style={{ color: hover ? "#ffffff" : "#293038", fontSize: 14, lineHeight: 1.6, margin: 0, fontWeight: hover ? 500 : 400, transition: "color 300ms" }}>{desc}</p>
    </div>
  );
}
