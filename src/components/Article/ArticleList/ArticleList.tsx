import { Container } from '@ui/Container';
import styles from './styles.module.scss';
import { Typography } from '@ui/Typography';
import { EventCart } from '@ui/EventCart';
import { ArticleDTO } from '@src/services/article.service/types';
import { useState } from 'react';
import { useMediaQuery } from '@src/hook/useMediaQuery';

export const ArticleList = ({ data }: { data: ArticleDTO[] }) => {
  const mobile = useMediaQuery(600);
  const [type, setType] = useState('Будущая');
  return (
    <div className={styles.articleList}>
      <Container padding={!mobile}>
        <div className={styles.articleList_menu}>
          <Typography
            component="p"
            type="headlines"
            variant="big"
            color={type === 'Будущая' ? '' : 'gray'}
            onClick={() => setType('Будущая')}
          >
            Предстоящие события
          </Typography>
          <Typography
            component="p"
            type="headlines"
            variant="big"
            color={type === 'Прошедшая' ? '' : 'gray'}
            onClick={() => setType('Прошедшая')}
          >
            Прошедшие события
          </Typography>
        </div>
      </Container>
      <Container padding={!mobile}>
        <div className={styles.articleList_content}>
          {data
            .filter((item) => item.attributes.type === type)
            .map((item) => (
              <EventCart
                key={item.id}
                title={item.attributes.title}
                image={item.attributes.previewImage.data.attributes.url}
                description={item.attributes.preview}
                tags={item.attributes.tags}
                slug={item.attributes.slug}
                publishedAt={item.attributes.publishedAt}
              />
            ))}
        </div>
      </Container>
    </div>
  );
};
