import styles from './styles.module.scss';
import { Button } from '@ui/Button';
import { Cart } from '@ui/Cart';
import { Container } from '@ui/Container/Container';
import cartImg from '@assets/img/home/homeEducation/cart.jpg';
import Link from 'next/link';
import { menu } from '@constants/menu';
import { Title } from '@ui/Title';
import { Education } from '@src/types';

export const EducationList = ({ data }: { data: Education[] }) => {
  if (data && data.length === 0) {
    return;
  }

  return (
    <section>
      <Container>
        <Title>Направления обучения</Title>

        <div className={styles.education}>
          {data &&
            data.map((item) => {
              const image = item.attributes.image?.data?.attributes.url
              return (
                <Link href={`/education/${item.attributes.category.data.attributes.slug}/${item.attributes.slug}`}>
                  <Cart
                    opened={false}
                    image={image ? image : cartImg}
                    title={item.attributes.title}
                  />
                </Link>
              );
            })}
        </div>

        <Link href={menu[2].href}>
          <Button>Все направления</Button>
        </Link>
      </Container>
    </section>
  );
};
