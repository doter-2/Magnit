import React from "react";
import "./SectionCases.css";

const casesData = [
  {
    title: "Создаем зонтичный бренд «Магнит»",
    img: "/images/cases/circle1.webp",
  },
  {
    title: "Формируем комфортный клиентский путь",
    img: "/images/cases/circle2.webp",
  },
  {
    title: "Внедряем технологии для повышения лояльности покупателей",
    img: "/images/cases/circle3.webp",
  },
  {
    title: "Забота о людях",
    img: "/images/cases/circle4.webp",
  },
];

export function SectionCases() {
  return (
    <section className="cases-hub-container">
      <div
        className="cases-hub-bg"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.35), rgba(0,0,0,0.35)), url(/images/cases/bg.webp)",
        }}
      ></div>

      <div className="cases-hub-content">
        <span className="hub-subtitle">30 лет рядом с покупателем</span>

        <h1 className="hub-title">
          Качество, удобство и комфорт для покупателя
        </h1>

        <div className="hub-grid">
          {casesData.map((item, index) => (
            <div key={index} className="hub-card">
              <div className="circle-wrapper">
                <div
                  className="circle-image"
                  style={{
                    backgroundImage: `url(${item.img})`,
                  }}
                />

                <div className="circle-border"></div>
              </div>

              <p className="card-text">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}