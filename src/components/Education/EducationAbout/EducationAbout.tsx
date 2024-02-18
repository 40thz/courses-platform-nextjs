import styles from './styles.module.scss';
import { Container } from '@ui/Container';
import { Title } from '@ui/Title';
import { AboutCart } from '../ui/AboutCart';
import { CartAbout } from '@src/services/directions.service/types';

export const EducationAbout = ({ data }: { data: CartAbout[] }) => {
  if (data.length === 0) {
    return;
  }

  return (
    <section>
      <Container>
        <Title>Кому подойдет обучение</Title>

        <div className={styles.education}>
          {data.map((cart) => (
            <AboutCart key={cart.id} icon={cart?.image?.data?.attributes?.url} title={cart.title} />
          ))}
        </div>
      </Container>
    </section>
  );
};
