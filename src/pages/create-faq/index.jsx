import { CREATE_FAQ_STEPS } from '../../helpers/images';
import ImageRender from '../../components/ImageRender';

export default function CreateFAQPage() {
  return (
    <div className="popular-pricing section-pad-lg section-pad nopb">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-12 text-center">
            <div className="sec-heading">
              <h2
                className="sec-title-lg"
                style={{ color: '#6480ce', marginBottom: '50px' }}
              >
                Create a FAQ
              </h2>
              <ImageRender data={CREATE_FAQ_STEPS} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
