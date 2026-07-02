import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import { Header } from "./components/Header";
import { ProgressBar } from "./components/ProgressBar";

import { SectionPreview } from "./sections/SectionPreview";
import { SectionBusiness } from "./sections/SectionBusiness";
import { SectionResults } from "./sections/SectionResults";
import { SectionCases } from "./sections/SectionsCases/SectionCases";
import { SectionFactors } from "./sections/SectionFactors";
import { SectionStrategy } from "./sections/SectionStrategy";
import { SectionDevelop } from "./sections/SectionDevelop";
import { SectionLoad } from "./sections/SectionLoad";

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const mainRef = useRef(null);

 useGSAP(() => {
  const sections = gsap.utils.toArray("section");

  sections.forEach((section) => {
    gsap.fromTo(
      section,
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );
  });
}, { scope: mainRef });

  return (
    <div style={{ position: "relative", isolation: "isolate" }}>
      <ProgressBar />
      <Header />

      <main ref={mainRef}>
        <SectionPreview />
        <SectionBusiness />
        <SectionResults />
        <SectionCases />
        <SectionFactors />
        <SectionStrategy />
        <SectionDevelop />
        <SectionLoad />
      </main>
    </div>
  );
}