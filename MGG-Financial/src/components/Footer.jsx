import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <secton className="social-icons">
          
        </secton>
        <section className="footer-logo">
        </section>
        <section className="footer-links">
          <a href="/">Home</a>
          <a href="/about">About Us</a>
        </section>
        <p>&copy; {new Date().getFullYear()} MGG Financial. All rights reserved.</p>
      </div>
    </footer>
  );
}
export default Footer;