import React from "react";
import Button from "../common/Button";

const Section1 = () => {
  return (
    <section id="ai-banking" className="hero">
      <div className="hero-bg"></div>

      <div className="container hero-content">

        <h1 className="hero-title">
          AI-powered <span className="highlight">Banking & Payment Solutions</span>
          <br />built for Modern Businesses
        </h1>

        <p className="hero-subtext">
          UpFinzo brings intelligent automation, real-time payments,  
          and seamless financial operations together so you can scale 
          without friction.
        </p>

        <div className="hero-buttons">
          <Button size="md">Start Building</Button>
          <Button size="md" variant="outline">Read Docs</Button>
        </div>

        <p className="hero-support-text">
          POWERING TOOLS AND INTEGRATION FOR COMPANIES AROUND THE WORLD
        </p>

        <div className="hero-brand-strip">
          <img src="/src/assets/logos/brave.png" alt="Brave" />
          <img src="/src/assets/logos/circle.png" alt="Circle" />
          <img src="/src/assets/logos/discord.png" alt="Discord" />
          <img src="/src/assets/logos/google.png" alt="Google" />
          <img src="/src/assets/logos/jump.png" alt="Jump" />
          <img src="/src/assets/logos/magic.png" alt="Magic Eden" />
        </div>

      </div>
    </section>
  );
};

export default Section1;
