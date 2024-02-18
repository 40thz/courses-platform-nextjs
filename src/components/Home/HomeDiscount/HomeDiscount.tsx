import styles from './styles.module.scss';
import { Cart } from '@ui/Cart';
import { Container } from '@ui/Container/Container';
import { useMediaQuery } from '@src/hook/useMediaQuery';
import { useEffect, useState } from 'react';
import { Title } from '@ui/Title';
import { Discount } from '@src/types';

export const HomeDiscount = ({ data }: { data: Discount[] }) => {
  if (data && !data.length) {
    return;
  }

  const [spaced, setSpaced] = useState(true);
  const tablet = useMediaQuery(1200);
  const mobile = useMediaQuery(600);

  useEffect(() => {
    if (!mobile && !tablet) {
      setSpaced(true);
      return;
    }

    if (mobile && tablet) {
      setSpaced(true);
      return;
    }

    if (tablet) {
      setSpaced(false);
      return;
    }
  }, [mobile, tablet]);

  return (
    <section>
      <Container>
        <Title>Акции</Title>
      </Container>
      <Container padding={spaced}>
        <div style={{ overflow: 'auto' }}>
          <div className={styles.discount}>
            {data && data.map((item, i) => (
              <Cart
                className={styles.cart}
                key={i}
                opened={true}
                image={item.image.data.attributes.url}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
