import { Container } from '@ui/Container/Container';
import { Button } from '@ui/Button';
import { homeabout } from '@constants/home/homeabout';
import { useMediaQuery } from '@src/hook/useMediaQuery';
import Link from 'next/link';
import { menu } from '@constants/menu';
import styles from './styles.module.scss';
import { Title } from '@ui/Title';
import { NumberCart } from '@ui/NumberCart/NumberCart';

export const AboutList = () => {
  const mobile = useMediaQuery(600);

  return (
    <section className={styles.about_list}>
      <Container padding={true}>
        <Title>Об академии</Title>
      </Container>
      <Container padding={!mobile}>
        <div className={styles.about_list_items}>
          {homeabout.map((cart) => (
            <NumberCart key={cart.name} count={cart.count} name={cart.name}/>
          ))}
        </div>
      </Container>
      <Container padding={true}>
        <Link href={menu[1].href}>
          <Button>Подробнее</Button>
        </Link>
      </Container>
    </section>
  );
};
