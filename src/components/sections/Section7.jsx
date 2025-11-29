import React from "react";
import Button from "../common/Button";

const Section7 = () => {
  return (
    <section className="future-cta">
      <div className="container future-cta-inner">

        <h2 className="future-title">
          The future of your industry <span className="highlight">starts here</span>
        </h2>

        <div className="future-actions">
          <Button size="md">Book a demo</Button>
          <Button size="md" variant="outline">
            Build AI
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Section7;
