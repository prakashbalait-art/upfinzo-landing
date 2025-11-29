import React from "react";
import Button from "../common/Button";

import "../../styles/layout/_footer.scss";

const Footer = () => {
  const productLinks = [
    "AI Banking",
    "Payment",
    "Payout",
    "Merchant Onboarding",
    "FRM",
  ];

  const companyLinks = ["About Us", "Help Center", "Contact"];

  const legalLinks = ["Cookie Policy", "Privacy Policy", "Terms of Service"];

  const socialLinks = [
    { id: "linkedin", label: "/UpFinzo" },
    { id: "x", label: "/UpFinzo" },
    { id: "instagram", label: "/UpFinzo" },
    { id: "facebook", label: "/UpFinzo" },
  ];

  return (
    <footer className="site-footer">
    
      <div className="footer-main">
        <div className="container footer-main-inner">
          <div className="footer-brand">
            <div className="footer-logo">
              <img src="/src/assets/logo.png" alt="UpFinzo Logo" />
            </div>
            <p className="footer-tagline">Connect. Control. Comply</p>
            <p className="footer-text">
              Experience the new age of payments with UpFinzo and explore new
              growth opportunities to reach greater heights.
            </p>
          </div>

          <div className="footer-columns">
            <div className="footer-column">
              <h4 className="footer-column-title">Products</h4>
              <ul>
                {productLinks.map((item) => (
                  <li key={item}>
                    <a href="#" className="footer-link">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-column">
              <h4 className="footer-column-title">Company</h4>
              <ul>
                {companyLinks.map((item) => (
                  <li key={item}>
                    <a href="#" className="footer-link">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-column">
              <h4 className="footer-column-title">Legal</h4>
              <ul>
                {legalLinks.map((item) => (
                  <li key={item}>
                    <a href="#" className="footer-link">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-column">
              <h4 className="footer-column-title">Social</h4>
              <ul className="footer-social-list">
                {socialLinks.map((item) => (
                  <li key={item.id} className="footer-social-item">
                    <span className={`social-icon social-${item.id}`} />
                    <a href="#" className="footer-link">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="container footer-bottom">
          <p>Copyright © 2025 UpFinzo. All rights reserved</p>
          <p>India (EN)</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
