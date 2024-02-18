import styles from './styles.module.scss';
import { Container } from '@ui/Container';
import { Title } from '@ui/Title';
import Image from 'next/image';
import bg from '@assets/img/education/advantages/bg.png';
import { Typography } from '@ui/Typography';

export const EducationAdvanages = () => {
  return (
    <section>
      <Container>
        <Title>Преимущества нашего подхода</Title>
        <div className={styles.advantages}>
          <Image src={bg} alt="Преимущества нашего подхода" />
          <div className={styles.advantages_side}>
            <div className={styles.advantages_cart}>
              <Typography component="p" type="body" variant="mega" color="black">
                Комплексный подход к решению поставленных бизнес-задач
              </Typography>
            </div>
            <div className={styles.advantages_cart}>
              <Typography component="p" type="body" variant="mega" color="black">
                Обучение по социальному контракту и налоговые вычеты
              </Typography>
            </div>
            <div className={styles.advantages_cart}>
              <Typography component="p" type="body" variant="mega" color="black">
                Исключительный опыт реализации проектов нашей команды
              </Typography>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
