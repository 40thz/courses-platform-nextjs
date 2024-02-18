import styles from './styles.module.scss';
import { Typography } from '@ui/Typography';
import { Search } from './ui/Search';
import { Cart } from '@ui/Cart';
import cartImg from '@assets/img/home/homeEducation/cart.jpg';
import { FactPanel } from '../FactPanel';
import { useMediaQuery } from '@src/hook/useMediaQuery';
import { Container } from '@ui/Container/Container';
import Link from 'next/link';
import { DirectionDTO } from '@src/services/directions.service/types';

type Props = {
  children: React.ReactNode;
  body: DirectionDTO[];
  searchable: boolean;
};

export const CategorySection = ({ children, body, searchable }: Props) => {
  const mobile = useMediaQuery(600);
  const tablet = useMediaQuery(1200);

  return (
    <div className={styles.categorySection}>
      <Container>
        <div className={styles.categorySection_header}>
          <Typography component="h1" type="headlines" variant="big">
            Направления обучения
          </Typography>
          {searchable && <Search />}
        </div>
      </Container>

      <Container padding={!tablet}>
        <div style={{ overflow: tablet ? 'auto' : 'hidden' }}>
          <div className={styles.categorySection_toolbar}>{children}</div>
        </div>
      </Container>

      <Container>
        {body && body.length ? (
          <div className={styles.categorySection_catalog}>
            {body.map((cart) => {
              const image = cart.attributes.image.data.attributes.url;
              return (
                <Link
                  href={`/education/${cart.attributes.category.data.attributes.slug || ''}/${cart.attributes.slug}`}
                >
                  <Cart image={image ? image : cartImg} title={cart.attributes.title} />
                </Link>
              );
            })}
            {!mobile && (
              <div style={{ display: 'block', maxWidth: '70%' }}>
                <FactPanel />
              </div>
            )}
          </div>
        ) : (
          <Typography component="p" type="body" variant="mega">
            По данному направлению нет данных
          </Typography>
        )}
      </Container>

      {mobile && (
        <Container padding={false}>
          <FactPanel />
        </Container>
      )}
    </div>
  );
};
