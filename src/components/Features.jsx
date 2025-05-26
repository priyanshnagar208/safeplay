import React from "react";
import { colors } from "../theme";
import { motion } from "framer-motion";
import Container from "./Container";

const features = [
  {
    icon: "✅",
    title: "Verified Player Onboarding",
    description:
      "Streamlined verification process ensuring only legitimate players join your platform.",
  },
  {
    icon: "👥",
    title: "Trusted Community Management",
    description:
      "Tools and insights to foster a safe and engaged gaming community.",
  },
  {
    icon: "🛡️",
    title: "Cheater History Checks",
    description:
      "Access comprehensive records to identify repeat offenders and maintain fair play.",
  },
  {
    icon: "🔌",
    title: "Plug & Play for Organizers",
    description:
      "Easy-to-integrate solutions designed for quick setup and seamless operation.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: i => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

export default function Features() {
  return (
    <section id="features"
      style={{
        backgroundColor: colors.bg,
        padding: "6rem 2rem",
      }}
      aria-label="Platform Features"
    >
      <style>{`
        @media (max-width: 767px) {
          .features-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
      <Container>
        <h2
          style={{
            fontSize: "2.8rem",
            fontWeight: "900",
            color: colors.primary,
            textAlign: "center",
            marginBottom: "4rem",
            textShadow: `0 1px 3px ${colors.shadow}`,
            fontFamily: "'Inter', system-ui, sans-serif",
          }}
        >
          Platform Features
        </h2>

        <div
          className="features-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "2.5rem",
            maxWidth: 1000,
            margin: "0 auto",
            width: "100%",
          }}
        >
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              role="group"
              aria-label={feature.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              whileHover={{ scale: 1.03, boxShadow: "0 8px 24px rgba(0,0,0,0.12)" }}
              style={{
                backgroundColor: colors.card,
                borderRadius: "1rem",
                padding: "2rem",
                display: "flex",
                alignItems: "flex-start",
                gap: "1.5rem",
                cursor: "default",
                userSelect: "none",
                boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
                flexWrap: "nowrap",
                width: "100%",
                boxSizing: "border-box",
              }}
            >
              <div
                aria-hidden="true"
                style={{
                  fontSize: "3.5rem",
                  color: colors.primary,
                  flexShrink: 0,
                  lineHeight: 1,
                  marginTop: 4,
                }}
              >
                {feature.icon}
              </div>
              <div
                style={{
                  flex: "1 1 0",
                  minWidth: 0,
                }}
              >
                <h3
                  style={{
                    fontSize: "1.6rem",
                    fontWeight: "700",
                    color: colors.text,
                    marginBottom: 8,
                    lineHeight: 1.3,
                    fontFamily: "'Inter', system-ui, sans-serif",
                  }}
                >
                  {feature.title}
                </h3>
                <p
                  style={{
                    color: colors.subtext,
                    fontSize: "1rem",
                    lineHeight: 1.5,
                    margin: 0,
                  }}
                >
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}