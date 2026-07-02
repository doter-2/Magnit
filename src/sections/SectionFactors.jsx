import React from "react";
import { useReveal } from "../hooks/useReveal";
import { FactorCard } from "../components/FactorCard";

export function SectionFactors() {
  const [ref, v] = useReveal();
  const factors = [
    { title: "Лидер рынка", desc: "№1 по количеству магазинов в России. Крупнейшая логистическая сеть из 51 РЦ и 7,3 тыс. грузовых автомобилей." },
    { title: "Рост выручки", desc: "Выручка выросла на 19,6% г/г до 3 043,4 млрд руб. LFL-продажи ускорились с 5,5% до 11,2%." },
    { title: "Мультиформат", desc: "Уникальная многоформатная модель от дискаунтеров до суперсторов охватывает все сегменты потребителей." },
    { title: "Экосистема", desc: "80+ млн участников программы лояльности, собственная доставка и маркетплейс в едином суперприложении." },
    { title: "Цифровые технологии", desc: "Big Data, ИИ для персонализации и оптимизации ассортимента. Cloud-first IT-архитектура." },
    { title: "Устойчивый рост", desc: "Долгосрочная стратегия с фокусом на операционную эффективность, ESG и развитие регионального присутствия." },
  ];

  return (
    <section id="factors" style={{ background: "#fff", minHeight: "100vh", padding: "100px 5vw 60px" }}>
      <div ref={ref} style={{ opacity: v ? 1 : 0, transform: v ? "none" : "translateY(24px)", transition: "opacity 700ms ease, transform 700ms ease" }}>
        <p style={{ color: "#e30613", fontSize: 13, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", marginBottom: 12 }}>Факторы инвестиционной привлекательности</p>
        <h2 style={{ color: "#0f1828", fontSize: "clamp(26px, 4vw, 48px)", fontWeight: 800, lineHeight: 1.1, margin: "0 0 48px", letterSpacing: "-0.03em" }}>Почему Магнит</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20 }}>
          {factors.map((f, i) => (
            <FactorCard key={i} {...f} delay={i * 90} parentVisible={v} />
          ))}
        </div>
      </div>
    </section>
  );
}
