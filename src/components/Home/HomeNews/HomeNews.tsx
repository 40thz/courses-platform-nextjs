import styles from './styles.module.scss';
import { Container } from '@ui/Container/Container';
import { EventCart } from '@ui/EventCart';
import { Title } from '@ui/Title';
import { ArticleDTO } from '@src/services/article.service/types';

export const HomeNews = ({ data }: { data: ArticleDTO[] }) => {
  if (data && data.length === 0) {
    return;
  }
  return (
    <section>
      <Container>
        <Title>Новости и анонсы</Title>
        <div className={styles.news}>
          {data && data.map((article, i) => {
            if (i >= 2) {
              return;
            }
            return (
              <EventCart
                key={article.id}
                title={article.attributes.title}
                image={article.attributes.previewImage.data.attributes.url}
                description={article.attributes.preview}
                tags={article.attributes.tags}
                slug={article.attributes.slug}
                publishedAt={article.attributes.publishedAt}
              />
            );
          })}
        </div>
      </Container>
    </section>
  );
};
