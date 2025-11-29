import React, { useState, useEffect, useRef } from "react";
import Button from "../common/Button";

const slides = [
  { id: 1, title: "Neo Bank", subtitle: "Launch fully-digital banking experiences." },
  { id: 2, title: "Digital Payments", subtitle: "Seamless checkout and payment routing." },
  { id: 3, title: "AI-Powered", subtitle: "Automation for compliance and onboarding." },
];

const Section6 = () => {
  const [active, setActive] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    startAutoSlide();
    return stopAutoSlide;
  }, [active]);

  const startAutoSlide = () => {
    stopAutoSlide();
    intervalRef.current = setInterval(() => {
      setActive(prev => (prev + 1) % slides.length);
    }, 2000);
  };

  const stopAutoSlide = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  const handleNext = () => setActive((active + 1) % slides.length);
  const handlePrev = () => setActive((active - 1 + slides.length) % slides.length);

  return (
    <section className="industry">
      <div className="container industry-inner">

        <div className="industry-left">
          <p className="industry-kicker">24/7 support</p>
          <h2 className="industry-title">Industry Standard</h2>

          <ul className="industry-list">
            <li className="industry-list-item"><span className="check-icon"></span> Modern & clean design</li>
            <li className="industry-list-item"><span className="check-icon"></span> Easy to customize</li>
            <li className="industry-list-item"><span className="check-icon"></span> Scalability & Integration</li>
            <li className="industry-list-item"><span className="check-icon"></span> Step-by-step guide</li>
            <li className="industry-list-item"><span className="check-icon"></span> SaaS based solution</li>
          </ul>

          <button className="future-chip">Get started</button>
        </div>

        <div className="industry-right">
          <div 
            className="laptop" 
            onMouseEnter={stopAutoSlide}
            onMouseLeave={startAutoSlide}
          >
            <div className="laptop-screen">
              <div 
                className="carousel-track"
                style={{ transform: `translateX(-${active * 100}%)` }}
              >
                {slides.map(slide => (
                  <article key={slide.id} className="carousel-card">
                    <div className="card-gradient" />
                    <div className="card-inner">
                      <h3 className="card-title">{slide.title}</h3>
                      <p className="card-subtitle">{slide.subtitle}</p>
                    </div>
                  </article>
                ))}
              </div>

              <div className="carousel-controls">
                <button className="nav-btn" onClick={handlePrev}>‹</button>
                <button className="nav-btn" onClick={handleNext}>›</button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Section6;
