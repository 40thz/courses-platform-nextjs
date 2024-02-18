import styles from './styles.module.scss';
import { Container } from '@ui/Container';
import imagefrom from '@assets/img/consulting/about/bg.jpg';
import { Title } from '@ui/Title';
import Image from 'next/image';
import { Typography } from '@ui/Typography';
import { LineLayer } from '@components/shared/Layers/LineLayer';
import { whyCarts } from '@constants/consulting/whyCarts';

export const ConsultingWhy = () => {
  return (
    <section>
      <Container>
        <Title>Почему к нам обращаются за помощью?</Title>

        <div className={styles.why}>
          <div className={styles.left}>
            <div className={styles.why_image}>
              <Image src={imagefrom} alt="Почему к нам обращаются за помощью?" />
            </div>
            <Typography component="h1" type="headlines" variant="small" color="black">
              АБК «Прагмат» гарантирует уверенность в нашей способности разрабатывать продукт, который соответствует
              потребностям и ожиданиям Заказчика
            </Typography>
          </div>
          <div className={styles.right}>
            <LineLayer className={styles.why_carts}>
              {whyCarts.map((item) => (
                <div key={item.count} className={styles.why_cart}>
                  <Typography component="h1" type="headlines" variant="mega" color='gradient'>
                    {item.count}
                  </Typography>
                  <Typography component="p" type="body" variant="mega" color='black'>
                    {item.text}
                  </Typography>
                </div>
              ))}
            </LineLayer>
          </div>
        </div>
      </Container>
    </section>
  );
};
