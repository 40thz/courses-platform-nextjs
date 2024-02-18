import styles from './styles.module.scss';
import { Panel } from '@ui/Panel';
import { StaticImageData } from 'next/image';
import { Image } from '@ui/Image';
import { Typography } from '@ui/Typography';
import { Button } from '@ui/Button';
import { useMediaQuery } from '@src/hook/useMediaQuery';
import { Tag } from '@src/services/article.service/types';
import Link from 'next/link';
import { formatDate } from '@utils/formatDate';
import { useEffect, useState } from 'react';

type CartProps = {
  image: StaticImageData | string;
  title: string;
  tags: Tag[];
  description: string;
  slug: string;
  publishedAt: string;
};

export const EventCart = ({ title, image, tags, description, slug, publishedAt }: CartProps) => {
  const [hydrated, setHydrated] = useState(false);
  const tablet = useMediaQuery(1200);
  const date = formatDate(publishedAt);

  useEffect(() => {
    setHydrated(true);
  }, []);


  return (
    <Panel className={styles.eventCart}>
      <div className={styles.eventCart_image}>
        <Image alt={title} src={image} width={400} height={230} />
      </div>

      <div className={styles.eventCart_inner}>
        <div className={styles.eventCart_title}>
          <Typography component="h1" type="headlines" variant="medium">
            {title}
          </Typography>
          {!tablet && hydrated && (
            <Typography component="h1" type="body" variant="medium" color="gray">
              {date}
            </Typography>
          )}
        </div>
        <div className={styles.eventCart_title}>
          {tablet && tags && (
            <div className={styles.eventCart_tags}>
              {tags.map((tag) => (
                <Typography
                  key={tag.id}
                  component="div"
                  type="body"
                  variant="medium"
                  color="gray"
                  dangerouslySetInnerHTML={{ __html: tag.title }}
                />
              ))}
            </div>
          )}
          {tablet && hydrated && (
            <Typography component="h1" type="body" variant="medium" color="gray">
              {date}
            </Typography>
          )}
        </div>
        <Typography className={styles.eventCart_subtitle} component="p" type="body" variant="mega" color="black">
          {description}
        </Typography>
        {!tablet && tags && (
          <div className={styles.eventCart_tags}>
            {tags.map((tag) => (
              <Typography
                key={tag.id}
                component="div"
                type="body"
                variant="medium"
                color="gray"
                dangerouslySetInnerHTML={{ __html: tag.title }}
              />
            ))}
          </div>
        )}
        <Link className={styles.eventCart_btn} href={`/articles/${slug}`}>
          <Button>Подробнее</Button>
        </Link>
      </div>
    </Panel>
  );
};
