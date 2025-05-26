import React from "react";
import { colors } from "../theme";
import Container from "./Container";
import InstagramIcon from "../assets/instagram.svg";
import LinkedInIcon from "../assets/linkedin.svg";
import XIcon from "../assets/twitter.svg";

export default function Footer() {
  const footerStyle = {
    backgroundColor: colors.card,
    padding: "3rem 1.5rem",
    textAlign: "center",
    color: colors.subtext,
    fontSize: "0.9rem",
    borderTop: `1px solid ${colors.border}`,
  };

  return (
    <footer style={footerStyle}>
      <Container>
        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", alignItems: "center" }}>
          <div style={{ fontSize: "1rem", fontWeight: "500", color: colors.text }}>
            © {new Date().getFullYear()} SafePlay Gaming. All rights reserved.
          </div>

          <div style={{ display: "flex", gap: "1.2rem" }}>
            <a href="https://www.instagram.com/safeplaygaming?igsh=MTQ3M3kzNjFmcGZjNw==" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
              <img src={InstagramIcon} alt="Instagram" style={{ width: "24px", height: "24px" }} />
            </a>
            <a href="https://www.linkedin.com/company/safeplay-gaming/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
              <img src={LinkedInIcon} alt="LinkedIn" style={{ width: "24px", height: "24px" }} />
            </a>
            <a href="https://x.com/SafeplayGaming" aria-label="X" target="_blank" rel="noopener noreferrer">
              <img src={XIcon} alt="X" style={{ width: "24px", height: "24px" }} />
            </a>
          </div>

          {/* <div style={{ display: "flex", gap: "1rem" }}>
            <a href="/privacy" style={{ color: colors.primary, textDecoration: "none" }}>Privacy Policy</a>
            <a href="/terms" style={{ color: colors.primary, textDecoration: "none" }}>Terms of Service</a>
          </div> */}
        </div>
      </Container>
    </footer>
  );
}