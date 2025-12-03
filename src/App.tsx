import React from "react";
import logo from "./assets/logo_1080.png";
import "./App.css";

const App: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <div className="app">
      <div className="app-container">
        {/* Logo */}
        <header className="app-header">
          <img
            src={logo}
            alt="Mystic Mana Market Logo"
            className="app-logo"
          />
        </header>

        {/* Hero Text + Contact */}
        <main className="app-main">
          <h1 className="hero-title">Next event coming soon!</h1>

          <p className="contact-text">
            <strong>Contact Us:</strong>
            <br />
            <a
              href="mailto:MysticManaMart@gmail.com"
              className="contact-email"
            >
              mysticmanamart@gmail.com
            </a>
          </p>

          {/* Social Links */}
          <div className="socials">
            <span className="socials-label">Follow us:</span>
            <div className="socials-links">
              <a href="https://www.facebook.com/share/1AEbGhN4g2/?mibextid=wwXIfr" className="social-link" target="_blank" rel="noopener noreferrer">
                Facebook
              </a>
              <a href="https://www.instagram.com/mysticmanamart?igsh=MTgwbmhkNzVlbm13cg%3D%3D&utm_source=qr
" className="social-link" target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
              {/* <a href="#" className="social-link">
                TikTok
              </a> */}
            </div>
          </div>
        </main>
      </div>

      {/* Footer */}
      <footer className="app-footer">
        <p>© {year} Mystic Mana Market. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
