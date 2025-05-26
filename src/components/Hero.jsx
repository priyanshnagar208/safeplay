import React from "react";
import { useNavigate } from "react-router-dom";
import { colors } from "../theme";
import Container from "./Container";

import safeplayImage from "../assets/safeplayimage.jpg";

export default function Hero() {
  const navigate = useNavigate();
  // Layered dark gradient and pattern overlay
  const sectionStyle = {
    position: "relative",
    width: "100%",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: `
      linear-gradient(135deg, rgba(20,22,34,0.98) 0%, rgba(32,35,55, 0.97) 100%),
      repeating-linear-gradient(135deg, rgba(255,255,255,0.04) 0px, rgba(255,255,255,0.04) 2px, transparent 2px, transparent 24px),
      linear-gradient(120deg, ${colors.primary}20 0%, ${colors.primaryHover}10 100%)
    `,
    overflow: "hidden",
    padding: "0",
    boxSizing: "border-box",
  };

  const overlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    pointerEvents: "none",
    background: `
      repeating-linear-gradient(135deg, rgba(255,255,255,0.025) 0px, rgba(255,255,255,0.025) 2px, transparent 2px, transparent 24px)
    `,
    zIndex: 1,
    opacity: 0.65,
  };

  const containerStyle = {
    position: "relative",
    zIndex: 2,
    width: "100%",
    margin: "0 auto",
    padding: "0 2.5rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "3rem",
    flexWrap: "wrap",
    minHeight: "100vh",
  };

  const textContainerStyle = {
    flex: "1 1 420px",
    minWidth: 320,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    padding: "2.5rem 0",
  };

  const headingStyle = {
    color: "#F9FAFB",
    fontSize: "3.5rem",
    fontWeight: 900,
    marginBottom: "1.1rem",
    lineHeight: 1.07,
    letterSpacing: "0.03em",
    textShadow: "0 2px 14px rgba(0,0,0,0.22)",
    fontFamily: "Inter, system-ui, sans-serif",
    transition: "font-size 0.2s",
  };

  const subheadingStyle = {
    color: colors.subtext || "#C2C6D2",
    fontSize: "1.35rem",
    fontWeight: 400,
    marginBottom: "2.8rem",
    maxWidth: 540,
    lineHeight: 1.7,
    letterSpacing: "0.01em",
  };

  // Button styles
  const baseButton = {
    border: "none",
    borderRadius: "32px",
    padding: "1.1rem 2.7rem",
    fontWeight: 700,
    fontSize: "1.18rem",
    cursor: "pointer",
    marginRight: "1.2rem",
    boxShadow: "0 6px 24px 0 rgba(0,0,0,0.18)",
    transition: "background 0.22s cubic-bezier(.4,0,.2,1), color 0.22s, transform 0.22s",
    outline: "none",
    willChange: "transform, background",
    display: "inline-block",
  };
  const getStartedBtn = {
    ...baseButton,
    background: `linear-gradient(90deg, ${colors.primary} 0%, ${colors.primaryHover} 100%)`,
    color: "#fff",
    border: "none",
  };
  const getStartedBtnHover = {
    ...getStartedBtn,
    background: `linear-gradient(90deg, ${colors.primaryHover} 0%, ${colors.primary} 100%)`,
    transform: "translateY(-2px) scale(1.04)",
    boxShadow: "0 10px 32px 0 rgba(0,0,0,0.22)",
  };
  // const contactBtn = {
  //   ...baseButton,
  //   background: "transparent",
  //   color: "#fff",
  //   border: `2px solid ${colors.primary}`,
  //   marginRight: 0,
  // };
  // const contactBtnHover = {
  //   ...contactBtn,
  //   background: `${colors.primary}10`,
  //   color: colors.primary,
  //   borderColor: colors.primaryHover,
  //   transform: "translateY(-2px) scale(1.04)",
  //   boxShadow: "0 8px 28px 0 rgba(0,0,0,0.16)",
  // };

  const [hoverBtn, setHoverBtn] = React.useState(""); // "getstarted" or "contact"

  const imageContainerStyle = {
    flex: "1 1 420px",
    minWidth: 320,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "2.5rem 0",
  };

  const imageStyle = {
    maxWidth: "430px",
    width: "100%",
    height: "auto",
    borderRadius: "28px",
    boxShadow: "0 10px 48px 0 rgba(30,30,60,0.32), 0 2px 16px 0 rgba(0,0,0,0.18)",
    transition: "transform 0.25s cubic-bezier(.4,0,.2,1), box-shadow 0.25s",
    willChange: "transform",
    background: "#23263A",
    objectFit: "cover",
  };
  const [imgHover, setImgHover] = React.useState(false);

  const responsiveStyles = `
  @media (max-width: 900px) {
  .hero-container {
    flex-direction: column;
    gap: 1rem; /* reduce gap */
    min-height: auto !important;
    padding: 1rem 1rem !important; /* reduce padding */
    align-items: center;
    text-align: center;
    max-width: 100% !important;
  }
  .hero-image {
    max-width: 80vw !important; /* smaller max width */
    height: auto;
    margin-bottom: 1.5rem; /* add some spacing below image */
  }
  .hero-heading {
    font-size: 2.2rem !important;
    line-height: 1.2;
    margin-bottom: 1rem;
  }
  .hero-subheading {
    font-size: 1.05rem !important;
    margin-bottom: 1.8rem;
  }
  .button-group {
    flex-direction: column !important;
    width: 100%;
    gap: 1rem;
    max-width: 320px; /* limit max width for buttons on mobile */
    margin: 0 auto;
  }
  .button-group > button {
    width: 100%;
    margin-right: 0 !important;
  }
}
  `;

  return (
    <section style={sectionStyle} id="hero" aria-label="Hero Section">
      <style>{responsiveStyles}</style>
      <div style={overlayStyle} />
      <Container className="hero-container" style={containerStyle}>
        <div style={textContainerStyle}>
          <h1 className="hero-heading" style={headingStyle}>
  <span style={{ color: colors.primary }}>Stop</span> Cheaters Before They <span style={{ color: colors.primary }}>Join</span>
</h1>
          <p className="hero-subheading" style={subheadingStyle}>
            SafePlay Gaming provides cutting-edge AI-based background check and
            player verification to ensure trust and fairness in esports
            tournaments worldwide.
          </p>
          <div
            className="button-group"
            style={{ display: "flex", gap: "1.1rem", flexWrap: "wrap" }}
          >
            <button
              style={hoverBtn === "getstarted" ? getStartedBtnHover : getStartedBtn}
              onMouseEnter={() => setHoverBtn("getstarted")}
              onMouseLeave={() => setHoverBtn("")}
              onClick={() => navigate("/schedule")}
              aria-label="Get Started"
              tabIndex={0}
            >
              Get Started
            </button>
            {/* <button
              style={hoverBtn === "contact" ? contactBtnHover : contactBtn}
              onMouseEnter={() => setHoverBtn("contact")}
              onMouseLeave={() => setHoverBtn("")}
              onClick={() => alert("Contact feature coming soon!")}
              aria-label="Contact Us"
              tabIndex={0}
            >
              Contact Us
            </button> */}
          </div>
        </div>
        <div style={imageContainerStyle}>
          <img
            className="hero-image"
            src={safeplayImage}
            alt="Product mockup"
            style={
              imgHover
                ? {
                    ...imageStyle,
                    transform: "scale(1.035) translateY(-6px)",
                    boxShadow:
                      "0 18px 64px 0 rgba(40,40,80,0.42), 0 4px 22px 0 rgba(0,0,0,0.20)",
                  }
                : imageStyle
            }
            loading="lazy"
            onMouseEnter={() => setImgHover(true)}
            onMouseLeave={() => setImgHover(false)}
          />
        </div>
      </Container>
    </section>
  );
}