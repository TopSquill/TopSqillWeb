import React from "react";

const Featured = () => {
  return (
    <>
      {" "}
      {/* ======= Features Section ======= */}
      <section id="features" className="features">
        <div className="container" data-aos="fade-up">
          <div className="row">
            <div
              className="image col-lg-6"
              style={{ backgroundImage: 'url("assets/img/features.jpg")' }}
              data-aos="fade-right"
            />
            <div className="col-lg-6" data-aos="fade-left" data-aos-delay={100}>
              <div
                className="icon-box mt-5 mt-lg-0"
                data-aos="zoom-in"
                data-aos-delay={150}
              >
                <i className="bx bx-receipt" />
                <h4>Vendor Management</h4>
                <p>
                  Collects all of your vendor information – including
                  agreements, contracts, policies, and access credentials – into
                  one place to efficiently monitor vendors throughout the entire
                  relationship
                </p>
              </div>
              <div
                className="icon-box mt-5"
                data-aos="zoom-in"
                data-aos-delay={150}
              >
                <i class="fa fa-balance-scale" aria-hidden="true"/>
                <h4>Enterprise Risk Management</h4>
                <p>
                  Combines insurable and noninsurable risks so you can
                  anticipate, assess, mitigate, and monitor every threat from
                  every corner of the organization
                </p>
              </div>
              <div
                className="icon-box mt-5"
                data-aos="zoom-in"
                data-aos-delay={150}
              >
                <i className="bx bx-images" />
                <h4>Audit Management</h4>
                <p>
                  Manages every aspect of complex audit procedures in one
                  secure, accessible place.
                </p>
              </div>
              <div
                className="icon-box mt-5"
                data-aos="zoom-in"
                data-aos-delay={150}
              >
                <i class="bi bi-shield-fill-check"/>
                <h4>Security Operations</h4>
                <p>
                  Tracks all security processes, change status, compliance
                  requirements, hazard data, and incidents.
                </p>
              </div>
              <div
                className="icon-box mt-5"
                data-aos="zoom-in"
                data-aos-delay={150}
              >
               <i class="bi bi-clipboard"/>
                <h4>Data Privacy</h4>
                <p>
                  Data privacy is the protection of personal data from those who
                  should not have access to it and the ability of individuals to
                  determine who can access their personal information.
                </p>
              </div>
              <div
                className="icon-box mt-5"
                data-aos="zoom-in"
                data-aos-delay={150}
              >
               <i class="bi bi-heart-pulse-fill"/>
                <h4>Policy and Compliance Management</h4>
                <p>
                  Seamlessly integrates policy , compliance and risk management
                  into a single source of truth to improve outcomes for staff
                  and the organization.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Features Section */}
    </>
  );
};

export default Featured;
