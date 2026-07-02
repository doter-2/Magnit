import React from "react";

export function BarChart({ rows, active }) {
  const max = Math.max(...rows.map(r => r.val));
  return (
    <div style={{ display: "flex", alignItems: "flex-end", gap: 10, height: 180 }}>
      {rows.map((r, i) => (
        <div key={r.year} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center" }}>
          <div style={{
            width: "100%",
            background: i === rows.length - 1 ? "linear-gradient(180deg, #E20511, #F23558)" : "rgba(255,255,255,0.12)",
            borderRadius: "4px 4px 0 0",
            height: active ? `${(r.val / max) * 140}px` : "0px",
            transition: `height 900ms ${i * 100}ms cubic-bezier(.16,1,.3,1)`,
            display: "flex", alignItems: "flex-start", justifyContent: "center",
            paddingTop: 6, position: "relative",
          }}>
            <span style={{ color: "#fff", fontSize: 10, fontWeight: 700 }}>
              {r.val.toLocaleString("ru-RU")}
            </span>
          </div>
          <span style={{ color: "rgba(255,255,255,0.4)", fontSize: 11, marginTop: 8 }}>{r.year}</span>
        </div>
      ))}
    </div>
  );
}
