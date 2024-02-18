import styles from './styles.module.scss';
import { Container } from '@ui/Container';
import { Title } from '@ui/Title';
import { FormatCart } from '../../shared/ui/FormatCart/FormatCart';
import { DirectionMoreDTO } from '@src/services/directions.service/types';

export const EducationFormats = ({ data }: { data: DirectionMoreDTO['attributes']['formats'] }) => {
  if (data.length === 0) {
    return;
  }
  
  return (
    <section>
      <Container>
        <Title>Как проходит обучение</Title>
        <div className={styles.formats}>
          {data.map((item) => (
            <FormatCart titleSize="medium" key={item.id} title={item.title} description={item.description} />
          ))}
        </div>
      </Container>
    </section>
  );
};
