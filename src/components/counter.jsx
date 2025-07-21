import React, { useEffect, useRef } from 'react';

const Counter = () => {
  const countersRef = useRef([]);

  useEffect(() => {
    countersRef.current.forEach((counter) => {
      const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const current = +counter.innerText;
        const increment = Math.ceil(target / 100);

        if (current < target) {
          counter.innerText = current + increment > target ? target : current + increment;
          setTimeout(updateCount, 20);
        } else {
          counter.innerText = target;
        }
      };
      updateCount();
    });
  }, []);

  return (
    <>  
      <h2>
        Our&nbsp;
        <span style={{ color: '#ff00cc' }}>Strength</span>
        &nbsp;in Numbers
      </h2>
      <section className="loading-section" id="stats-section" data-aos="fade-down">
        <div className="counter-box">
          <h2>
            <span
              className="counter"
              data-target="50"
              ref={el => (countersRef.current[0] = el)}
            >0</span>+
          </h2>
          <p>Website</p>
        </div>
        <div className="counter-box">
          <h2>
            <span
              className="counter"
              data-target="2"
              ref={el => (countersRef.current[1] = el)}
            >0</span>+
          </h2>
          <p>Mobile APP</p>
        </div>
        <div className="counter-box">
          <h2>
            <span
              className="counter"
              data-target="250"
              ref={el => (countersRef.current[2] = el)}
            >0</span>+
          </h2>
          <p>Graphic Projects</p>
        </div>
        <div className="counter-box">
          <h2>
            <span
              className="counter"
              data-target="100"
              ref={el => (countersRef.current[3] = el)}
            >0</span>%
          </h2>
          <p>Happy Clients</p>
        </div>
      </section>
    </>
  );
};

export default Counter;