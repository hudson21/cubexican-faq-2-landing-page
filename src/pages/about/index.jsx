import CarlosHudsonImg from '../../images/carlos-hudson.jpeg';
import JuanCarlosImg from '../../images/juan-carlos.jpeg';
import SandraImg from '../../images/sandra.jpeg';
import AboutImg from './about-us.png';

export default function AboutPage() {
  return (
    <>
      <div className="header-content">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-5 order-last order-lg-first">
              <div className="header-text-lg">
                <h1
                  className="sec-title-xl"
                  style={{
                    color: '#6480ce',
                    fontWeight: 600,
                  }}
                >
                  About Cubexican
                </h1>
                <p className="lead" style={{ textAlign: 'justify' }}>
                  We are a small company that is dedicated to the development of
                  web applications. Our mission is to deliver to our customers
                  the best quality apps that fits to their needs in order to
                  help them to have a digital presence on the internet.
                </p>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="header-img sec-img">
                <img src={AboutImg} className="img-fluid" alt="About us" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-block-1 section-pad-sm section-pad nopb">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-4">
              <h2 className="sec-title-xxl" style={{ color: '#6480ce' }}>
                Everything you need to know about us
              </h2>
            </div>

            <div className="col-lg-7">
              <p className="lead" style={{ textAlign: 'justify' }}>
                Our vision is to become a company that is recognized for the
                effort we put to satisfy our customers. Despite our company is
                not a big tech company we think that quality is better than
                quantity. Our work speaks by ourselves and our clients are a
                proof of it. We know our commitment will make us grow over time
                and will make the difference among other software development
                companies.
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
                <h2 className="sec-title-lg" style={{ color: '#6480ce' }}>
                  Why choose us
                </h2>
                <p className="lead">
                  Reasons why you should choose us to develop your next project.
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 col-lg-3">
              <div className="why-this-content">
                <h2>Quality and scalable code</h2>
                <p>We will work to make your project long-term maintainable.</p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="why-this-content">
                <h2>Cutting edge technologies</h2>
                <p>
                  We use the latest technologies used in the industry to make
                  your project future proof.
                </p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="why-this-content">
                <h2>Creative</h2>
                <p>
                  We will work with you to make your project unique and help you
                  with those ideas that you have in mind.
                </p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="why-this-content">
                <h2>Support</h2>
                <p>
                  We know support is also important in order to help you with
                  your business. We will be there for you.
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
                <h2 className="sec-title-lg" style={{ color: '#6480ce' }}>
                  Meet the team
                </h2>
                <p className="lead">
                  Here are the people that make our company valuable.
                </p>
              </div>
            </div>
          </div>

          <div className="row text-center mtn-x3">
            <div className="col-md-4 col-12">
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

            <div className="col-md-4 col-12">
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

            <div className="col-md-4 col-12">
              <div className="team-content">
                <div className="team-photo">
                  <img src={SandraImg} alt="team-member" />
                </div>
                <div className="team-info">
                  <h2>
                    Sandra López<span>Customer Support</span>
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
