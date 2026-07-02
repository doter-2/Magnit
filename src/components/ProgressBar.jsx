import React, { useState, useEffect } from "react";

export function ProgressBar() {
  const [w, setW] = useState(0);
  useEffect(() => {
    const update = () => {
      const el = document.documentElement;
      setW((el.scrollTop / (el.scrollHeight - el.clientHeight)) * 100);
    };
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);
  return (
    <div style={{
      position: "fixed", top: 0, left: 0, height: 3, zIndex: 2000,
      background: "#e30613", width: `${w}%`, transition: "width 60ms linear"
    }} />
  );
}
