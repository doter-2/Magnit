import React, { useState } from "react";
import { useReveal } from "../hooks/useReveal";
import { Counter } from "../components/Counter";
import { BarChart } from "../components/BarChart";

export function SectionResults() {
  const [ref, v] = useReveal();
  const [tab, setTab] = useState("ops");
  
  const opsMetrics = [
    { label: "Количество магазинов, шт.", rows: [
      { year: "2019", val: 20725 }, { year: "2020", val: 21564 },
      { year: "2021", val: 26077 }, { year: "2022", val: 27405 },
      { year: "2023", val: 29740 }, { year: "2024", val: 31483 },
    ]},
    { label: "Выручка, млрд руб.", rows: [
      { year: "2020", val: 1553 }, { year: "2021", val: 1856 },
      { year: "2022", val: 2152 }, { year: "2023", val: 2544 },
      { year: "2024", val: 3043 },
    ]},
  ];

  return (
    <section id="results" style={{ background: "#e30613", minHeight: "100vh", padding: "100px 5vw 60px" }}>
      <div ref={ref} style={{ opacity: v ? 1 : 0, transform: v ? "none" : "translateY(24px)", transition: "opacity 700ms ease, transform 700ms ease" }}>
        <p style={{ color: "#fff", fontSize: 13, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", marginBottom: 12 }}>О компании</p>
        <h2 style={{ color: "#fff", fontSize: "clamp(26px, 4vw, 48px)", fontWeight: 800, lineHeight: 1.1, margin: "0 0 40px", letterSpacing: "-0.03em" }}>Ключевые результаты<br />2024 года</h2>
        
        <div style={{ display: "flex", gap: 0, marginBottom: 40, borderBottom: "1px solid rgba(255, 255, 255, 0.2)" }}>
          {[{ key: "ops", label: "Операционные и финансовые показатели" }, { key: "esg", label: "ESG показатели" }].map(t => (
            <button key={t.key} onClick={() => setTab(t.key)} style={{ background: "none", border: "none", cursor: "pointer", padding: "12px 24px 14px", color: tab === t.key ? "#fff" : "rgba(255,255,255,0.45)", fontWeight: tab === t.key ? 700 : 500, fontSize: 14, borderBottom: tab === t.key ? "2px solid #fff" : "2px solid transparent", marginBottom: -1, transition: "color 200ms" }}>
              {t.label}
            </button>
          ))}
        </div>

        {tab === "ops" && (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 40 }}>
            {opsMetrics.map((m, mi) => (
              <div key={mi}>
                <h3 style={{ color: "rgba(255,255,255,0.7)", fontSize: 14, fontWeight: 600, marginBottom: 24 }}>{m.label}</h3>
                <BarChart rows={m.rows} active={v} />
              </div>
            ))}
          </div>
        )}

        {tab === "esg" && (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 20 }}>
              {[
                { label: "Доля женщин-руководителей", val: "40%", sub: "топ-менеджмент" },
                { label: "Снижение CO₂ на м²", val: "8%", sub: "к 2023 году" },
                { label: "Сотрудников", val: "400K+", sub: "численность группы" },
                { label: "Магазинов с LED", val: "85%", sub: "от общего числа" },
            ].map((e, i) => (
              /* ОСТАВИЛ КАК БЫЛО: Твой оригинальный полупрозрачный фон */
              <div key={i} style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 12, padding: 24, opacity: v ? 1 : 0, transition: `opacity 600ms ${i * 100}ms ease` }}>
                
                {/* ИСПРАВЛЕНО: Убран прозрачный градиент, теперь цвет цифр жесткий белый (#ffffff) */}
                <div style={{ fontSize: 32, fontWeight: 800, color: "#ffffff", marginBottom: 8 }}>
                  <Counter to={parseFloat(e.val)} suffix={e.val.replace(/[\d.]/g, "")} duration={1400} />
                </div>
                
                {/* ИСПРАВЛЕНО: Текст заголовка стал чисто белым */}
                <div style={{ color: "#ffffff", fontSize: 14, fontWeight: 600, marginBottom: 4 }}>{e.label}</div>
                
                {/* ИСПРАВЛЕНО: Сделал подпись чуть ярче (белый 70%), чтобы она не сливалась с красным фоном */}
                <div style={{ color: "rgba(255,255,255,0.7)", fontSize: 12 }}>{e.sub}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
