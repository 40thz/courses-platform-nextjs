
import Layout from '@components/Layout';
import { InfinityLine } from '@components/shared/containers/InfinityLine';
import { VacancySection } from '@components/shared/containers/VacancySection';
import { pageService } from '@src/services/page.service/page.service';
import { VacancyPageDTO } from '@src/services/page.service/types';

import { vacancyService } from '@src/services/vacancy.service/vacancy.service';
import { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const toolbar = await vacancyService.getToolbar();
  const data = await vacancyService.getBySlug(query.slug as string);
  const list = await pageService.getVacancyPage();

  return { props: { data, toolbar, list } };
};

const JobSlug = ({ data, toolbar, list }: { data: any; toolbar: any[]; list: VacancyPageDTO }) => {

  return (
    <Layout title="Вакансии">
    
      <InfinityLine list={list.attributes.list} speed={100} />
      <VacancySection toolbar={toolbar} body={data} />
    </Layout>
  );
};

export default JobSlug;
