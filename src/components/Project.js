import React from "react";

const Project = () => {
  return (
    <>
      {" "}
      {/* ======= Portfolio Section ======= */}
      <section id="portfolio" className="portfolio">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Project</h2>
            <p>Check our Projects</p>
          </div>
          <div className="row" data-aos="fade-up" data-aos-delay={100}>
            <div className="col-lg-12 d-flex justify-content-center">
              <ul id="portfolio-flters">
                <li data-filter="*" className="filter-active">
                  All
                </li>
                <li data-filter=".filter-app">App</li>
                <li data-filter=".filter-card">Card</li>
                <li data-filter=".filter-web">Web</li>
              </ul>
            </div>
          </div>
          <div
            className="row portfolio-container"
            data-aos="fade-up"
            data-aos-delay={200}
          >
            <div className="col-lg-4 col-md-6 portfolio-item filter-app">
              <div className="portfolio-wrap">
                <a href="https://miro.com/">
                  <img
                    src="assets/img/portfolio/portfolio-1.jpg"
                    className="img-fluid"
                    alt
                  />
                  <div className="portfolio-info">
                    <h4>Miro</h4>
                    <p>App</p>
                    <div className="portfolio-links">
                      <a
                        href="assets/img/portfolio/portfolio-1.jpg"
                        data-gallery="portfolioGallery"
                        className="portfolio-lightbox"
                        title="App 1"
                      >
                        <i className="bx bx-plus" />
                      </a>
                      <a href="portfolio-details.html" title="More Details">
                        <i className="bx bx-link" />
                      </a>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-item filter-web">
              <div className="portfolio-wrap">
                <a href="https://whereby.com/">
                  <img
                    src="assets/img/portfolio/portfolio-2.jpg"
                    className="img-fluid"
                    alt
                  />
                  <div className="portfolio-info">
                    <h4>WhereBy</h4>
                    <p>Web</p>
                    <div className="portfolio-links">
                      <a
                        href="assets/img/portfolio/portfolio-2.jpg"
                        data-gallery="portfolioGallery"
                        className="portfolio-lightbox"
                        title="Web 3"
                      >
                        <i className="bx bx-plus" />
                      </a>
                      <a href="portfolio-details.html" title="More Details">
                        <i className="bx bx-link" />
                      </a>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-item filter-app">
              <div className="portfolio-wrap">
                <a href="https://www.readyhubb.com/">
                  <img
                    src="assets/img/portfolio/portfolio-3.jpg"
                    className="img-fluid"
                    alt
                  />
                  <div className="portfolio-info">
                    <h4>ReadyHubb</h4>
                    <p>App</p>
                    <div className="portfolio-links">
                      <a
                        href="assets/img/portfolio/portfolio-3.jpg"
                        data-gallery="portfolioGallery"
                        className="portfolio-lightbox"
                        title="App 2"
                      >
                        <i className="bx bx-plus" />
                      </a>
                      <a href="portfolio-details.html" title="More Details">
                        <i className="bx bx-link" />
                      </a>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-item filter-card">
              <div className="portfolio-wrap">
                <a href="https://lacreativity.in/">
                  <img
                    src="assets/img/portfolio/portfolio-4.jpg"
                    className="img-fluid"
                    alt
                  />
                  <div className="portfolio-info">
                    <h4>Lacreativity</h4>
                    <p>Card</p>
                    <div className="portfolio-links">
                      <a
                        href="assets/img/portfolio/portfolio-4.jpg"
                        data-gallery="portfolioGallery"
                        className="portfolio-lightbox"
                        title="Card 2"
                      >
                        <i className="bx bx-plus" />
                      </a>
                      <a href="portfolio-details.html" title="More Details">
                        <i className="bx bx-link" />
                      </a>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-item filter-web">
              <div className="portfolio-wrap">
                <a href="https://www.wyndhamhotels.com/">
                  <img
                    src="assets/img/portfolio/portfolio-5.jpg"
                    className="img-fluid"
                    alt
                  />
                  <div className="portfolio-info">
                    <h4>Wyndham Hotels</h4>
                    <p>Web</p>
                    <div className="portfolio-links">
                      <a
                        href="assets/img/portfolio/portfolio-5.jpg"
                        data-gallery="portfolioGallery"
                        className="portfolio-lightbox"
                        title="Web 2"
                      >
                        <i className="bx bx-plus" />
                      </a>
                      <a href="portfolio-details.html" title="More Details">
                        <i className="bx bx-link" />
                      </a>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-item filter-app">
              <div className="portfolio-wrap">
                <a href="https://insta-client.netlify.app/">
                  <img
                    src="assets/img/portfolio/portfolio-6.jpg"
                    className="img-fluid"
                    alt
                  />
                  <div className="portfolio-info">
                    <h4>Social Media</h4>
                    <p>App</p>
                    <div className="portfolio-links">
                      <a
                        href="assets/img/portfolio/portfolio-6.jpg"
                        data-gallery="portfolioGallery"
                        className="portfolio-lightbox"
                        title="App 3"
                      >
                        <i className="bx bx-plus" />
                      </a>
                      <a href="portfolio-details.html" title="More Details">
                        <i className="bx bx-link" />
                      </a>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-item filter-card">
              <div className="portfolio-wrap">
                <a href="https://saurav-main-portfolio.netlify.app">
                  <img
                    src="assets/img/portfolio/portfolio-7.jpg"
                    className="img-fluid"
                    alt
                  />
                  <div className="portfolio-info">
                    <h4>Portfolio</h4>
                    <p>Card</p>
                    <div className="portfolio-links">
                      <a
                        href="assets/img/portfolio/portfolio-7.jpg"
                        data-gallery="portfolioGallery"
                        className="portfolio-lightbox"
                        title="Card 1"
                      >
                        <i className="bx bx-plus" />
                      </a>
                      <a href="portfolio-details.html" title="More Details">
                        <i className="bx bx-link" />
                      </a>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-item filter-card">
              <div className="portfolio-wrap">
                <a href="https://shopdunia.netlify.app">
                  <img
                    src="assets/img/portfolio/portfolio-8.jpg"
                    className="img-fluid"
                    alt
                  />
                  <div className="portfolio-info">
                    <h4>Ecommerce</h4>
                    <p>Card</p>
                    <div className="portfolio-links">
                      <a
                        href="assets/img/portfolio/portfolio-8.jpg"
                        data-gallery="portfolioGallery"
                        className="portfolio-lightbox"
                        title="Card 3"
                      >
                        <i className="bx bx-plus" />
                      </a>
                      <a href="portfolio-details.html" title="More Details">
                        <i className="bx bx-link" />
                      </a>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-item filter-web">
              <div className="portfolio-wrap">
                <a href="https://weatheradunia.netlify.app">
                  <img
                    src="assets/img/portfolio/portfolio-9.jpg"
                    className="img-fluid"
                    alt
                  />
                  <div className="portfolio-info">
                    <h4>Weather App</h4>
                    <p>Web</p>
                    <div className="portfolio-links">
                      <a
                        href="assets/img/portfolio/portfolio-9.jpg"
                        data-gallery="portfolioGallery"
                        className="portfolio-lightbox"
                        title="Web 3"
                      >
                        <i className="bx bx-plus" />
                      </a>
                      <a href="portfolio-details.html" title="More Details">
                        <i className="bx bx-link" />
                      </a>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Portfolio Section */}
    </>
  );
};

export default Project;
