import dynamic from 'next/dynamic';
import Layout from '@components/Layout';
import { Container } from '@ui/Container/Container';
import { form_1 } from '@constants/formTemplates/form_1';
import { GetServerSideProps } from 'next';
import { pageService } from '@src/services/page.service/page.service';
import { HomePageDTO } from '@src/services/page.service/types';
import { articleService } from '@src/services/article.service/article.service';
import { ArticleDTO } from '@src/services/article.service/types';
import { form_4 } from '@constants/formTemplates/form_4';
import { metaDesc } from '@constants/contacts';

const AboutList = dynamic(() => import('@components/shared/containers/AboutList').then((module) => module.AboutList));
const HomeAdvantages = dynamic(() => import('@components/Home/HomeAdvantages').then((module) => module.HomeAdvantages));
const HomeDiscount = dynamic(() => import('@components/Home/HomeDiscount').then((module) => module.HomeDiscount));
const EducationList = dynamic(() =>
  import('@components/shared/containers/EducationList').then((module) => module.EducationList),
);
const HomeIntro = dynamic(() => import('@components/Home/HomeIntro').then((module) => module.HomeIntro));
const HomeNews = dynamic(() => import('@components/Home/HomeNews').then((module) => module.HomeNews));
const HomePartners = dynamic(() => import('@components/Home/HomePartners').then((module) => module.HomePartners));
const FactPanel = dynamic(() => import('@components/shared/containers/FactPanel').then((module) => module.FactPanel));
const FeedBack = dynamic(() => import('@components/shared/containers/FeedBack').then((module) => module.FeedBack));
const SecondFeedback = dynamic(() =>
  import('@components/shared/containers/SecondFeedback').then((module) => module.SecondFeedback),
);

export const getServerSideProps: GetServerSideProps = async () => {
  const data = await pageService.getHomePage();
  const articles = await articleService.getArticles();

  return { props: { data: data || null, articles: articles || null } };
};

const Home = ({ data, articles }: { data: HomePageDTO; articles: ArticleDTO[] }) => (
  <Layout title="Главная страница" description={metaDesc}>
    <HomeIntro header={data?.attributes.header}/>
    <AboutList />
    <Container>
      <FactPanel />
    </Container>
    <HomeAdvantages />
    <SecondFeedback
      title="Типографика"
      description={`Типографика`}
      formTemplate={form_1}
    />
    <EducationList data={data?.attributes.directions.data} />
    <HomeDiscount data={data?.attributes.discount} />
    <FeedBack
      title="Типографика"
      descirptionTop="Типографика"
      descirptionBottom="Типографика"
      formTemplate={form_4}
    />
    <HomeNews data={articles} />
    <HomePartners data={data?.attributes.partners} />
  </Layout>
);

export default Home;
