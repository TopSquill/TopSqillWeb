import React from "react";

const About = () => {
  return (
    <>
      <section id="about" className="about">
        <div className="container" data-aos="fade-up">
          <div className="row">
            <div
              className="col-lg-6 order-1 order-lg-2"
              data-aos="fade-left"
              data-aos-delay={100}
            >
              <img src="assets/img/about.jpg" className="img-fluid" alt />
            </div>
            <div
              className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content"
              data-aos="fade-right"
              data-aos-delay={100}
            >
              <div className="section-title">
                <h2>About</h2>
                <p>About Us</p>
              </div>
              <h3>LEADING GOVERNANCE, RISK, AND COMPLIANCE COMPANY</h3>
              <h4 className="fst-italic">
                Build resiliency into your organization
              </h4>
              <ul>
                <li>
                  <i className="ri-check-double-line" /> We help companies
                  choose the right GRC solution like RSA Archer , OneTrust , IBM
                  OpenPages , ServiceNow to address their business needs, manage
                  risk, audit activities and demonstrate compliance
                </li>
                <li>
                  <i className="ri-check-double-line" /> Our Integrated GRC
                  Programmes helps business to Streamline and automate critical
                  workflows to increase team’s collaboration, and deliver
                  real-time insights to support low-effort, data-driven
                  decision-making.
                </li>
                {/* <li>
                  <i className="ri-check-double-line" /> Ullamco laboris nisi ut
                  aliquip ex ea commodo consequat. 
                </li> */}
              </ul>
              <p>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
