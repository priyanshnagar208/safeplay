import React, { useState, useEffect } from "react";
import { colors } from "../theme";
import Container from "./Container";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#hero" },
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      <Container>
        <header
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            zIndex: 1100,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: scrolled ? "1rem 2rem" : "1.5rem 2rem",

            backdropFilter: scrolled ? "blur(16px)" : "none",
            boxShadow: scrolled ? "0 4px 10px rgba(0, 0, 0, 0.3)" : "none",

            transition: "all 0.3s ease",
          }}
        >
          {/* Logo */}
          <div
            style={{
              fontWeight: "700",
              fontSize: scrolled ? "1.3rem" : "1.6rem",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
              color: colors.text,
              transition: "font-size 0.3s ease",
            }}
          >
            SafePlay Gaming
          </div>

          {/* Navigation */}
          <nav
            style={{
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
              backgroundColor: colors.card,
              padding: scrolled ? "0.4rem 1.2rem" : "0.6rem 1.6rem",
              borderRadius: "999px",
              boxShadow: colors.shadow,
              display: "flex",
              gap: "1.5rem",
              alignItems: "center",
              transition: "all 0.3s ease",
            }}
            className="nav-desktop"
          >
            {navLinks.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                style={{
                  color: colors.text,
                  textDecoration: "none",
                  fontWeight: 500,
                  fontSize: "0.95rem",
                  padding: "0.3rem 0.6rem",
                  borderRadius: "6px",
                  transition: "color 0.3s, background-color 0.3s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = colors.primary;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = colors.text;
                }}
              >
                {label}
              </a>
            ))}
          </nav>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="hamburger-button"
            style={{
              background: "none",
              border: "none",
              display: "none",
              flexDirection: "column",
              gap: "4px",
              cursor: "pointer",
            }}
          >
            <span
              style={{
                width: 24,
                height: 2,
                backgroundColor: colors.text,
                transition: "all 0.3s",
              }}
            />
            <span
              style={{
                width: 24,
                height: 2,
                backgroundColor: colors.text,
                transition: "all 0.3s",
              }}
            />
            <span
              style={{
                width: 24,
                height: 2,
                backgroundColor: colors.text,
                transition: "all 0.3s",
              }}
            />
          </button>
        </header>
      </Container>

      {/* Mobile Nav Menu */}
      {menuOpen && (
        <nav
          style={{
            position: "fixed",
            top: 60,
            right: 0,
            width: "70vw",
            height: "100vh",
            backgroundColor: colors.bg,
            boxShadow: `-2px 0 15px ${colors.shadow}`,
            display: "flex",
            flexDirection: "column",
            padding: "2rem",
            gap: "1.5rem",
            zIndex: 9999,
          }}
        >
          {navLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={() => setMenuOpen(false)}
              style={{
                color: colors.text,
                fontSize: "1.1rem",
                textDecoration: "none",
                paddingBottom: "0.5rem",
                borderBottom: `1px solid ${colors.border}`,
              }}
            >
              {label}
            </a>
          ))}
        </nav>
      )}

      {/* Responsive CSS */}
      <style>{`
        @media (max-width: 768px) {
          .nav-desktop {
            display: none !important;
          }
          .hamburger-button {
            display: flex !important;
          }
        }
      `}</style>
    </>
  );
}