import styles from './styles.module.scss';
import { Panel } from '@ui/Panel';
import { Typography } from '@ui/Typography';
import Image from 'next/image';

import line from '@assets/img/home/factPanel/patern.svg';

import Slider from 'react-slick';
import { useEffect, useRef, useState } from 'react';
import { facts } from '@constants/facts';

export const FactPanel = () => {
  const [isPaused, setIsPaused] = useState(false);
  const sliderRef = useRef<Slider>();

  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    fade: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const nextSlide = () => sliderRef.current?.slickNext();

  useEffect(() => {
    let timer = setInterval(() => {
      if (isPaused) return;
      nextSlide();
    }, 3000);

    return () => clearInterval(timer);
  }, [isPaused]);

  return (
    <Slider ref={sliderRef as any} {...settings}>
      {facts.map((item, i) => (
        <div onClick={nextSlide} onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)} key={i}>
          <Panel className={styles.fact}>
            <div className={styles.fact_line}>
              <Image src={line} alt="Паттерн" />
            </div>
            <div className={styles.fact_author}>
              <Image src={item.image} alt={item.author} />
            </div>
            <div className={styles.fact_inside}>
              <Typography className={styles.fact_text} component="h1" type="headlines" variant="small" color="gray">
                {item.fact}
              </Typography>
              <Typography component="h1" type="headlines" variant="small" color="black">
                {item.author}
              </Typography>
            </div>
          </Panel>
        </div>
      ))}
    </Slider>
  );
};
