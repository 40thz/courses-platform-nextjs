import Layout from '@components/Layout';
import { AboutIntro } from '@components/About/AboutIntro';
import { AboutList } from '@components/shared/containers/AboutList';
import { AboutHistory } from '@components/About/AboutHistory';
import { Container } from '@ui/Container';
import { FactPanel } from '@components/shared/containers/FactPanel';
import { EducationList } from '@components/shared/containers/EducationList';
import { pageService } from '@src/services/page.service/page.service';
import { GetServerSideProps } from 'next';
import { AboutPageDTO } from '@src/services/page.service/types';
import { TeamList } from '@components/shared/TeamList';

export const getServerSideProps: GetServerSideProps = async () => {
  const data = await pageService.getAboutPage();

  return { props: { data: data || null } };
};

const About = ({ data }: { data: AboutPageDTO }) => (
  <Layout title="Об академии">
    <AboutIntro header={data?.attributes?.header} />
    <AboutList />
    <AboutHistory />
    <Container>
      <FactPanel />
    </Container>
    <TeamList data={data?.attributes.teams.data} />
    <EducationList data={data?.attributes.directions.data} />
  </Layout>
);

export default About;
