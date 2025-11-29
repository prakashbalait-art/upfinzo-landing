import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { section3Thunk } from "../../store/services/sectionsService";

const Section3 = () => {
 
  const dispatch = useDispatch();
  
  const { section3Items, status, error } = useSelector(
    (state) => state.sections.section3
  );


  console.log(section3Items,"section3Items");

  useEffect(()=>{
      dispatch(section3Thunk());
  },[dispatch]);

  return (
    <section id="payouts" className="suite">
      <div className="container suite-inner">
        <div className="suite-left">
          <h2 className="suite-title">
            Our Intelligent
            <br />
            Financial Suite
          </h2>
          <p className="suite-subtitle">
            <span className="suite-bullet">•</span>
            Tools that accelerate every step of your financial workflow.
          </p>
        </div>

        <div className="suite-grid">
          {section3Items.map((item) => (
            <article key={item.id} className="suite-card">
              <div
                className="suite-card-accent"
                style={{ backgroundColor: item.accent }}
              />
              <h3 className="suite-card-title">{item.title}</h3>
              <p className="suite-card-text">{item.description}</p>

              <div className="suite-card-metric">
                <span className="suite-card-value">{item.metric}</span>
                <span className="suite-card-label">{item.metricLabel}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section3;
