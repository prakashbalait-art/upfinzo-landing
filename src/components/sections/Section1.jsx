import React from "react";
import Button from "../common/Button";


import braveLogo from "../../assets/logos/brave.png";
import circleLogo from "../../assets/logos/circle.png";
import discordLogo from "../../assets/logos/discord.png";
import googleLogo from "../../assets/logos/google.png";
import jumpLogo from "../../assets/logos/jump.png";
import magicLogo from "../../assets/logos/magic.png";

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
          <img src={braveLogo} alt="Brave" />
          <img src={circleLogo} alt="Circle" />
          <img src={discordLogo} alt="Discord" />
          <img src={googleLogo} alt="Google" />
          <img src={jumpLogo} alt="Jump" />
          <img src={magicLogo} alt="Magic Eden" />
        </div>

      </div>
    </section>
  );
};

export default Section1;
