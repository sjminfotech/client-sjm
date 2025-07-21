import React from 'react'

const Processing = () => {
  return (
    <>
      <style>{`
        .process {
          padding: 40px 20px;
        }

        .process h2 {
          font-size: 2.5rem;
          text-align: center;
          margin-bottom: 40px;
          line-height: 1.3;
          color: #fff;
        }

        .steps {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          gap: 20px;
        }

        .step {
          background: #1a1a1a;
          color: white;
          border-radius: 10px;
          padding: 20px;
          flex: 1 1 220px;
          text-align: center;
          box-shadow: 0 2px 10px rgba(0,0,0,0.3);
        }

        .step h3 {
          font-size: 2rem;
        }

        .step p {
          font-weight: bold;
          margin: 10px 0;
        }

        .step a {
          color: #ccc;
          text-decoration: none;
          font-size: 0.95rem;
        }

        @media (max-width: 768px) {
          .process h2 {
            font-size: 1.6rem;
          }

          .steps {
            flex-direction: column;
            gap: 15px;
          }
        }
      `}</style>

      <section className="process container" data-aos="fade-up">
        <h2 className="content-center">
          Unlock Astonishing Results with Just 
          4 Simple steps !
        </h2>
        <div className="steps">
          <div className="step">
            <h3>📞</h3>
            <p>Tell Us Your Goal</p>
            <a href="#">Your goals, our strategy — aligned to deliver measurable success.</a>
          </div>
          <div className="step">
            <h3>📝</h3>
            <p>Strategy & Planning</p>
            <a href="#">Insights-led strategy tailored to your market and goals.</a>
          </div>
          <div className="step">
            <h3>🔍</h3>
            <p>Design, Build & Create</p>
            <a href="#">We build your vision with precision, performance, and style.</a>
          </div>
          <div className="step">
            <h3>🚀</h3>
            <p>Launch, Support & Grow</p>
            <a href="#">From launch to growth, we’re with you — optimized, responsive, and future-ready</a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Processing
