import React, { useState, useEffect } from "react";

export function SectionPreview() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const fn = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <section 
      id="preview" 
      style={{
        minHeight: "100vh", 
        position: "relative", 
        overflow: "hidden",
        display: "flex", 
        flexDirection: "column", 
        justifyContent: "flex-end",
        backgroundImage: 'url("/images/hero-bg.jpg")',
        backgroundSize: "cover",        
        backgroundPosition: "center",   
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* ФИРМЕННЫЙ КРАСНЫЙ ОВЕРЛЕЙ (Переходит от прозрачного в плотный красный ПАО Магнит #e30613) */}
      <div style={{
        position: "absolute", 
        inset: 0,
        background: `linear-gradient(to bottom, rgba(227,6,19,0.2) 0%, rgba(227,6,19,0.85) 85%, #e30613 100%)`,
        zIndex: 1,
      }} />

      {/* КОНТРАСТНЫЙ БЕЛЫЙ КРУГ "30 ЛЕТ" */}
      <div style={{
        position: "absolute", 
        top: 120, 
        right: "8%",
        transform: `translateY(${-scrollY * 0.2}px)`, 
        zIndex: 3,
      }}>
        <div style={{
          border: "3px solid #fff",
          borderRadius: "50%",
          width: 130, 
          height: 130,
          display: "flex", 
          flexDirection: "column",
          alignItems: "center", 
          justifyContent: "center",
          color: "#e30613",
          backgroundColor: "#fff", // Белый круг, чтобы выделялся на красном
          boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
        }}>
          <span style={{ fontSize: 44, fontWeight: 900, lineHeight: 1 }}>30</span>
          <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: 1, marginTop: 2 }}>YEARS</span>
        </div>
      </div>

      {/* БЕЛЫЙ ТЕКСТ НА КРАСНОМ ФОНЕ */}
      <div style={{
        position: "relative", 
        zIndex: 3, 
        padding: "0 5vw 140px",
        maxWidth: 900,
        transform: `translateY(${-scrollY * 0.05}px)`,
      }}>
        <p style={{
          color: "rgba(255,255,255,0.85)", 
          fontSize: "clamp(13px, 1.2vw, 16px)",
          letterSpacing: 3, 
          fontWeight: 700, 
          marginBottom: 16, 
          textTransform: "uppercase",
        }}>
          Company Overview
        </p>
        <h1 style={{
          color: "#fff",
          fontSize: "clamp(38px, 6.5vw, 76px)",
          fontWeight: 900,
          lineHeight: 1.05,
          margin: "0 0 16px",
          letterSpacing: "-0.02em",
          textShadow: "0 2px 10px rgba(0,0,0,0.1)",
        }}>
          Everything within<br />reach
        </h1>
        <div style={{ width: 60, height: 4, background: "#fff", marginBottom: 20 }} /> {/* Белый разделитель */}
        <p style={{
          color: "#fff",
          fontSize: "clamp(14px, 1.4vw, 20px)",
          fontWeight: 500,
          letterSpacing: 0.5,
          margin: 0,
        }}>
          PJSC Magnit Annual Report 2024
        </p>
      </div>

      {/* ЧИСТО БЕЛАЯ ВОЛНА НА ДНЕ (Плавный переход к следующей секции) */}
      <div style={{
        position: "absolute", 
        bottom: -2, 
        left: 0, 
        right: 0, 
        height: 80,
        background: "#fff", // Поменяли серый #f1f5f8 на чистый белый
        borderRadius: "100% 100% 0 0 / 100% 100% 0 0",
        zIndex: 2,
      }} />
    </section>
  );
}
