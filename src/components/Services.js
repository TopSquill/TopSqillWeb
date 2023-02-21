import React from "react";

const Services = () => {
  return (
    <div>
      &lt;&gt; {/* ======= Services Section ======= */}
      <section id="services" className="services">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Services</h2>
            <p>Check our Services</p>
          </div>
          <div className="row">
            <div
              className="col-lg-4 col-md-6 d-flex align-items-stretch"
              data-aos="zoom-in"
              data-aos-delay={100}
            >
              <div className="icon-box">
                <div className="icon">
                  <i class="bx bx-code-alt" />
                </div>
                <h4>
                  <a href>Web Development</a>
                </h4>
                <p>
                  Voluptatum deleniti atque corrupti quos dolores et quas
                  molestias excepturi
                </p>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0"
              data-aos="zoom-in"
              data-aos-delay={200}
            >
              <div className="icon-box">
                <div className="icon">
                  <i class="bi bi-braces" />
                </div>
                <h4>
                  <a href>Responsive Design</a>
                </h4>
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore
                </p>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0"
              data-aos="zoom-in"
              data-aos-delay={300}
            >
              <div className="icon-box">
                <div className="icon">
                  <i class="bi bi-phone" />
                </div>
                <h4>
                  <a href>App Development</a>
                </h4>
                <p>
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia
                </p>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4"
              data-aos="zoom-in"
              data-aos-delay={100}
            >
              <div className="icon-box">
                <div className="icon">
                  <i className="bx bx-support" />
                </div>
                <h4>
                  <a href>Technical Support</a>
                </h4>
                <p>
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis
                </p>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4"
              data-aos="zoom-in"
              data-aos-delay={200}
            >
              <div className="icon-box">
                <div className="icon">
                  <i className="bx bx-slideshow" />
                </div>
                <h4>
                  <a href>GRC Training & Development</a>
                </h4>
                <p>
                  Quis consequatur saepe eligendi voluptatem consequatur dolor
                  consequuntur
                </p>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4"
              data-aos="zoom-in"
              data-aos-delay={300}
            >
              <div className="icon-box">
                <div className="icon">
                  <i className="bx bxl-wordpress" />
                </div>
                <h4>
                  <a href>Wordpress Developer</a>
                </h4>
                <p>
                  Modi nostrum vel laborum. Porro fugit error sit minus sapiente
                  sit aspernatur
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Services Section */}
    </div>
  );
};

export default Services;
