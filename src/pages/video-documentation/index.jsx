import './index.css';

export default function VideoDocumentationPage() {
  return (
    <div className="popular-pricing section-pad-lg section-pad nopb">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-12 text-center">
            <div className="sec-heading">
              <h2 className="sec-title-lg" style={{ color: '#6480ce' }}>
                Video Documentation
              </h2>

              <div className="video-container">
                <iframe
                  src="https://www.youtube.com/embed/Zccj5yf4rJA"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope;"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
