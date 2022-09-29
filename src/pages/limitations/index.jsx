import ImageRender from '../../components/ImageRender';
import { LIMITATIONS } from '../../helpers/images';

export default function LimitationsPage() {
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
                Limitations
              </h2>
              <ImageRender data={LIMITATIONS} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
