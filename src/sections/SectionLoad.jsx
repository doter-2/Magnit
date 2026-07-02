import React, { useState } from "react";
import { useReveal } from "../hooks/useReveal";
import { PdfArrow } from "../icons/PdfArrow";
import { RedArrow } from "../icons/RedArrow";

export function SectionLoad() {
  const [ref, v] = useReveal();
  const [open, setOpen] = useState(null);
  
  const groups = [
    { title: "О Компании", pdf: "MAGNIT_AR_2024_RUS_%D0%9E%20%D0%9A%D0%BE%D0%BC%D0%BF%D0%B0%D0%BD%D0%B8%D0%B8.pdf", sub: ["О нас", "Бизнес-модель", "Ключевые события 2024 года"] },
    { title: "Стратегический отчет", pdf: "MAGNIT_AR_2024_ENG_Strategy%20report.pdf", sub: ["Обзор рынка", "Стратегия", "Инновации и цифровые решения"] },
    { title: "Бизнес-обзор", pdf: "MAGNIT_AR_2024_ENG_Business%20overview.pdf", sub: ["Обзор форматов", "Цепочка поставок", "Собственное производство"] },
    { title: "Устойчивое развитие", pdf: "MAGNIT_AR_2024_RUS_%D0%A3%D1%81%D1%82%D0%BE%D0%B9%D1%87%D0%B8%D0%B2%D0%BE%D0%B5%20%D1%80%D0%B0%D0%B7%D0%B2%D0%B8%D1%82%D0%B8%D0%B5.pdf", sub: ["Экология", "Социальная ответственность", "Корпоративное управление"] },
    { title: "Корпоративное управление", pdf: "MAGNIT_AR_2024_ENG_Corporate%20governance.pdf", sub: ["Совет директоров", "Акционеры и инвесторы"] },
  ];
  
  const base = "https://magnit.com";

  return (
    <section id="download" style={{ background: "#fff", minHeight: "100vh", padding: "100px 5vw 60px" }}>
      <div ref={ref} style={{ opacity: v ? 1 : 0, transform: v ? "none" : "translateY(24px)", transition: "opacity 700ms ease, transform 700ms ease" }}>
        <h2 style={{ color: "#e30613", fontSize: "clamp(26px, 4vw, 48px)", fontWeight: 800, lineHeight: 1.1, margin: "0 0 40px", letterSpacing: "-0.03em" }}>Центр загрузки</h2>
        <a href={`${base}MAGNIT_AR_2024_ENG.pdf`} target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", background: "#0f1828", color: "#fff", textDecoration: "none", padding: "24px 28px", borderRadius: 8, marginBottom: 24, gap: 16, fontSize: 16, fontWeight: 700 }}>
          <span>Скачать Годовой отчет за 2024 г. (EN)</span>
          <PdfArrow />
        </a>
        {groups.map((g, i) => (
          <div key={i} style={{ borderBottom: "1px solid #dbe2e8" }}>
            <button onClick={() => setOpen(open === i ? null : i)} style={{ width: "100%", background: "none", border: "none", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px 0", cursor: "pointer" }}>
              <a href={`${base}${g.pdf}`} target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()} style={{ color: "#293038", fontSize: 16, fontWeight: 600, textDecoration: "none" }}>
                {g.title}
              </a>
              <span style={{ color: "#e30613", fontSize: 18, fontWeight: 700, transform: open === i ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 300ms ease", display: "block" }}>⌄</span>
            </button>
            <div style={{ maxHeight: open === i ? 300 : 0, overflow: "hidden", transition: "max-height 400ms ease" }}>
              {g.sub.map((s, j) => (
                <a key={j} href={`${base}${g.pdf}`} target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: 10, color: "#475361", fontSize: 14, textDecoration: "none", padding: "12px 0 12px 16px" }}>
                  <RedArrow /> {s}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
