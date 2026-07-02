import React from "react";
import { useReveal } from "../hooks/useReveal";
import { RedArrow } from "../icons/RedArrow";

export function SectionDevelop() {
  const [ref, v] = useReveal();
  const awards = [
    { badge: "Золото", desc: "в рейтинге лучших работодателей России (Forbes)" },
    { badge: "Resg2", desc: "высокий уровень в рейтинге нефинансовой отчетности (AK&M)" },
    { badge: "A+", desc: "высшая оценка в рейтинге «Лидеры корпоративной благотворительности»" },
    { badge: "Победитель", desc: "премии Retail Week Awards в номинации «ESG-проект года в ритейле»" },
    { badge: "Группа С", desc: "в индексе «Вектор устойчивого развития» (РСПП)" },
    { badge: "Группа В", desc: "в индексе «Открытость и ответственность» (РСПП)" },
    { badge: "1-е место", desc: "в конкурсе инклюзивных практик «Открыто для всех» в номинации «Корпоративная политика» (АСИ)" },
    { badge: "1-е место", desc: "в ESG-рэнкинге российских компаний потребительского сектора (НРА)" },
    { badge: "2-е место", desc: "Silver Mercury 2024 в номинации «Лучший креатив в HR»" },
    { badge: "3-е место", desc: "Red Apple 2024 в категории «Экологическое, социальное и корпоративное управление»" },
  ];

  return (
    <section id="develop" style={{ background: "#fff", minHeight: "100vh", padding: "100px 5vw 60px" }}>
      <div ref={ref} style={{ opacity: v ? 1 : 0, transform: v ? "none" : "translateY(24px)", transition: "opacity 700ms ease, transform 700ms ease" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 20, marginBottom: 40 }}>
          <div>
            <p style={{ color: "#e30613", fontSize: 13, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", marginBottom: 12 }}>Устойчивое развитие</p>
            <h2 style={{ color: "#0f1828", fontSize: "clamp(26px, 4vw, 48px)", fontWeight: 800, lineHeight: 1.1, margin: 0, letterSpacing: "-0.03em" }}>Наши достижения</h2>
          </div>
          <a href="https://magnit.com" target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: 10, color: "#293038", fontSize: 14, fontWeight: 600, textDecoration: "none", border: "1.5px solid rgba(227,6,18,0.35)", padding: "10px 18px", borderRadius: 4 }}>
            <RedArrow /> Устойчивое развитие
          </a>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 10 }}>
          {awards.map((a, i) => (
            <div key={i} style={{ background: "linear-gradient(180deg, rgba(241,245,248,0.4) 0%, #F1F5F8 100%)", padding: 16, borderRadius: 4, opacity: v ? 1 : 0, transition: `opacity 500ms ${i * 60}ms ease` }}>
              <div style={{ fontWeight: 800, fontSize: 18, lineHeight: 1.3, borderBottom: "1px solid", borderImage: "linear-gradient(90deg, #E20511, #F23558, #F22E76) 1", paddingBottom: 7, marginBottom: 8, background: "linear-gradient(90deg, #E20511, #F23558, #F22E76)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>{a.badge}</div>
              <div style={{ color: "#0f1828", fontSize: 13, lineHeight: 1.5 }}>{a.desc}</div>
            </div>
          ))}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 10, marginTop: 32 }}>
          {[{ href: "https://magnit.com", label: "Стратегия устойчивого развития «Магнита»" }, { href: "https://magnit.com", label: "Отчет об устойчивом развитии за 2024 г." }].map((l, i) => (
            <a key={i} href={l.href} target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: 10, color: "#293038", fontSize: 14, fontWeight: 500, textDecoration: "none", padding: "11px 0", opacity: 0.7 }}>
              <span style={{ color: "#e30613", fontSize: 16 }}>⤢</span>{l.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
