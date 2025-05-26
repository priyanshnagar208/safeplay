import React from "react";
import { colors } from "../theme";

export default function HowItWorks() {
  const steps = [
    {
      icon: "👤",
      title: "Register & Verify",
      description: "Players sign up and complete ID verification for secure matchmaking.",
    },
    {
      icon: "🎮",
      title: "Play Tournaments",
      description: "Compete in AI-secured matches that ensure fair gameplay.",
    },
    {
      icon: "⭐",
      title: "Build Trust Score",
      description: "Earn trust through clean play and positive community feedback.",
    },
  ];

  const sectionStyle = {
    width: "100%",
    padding: "4rem 2rem",
    boxSizing: "border-box",
    backgroundColor: "#ffffff",
  };

  const containerStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "2rem",
  };

  const cardStyle = {
    flex: "1 1 280px",
    backgroundColor: colors.card,
    padding: "2rem",
    borderRadius: "16px",
    boxShadow: colors.shadow,
    textAlign: "center",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
  };

  const cardHoverStyle = {
    transform: "translateY(-6px)",
    boxShadow: "0 8px 24px rgba(0, 0, 0, 0.15)",
  };

  const iconStyle = {
    fontSize: "2.5rem",
    marginBottom: "1rem",
  };

  const titleStyle = {
    fontSize: "1.25rem",
    fontWeight: "700",
    color: colors.primary,
    marginBottom: "0.5rem",
  };

  const descStyle = {
    color: colors.subtext,
    fontSize: "1rem",
    lineHeight: 1.6,
  };

  return (
    <section style={sectionStyle} id="how-it-works" aria-label="How It Works">
      <div style={{ textAlign: "center", marginBottom: "3rem" }}>
        <h2 style={{ fontSize: "2rem", fontWeight: "800", color: colors.primary }}>
          How It Works
        </h2>
        <p style={{ fontSize: "1.1rem", color: colors.subtext }}>
          A simple and secure process to compete fairly and build trust.
        </p>
      </div>

      <div style={containerStyle}>
        {steps.map((step, index) => {
          const [hovered, setHovered] = React.useState(false);
          return (
            <div
              key={index}
              style={hovered ? { ...cardStyle, ...cardHoverStyle } : cardStyle}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            >
              <div style={iconStyle}>{step.icon}</div>
              <h3 style={titleStyle}>{step.title}</h3>
              <p style={descStyle}>{step.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}