import styles from './styles.module.scss';
import { Container } from '@ui/Container/Container';
import { Typography } from '@ui/Typography';
import Image from 'next/image';
import lineImg from '@assets/img/home/homeAdvantages/line.svg';
import { Title } from '@ui/Title';
import { HomeAdvantagesCart } from './HomeAdvantagesCart';

export const HomeAdvantages = () => (
  <section>
    <Container>
      <Title>Преимущества нашего подхода</Title>
      <div className={styles.advantages}>
        <div className={styles.advantages_line}>
          <Image src={lineImg} alt="Преимущества нашего подхода" />
        </div>
        <div>
          <Typography component="h2" type="headlines" variant="big" color="white">
            Типографика
          </Typography>
          <div style={{ overflow: 'auto' }}>
            <div className={styles.advantages_items}>
              <HomeAdvantagesCart text="Типографика" type="small" />
              <HomeAdvantagesCart text="Типографика" type="small" />
              <HomeAdvantagesCart text="Типографика" type="small" />
              <HomeAdvantagesCart text="Типографика" type="small" />
              <HomeAdvantagesCart text="Типографика" type="small" />
              <HomeAdvantagesCart text="Типографика" type="small" />
            </div>
          </div>
        </div>

        <div className={styles.advantages_side}>
          <HomeAdvantagesCart
            text="Типографика"
            type="big"
          />
          <HomeAdvantagesCart text="Типографика" type="big" />
          <HomeAdvantagesCart
            text="Типографика"
            type="big"
          />
        </div>
      </div>
    </Container>
  </section>
);
