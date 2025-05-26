import React, { useState, useEffect, useRef } from "react";
import { colors } from "../theme";
import Container from "./Container";

export default function Stats() {
  const data = [
    { label: "Tournaments Hosted", target: 15 },
    { label: "Players Onboarded", target: 1500 },
    { label: "Cheating/Fraud Attempts Detected", target: 100 },
  ];

  const [counts, setCounts] = useState(data.map(() => 0));
  const cardRefs = useRef([]);

  // Animate counters
  useEffect(() => {
    let rafId;
    const duration = 1500;
    const start = performance.now();

    const animate = (time) => {
      const elapsed = time - start;
      setCounts(
        data.map(({ target }) =>
          Math.min(Math.floor((elapsed / duration) * target), target)
        )
      );
      if (elapsed < duration) rafId = requestAnimationFrame(animate);
    };
    rafId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(rafId);
  }, []);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(({ target, isIntersecting }) => {
          if (isIntersecting) target.classList.add("visible");
        });
      },
      { threshold: 0.2 }
    );
    cardRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });
    return () => {
      cardRefs.current.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  // Set CSS variable for animation delay per card
  useEffect(() => {
    cardRefs.current.forEach((el, i) => {
      if (el) el.style.setProperty("--delay", `${i * 300}ms`);
    });
  }, []);

  return (
    <section
      style={{
        height: "auto",
        backgroundColor: colors.bg,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "6rem 2rem",
        boxSizing: "border-box",
      }}
      aria-label="Statistics"
    >
      <Container>
        <h2
          style={{
            color: colors.text,
            fontSize: "2.8rem",
            fontWeight: "700",
            marginBottom: "3.5rem",
            textAlign: "center",
            userSelect: "none",
          }}
        >
          Our Impact
        </h2>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "2.5rem",
            maxWidth: "1100px",
            margin: "0 auto",
            width: "100%",
          }}
        >
          {data.map(({ label }, i) => (
            <div
              key={label}
              ref={(el) => (cardRefs.current[i] = el)}
              className="stat-card"
              style={{
                flex: "1 1 300px",
                maxWidth: "320px",
                backgroundColor: colors.card,
                padding: "2rem",
                borderRadius: "1rem",
                boxShadow: colors.shadow,
                opacity: 0,
                transform: "translateY(40px)",
                transition:
                  "opacity 0.6s ease var(--delay), transform 0.6s ease var(--delay)",
                cursor: "default",
                userSelect: "none",
                textAlign: "center",
                boxSizing: "border-box",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <h3
                style={{
                  fontSize: "2.4rem",
                  fontWeight: "700",
                  color: colors.primary,
                  margin: 0,
                  userSelect: "text",
                }}
              >
                {counts[i].toLocaleString()}
                {label.includes("Players") ? "+" : ""}
              </h3>
              <p
                style={{
                  marginTop: "1rem",
                  fontSize: "0.95rem",
                  fontWeight: "600",
                  color: colors.subtext,
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  marginBottom: 0,
                }}
              >
                {label}
              </p>
            </div>
          ))}
        </div>

        <style>{`
          .stat-card.visible {
            opacity: 1 !important;
            transform: translateY(0) !important;
          }
        `}</style>
      </Container>
    </section>
  );
}