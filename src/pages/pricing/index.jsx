import PricingHeroImg from './pricing-hero-image.png';

import FAQ from '../../components/FAQ';

export default function PricingPage() {
  return (
    <>
      <div className="header-content">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-5 text-center text-lg-left order-last order-lg-first">
              <div className="header-text-lg">
                <h1 className="sec-title-xl" style={{ color: '#6480ce' }}>
                  Pricing
                </h1>
                <p className="lead">
                  Choose the best plan that fits your requirements for
                  cubexian-faq-2 shopify app.
                </p>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="header-img sec-img">
                <img
                  src={PricingHeroImg}
                  className="img-fluid"
                  alt="Pricing Hero"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="popular-pricing section-pad-lg section-pad nopb">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 text-center">
              <div className="sec-heading">
                <h2 className="sec-title-lg" style={{ color: '#6480ce' }}>
                  Pricing Tiers
                </h2>
                <p className="sec-text-pad lead">
                  See the pricing tiers available for the{' '}
                  <strong>cubexican-faq-2</strong> shopify application.
                </p>
              </div>
            </div>
          </div>

          <div className="row justify-content-center no-gutters text-center">
            <div className="col-lg-6 col-md-6">
              <div className="pricing-box">
                <h2 className="pricing-title">Basic</h2>
                <span className="pricing-price">
                  <sup>$</sup> 2.99
                </span>
                <span className="pricing-note">Per month</span>
                <ul className="pricing-list">
                  <li>
                    <strong>7 trial days</strong> on the first time
                  </li>
                  <li>
                    <strong>1</strong> FAQ Dynamic Design Template
                  </li>
                  <li>
                    <strong>Up to 10</strong> Creation of FAQs
                  </li>
                  <li>
                    <strong>Basic Text</strong> Integration on Questions
                  </li>
                  <li>
                    <strong>24/7</strong> Support
                  </li>
                  <br />
                  <br />
                </ul>
                <a href="#" className="btn-lg btn-price">
                  Subscribe
                </a>
              </div>
            </div>

            <div className="col-lg-6 col-md-6">
              <div className="pricing-box active">
                <h2 className="pricing-title">Pro</h2>
                <span className="pricing-price">
                  <sup>$</sup> 9.99
                </span>
                <span className="pricing-note">Per month</span>
                <ul className="pricing-list">
                  <li>
                    <strong>8</strong> FAQ Dynamic Design Templates
                  </li>
                  <li>
                    <strong>Unlimited</strong> Creation of FAQs
                  </li>
                  <li>
                    <strong>Rich Text</strong> Integration on Questions
                  </li>
                  <li>
                    <strong>1</strong> FAQ Dynamic TAB Design Templates
                  </li>
                  <li>
                    <strong>Dynamic Questions</strong> Ordered by # Of Clicks
                  </li>
                  <li>
                    <strong>SEO</strong> Booster Extension
                  </li>
                  <li>
                    <strong>24/7</strong> Support
                  </li>
                </ul>
                <a href="#" className="btn-lg btn-price">
                  Subscribe
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <FAQ />
    </>
  );
}
