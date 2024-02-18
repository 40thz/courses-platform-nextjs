import styles from './styles.module.scss';
import { Container } from '@ui/Container';
import { Title } from '@ui/Title';
import { FormatCart } from '@ui/FormatCart/FormatCart';
import { moreService } from '@constants/consulting/moreService';

export const ConsultingMoreServices = () => {
  return (
    <section>
      <Container>
        <Title>Дополнительные услуги</Title>

        <div className={styles.service}>
          {moreService.map((item, i) => (
            <FormatCart titleSize='small' showBg={i === 0 ? false : true} item={item}/>
          ))}
        </div>
      </Container>
    </section>
  );
};
