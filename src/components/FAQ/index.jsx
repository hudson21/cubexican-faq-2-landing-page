import FAQSampleImg from './faq-sample.png';
import BasicTextIntegrationImg from './basic-text-integration.png';
import RichTextIntegrationImg from './rich-text-integration.png';
import FAQTab1Img from './faq-tab-1.png';
import FAQTab2Img from './faq-tab-2.png';
import FAQTab3Img from './faq-tab-3.png';

export default function FAQ() {
  return (
    <div className="faq section-pad-md section-pad nopb">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 text-center">
            <div className="sec-heading">
              <h2 className="sec-title-lg">FREQUENTLY ASKED QUESTIONS</h2>
              <p className="lead">
                Questions you migh have about what are the features offered on
                the pricing tiers.
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
                        Do I have 7 trial days ?
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
                        Yes, you have 7 trial days on the first time you
                        subscribe to the <strong>Basic</strong> plan. This is
                        not applicable to the <strong>Pro</strong> plan.
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
                        What is a FAQ Dynamic Design Template ?
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
                        It is a shopify theme app block extension for
                        integrating the FAQ data being created in our
                        application by yourself and then used in your storefront
                        store where you can set CSS settings on real time. Here
                        is a screenshot of how it looks one of our FAQ Designs:
                        <img src={FAQSampleImg} alt="Faq Sample" />
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
                        What is Basic Text Integration ?
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
                        It means you can use plain text for the answer of your
                        questions inside of our app. You can see a sample here:
                        <img
                          src={BasicTextIntegrationImg}
                          alt="Basic Text Integration"
                        />
                      </p>
                    </div>
                  </div>
                </div>

                <div className="card accordion-custom">
                  <div className="card-header" id="headingFour">
                    <h5 className="mb-0">
                      <button
                        className="btn btn-link collapsed text-left"
                        data-toggle="collapse"
                        data-target="#collapseFour"
                        aria-expanded="false"
                        aria-controls="collapseFour"
                      >
                        What is Rich Text Integration ?
                        <span className="faq-icon">
                          <i className="fas fa-chevron-up fa-xs"></i>
                        </span>
                      </button>
                    </h5>
                  </div>

                  <div
                    id="collapseFour"
                    className="collapse"
                    aria-labelledby="headingFour"
                    data-parent="#accordion"
                  >
                    <div className="card-body">
                      <p>
                        It means you can use bold, italic, underline, code and
                        blockquote words for the answer of your questions inside
                        of our app. You can see a sample here:
                        <img
                          src={RichTextIntegrationImg}
                          alt="Rich Text Integration"
                        />
                      </p>
                    </div>
                  </div>
                </div>

                <div className="card accordion-custom">
                  <div className="card-header" id="headingFive">
                    <h5 className="mb-0">
                      <button
                        className="btn btn-link collapsed text-left"
                        data-toggle="collapse"
                        data-target="#collapseFive"
                        aria-expanded="false"
                        aria-controls="collapseFive"
                      >
                        What is a FAQ Dynamic Tab Design ?
                        <span className="faq-icon">
                          <i className="fas fa-chevron-up fa-xs"></i>
                        </span>
                      </button>
                    </h5>
                  </div>

                  <div
                    id="collapseFive"
                    className="collapse"
                    aria-labelledby="headingFive"
                    data-parent="#accordion"
                  >
                    <div className="card-body">
                      <p>
                        It means you can use up to three FAQs grouped by tabs
                        .You can see a sample here:
                        <img
                          style={{ marginBottom: '15px' }}
                          src={FAQTab1Img}
                          alt="FQA Tab 1 Sample"
                        />
                        <img
                          style={{ marginBottom: '15px' }}
                          src={FAQTab2Img}
                          alt="FQA Tab 2 Sample"
                        />
                        <img src={FAQTab3Img} alt="FQA Tab 3 Sample" />
                      </p>
                    </div>
                  </div>
                </div>

                <div className="card accordion-custom">
                  <div className="card-header" id="headingSix">
                    <h5 className="mb-0">
                      <button
                        className="btn btn-link collapsed text-left"
                        data-toggle="collapse"
                        data-target="#collapseSix"
                        aria-expanded="false"
                        aria-controls="collapseSix"
                      >
                        What is a SEO Booster Extension ?
                        <span className="faq-icon">
                          <i className="fas fa-chevron-up fa-xs"></i>
                        </span>
                      </button>
                    </h5>
                  </div>

                  <div
                    id="collapseSix"
                    className="collapse"
                    aria-labelledby="headingSix"
                    data-parent="#accordion"
                  >
                    <div className="card-body">
                      <p>
                        It means you can inject certain tags for SEO
                        Optimization like <strong>description</strong>,{' '}
                        <strong>keywords</strong> and <strong>author</strong>{' '}
                        tags on your shopify storefront.
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
