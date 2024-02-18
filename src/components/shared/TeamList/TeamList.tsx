import { Container } from '@ui/Container';
import { Title } from '@ui/Title';
import { TeamListCart } from './ui/TeamListCart';
import Slider, { Settings } from 'react-slick';
import { useMediaQuery } from '@src/hook/useMediaQuery';
import styles from './styles.module.scss';
import { Teammate } from '@src/types';
import { settings } from '@constants/sliderSettings';

export const TeamList = ({ data }: { data: Teammate[] }) => {
  if(data && !data.length) {
    return
  }

  const mboile = useMediaQuery(600);

  const options: Settings = {
    ...settings,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2.2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  
  return (
    <Container>
      <Title>Команда</Title>

      {mboile && (
        <div className={styles.team}>
          {data && data.map((item) => (
            <TeamListCart
              key={item.id}
              image={item.attributes.image.data.attributes.url}
              title={item.attributes.title}
              role={item.attributes.role}
              description={item.attributes.description}
            />
          ))}
        </div>
      )}

      {!mboile && (
        <Slider {...options} className="standarts">
          {data && data.map((item) => (
            <div key={item.id}>
              <TeamListCart
                image={item.attributes.image.data.attributes.url}
                title={item.attributes.title}
                role={item.attributes.role}
                description={item.attributes.description}
              />
            </div>
          ))}
        </Slider>
      )}
    </Container>
  );
};
