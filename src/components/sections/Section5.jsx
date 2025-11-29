import React, { useEffect } from "react";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { section5Thunk } from "../../store/services/sectionsService";

const Section5 = () => {

  const dispatch = useDispatch();
  
  const { section5Items, status, error } = useSelector(
    (state) => state.sections.section5
  );


  console.log(section5Items,"section5Items");

  useEffect(()=>{
      dispatch(section5Thunk());
  },[dispatch]);

  return (
    <section className="why">
      <div className="container why-header">
        <h2 className="why-title">
          Why <span className="highlight">UpFinzo?</span>
        </h2>
        <p className="why-desc">
          Discover endless automation and intelligent financial workflows built for scale.
          Stay updated with real-time trends, automate tasks, and optimize payments effortlessly.
        </p>
      </div>

      <div className="why-slider-wrapper">
        {section5Items.map((row, index) => (
          <div
            key={index}
            className="slider-row"
            style={{ "--speed": `${row.speed}s` }}
          >
            <div className="slider-track">
              {[...row.items, ...row.items].map((item, i) => (
                <div key={i} className="card">
                  <div className="card-head">
                    <span>{item.title}</span>
                    <FaArrowUpRightFromSquare />
                  </div>
                  <p className="card-text">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Section5;
