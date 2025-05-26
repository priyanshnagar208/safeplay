import React, { useState } from "react";
import { colors } from "../theme";

export default function CTA() {
  const [hover, setHover] = useState(false);

  const sectionStyle = {
    width: "100%",
    padding: "5rem 2rem",
    boxSizing: "border-box",
    backgroundColor: colors.primary,
    color: "#fff",
    textAlign: "center",
  };

  const headlineStyle = {
    fontSize: "2.5rem",
    fontWeight: "800",
    marginBottom: "1rem",
  };

  const buttonStyle = {
    backgroundColor: hover ? "#e0e7ff" : "#ffffff",
    color: hover ? colors.primary : colors.primary,
    border: "none",
    borderRadius: "40px",
    padding: "1rem 3rem",
    fontWeight: "700",
    fontSize: "1.3rem",
    cursor: "pointer",
    boxShadow: hover
      ? "0 8px 24px rgba(224, 231, 255, 0.7)"
      : "0 4px 15px rgba(255, 255, 255, 0.6)",
    transition: "all 0.3s ease",
  };

  const subtextStyle = {
    marginTop: "1rem",
    fontSize: "1rem",
    fontWeight: "500",
    opacity: 0.9,
  };

  const handleClick = () => {
    alert("Thank you! We'll notify you when we launch.");
  };

  return (
    <section style={sectionStyle} aria-label="Call to Action">
      <h2 style={headlineStyle}>Ready to join the future of fair esports?</h2>
      <button
        style={buttonStyle}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onFocus={() => setHover(true)}
        onBlur={() => setHover(false)}
        onClick={handleClick}
        aria-label="Join the waitlist"
      >
        Join the Waitlist
      </button>
      <p style={subtextStyle}>We’ll notify you when we launch.</p>
    </section>
  );
}