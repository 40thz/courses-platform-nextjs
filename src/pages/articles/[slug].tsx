import { FutureArticle } from '@components/Article/FutureArticle';
import { PastArticle } from '@components/Article/PastArticle';
import Layout from '@components/Layout';
import { articleService } from '@src/services/article.service/article.service';
import { ArticleDTO } from '@src/services/article.service/types';
import { clearHTMLTags } from '@utils/clearHTMLTags';
import { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const data = await articleService.getArticleSlug(query.slug as string);
  const articles = await articleService.getArticles();

  if (!data) {
    return {
      notFound: true,
    };
  }

  if (data.length === 0) {
    return {
      notFound: true,
    };
  }

  return { props: { data, articles } };
};

const ArticleSlug = ({ data, articles }: { data: ArticleDTO[]; articles: ArticleDTO[] }) => {
  const article = data[0];
  const metaDesc = clearHTMLTags(article.attributes.description)
  
  return (
    <Layout title={article.attributes.title} description={metaDesc}>
      {article.attributes.type === 'Будущая' && <FutureArticle article={article} articles={articles} />}
      {article.attributes.type === 'Прошедшая' && <PastArticle article={article} articles={articles} />}
    </Layout>
  );
};

export default ArticleSlug;
