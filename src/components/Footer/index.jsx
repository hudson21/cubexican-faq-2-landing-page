import { Link } from 'react-router-dom';
import FAQLogo from '../../images/faq-logo-try-2.png';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <div className="footer-area nopd" id="contact">
      <div className="container">
        <div className="footer-content">
          <div className="row">
            <div className="col-md-3">
              <div className="footer-widget">
                <Link to="/">
                  <img className="footer-img" src={FAQLogo} alt="footer-logo" />
                </Link>
              </div>
            </div>

            <div className="col-md-3">
              <div className="footer-widget">
                <ul className="footer-list">
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                  <li>
                    <Link to="/">Pricing</Link>
                  </li>
                  <li>
                    <Link to="/privacy-policy">Privacy Policy</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-md-3">
              <div className="footer-widget">
                <ul className="footer-list">
                  <li>
                    <a href="mailto:cubexican.sup.shopify@gmail.com">
                      cubexican.sup.shopify@gmail.com
                    </a>
                  </li>
                </ul>
                <div className="social">
                  <div className="social-icon">
                    <a href="">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </div>
                  <div className="social-icon">
                    <a href="#">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </div>
                  <div className="social-icon">
                    <a href="#">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="up-icon"
            onClick={() => {
              window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
            }}
          >
            <i className="fas fa-angle-double-up fa-lg"></i>
          </div>
        </div>
        <div className="footer-text text-center">
          <p>© {year} Cubexican. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}
