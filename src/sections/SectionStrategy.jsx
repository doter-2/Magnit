import React from "react";
import { useReveal } from "../hooks/useReveal";

export function SectionStrategy() {
  const [ref, v] = useReveal();
  const pillars = [
    {
      title: "Повышение ценности предложения для покупателя",
      points: [
        "Адаптация ассортимента к локальным предпочтениям",
        "Непрерывное совершенствование механик программы лояльности",
        "Расширение и дифференциация СТМ",
        "Улучшение бренда через заботу, безопасность и ESG",
        "Развитие экосистемных сервисов для мультиканального опыта",
      ],
    },
    {
      title: "Повышение операционной эффективности",
      points: [
        "Гибкие облачные IT-решения и платформа данных",
        "Открытие новых распределительных центров",
        "Инвестиции в автоматизацию и стандартизацию процессов",
        "Обновление автопарка",
        "Кросс-функциональные инициативы по улучшению ключевых процессов",
      ],
    },
  ];

  return (
    <section id="strategies" style={{ background: "#e30613", minHeight: "100vh", padding: "100px 5vw 60px" }}>
      <div ref={ref} style={{ opacity: v ? 1 : 0, transform: v ? "none" : "translateY(24px)", transition: "opacity 700ms ease, transform 700ms ease" }}>
        <p style={{ color: "#e30613", fontSize: 13, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", marginBottom: 12 }}>Стратегия</p>
        <h2 style={{ color: "#fff", fontSize: "clamp(22px, 3.5vw, 44px)", fontWeight: 800, lineHeight: 1.1, margin: "0 0 12px", letterSpacing: "-0.03em" }}>
          Наша стратегическая цель — рыночное лидерство через уникальный мультиформатный продукт, поддержанный экосистемой технологических сервисов и единой программой лояльности.
        </h2>
        <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 14, lineHeight: 1.65, marginBottom: 48, maxWidth: 640 }}>
          Компания фокусируется на непрерывном повышении ценностного предложения для покупателей и улучшении эффективности внутренних процессов.
        </p>
        <p style={{ color: "#e30613", fontSize: 14, fontWeight: 700, marginBottom: 24 }}>Ключевые направления</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
          {pillars.map((p, i) => (
            <div key={i} style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 14, padding: 28, opacity: v ? 1 : 0, transition: `opacity 600ms ${i * 150}ms ease` }}>
              <h3 style={{ color: "#fff", fontSize: 16, fontWeight: 700, marginBottom: 20, lineHeight: 1.4 }}>{p.title}</h3>
              <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 12 }}>
                {p.points.map((pt, j) => (
                  <li key={j} style={{ display: "flex", gap: 10, color: "rgba(255,255,255,0.65)", fontSize: 14, lineHeight: 1.5 }}>
                    <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#e30613", flexShrink: 0, marginTop: 7 }} />
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
