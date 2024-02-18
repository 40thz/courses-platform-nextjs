import { Container } from '@ui/Container/Container';
import { IntroLayer } from '@components/shared/Layers/IntroLayer';
import Breadcrumbs from '@components/shared/Breadcrumbs/Breadcrumbs';
import { Slider } from './ui/Slider';
import styles from './styles.module.scss';
import { Typography } from '@ui/Typography';
import { Button } from '@ui/Button';
import { SliderImage } from '@src/services/article.service/types';
import { useMediaQuery } from '@src/hook/useMediaQuery';
import Link from 'next/link';

type Props = {
  title: string;
  description: string;
  images: SliderImage[];
  btn: {
    name: string;
    href: string;
  };
};

export const ArticleIntro = ({ title, description, images, btn }: Props) => {
  const breadcrumbs = [
    { name: 'Новости', href: '#' },
    { name: title, href: '#' },
  ];

  const mobile = useMediaQuery(600);

  return (
    <Container padding={!mobile}>
      <IntroLayer component={<Slider images={images} />}>
        <div>
          <Breadcrumbs items={breadcrumbs} />
          <div className={styles.intro}>
            <Typography component="h1" type="headlines" variant="big">
              {title}
            </Typography>
            <Typography
              component="div"
              type="body"
              variant="mega"
              color="black"
              dangerouslySetInnerHTML={{ __html: description }}
            />

            <div>
              <Link href={btn.href}>
                <Button>{btn.name}</Button>
              </Link>
            </div>
          </div>
        </div>
      </IntroLayer>
    </Container>
  );
};
