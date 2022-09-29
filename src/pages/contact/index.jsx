import { useState } from 'react';
import './index.css';

import SuccessNotification from '../../components/Notifications/Success';
import ErrorNotification from '../../components/Notifications/Error';

export default function ContactPage() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);
  // const [submittedErrors, setSubmittedErrors] = useState([]);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const validateEmail = (email) => {
    if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      return true;
    }
    return false;
  };

  const isSubmitDisabled = () => {
    return (
      email === '' ||
      !validateEmail(email) ||
      name === '' ||
      message === '' ||
      submitting
    );
  };

  const onHandleSubmit = (event) => {
    event.preventDefault();
    if (isSubmitDisabled) {
      setSubmitting(true);
      fetch('https://formspree.io/f/xyyvjgzz', {
        method: 'POST',
        body: JSON.stringify({ name, email, message }),
        headers: {
          Accept: 'application/json',
        },
      })
        .then((response) => {
          setSubmitting(false);

          if (response.ok) {
            setError(false);
            setSuccess(true);
            setEmail('');
            setMessage('');
            setName('');

            setTimeout(() => {
              setSuccess(false);
            }, 10000);
          } else {
            response.json().then((data) => {
              if (Object.hasOwn(data, 'errors')) {
                // setSubmittedErrors(
                //   data['errors'].map((error) => error['message']).join(', ')
                // );
              } else {
                setError(true);
              }
            });
          }
        })
        .catch((error) => {
          setError(true);
          setSubmitting(false);
        });
    }
  };

  return (
    <div className="popular-pricing section-pad-lg section-pad nopb">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-12 text-center">
            <div className="sec-heading">
              <div className="subscriber section-pad-sm section-pad nopb">
                <div className="container">
                  <div className="row justify-content-between">
                    <div className="col-lg-12">
                      <div className="cta-box subscriber-box contact-info">
                        <h2 className="input-heading text-center">Contact</h2>

                        <form
                          onSubmit={onHandleSubmit}
                          // id="contact-form"
                          className="form-message"
                        >
                          <div className="row justify-content-center">
                            <div className="col-md-6">
                              <div className="input-field-s2">
                                <input
                                  id="contact-name"
                                  type="text"
                                  name="contact-name"
                                  className="input-contact required text"
                                  placeholder="Your name"
                                  value={name}
                                  onChange={(e) => setName(e.target.value)}
                                  autoComplete="off"
                                />
                              </div>
                            </div>

                            <div className="col-md-6">
                              <div className="input-field-s2">
                                <input
                                  id="contact-email"
                                  type="email"
                                  name="contact-email"
                                  className="input-contact required email"
                                  placeholder="Your mail"
                                  value={email}
                                  onChange={(e) => setEmail(e.target.value)}
                                  autoComplete="off"
                                />
                              </div>
                            </div>

                            <div className="col-md-12">
                              <div className="input-field-s2">
                                <textarea
                                  id="contact-message"
                                  className="input-contact required text"
                                  name="contact-message"
                                  placeholder="Message"
                                  value={message}
                                  onChange={(e) => setMessage(e.target.value)}
                                  autoComplete="off"
                                ></textarea>
                              </div>
                            </div>

                            <div>
                              <div className="subscriber-btn">
                                <button
                                  disabled={isSubmitDisabled()}
                                  className="btn-lg btn-md"
                                  type="submit"
                                >
                                  {submitting ? 'Submitting' : 'Sent message'}
                                </button>
                              </div>
                            </div>
                          </div>
                          <div className="form-results">
                            {success && (
                              <SuccessNotification title="Message sent successfully. Thank you for your feedback." />
                            )}

                            {error && (
                              <ErrorNotification title="Something went wrong. Please try again." />
                            )}
                          </div>
                        </form>
                      </div>
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
