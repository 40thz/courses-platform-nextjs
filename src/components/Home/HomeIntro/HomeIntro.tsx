import styles from './styles.module.scss';
import { Container } from '@ui/Container/Container';
import { Button } from '@ui/Button';
import { Typography } from '@ui/Typography';
import IntroImage from '@assets/img/home/intro.png';
import { IntroLayer } from '@components/shared/Layers/IntroLayer';
import { Logo } from '@components/shared/Icons/Logo';
import { useMediaQuery } from '@src/hook/useMediaQuery';
import Link from 'next/link';
import { menu } from '@constants/menu';
import { HeaderSection } from '@src/types';

export const HomeIntro = ({ header }: { header: HeaderSection }) => {
  const mobile = useMediaQuery(600);
  
  if(!header) return

  return (
    <Container padding={!mobile}>
      <IntroLayer
        src={header?.image.data?.attributes.url ? header.image.data.attributes.url : IntroImage}
        alt="Начало пути к большим целям"
      >
        <div className={styles.home__intro}>
          {!mobile && (
            <div className={styles.logo}>
              <Logo />
            </div>
          )}

          <div>
            <Typography className={styles.title} component="div" type="headlines" variant="medium" color="black">
              {header?.title}
            </Typography>
            
            <Typography
              component="div"
              type="body"
              variant="mega"
              color="black"
              dangerouslySetInnerHTML={{ __html: header?.description }}
            />
          </div>
          <div>
            <Link href={menu[2].href}>
              <Button>К обучению</Button>
            </Link>
          </div>
        </div>
        {mobile && (
          <div className={styles.logo}>
            <Logo />
          </div>
        )}
      </IntroLayer>
    </Container>
  );
};
