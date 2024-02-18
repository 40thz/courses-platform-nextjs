import { ContactFeedback } from '@components/Contacts/ContactFeedback';
import { ContactIntro } from '@components/Contacts/ContactIntro';
import Layout from '@components/Layout';
import { FactPanel } from '@components/shared/containers/FactPanel';
import { useMediaQuery } from '@src/hook/useMediaQuery';
import { pageService } from '@src/services/page.service/page.service';
import { ContactPageDTO } from '@src/services/page.service/types';
import { Container } from '@ui/Container';
import { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps = async () => {
  const data = await pageService.getContactPage() || null;

  return { props: { data } };
};

const About = ({ data }: { data: ContactPageDTO }) => {
  const mobile = useMediaQuery(600);

  return (
    <Layout title="Контакты">
      <ContactIntro />
      <ContactFeedback list={data?.attributes.teams.data} />
      <Container padding={!mobile}>
        <FactPanel />
      </Container>
    </Layout>
  );
};

export default About;
