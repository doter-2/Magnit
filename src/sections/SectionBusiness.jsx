import React, { useState } from "react";

const hotspots = [
  {
    top: "20%",
    left: "16%",
    title: "Собственное производство",
    value: "21",
    unit: "производственное предприятие",
    breakdown: [
      { label: "аграрные", count: "7" },
      { label: "промышленные", count: "14" },
    ],
  },
  {
    top: "41%",
    left: "51%",
    title: "Магазины у дома «Магнит»",
    value: "20 268",
    unit: "магазинов",
    breakdown: [],
  },
  {
    top: "33%",
    left: "91%",
    title: "Магазины косметики",
    value: "8 050",
    unit: "магазинов",
    breakdown: [],
  },
  {
    top: "76%",
    left: "8%",
    title: "Супермаркеты",
    value: "456",
    unit: "магазинов",
    breakdown: [],
  },
  {
    top: "60%",
    left: "76%",
    title: "Аптеки",
    value: "1 084",
    unit: "аптек",
    breakdown: [],
  },
  {
    top: "83%",
    left: "68%",
    title: "Магазины у дома «ДИКСИ»",
    value: "2 363",
    unit: "магазина",
    breakdown: [],
  },
];

export function SectionBusiness() {
  const [activeHotspot, setActiveHotspot] = useState(null);

  return (
    <section
      id="business"
      style={{
        background: "#ffffff",
        minHeight: "100vh",
        display: "flex",
        alignItems: "stretch",
        padding: "80px 0 60px",
        position: "relative",
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      }}
    >
      <div style={{
        width: "min(460px, 38%)",
        flexShrink: 0,
        padding: "20px 40px 0 5vw",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        zIndex: 5
      }}>
        <p style={{ color: "#293038", fontSize: 14, fontWeight: 600, letterSpacing: 0.5, margin: "0 0 8px", opacity: 0.7 }}>
          О компании
        </p>

        <h2 style={{ color: "#293038", fontSize: "clamp(32px, 4vw, 54px)", fontWeight: 800, margin: "0 0 24px", letterSpacing: "-0.02em" }}>
          О нас
        </h2>

        <p style={{ color: "#293038", fontSize: 15, lineHeight: 1.65, margin: "0 0 32px" }}>
          «Магнит» — один из крупнейших российских ритейлеров с общей торговой площадью 10 934 тыс. кв. м,
          представленный 31 483 магазинами разных форматов в 72 регионах Российской Федерации и Республике Узбекистан.
        </p>

        <a
          href="https://magnit.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            color: "#e30613",
            fontSize: 14,
            fontWeight: 700,
            textDecoration: "none",
            borderBottom: "1.5px solid rgba(227, 6, 19, 0.3)",
            paddingBottom: 4,
            width: "fit-content",
            marginBottom: 48,
            transition: "border-color 0.2s"
          }}
          onMouseEnter={(e) => e.currentTarget.style.borderBottomColor = "#e30613"}
          onMouseLeave={(e) => e.currentTarget.style.borderBottomColor = "rgba(227, 6, 19, 0.3)"}
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 1V11M6 11L2 7M6 11L10 7" stroke="#e30613" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Бизнес-модель
        </a>

        <div style={{
          background: "#e30613",
          borderRadius: "0 24px 24px 0",
          padding: "40px 32px",
          marginLeft: "-5vw",
          paddingLeft: "5vw",
          boxShadow: "0 10px 30px rgba(227,6,19,0.15)"
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 32 }}>
            <div style={{
              width: 32, height: 32, borderRadius: "50%", border: "2px solid #fff",
              display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: 14
            }}>
              🏢
            </div>
            <span style={{ color: "#fff", fontSize: 15, fontWeight: 700, lineHeight: 1.2 }}>
              Вертикально интегрированный ритейлер
            </span>
          </div>

          <h3 style={{ color: "#fff", fontSize: 24, fontWeight: 800, margin: "0 0 16px" }}>
            Миссия
          </h3>
          <p style={{ color: "rgba(255,255,255,0.9)", fontSize: 14, lineHeight: 1.6, margin: 0 }}>
            Мы непрерывно совершенствуем операционную деятельность, руководствуемся профессиональным подходом во всех областях деятельности и стремимся обеспечить высочайшее качество и уровень сервиса для наших клиентов.
          </p>
        </div>
      </div>

      {/* ─── ПРАВАЯ КОЛОНКА: КАРТИНКА + ХОТСПОТЫ ─── */}
      <div style={{
        flex: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingRight: "5vw",
        userSelect: "none"
      }}>
        <div style={{ position: "relative", width: "100%", maxWidth: 900 }}>
          <img
            src="/images/magnit-map.png"
            alt="Magnit business model"
            style={{ width: "100%", height: "auto", display: "block" }}
          />

          {hotspots.map((spot, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setActiveHotspot(activeHotspot === i ? null : i)}
              style={{
                position: "absolute",
                top: spot.top,
                left: spot.left,
                transform: "translate(-50%, -50%)",
                width: 32,
                height: 32,
                borderRadius: "50%",
                background: activeHotspot === i ? "#e30613" : "#1a1a1a",
                color: "#fff",
                border: "none",
                fontSize: 18,
                lineHeight: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                boxShadow: "0 4px 12px rgba(0,0,0,0.25)",
                zIndex: 10,
                transition: "background 0.2s",
              }}
            >
              {activeHotspot === i ? "×" : "+"}
            </button>
          ))}

          {activeHotspot !== null && (
            <div
              style={{
                position: "absolute",
                top: hotspots[activeHotspot].top,
                left: hotspots[activeHotspot].left,
                transform: "translate(-20%, calc(-100% - 20px))",
                background: "#fff",
                borderRadius: 16,
                padding: "28px 32px",
                minWidth: 260,
                boxShadow: "0 20px 50px rgba(0,0,0,0.2)",
                zIndex: 20,
              }}
            >
              <p style={{ color: "#293038", fontSize: 14, fontWeight: 600, margin: "0 0 12px", opacity: 0.7 }}>
                {hotspots[activeHotspot].title}
              </p>

              <div style={{ display: "flex", alignItems: "baseline", gap: 10, marginBottom: 8 }}>
                <span style={{ color: "#293038", fontSize: 40, fontWeight: 800, lineHeight: 1 }}>
                  {hotspots[activeHotspot].value}
                </span>
              </div>

              <p style={{ color: "#293038", fontSize: 14, margin: 0 }}>
                {hotspots[activeHotspot].unit}
              </p>

              {hotspots[activeHotspot].breakdown.length > 0 && (
                <>
                  <div style={{ height: 1, background: "#ecf0f3", margin: "16px 0" }} />
                  {hotspots[activeHotspot].breakdown.map((b, idx) => (
                    <div key={idx} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 14, color: "#293038", marginBottom: 6 }}>
                      <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#e30613", display: "inline-block" }} />
                      <strong>{b.count}</strong> - {b.label}
                    </div>
                  ))}
                </>
              )}
            </div>
          )}
        </div>
      </div>

    </section>
  );
}
