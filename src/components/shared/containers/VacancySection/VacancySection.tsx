import styles from './styles.module.scss';
import { Typography } from '@ui/Typography';
import { Cart } from '@ui/Cart';
import cartImg from '@assets/img/home/homeEducation/cart.jpg';
import { FactPanel } from '../FactPanel';
import { useMediaQuery } from '@src/hook/useMediaQuery';
import { Container } from '@ui/Container/Container';
import { ToolbarButton } from '../CategorySection/ui/ToolbarButton';
import { VacancyDTO } from '@src/services/vacancy.service/types';
import { useRouter } from 'next/router';

type Props = {
  toolbar: VacancyDTO[];
  body: VacancyDTO[];
};

export const VacancySection = ({ toolbar, body }: Props) => {
  const { query } = useRouter();
  const mobile = useMediaQuery(600);
  const tablet = useMediaQuery(1200);

  return (
    <div className={styles.categorySection}>
      <Container>
        <div className={styles.categorySection_header}>
          <Typography component="h1" type="headlines" variant="big">
            Вакансии
          </Typography>
        </div>
      </Container>

      <Container padding={!tablet}>
        <div style={{ overflow: tablet ? 'auto' : 'hidden' }}>
          <div className={styles.categorySection_toolbar}>
            <ToolbarButton active={query.slug ? false : true} href="/jobs" title="Все вакансии" />
            {toolbar && toolbar.map((item) => (
              <ToolbarButton
                active={query.slug === item.attributes.slug}
                key={item.id}
                href={`/jobs/${item.attributes.slug}`}
                title={item.attributes.title}
              />
            ))}
          </div>
        </div>
      </Container>

      <Container>
        {body && body.length ? (
          <div className={styles.categorySection_catalog}>
            {body.map((cart) => {
              const image = cart?.attributes?.image?.data?.attributes?.url
              return <Cart key={cart.id} image={image ? image : cartImg} title={cart.attributes.title} modal={cart} />;
            })}
            {!mobile && (
              <div>
                <FactPanel />
              </div>
            )}
          </div>
        ) : (
          <Typography component="p" type="body" variant="mega">
            Нет активных вакансий
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
