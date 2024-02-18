import styles from './styles.module.scss';
import { Container } from '@ui/Container/Container';
import img from '@assets/img/home/partner.png';
import { Image } from '@ui/Image';
import { useMediaQuery } from '@src/hook/useMediaQuery';
import { Title } from '@ui/Title';
import { Partner } from '@src/types';

export const HomePartners = ({ data }: { data: Partner[] }) => {
  if (data && data.length === 0) {
    return;
  }
  
  const mobile = useMediaQuery(600);

  return (
    <section>
      <Container>
        <Title>Наши партнеры</Title>
      </Container>
      <Container padding={!mobile}>
        <div className={styles.partners}>
          {data && data.map((partner) => {
            const image = partner?.image?.data?.attributes.url;
            return (
              <a key={partner.id} href={partner.url} target="__blank" className={styles.partner}>
                <Image src={image ? image : img} alt="Партнер" width={190} height={190} />
              </a>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
