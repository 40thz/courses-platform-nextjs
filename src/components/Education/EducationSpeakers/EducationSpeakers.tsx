import { Container } from '@ui/Container';
import styles from './styles.module.scss';
import { Title } from '@ui/Title';
import { Typography } from '@ui/Typography';
import { NumberCart } from '@ui/NumberCart';
import { DirectionMoreDTO } from '@src/services/directions.service/types';

export const EducationSpeakers = ({ data, description }: { data: DirectionMoreDTO['attributes']['spakerlist'], description: string }) => {
  if (data.length === 0) {
    return;
  }
  
  return (
    <section>
      <Container>
        <Title>Спикеры</Title>
        <div className={styles.speakers}>
          <Typography className={styles.speakers_title} component="div" type="body" variant="mega" color="black" dangerouslySetInnerHTML={{__html: description}} />

          <div className={styles.speakers_panel}>
            {data.map((cart) => (
              <NumberCart key={cart.id} count={cart.title} name={cart.description}/>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
