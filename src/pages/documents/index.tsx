import Layout from '@components/Layout';
import { Container } from '@ui/Container';
import { Title } from '@ui/Title';
import { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: '/documents/osnovnye-svedenya',
      permanent: false,
    },
  };
};

const Documents = () => (
  <Layout title="Документы">
    <Container>
      <Title>Сведения об образовательной организации</Title>
    </Container>
  </Layout>
);

export default Documents;
