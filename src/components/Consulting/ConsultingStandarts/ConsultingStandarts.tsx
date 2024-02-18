import styles from './styles.module.scss';
import { Container } from '@ui/Container';
import { Title } from '@ui/Title';
import { Typography } from '@ui/Typography';
import { Panel } from '@ui/Panel';
import Slider from 'react-slick';

import { useMediaQuery } from '@src/hook/useMediaQuery';
import { ConsaltingDTO } from '@src/services/page.service/types';

const settings = {
  dots: false,
  infinite: false,
  arrows: false,
  fade: false,
  speed: 500,
  slidesToShow: 3,
  variableWidth: false,
  slidesToScroll: 2,
};

export const ConsultingStandarts = ({ elements }: { elements: ConsaltingDTO['attributes']['Standarts'] }) => {
  if (elements && !elements.length) {
    return;
  }

  const tablet = useMediaQuery(1200);

  return (
    <section>
      <Container>
        <Title>Стандарты</Title>

        {tablet && (
          <div className={styles.standarts}>
            {elements && elements.map((item) => (
              <div key={item.id}>
                <Panel type="medium" className={styles.cart}>
                  <Typography component="h2" type="headlines" variant="small">
                    {item.title}
                  </Typography>
                  <Typography style={{ maxWidth: '300px' }} component="p" type="body" variant="mega" color="black">
                    {item.description}
                  </Typography>
                </Panel>
              </div>
            ))}
          </div>
        )}

        {!tablet && (
          <Slider {...settings} className="standarts">
            {elements && elements.map((item) => (
              <div key={item.id}>
                <Panel type="medium" className={styles.cart}>
                  <Typography component="h2" type="headlines" variant="small">
                    {item.title}
                  </Typography>
                  <Typography style={{ maxWidth: '300px' }} component="p" type="body" variant="mega" color="black">
                    {item.description}
                  </Typography>
                </Panel>
              </div>
            ))}
          </Slider>
        )}
      </Container>
    </section>
  );
};
