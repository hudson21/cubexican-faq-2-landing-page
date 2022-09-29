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
          $('.dropdown-menu').removeClass('open');
        }
      });
    });

    // Back to Top
    const $up_icon = $('.up-icon');
    if ($up_icon.length > 0) {
      $up_icon.on('click', function () {
        $('html').animate({ scrollTop: 0 }, 2000);
      });
    }

    // Ajax Form Submission
    const contactForm = $('#contact-form'),
      subscribeForm = $('#subscribe-form');
    if (contactForm.length > 0 || subscribeForm.length > 0) {
      if (!$().validate || !$().ajaxSubmit) {
        console.log('contactForm: jQuery Form or Form Validate not Defined.');
        return true;
      }
      // ContactForm
      if (contactForm.length > 0) {
        const selectRec = contactForm.find('select.required'),
          qf_results = contactForm.find('.form-results');
        contactForm.validate({
          invalidHandler: function () {
            qf_results.slideUp(400);
          },
          submitHandler: function (form) {
            qf_results.slideUp(400);
            $(form).ajaxSubmit({
              target: qf_results,
              dataType: 'json',
              success: function (data) {
                const type =
                  data.result === 'error' ? 'alert-danger' : 'alert-success';
                qf_results
                  .removeClass('alert-danger alert-success')
                  .addClass('alert ' + type)
                  .html(data.message)
                  .slideDown(400);
                if (data.result !== 'error') {
                  $(form)
                    .clearForm()
                    .find('.input-field')
                    .removeClass('input-focused');
                }
              },
            });
          },
        });
        selectRec.on('change', function () {
          $(this).valid();
        });
      }
      // SubscribeForm
      if (subscribeForm.length > 0) {
        const sf_results = subscribeForm.find('.subscribe-results');
        subscribeForm.validate({
          invalidHandler: function () {
            sf_results.slideUp(400);
          },
          submitHandler: function (form) {
            sf_results.slideUp(400);
            $(form).ajaxSubmit({
              target: sf_results,
              dataType: 'json',
              success: function (data) {
                const type =
                  data.result === 'error' ? 'alert-danger' : 'alert-success';
                sf_results
                  .removeClass('alert-danger alert-success')
                  .addClass('alert ' + type)
                  .html(data.message)
                  .slideDown(400);
                if (data.result !== 'error') {
                  $(form)
                    .clearForm()
                    .find('.input-field')
                    .removeClass('input-focused');
                }
              },
            });
          },
        });
      }
    }
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
