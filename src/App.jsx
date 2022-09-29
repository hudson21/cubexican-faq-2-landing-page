import { useEffect } from 'react';
import CustomRoutes from './Routes';
import Layout from './components/Layout';
import * as $ from 'jquery';

// Vendor Bundle CSS
import './assets/css/vendor.bundle.css?ver=100';

// Custom styles for this template
import './assets/css/style.css?ver=100';
import './assets/css/theme.css?ver=100';

function App() {
  useEffect(() => {
    const $win = $(window);

    // Sticky
    const $is_sticky = $('.is-sticky');
    if ($is_sticky.length > 0) {
      const $navm = $('#mainnav').offset();
      $win.scroll(function () {
        const $scroll = $win.scrollTop();
        if ($win.width() > 991) {
          if ($scroll > $navm.top) {
            if (!$is_sticky.hasClass('has-fixed')) {
              $is_sticky.addClass('has-fixed');
            }
          } else {
            if ($is_sticky.hasClass('has-fixed')) {
              $is_sticky.removeClass('has-fixed');
            }
          }
        } else {
          if ($is_sticky.hasClass('has-fixed')) {
            $is_sticky.removeClass('has-fixed');
          }
        }
      });
    }

    // Bootstrap Dropdown
    const $dropdown_menu = $('.dropdown');
    if ($dropdown_menu.length > 0) {
      $dropdown_menu.on('mouseover', function () {
        if ($win.width() > 991) {
          $(this).children('.dropdown-menu').stop().fadeIn(400);
          $(this).addClass('open');
        }
      });
      $dropdown_menu.on('mouseleave', function () {
        if ($win.width() > 991) {
          $(this).children('.dropdown-menu').stop().fadeOut(400);
          $(this).removeClass('open');
        }
      });
    }

    // Dropdown Items
    $('.dropdown-item').each(function (item, elem) {
      $(this).on('click', function () {
        if ($win.width() > 991) {
          $('.dropdown-menu').hide();
        } else {
          $('.dropdown-menu').removeClass('open');
        }
        $('.nav-item.dropdown').removeClass('open');
      });
    });

    // Back to Top
    const $up_icon = $('.up-icon');
    if ($up_icon.length > 0) {
      $up_icon.on('click', function () {
        $('html').animate({ scrollTop: 0 }, 2000);
      });
    }

    // Disable form from getting submitted
    // $('#contact-form').submit(false);
  }, []);

  return (
    <>
      <Layout>
        <CustomRoutes />
      </Layout>
    </>
  );
}

export default App;
