import './output.css'
import React, { Suspense, useEffect } from 'react'
import CookieConsent from "react-cookie-consent"
import Home from '../src/components/Home'
import Nav from '../src/components/Nav'
import CV from '../src/components/CV'
import Skills from '../src/components/Skills'
import Timeline from '../src/components/Timeline'
import Contact from '../src/components/Contact'
import Navbar from '../src/components/Navbar'
import Footer from '../src/components/Footer'
import Loader from '../src/components/Loader'

const Projects = React.lazy(() => import('../src/components/Projects'))

function App() {
  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent")
    if (consent === "true") {
      loadGoogleAnalytics()
    }
  }, [])

  const loadGoogleAnalytics = () => {
    if (window.gtag) return

    const script1 = document.createElement("script")
    script1.src = "https://www.googletagmanager.com/gtag/js?id=G-2FG399VDFG"
    script1.async = true
    document.head.appendChild(script1)

    const script2 = document.createElement("script")
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){ dataLayer.push(arguments); }
      gtag('js', new Date());
      gtag('config', 'G-2FG399VDFG');
    `
    document.head.appendChild(script2)
  }

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center">
        <div className="preload-images hidden">
          <div id="warehouse-preload"></div>
          <div id="skills-preload"></div>
          <div id="CV-preload"></div>
        </div>
        <Home />
        <Nav />
        <Timeline />
        <Suspense fallback={<Loader />}>
          <Projects />
        </Suspense>
        <Skills />
        <CV />
        <Contact />
        <Footer />
      </div>

      {/* Bannière de consentement cookie */}
      <CookieConsent
        location="bottom"
        buttonText="J'accepte"
        declineButtonText="Je refuse"
        enableDeclineButton
        onAccept={() => {
          localStorage.setItem("cookieConsent", "true")
          loadGoogleAnalytics()
        }}
        onDecline={() => {
          localStorage.setItem("cookieConsent", "false")
        }}
        style={{
          background: "#2B373B",
          color: "#fff",
          borderRadius: "10px",
          width: "100%",
          position: "fixed",
          bottom: "20px",
          zIndex: "9999",
          boxShadow: "0 4px 12px rgba(0,0,0,0.3)"
        }}
        buttonStyle={{
          color: "#fff",
          backgroundColor: "#4CAF50",
          fontSize: "14px",
          borderRadius: "5px",
          padding: "6px 12px",
          marginRight: "10px"
        }}
        declineButtonStyle={{
          color: "#fff",
          backgroundColor: "#2B373B",
          border: "1px solid #fff",
          fontSize: "14px",
          borderRadius: "5px",
          padding: "6px 12px"
        }}
      >
        Un petit cookie dans votre boite à outils ?
        Il me servira à recueillir des données anonymes via Google Analytics.
      </CookieConsent>
    </>
  )
}

export default App
