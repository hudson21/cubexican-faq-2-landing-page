import { Link } from 'react-router-dom';
import FAQLogo from '../../images/faq-logo-try-2.png';
import useWindowDimensions from '../../hooks/useDimentions';
import * as $ from 'jquery';

export default function Navigation() {
  const { width } = useWindowDimensions();

  const handleDropdownMenu = () => {
    if (width < 991) {
      $(this).parent().toggleClass('open');
    }
  };

  return (
    <div className='header-area' id='home'>
      <header className='site-header is-sticky'>
        <nav
          className='navbar navbar-expand-lg navbar-light is-transparent'
          id='mainnav'
        >
          <div className='container'>
            <Link to='/' className='navbar-brand'>
              <img className='logo logo-dark' alt='logo' src={FAQLogo} />
            </Link>
            <button
              className='navbar-toggler'
              type='button'
              data-toggle='collapse'
              data-target='#navbarTogglerDemo01'
              aria-controls='navbarTogglerDemo01'
              aria-expanded='false'
              aria-label='Toggle navigation'
            >
              <span className='navbar-icon'>
                <i className='fas fa-bars'></i>
              </span>
            </button>

            <div
              className='collapse navbar-collapse justify-content-end'
              id='navbarTogglerDemo01'
            >
              <ul className='navbar-nav' style={{ textAlign: 'center' }}>
                <li className='nav-item dropdown'>
                  <span
                    onClick={handleDropdownMenu}
                    style={{ cursor: 'pointer' }}
                    className='nav-link dropdown-toggle'
                    data-toggle='dropdown'
                  >
                    Documentation <span className='sr-only'>(current)</span>
                  </span>
                  <ul className='dropdown-menu'>
                    <li>
                      <Link className='dropdown-item' to='/documentation/video'>
                        Video Explanation
                      </Link>
                    </li>
                    <li>
                      <Link
                        className='dropdown-item'
                        to='/documentation/create-faq'
                      >
                        Create a FAQ
                      </Link>
                    </li>
                    <li>
                      <Link
                        className='dropdown-item'
                        to='/documentation/create-qa'
                      >
                        Create a QA
                      </Link>
                    </li>
                    <li>
                      <Link
                        className='dropdown-item'
                        to='/documentation/use-faq-extension'
                      >
                        Use FAQ Theme Extension
                      </Link>
                    </li>
                    <li>
                      <Link
                        className='dropdown-item'
                        to='/documentation/use-faq-tab-extension'
                      >
                        Use FAQ Tab Theme Extension
                      </Link>
                    </li>

                    <li>
                      <Link
                        className='dropdown-item'
                        to='/documentation/use-seo-booster-extension'
                      >
                        Use SEO Booster Extension
                      </Link>
                    </li>

                    <li>
                      <Link
                        className='dropdown-item'
                        to='/documentation/limitations'
                      >
                        Limitations
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className='nav-item'>
                  <Link to='/about' className='nav-link'>
                    About
                  </Link>
                </li>

                <li className='nav-item'>
                  <Link to='/' className='nav-link'>
                    Pricing
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link to='/privacy-policy' className='nav-link'>
                    Privacy Policy
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link to='/contact' className='nav-link'>
                    Contact
                  </Link>
                </li>

                <li className='nav-item'>
                  <a
                    className='btn-menu'
                    href='https://apps.shopify.com/cubexican-faq'
                  >
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
