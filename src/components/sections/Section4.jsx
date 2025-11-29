import React from "react";
import Button from "../common/Button";

const Section4 = () => {
  return (
    <section id="support" className="api-hero">
      <div className="api-hero-inner">
        <div className="api-hero-panel">
          <div className="api-hero-content">
            <h2 className="api-hero-title">
              Build Faster with Our Powerful API&apos;s
            </h2>

            <p className="api-hero-subtitle">
              Plug into secure, developer-friendly financial API&apos;s and launch in days—
              not months.
            </p>

            <div className="api-hero-actions">
              <Button size="md">Start Building</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section4;
