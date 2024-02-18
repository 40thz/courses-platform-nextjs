import { LineLayer } from '@components/shared/Layers/LineLayer';
import styles from './styles.module.scss';
import { Container } from '@ui/Container';
import { Title } from '@ui/Title';
import { ConsultingCart } from '../ui/ConsultingCart';
import icon from '@assets/img/consulting/advantages/icon.png';
import icon1 from '@assets/img/consulting/advantages/icon2.png';


export const ConsultingAdvantages = () => {
  return (
    <section>
      <Container>
        <Title>Пройдём все аудиты с Вами!</Title>
        <LineLayer className={styles.service}>
          <ConsultingCart icon={icon} text="Помощь в прохождении аудитов всех уровней и сопровождение на всех этапах" />
          <ConsultingCart
            icon={icon1}
            text="Подготовка предприятия к прохождению процедуры сертификации на соответствие требованиям стандартов и сопровождение на всех этапах"
          />
        </LineLayer>
      </Container>
    </section>
  );
};
