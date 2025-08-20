import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/Home.jsx";
import Services from "./pages/Services.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/ContactUs.jsx";
import Works from "./pages/Works.jsx";
import PageNotFound from "./pages/PageNotFound.jsx";
import StartProject from "./pages/StartProject.jsx";
import CaseStudies from "./pages/resources/CaseStudies.jsx";
import PrivacyPolicy from "./pages/resources/PrivacyPolicy.jsx";
import Support from "./pages/resources/Support.jsx";
import Layout from "./components/Layout.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/services"
          element={
            <Layout>
              <Services />
            </Layout>
          }
        />
        <Route
          path="/aboutus"
          element={
            <Layout>
              <About />
            </Layout>
          }
        />
        <Route
          path="/contact"
          element={
            <Layout>
              <Contact />
            </Layout>
          }
        />
        <Route
          path="/works"
          element={
            <Layout>
              <Works />
            </Layout>
          }
        />
        <Route
          path="/startproject"
          element={
            <Layout>
              <StartProject />
            </Layout>
          }
        />
        <Route
          path="/casestudies"
          element={
            <Layout>
              <CaseStudies />
            </Layout>
          }
        />
        <Route
          path="/privacypolicy"
          element={
            <Layout>
              <PrivacyPolicy />
            </Layout>
          }
        />
        <Route
          path="/support"
          element={
            <Layout>
              <Support />
            </Layout>
          }
        />
        <Route
          path="*"
          element={
            <Layout>
              <PageNotFound />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
