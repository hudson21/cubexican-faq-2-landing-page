import { Link } from 'react-router-dom';
import FooterLogo from '../../images/footer-logo.png';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <div className="footer-area nopd" id="contact">
      <div className="container">
        <div className="footer-content">
          <div className="row">
            <div className="col-md-3">
              <div className="footer-widget">
                <Link to="/cubexican-faq-2-landing-page">
                  <img src={FooterLogo} alt="footer-logo" />
                </Link>
              </div>
            </div>

            <div className="col-md-3">
              <div className="footer-widget">
                <ul className="footer-list">
                  <li>
                    <Link to="/cubexican-faq-2-landing-page/about">About</Link>
                  </li>
                  <li>
                    <Link to="/cubexican-faq-2-landing-page">Pricing</Link>
                  </li>
                  <li>
                    <Link to="/cubexican-faq-2-landing-page/privacy-policy">
                      Privacy Policy
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-md-3">
              <div className="footer-widget">
                <ul className="footer-list">
                  <li>cubexican.sup.shopify@gmail.com</li>
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
