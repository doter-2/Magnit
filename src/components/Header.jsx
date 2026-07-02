import React, { useState } from "react";

// Значения взяты из настоящего CSS сайта ar2024.magnit.com (:root и .header* правила)
const COLORS = {
  bunker: "#293038",         // --cl-bunker
  blackRussian: "#0f1828",   // --cl-black-russian
  patternsBlue: "#dbe2e8",   // --cl-pattens-blue
  lightSlateGrey: "#848b94", // --cl-light-slate-grey
  venetianRed: "#e30613",    // --cl-venetian-red
  aliceBlue: "#ecf0f3",      // --cl-alice-blue
  white: "#ffffff",
};

const GRADIENT = "linear-gradient(90deg, #E20511 -0.04%, #F23558 81.14%, #F22E76 162.33%)";

const navItems = [
  { target: "business", label: "О компании" },
  { target: "cases-main", label: "Удобство и комфорт для покупателя" },
  { target: "factors", label: "Факторы инвестиционной привлекательности" },
  { target: "strategies", label: "Cтратегия" },
  { target: "develop", label: "Устойчивое развитие" },
  { target: "download", label: "Центр загрузки" },
];

// Точный путь логотипа-леттеринга «МАГНИТ», вытащенный из preload_page_inner в исходном коде сайта
function LogoMark({ width = 167, color = COLORS.venetianRed }) {
  const height = (width * 48) / 248;
  return (
    <svg width={width} height={height} viewBox="0 0 248 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        fill={color}
        d="M116.295 28.2889H109.116L112.706 18.981L116.295 28.2889ZM118.807 34.6768L120.423 38.8745H128.14L116.474 8.94296H109.475L97.8098 38.8745H105.527L107.142 34.6768H118.807ZM85.247 38.8745V21.1711L77.7094 30.4791L69.9923 21.1711V38.8745H62.2752V8.94296H69.8128L77.5299 19.1635L85.247 8.94296H92.7847V38.8745H85.247ZM132.985 8.94296V38.8745H140.702V15.8783H151.291V8.94296H132.985ZM175.699 27.1939V38.8745H183.416V8.94296H175.699V20.076H164.392V8.94296H156.675V38.8745H164.392V27.1939H175.699ZM231.154 38.8745V15.8783H222.181V8.94296H247.665V15.8783H238.692V38.8745H231.154ZM209.259 21.9011V38.8745H216.976V8.94296H210.336L198.312 25.7338V8.94296H190.594V38.8745H197.055L209.259 21.9011ZM0 14.2357C0 10.4031 0.43574 6.75284 4.12775 4.19771C6.81976 1.46007 10.2296 0 13.9985 0H46.3026V7.30037H13.9985C12.2038 7.30037 10.4091 8.03041 9.15284 9.30798C7.89657 10.5855 7.1787 12.4106 7.1787 14.2357V26.4639C6.81976 29.7494 0.48669 32.3041 1.43574 32.8517L0 33.0342V14.2357ZM0 47.8174V40.5171H32.3041C34.0988 40.5171 35.8935 39.787 37.1498 38.5095C38.4063 37.2319 39.1239 35.4068 39.1239 33.5817V22.0836C39.1239 18.616 41.6365 15.6959 45.0463 15.1483L46.3026 14.9658V33.7642C46.3026 37.5969 44.8669 41.0646 42.1749 43.8022C39.4828 46.5399 36.073 48 32.3041 48H0V47.8174ZM27.4585 33.0342V23.7262L23.1513 28.8365L18.8441 23.7262V33.0342H13.2806V14.7833H18.6646L23.1513 20.6236L27.6381 14.7833H33.022V33.0342H27.4585Z"
      />
    </svg>
  );
}

