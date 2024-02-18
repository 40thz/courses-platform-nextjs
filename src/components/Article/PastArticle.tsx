import { TeamList } from '@components/shared/TeamList';
import { ArticleIntro } from './ArticleIntro';
import { ArticleFeedBack } from './ArticleFeedBack';
import { Container } from '@ui/Container';
import { FactPanel } from '@components/shared/containers/FactPanel';
import { ArticleList } from './ArticleList';
import { ArticleDTO } from '@src/services/article.service/types';
import { EventFeedBackForm } from './EventFeedBackForm';
import { useMediaQuery } from '@src/hook/useMediaQuery';

export const PastArticle = ({ article, articles }: { article: ArticleDTO; articles: ArticleDTO[] }) => {
  const mobile = useMediaQuery(600)
  return (
    <>
      <ArticleIntro
        title={article.attributes.title}
        description={article.attributes.description}
        images={article.attributes.images}
        btn={{
          name: 'Оставить отзыв',
          href: '#form_event',
        }}
      />
      {article.attributes.teams.data && <TeamList data={article.attributes.teams.data} />}
      {article.attributes.reviews.data &&  <ArticleFeedBack data={article.attributes.reviews.data} />}
     
      <EventFeedBackForm />
      <Container padding={!mobile}>
        <FactPanel />
      </Container>
      <ArticleList data={articles} />
    </>
  )
};
