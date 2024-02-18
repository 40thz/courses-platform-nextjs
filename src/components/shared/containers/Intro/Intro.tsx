import styles from './styles.module.scss';
import { IntroLayer } from '@components/shared/Layers/IntroLayer';
import { useMediaQuery } from '@src/hook/useMediaQuery';
import { Container } from '@ui/Container';

import { PropsWithChildren } from 'react';
import { Typography } from '@ui/Typography';
import { Button } from '@ui/Button';
import Link from 'next/link';
import { StaticImageData } from 'next/image';

type Props = {
  title: string;
  subTitle: string;
  description: string;
  image: StaticImageData | string;
  btn: {
    value: string;
    href: string;
  };
} & PropsWithChildren;

export const Intro = ({ title, subTitle, description, children, btn, image }: Props) => {
  const mobile = useMediaQuery(600);

  return (
    <Container padding={!mobile}>
      <IntroLayer src={image} alt="Начало пути к большим целям">
        <div>
          {children}
          <div className={styles.intro}>
            <Typography component="h1" type="headlines" variant="big">
              {title}
            </Typography>
            <div className={styles.intro_inner}>
              <Typography component="h2" type="headlines" variant="medium" color="gray">
                {subTitle}
              </Typography>
              <Typography
                component="div"
                type="body"
                variant="mega"
                color="black"
                dangerouslySetInnerHTML={{
                  __html: description,
                }}
              />
            </div>
            <div>
              <Link href={btn.href}>
                <Button>{btn.value}</Button>
              </Link>
            </div>
          </div>
        </div>
      </IntroLayer>
    </Container>
  );
};
