import styles from './styles.module.scss';
import { Container } from '@ui/Container';
import { Title } from '@ui/Title';
import { ServiceCart } from '../ui/ServiceCart/ServiceCart';
import { serviceData } from '@constants/consulting/serviceData';

export const ConsultingServices = () => {
  return (
    <section>
      <Container>
        <Title>Услуги</Title>
        <div className={styles.service}>
          {serviceData.map((item) => (
            <ServiceCart {...item} />
          ))}
        </div>
      </Container>
    </section>
  );
};
