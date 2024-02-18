import { IntroLayer } from '@components/shared/Layers/IntroLayer';
import IntroImage from '@assets/img/about/bg.png';
import Breadcrumbs from '@components/shared/Breadcrumbs/Breadcrumbs';
import { Container } from '@ui/Container';
import { Title } from '@ui/Title';
import styles from './styles.module.scss';
import { Typography } from '@ui/Typography';
import { Checkbox } from '@components/shared/Icons/Checkbox';
import { Button } from '@ui/Button';
import Link from 'next/link';
import { menu } from '@constants/menu';
import { HeaderSection } from '@src/types';

const breadcrumbs = [{ name: 'Об акадаемии', href: '/about' }];

export const AboutIntro = ({ header }: { header: HeaderSection }) => (
  <Container>
    <IntroLayer
      className={styles.intro}
      src={header?.image?.data?.attributes?.url ? header.image.data.attributes.url : IntroImage}
      alt="Об академии"
    >
      <div>
        <div>
          <Breadcrumbs items={breadcrumbs} />
          <Title className={styles.about_title}>{header?.title}</Title>
        </div>

        <div className={styles.about}>
          <Typography
            component="div"
            type="body"
            variant="mega"
            color="black"
            dangerouslySetInnerHTML={{ __html: header?.description }}
          />

          {header?.list?.map((item) => (
            <div key={item.id} className={styles.about_item}>
              <Checkbox />
              <Typography
                component="div"
                type="body"
                variant="mega"
                color="black"
                dangerouslySetInnerHTML={{ __html: item.title }}
              />
            </div>
          ))}

          <div className={styles.btn}>
            <Link href={menu[2].href}>
              <Button>К обучению</Button>
            </Link>
          </div>
        </div>
      </div>
    </IntroLayer>
  </Container>
);
