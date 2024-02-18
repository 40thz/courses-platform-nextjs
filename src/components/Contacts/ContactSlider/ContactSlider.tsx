import Slider, { Settings } from 'react-slick';
import styles from './styles.module.scss';
import { ContactSliderCart } from './ui/ContactSliderCart';
import { SliderArrow } from './ui/SliderArrow';
import { Teammate } from '@src/types';

export const ContactSlider = ({ list, onChange }: { list: Teammate[]; onChange: (index: number) => void }) => {
  const settings: Settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    infinite: false,
    prevArrow: <SliderArrow type="prev" />,
    nextArrow: <SliderArrow type="next" />,
    beforeChange: (current, next) => {
      onChange(next);
    },
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          focusOnSelect: true,
          fade: false,
          arrows: false,
        },
      },
    ],
  };

  return (
    <div className={styles.slider}>
      <Slider {...settings} className="contact-slider">
        {list && list.map((user) => (
          <ContactSliderCart
            key={user.id}
            className={styles.teamcart}
            title={user.attributes.title}
            role={user.attributes.role}
            image={user.attributes.image.data.attributes.url}
          />
        ))}
      </Slider>
    </div>
  );
};
