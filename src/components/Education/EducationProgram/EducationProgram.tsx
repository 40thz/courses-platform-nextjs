import styles from './styles.module.scss';
import { Container } from '@ui/Container';
import { Title } from '@ui/Title';
import { ProgramCart } from '../ui/ProgramCart';
import { Button } from '@ui/Button';
import { Typography } from '@ui/Typography';
import { DirectionMoreDTO } from '@src/services/directions.service/types';
import { useState } from 'react';

export const EducationProgram = ({ data }: { data: DirectionMoreDTO['attributes']['programs'] }) => {
  if (data.length === 0) {
    return;
  }
  
  const [limit, setLimit] = useState(6);

  const loaadMore = () => {
    if (limit >= data.length) {
      return;
    }

    setLimit((prev) => prev + 6);
  };



  return (
    <section>
      <Container>
        <Title>Программы обучения</Title>
        <div className={styles.program}>
          {data.map((item, i) => {
            const index = i + 1;
            if (index > limit) return;
            return <ProgramCart key={item.id} item={item} />;
          })}
        </div>
        {limit <= data.length && (
          <div className={styles.program_footer}>
            <Typography component="p" type="body" variant="mega" color="black">
              {limit} из {data.length}
            </Typography>
            <Button onClick={loaadMore} variant="gradient">
              Показать ещё
            </Button>
          </div>
        )}
      </Container>
    </section>
  );
};
