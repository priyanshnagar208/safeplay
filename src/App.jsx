import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { colors } from "./theme";
import HowItWorks from "./components/HowItWorks";
import CTA from "./components/CTA";
import Pricing from "./components/pricing";
import SchedulePage from "./pages/SchedulePage";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div
              style={{
                background: colors.bg,
                fontFamily: "'Inter', system-ui, sans-serif",
                width: "100%",
                margin: 0,
                padding: 0,
                minHeight: "100%",
                boxSizing: "border-box",
                color: colors.text,
              }}
            >
              <Header />
              <Hero />
              <Stats />
              <Features />
              {/* <HowItWorks /> */}
              {/* <Testimonials /> */}
              <Pricing />
              {/* <CTA/> */}
              <Contact />
              <Footer />
            </div>
          }
        />
        <Route path="/schedule" element={<SchedulePage />} />
      </Routes>
    </BrowserRouter>
  );
}