import useWindowDimensions from '../../hooks/useDimentions';
import './index.css';

const MAX_WIDTH_MOBILE = 768;

export default function ImageRender({ data }) {
  const { width } = useWindowDimensions();

  return data.map((item) => {
    return (
      <div key={item.id} className="box">
        <div className="box-inner">
          <div className="image-container">
            {item.steps.length > 0 && (
              <ol className="steps-list">
                {item.steps.map((step, index) => {
                  if (item.useEscapedHTML) {
                    return (
                      <li
                        key={index}
                        dangerouslySetInnerHTML={{
                          __html: `${index + 1}. ${step}`,
                        }}
                      ></li>
                    );
                  }
                  return <li key={index}>{`${index + 1}. ${step}`}</li>;
                })}
              </ol>
            )}

            {width > MAX_WIDTH_MOBILE && item.imageSrc && (
              <img
                className="image-desktop"
                src={item.imageSrc}
                alt={item.imageProps.alt}
              />
            )}
            {width <= MAX_WIDTH_MOBILE && item.mobileSrc && (
              <img
                className="image-mobil"
                src={item.mobileSrc}
                alt={item.imageProps.alt}
              />
            )}
          </div>
        </div>
      </div>
    );
  });
}
