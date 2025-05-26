import React from "react";
import { colors } from "../theme";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Alex Johnson",
      role: "Pro Player",
      quote: "SafePlay completely changed the way I compete. A platform I can trust!",
      avatar: "🎧",
    },
    {
      name: "Jessica Lee",
      role: "Tournament Organizer",
      quote: "AI cheat detection saved our finals from chaos. Super reliable.",
      avatar: "🎤",
    },
    {
      name: "Carlos Mendez",
      role: "Community Manager",
      quote: "Finally, a way to reward fair play and call out suspicious behavior.",
      avatar: "🧑‍💼",
    },
  ];

  const sectionStyle = {
    width: "100%",
    padding: "4rem 2rem",
    boxSizing: "border-box",
    backgroundColor: "#f9fafb",
  };

  const containerStyle = {
    display: "flex",
    flexWrap: "wrap",
    gap: "2rem",
    justifyContent: "center",
  };

  const cardStyle = {
    flex: "1 1 300px",
    backgroundColor: colors.card,
    padding: "2rem",
    borderRadius: "16px",
    boxShadow: colors.shadow,
    textAlign: "center",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
  };

  const cardHoverStyle = {
    transform: "translateY(-5px)",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
  };

  const avatarStyle = {
    fontSize: "2.5rem",
    marginBottom: "1rem",
  };

  const nameStyle = {
    fontSize: "1.1rem",
    fontWeight: "700",
    color: colors.primary,
  };

  const roleStyle = {
    fontSize: "0.95rem",
    color: colors.subtext,
    marginBottom: "1rem",
  };

  const quoteStyle = {
    fontStyle: "italic",
    fontSize: "1rem",
    color: colors.text,
  };

  return (
    <section style={sectionStyle} id="testimonials" aria-label="Testimonials">
      <div style={{ textAlign: "center", marginBottom: "3rem" }}>
        <h2 style={{ fontSize: "2rem", fontWeight: "800", color: colors.primary }}>
          What Our Users Say
        </h2>
        <p style={{ fontSize: "1.1rem", color: colors.subtext }}>
          Trusted by players, organizers, and gaming communities alike.
        </p>
      </div>
      <div style={containerStyle}>
        {testimonials.map((testimonial, i) => {
          const [hovered, setHovered] = React.useState(false);
          return (
            <div
              key={i}
              style={hovered ? { ...cardStyle, ...cardHoverStyle } : cardStyle}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            >
              <div style={avatarStyle}>{testimonial.avatar}</div>
              <div style={nameStyle}>{testimonial.name}</div>
              <div style={roleStyle}>{testimonial.role}</div>
              <blockquote style={quoteStyle}>
                “{testimonial.quote}”
              </blockquote>
            </div>
          );
        })}
      </div>
    </section>
  );
}