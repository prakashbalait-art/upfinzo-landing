import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { section2Thunk } from "../../store/services/sectionsService";

const Section2 = () => {

  const dispatch = useDispatch();
  
  const { section2Items, status, error } = useSelector(
    (state) => state.sections.section2
  );


  console.log(section2Items,"section2Items");

  useEffect(()=>{
      dispatch(section2Thunk());
  },[dispatch]);

  return (
    <section id="payments" className="stats">
      <div className="container stats-inner">

        <div className="stats-left">
          <h2 className="stats-title">
            Your Business Pays Are Now
            <br />
            Faster and Secure
          </h2>

          <div className="stats-visual">
            <img
              src="/src/assets/stats-orbit.png"
              alt="Colorful abstract payment visual"
            />
          </div>
        </div>


        <div className="stats-right">
          {section2Items.map((item, index) => (
            <div key={item.id} className="stats-item">
              <p className={`stats-value stats-value-${index + 1}`}>
                {item.value}
              </p>
              <p className="stats-label">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section2;
