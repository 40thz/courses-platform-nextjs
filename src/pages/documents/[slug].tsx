import Layout from '@components/Layout';
import { metaDesc } from '@constants/contacts';
import { documentService } from '@src/services/document.service/document.service';
import { DocumentDTO } from '@src/services/document.service/types';

import { Container } from '@ui/Container';
import { Title } from '@ui/Title';
import { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const data = await documentService.getDocumentBySlug(query.slug as string) || null;
  const sidebar = await documentService.getDocumentSidebar() || null;

  return { props: { data, sidebar } };
};

const DocumentSlug = ({ data, sidebar }: { data: DocumentDTO[]; sidebar: DocumentDTO[] }) => {
  if (!data) return

  return (
    <Layout title={data[0].attributes.title} description={metaDesc}>
      <Container>
        <Title>Сведения об образовательной организации</Title>
      </Container>
    </Layout>
  )
};

export default DocumentSlug;
