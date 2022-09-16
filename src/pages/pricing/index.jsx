import HeaderImg from '../../images/header.png';

import FAQ from '../../components/FAQ';

export default function PricingPage() {
  return (
    <>
      <div className="header-content">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-5 text-center text-lg-left order-last order-lg-first">
              <div className="header-text-lg">
                <h1 className="sec-title-xl">Pricing plans</h1>
                <p className="lead">
                  Choose the best plan that fits your requirements
                </p>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="header-img sec-img">
                <img src={HeaderImg} className="img-fluid" alt="header-img" />
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
                <h2 className="sec-title-lg">Popular pricing</h2>
                <p className="sec-text-pad lead">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur.
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
                <span className="pricing-note">100% free forever</span>
                <ul className="pricing-list">
                  <li>10 Pages</li>
                  <li>2 Gb storage</li>
                  <li>24/7 Customer support</li>
                  <li>2Gb Bandwith</li>
                  <li>Free update</li>
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
                  <li>10 Pages</li>
                  <li>2 Gb storage</li>
                  <li>24/7 Customer support</li>
                  <li>2Gb Bandwith</li>
                  <li>Free update</li>
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
