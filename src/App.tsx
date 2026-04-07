/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "motion/react";
import { motion } from "motion/react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import MenuSection from "./components/MenuSection";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import ContactInfo from "./components/ContactInfo";
import Footer from "./components/Footer";
import Popup from "./components/Popup";
import CategoryPage from "./components/CategoryPage";
import { useEffect } from "react";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <MenuSection />
      <Gallery />
      <Testimonials />
      <ContactInfo />
    </>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-black selection:bg-primary selection:text-black">
        <Navbar />
        <Popup />
        
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/menu/:categoryId" element={<CategoryPage />} />
          </Routes>
        </AnimatePresence>

        <Footer />
      </div>
    </Router>
  );
}

