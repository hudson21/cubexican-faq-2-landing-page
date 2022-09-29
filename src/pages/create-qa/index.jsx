import ImageRender from '../../components/ImageRender';
import { CREATE_QA_STEPS } from '../../helpers/images';

export default function CreateQAPage() {
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
                Create a Question
              </h2>
              <ImageRender data={CREATE_QA_STEPS} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
