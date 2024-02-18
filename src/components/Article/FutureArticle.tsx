import { TeamList } from '@components/shared/TeamList';
import { ArticleIntro } from './ArticleIntro';
import { ArticleFeedBack } from './ArticleFeedBack';
import { FeedBack } from '@components/shared/containers/FeedBack';
import { form_3 } from '@constants/formTemplates/form_3';
import { Container } from '@ui/Container';
import { FactPanel } from '@components/shared/containers/FactPanel';
import { ArticleList } from './ArticleList';
import { ArticleDTO } from '@src/services/article.service/types';
import { useMediaQuery } from '@src/hook/useMediaQuery';

export const FutureArticle = ({ article, articles }: { article: ArticleDTO; articles: ArticleDTO[] }) => {
  const mobile = useMediaQuery(600);
  return (
    <>
      <ArticleIntro
        title={article.attributes.title}
        description={article.attributes.description}
        images={article.attributes.images}
        btn={{
          name: 'Записаться',
          href: '#form_feedback',
        }}
      />
      {article.attributes.teams.data && <TeamList data={article.attributes.teams.data} />}
      <FeedBack
        title="Записаться на событие"
        descirptionTop="Забронируйте место, оставив свои контактные данные, мы свяжемся с вами в ближайшее время."
        formTemplate={form_3}
      />
      <Container padding={!mobile}>
        <FactPanel />
      </Container>
      <ArticleList data={articles} />
    </>
  );
};
