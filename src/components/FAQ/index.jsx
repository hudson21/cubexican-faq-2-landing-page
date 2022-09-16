export default function FAQ() {
  return (
    <div className="faq section-pad-md section-pad nopb">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 text-center">
            <div className="sec-heading">
              <h2 className="sec-title-lg">FREQUENTLY ASKED QUESTIONS</h2>
              <p className="lead">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium
              </p>
            </div>
          </div>
        </div>

        <div className="faq-accordion">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div id="accordion">
                <div className="card accordion-custom">
                  <div className="card-header" id="headingOne">
                    <h5 className="mb-0">
                      <button
                        className="btn btn-link show text-left"
                        data-toggle="collapse"
                        data-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        Is it free?
                        <span className="faq-icon">
                          <i className="fas fa-chevron-up fa-xs"></i>
                        </span>
                      </button>
                    </h5>
                  </div>

                  <div
                    id="collapseOne"
                    className="collapse show"
                    aria-labelledby="headingOne"
                    data-parent="#accordion"
                  >
                    <div className="card-body">
                      <p>
                        consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris
                        nisi ut aliquip ex ea commodo consequat.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="card accordion-custom">
                  <div className="card-header" id="headingTwo">
                    <h5 className="mb-0">
                      <button
                        className="btn btn-link collapsed text-left"
                        data-toggle="collapse"
                        data-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        Is it refundable?
                        <span className="faq-icon">
                          <i className="fas fa-chevron-up fa-xs"></i>
                        </span>
                      </button>
                    </h5>
                  </div>

                  <div
                    id="collapseTwo"
                    className="collapse"
                    aria-labelledby="headingTwo"
                    data-parent="#accordion"
                  >
                    <div className="card-body">
                      <p>
                        consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris
                        nisi ut aliquip ex ea commodo consequat.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="card accordion-custom">
                  <div className="card-header" id="headingThree">
                    <h5 className="mb-0">
                      <button
                        className="btn btn-link collapsed text-left"
                        data-toggle="collapse"
                        data-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        How use it?
                        <span className="faq-icon">
                          <i className="fas fa-chevron-up fa-xs"></i>
                        </span>
                      </button>
                    </h5>
                  </div>

                  <div
                    id="collapseThree"
                    className="collapse"
                    aria-labelledby="headingThree"
                    data-parent="#accordion"
                  >
                    <div className="card-body">
                      <p>
                        consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris
                        nisi ut aliquip ex ea commodo consequat.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
