import SliderIntro, { Settings } from 'react-slick';
import styles from './styles.module.scss';
import { useState } from 'react';
import { Arrow } from '@components/shared/Icons/Arrow';
import { SliderCart } from '../SliderCart';
import { SliderImage } from '@src/services/article.service/types';

export const Slider = ({ images }: { images: SliderImage[] }) => {
  const [nav1, setNav1] = useState<any>();
  const [nav2, setNav2] = useState<any>();

  const settings: Settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    focusOnSelect: true,
  };

  const settingsDots: Settings = {
    slidesToShow: images.length > 3 ? 4 : images.length,
    slidesToScroll: 1,
    arrows: false,
    focusOnSelect: true,
  };

  const prevSlide = () => {
    nav1.slickPrev();
  };

  const nextSlide = () => {
    nav2.slickNext();
  };

  return (
    <div className={styles.slider_container}>
      <SliderIntro asNavFor={nav2} ref={(slider1) => setNav1(slider1)} {...settings} className={styles.slider}>
        {images.map((image) => (
          <SliderCart
            key={image.id}
            image={image.image.data.attributes.url}
            videoUrl={image.video ? image.video : ''}
          />
        ))}
      </SliderIntro>
      {images.length > 1 && (
        <div className={styles.slider_dots}>
          <Arrow style={{ cursor: 'pointer' }} onClick={prevSlide} type="left" />
          <SliderIntro asNavFor={nav1} ref={(slider2) => setNav2(slider2)} {...settingsDots} className="slider_dots">
            {images.map((image) => (
              <SliderCart key={image.id} image={image.image.data.attributes.url} />
            ))}
          </SliderIntro>
          <Arrow style={{ cursor: 'pointer' }} onClick={nextSlide} type="right" />
        </div>
      )}
    </div>
  );
};
