// src/pages/SchedulePage.jsx
import React from "react";
import Container from "../components/Container";
import { colors } from "../theme";

export default function SchedulePage() {
  return (
    <section
      style={{
        backgroundColor: colors.bg,
        minHeight: "100vh",
        padding: "4rem 1rem",
        color: colors.text,
      }}
    >
      <Container>
        <h2
          style={{
            fontSize: "2.4rem",
            fontWeight: "700",
            textAlign: "center",
            marginBottom: "1rem",
            color: colors.primary,
          }}
        >
          Book a Meeting with Us
        </h2>
        <p
          style={{
            textAlign: "center",
            fontSize: "1.1rem",
            color: colors.subtext,
            marginBottom: "3rem",
          }}
        >
          Choose a time that works best for you and let's talk about building a fair esports future.
        </p>

        <div style={{ width: "100%", maxWidth: "800px", margin: "0 auto" }}>
          <iframe
            src="https://calendly.com/safeplaygaming-support/30min"
            width="100%"
            height="700"
            frameBorder="0"
            title="Calendly Scheduler"
            style={{
              borderRadius: "10px",
              boxShadow: colors.shadow,
            }}
          />
        </div>
      </Container>
    </section>
  );
}