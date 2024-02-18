import styles from './styles.module.scss';
import { Container } from '@ui/Container';
import { Title } from '@ui/Title';
import image from '@assets/img/consulting/speakers/bg.jpg';
import { LineLayer } from '@components/shared/Layers/LineLayer';
import { ConsultingCart } from '../ui/ConsultingCart';
import Image from 'next/image';

// const settings = {
//   dots: false,
//   infinite: false,
//   arrows: false,
//   fade: false,
//   speed: 500,
//   slidesToShow: 4,
//   slidesToScroll: 2,
// };

export const ConsultingSpeakers = () => (
  <section>
    <Container>
      <Title>Эксперты</Title>
      <LineLayer className={styles.speakers}>
        <div className={styles.image}>
          <Image src={image} alt="" />
        </div>
        <div className={styles.side}>
          <ConsultingCart text="Действующие ведущие аудиторы со средним стажем работы свыше 15 лет, выступающие от имени международных и российских аккредитованных органов сертификации" />
          <ConsultingCart text="Действующие бизнес-консультанты, успешно внедряющие интегрированные системы менеджмента на протяжении 20 лет" />
        </div>
      </LineLayer>
    </Container>
  </section>
);
