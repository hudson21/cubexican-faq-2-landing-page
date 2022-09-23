import { Link } from 'react-router-dom';
import FAQLogo from '../../images/faq-logo-try-2.png';

export default function Navigation() {
  return (
    <div className="header-area" id="home">
      <header className="site-header is-sticky">
        <nav
          className="navbar navbar-expand-lg navbar-light is-transparent"
          id="mainnav"
        >
          <div className="container">
            <Link to="/cubexican-faq-2-landing-page" className="navbar-brand">
              <img className="logo logo-dark" alt="logo" src={FAQLogo} />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarTogglerDemo01"
              aria-controls="navbarTogglerDemo01"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-icon">
                <i className="fas fa-bars"></i>
              </span>
            </button>

            <div
              className="collapse navbar-collapse justify-content-end"
              id="navbarTogglerDemo01"
            >
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link
                    to="/cubexican-faq-2-landing-page/about"
                    className="nav-link"
                  >
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/cubexican-faq-2-landing-page" className="nav-link">
                    Pricing
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/cubexican-faq-2-landing-page/privacy-policy"
                    className="nav-link"
                  >
                    Privacy Policy
                  </Link>
                </li>

                <li className="nav-item">
                  <a className="btn-menu" href="#">
                    Subscribe
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
