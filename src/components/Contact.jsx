import React, { useState } from "react";
import { colors } from "../theme";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";
import Container from "./Container";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Name required";
    if (!form.email.includes("@")) e.email = "Valid email required";
    if (!form.message.trim()) e.message = "Message required";
    return e;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const eObj = validate();
    if (Object.keys(eObj).length > 0) {
      setErrors(eObj);
      setSubmitted(false);
    } else {
      setErrors({});
      try {
        await addDoc(collection(db, "contactMessages"), {
          name: form.name,
          email: form.email,
          message: form.message,
          createdAt: new Date().toISOString(),
        });
        setSubmitted(true);
        setForm({ name: "", email: "", message: "" });
      } catch (error) {
        alert("There was an error sending your message. Please try again later.");
        console.error("Error submitting contact message:", error);
      }
    }
  };

  const sectionStyle = {
    padding: "3rem 1rem",
    width: "100%",
    boxSizing: "border-box",
    backgroundColor: colors.bg,
    color: colors.text,
    maxWidth: "100%",
  };

  const formStyle = {
    maxWidth: "640px",
    width: "100%",
    margin: "0 auto",
    backgroundColor: colors.card,
    padding: "2.5rem 2rem",
    borderRadius: "12px",
    boxShadow: colors.shadow,
    display: "flex",
    flexDirection: "column",
    boxSizing: "border-box",
  };

  const labelStyle = {
    display: "block",
    fontWeight: "700",
    marginBottom: "0.5rem",
    fontSize: "1rem",
    color: colors.text,
  };

  const inputStyle = {
    width: "100%",
    padding: "0.75rem 1rem",
    border: `1.5px solid #ccc`,
    borderRadius: "8px",
    marginBottom: "1.5rem",
    fontSize: "1rem",
    fontFamily: "inherit",
    outlineColor: colors.primary,
    transition: "border-color 0.3s ease",
    boxSizing: "border-box",
  };

  const inputFocusStyle = {
    borderColor: colors.primary,
    boxShadow: `0 0 5px ${colors.primary}`,
  };

  const errorStyle = {
    color: "red",
    fontSize: "0.9rem",
    marginTop: "-1rem",
    marginBottom: "1rem",
  };

  const buttonStyle = {
    backgroundColor: colors.primary,
    color: "#ffffff",
    border: "none",
    borderRadius: "10px",
    padding: "0.85rem 1.5rem",
    fontWeight: "700",
    fontSize: "1.1rem",
    boxShadow: colors.shadow,
    transition: "background 0.3s ease",
    cursor: "pointer",
    width: "100%",
    marginTop: "0.5rem",
  };

  const headingStyle = {
    textAlign: "center",
    color: colors.primary,
    fontSize: "2.5rem",
    fontWeight: "900",
    marginBottom: "2.5rem",
    letterSpacing: "1.5px",
  };

  return (
    <section id="contact" style={sectionStyle}>
      <Container>
        <h2 style={headingStyle}>Contact Us</h2>
        {submitted && (
          <p style={{ textAlign: "center", color: colors.primary, fontWeight: "700", marginBottom: "1.5rem" }}>
            ✅ Message sent! We’ll be in touch soon.
          </p>
        )}
        <form onSubmit={handleSubmit} style={formStyle} noValidate>
          <label style={labelStyle} htmlFor="name">
            Name
          </label>
          <input
            id="name"
            type="text"
            name="name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            style={inputStyle}
            aria-invalid={errors.name ? "true" : "false"}
            aria-describedby={errors.name ? "name-error" : undefined}
            onFocus={(e) => (e.target.style.borderColor = colors.primary)}
            onBlur={(e) => (e.target.style.borderColor = "#ccc")}
          />
          {errors.name && <span id="name-error" style={errorStyle}>{errors.name}</span>}

          <label style={labelStyle} htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            style={inputStyle}
            aria-invalid={errors.email ? "true" : "false"}
            aria-describedby={errors.email ? "email-error" : undefined}
            onFocus={(e) => (e.target.style.borderColor = colors.primary)}
            onBlur={(e) => (e.target.style.borderColor = "#ccc")}
          />
          {errors.email && <span id="email-error" style={errorStyle}>{errors.email}</span>}

          <label style={labelStyle} htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="5"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            style={{ ...inputStyle, resize: "vertical" }}
            aria-invalid={errors.message ? "true" : "false"}
            aria-describedby={errors.message ? "message-error" : undefined}
            onFocus={(e) => (e.target.style.borderColor = colors.primary)}
            onBlur={(e) => (e.target.style.borderColor = "#ccc")}
          />
          {errors.message && <span id="message-error" style={errorStyle}>{errors.message}</span>}

          <button type="submit" style={buttonStyle}>
            Submit
          </button>
        </form>
      </Container>
    </section>
  );
}