function ArrowPdfIcon() {
  return (
    <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2 14H14" stroke="#293038" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M8 10L8 1" stroke="#293038" strokeWidth="1.5" strokeLinecap="round" />
      <path
        d="M3 6L6.14429 9.21405C7.16921 10.262 8.83079 10.262 9.85487 9.21405L13 6"
        stroke="#293038"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          display: "flex",
          alignItems: "center",
          width: "100%",
          minHeight: 72, // .header{min-height:72px} на ≥768px, на моб. 52px
          background: COLORS.white, // постоянная белая подложка — в оригинале это .header:after
          boxShadow: "0 1px 0 rgba(15,24,40,0.06)",
          zIndex: 15,
          fontFamily: "Geometria, -apple-system, sans-serif",
        }}
      >
        {/* .burger — 52x52 моб / 72x72 ≥768, градиент как в оригинале */}
        <button
          onClick={() => setMenuOpen(true)}
          aria-label="Открыть меню"
          style={{
            position: "relative",
            background: GRADIENT,
            border: 0,
            height: 72,
            width: 72,
            minWidth: 72,
            padding: "30px 18px",
            marginRight: 25,
            cursor: "pointer",
            zIndex: 15,
          }}
        >
          {/* .burger__lines — 31px, left:15px, top:30px на ≥768 */}
          <span
            style={{
              position: "absolute",
              left: 15,
              top: 30,
              width: 31,
              height: 2,
              borderRadius: 10,
              background: COLORS.white,
              display: "block",
            }}
          />
        </button>

        {/* .header__left: flex, gap 20, justify-content flex-start (≥768) */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            gap: 20,
            width: "100%",
          }}
        >
          {/* .logo: width 167px margin-left 97px (≥768) */}
          <a href="/" aria-label="Главная" style={{ width: 167, marginLeft: 97, flexShrink: 0, display: "block" }}>
            <LogoMark width={167} />
          </a>

          {/* .header__content--main */}
          <div
            style={{
              padding: "5px 5px 5px 20px",
              borderLeft: `1px solid ${COLORS.lightSlateGrey}`,
              fontFamily: "Geometria-ExtraBold, Geometria, sans-serif",
              fontWeight: 800,
              fontSize: 23,
              color: COLORS.bunker,
            }}
          >
            Все нужное – рядом
          </div>
        </div>

        {/* .header__right */}
        <div
          style={{
            position: "absolute",
            right: 0,
            display: "flex",
            alignItems: "center",
            zIndex: 5,
          }}
        >
          <a
            href="/index_en.html"
            rel="noopener"
            style={{
              display: "flex",
              alignItems: "center",
              padding: "10px 24px",
              height: 72,
              background: "transparent",
              border: "none",
              borderLeft: `1px solid ${COLORS.patternsBlue}`,
              fontFamily: "Geometria-Medium, Geometria, sans-serif",
              fontWeight: 500,
              letterSpacing: "-0.02em",
              color: COLORS.bunker,
              textDecoration: "none",
            }}
          >
            EN
          </a>

          <a
            href="/documents/MAGNIT_AR_2024_RUS.pdf"
            target="_blank"
            rel="noopener"
            download
            style={{
              display: "flex",
              alignItems: "center",
              gap: 5,
              padding: "10px 24px 10px 16px",
              height: 72,
              background: "transparent",
              border: "none",
              borderLeft: `1px solid ${COLORS.patternsBlue}`,
              fontFamily: "Geometria-Medium, Geometria, sans-serif",
              fontWeight: 500,
              letterSpacing: "-0.02em",
              color: COLORS.bunker,
              textDecoration: "none",
            }}
          >
            <ArrowPdfIcon />
            <span>PDF</span>
          </a>
        </div>
      </header>

      {/* .navigation — панель бургер-меню */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: menuOpen ? 0 : "-100%",
          width: "100%",
          maxWidth: 450,
          height: "100%",
          background: COLORS.white,
          boxShadow: "0 0 48px #0f18281f",
          transition: "0.3s ease",
          zIndex: 14,
          overflowY: "auto",
        }}
      >
        <button
          onClick={() => setMenuOpen(false)}
          aria-label="Закрыть меню"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 72,
            height: 72,
            background: GRADIENT,
            border: "none",
            color: "#fff",
            fontSize: 20,
            cursor: "pointer",
          }}
        >
          ✕
        </button>

        {/* .navigation{padding:120px 0 0 50px на ≥768} */}
        <div style={{ padding: "120px 50px 40px" }}>
          <ul style={{ listStyle: "none", margin: 0, padding: "0 26px" }}>
            {navItems.map((item, i) => (
              <li
                key={item.target}
                style={{
                  borderBottom: `1px solid ${COLORS.patternsBlue}`,
                  borderTop: i === 0 ? `1px solid ${COLORS.patternsBlue}` : "none",
                }}
              >
                <button
                  onClick={() => scrollTo(item.target)}
                  style={{
                    display: "block",
                    width: "100%",
                    textAlign: "left",
                    background: "none",
                    border: "none",
                    padding: "18px 0",
                    fontFamily: "Geometria-Bold, sans-serif",
                    fontWeight: 700,
                    fontSize: 18,
                    color: COLORS.venetianRed,
                    cursor: "pointer",
                  }}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          style={{ position: "fixed", inset: 0, background: "rgba(15,24,40,0.4)", zIndex: 13 }}
        />
      )}
    </>
  );
}

export default function Preview() {
  return (
    <div style={{ minHeight: "50vh", background: COLORS.white }}>
      <Header />
      <div style={{ paddingTop: 120, textAlign: "center", color: COLORS.lightSlateGrey, fontFamily: "sans-serif" }}>
        Прокрутите вниз или откройте бургер-меню — здесь будет остальной контент сайта
      </div>
    </div>
  );
}
