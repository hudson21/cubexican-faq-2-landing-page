import HeaderImg from '../../images/header.png';
import CarlosHudsonImg from '../../images/carlos-hudson.jpeg';
import JuanCarlosImg from '../../images/juan-carlos.jpeg';

export default function AboutPage() {
  return (
    <>
      <div className="header-content">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-5 order-last order-lg-first">
              <div className="header-text-lg">
                <h1 className="sec-title-xl">About Cubexican</h1>
                <p className="lead">
                  Eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip
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

      <div className="text-block-1 section-pad-sm section-pad nopb">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-4">
              <h2 className="sec-title-xxl">
                Everything you need to know about us
              </h2>
            </div>

            <div className="col-lg-7">
              <p className="lead">
                Encididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="why-this section-pad-lg section-pad nopb" id="about">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 text-center">
              <div className="sec-heading">
                <h2 className="sec-title-lg">Why choose us</h2>
                <p className="lead">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur.
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 col-lg-3">
              <div className="why-this-content">
                <h2>Benifits</h2>
                <p>
                  Essecillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident.
                </p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="why-this-content">
                <h2>Colaboration</h2>
                <p>
                  Essecillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident.
                </p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="why-this-content">
                <h2>Creative</h2>
                <p>
                  Essecillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident.
                </p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="why-this-content">
                <h2>Grow</h2>
                <p>
                  Essecillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident.
                </p>
              </div>
            </div>
          </div>
          <div className="pb"></div>
        </div>
      </div>

      <div className="team section-pad-lg section-pad nopb">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 text-center">
              <div className="sec-heading">
                <h2 className="sec-title-lg">Meet the team</h2>
                <p className="lead">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur.
                </p>
              </div>
            </div>
          </div>

          <div className="row text-center mtn-x3">
            <div className="col-md-6 col-12">
              <div className="team-content">
                <div className="team-photo">
                  <img src={CarlosHudsonImg} alt="team-member" />
                </div>
                <div className="team-info">
                  <h2>
                    Carlos Hudson<span>Founder / Software Engineer</span>
                  </h2>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-12">
              <div className="team-content">
                <div className="team-photo">
                  <img src={JuanCarlosImg} alt="team-member" />
                </div>
                <div className="team-info">
                  <h2>
                    Juan Carlos<span>Founder / Software Engineer</span>
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
