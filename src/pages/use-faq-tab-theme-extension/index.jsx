import ImageRender from '../../components/ImageRender';
import { USE_FAQ_TAB_PRO_THEME_EXTENSION_STEPS } from '../../helpers/images';

export default function UseFAQTabExtensionPage() {
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
                Use FAQ Tab Theme Extension
              </h2>
              <ImageRender data={USE_FAQ_TAB_PRO_THEME_EXTENSION_STEPS} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
