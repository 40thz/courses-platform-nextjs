
import Layout from '@components/Layout';
import { InfinityLine } from '@components/shared/containers/InfinityLine';
import { pageService } from '@src/services/page.service/page.service';
import { VacancyPageDTO } from '@src/services/page.service/types';
import { VacancyDTO } from '@src/services/vacancy.service/types';
import { vacancyService } from '@src/services/vacancy.service/vacancy.service';
import { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps = async () => {
  const data = await vacancyService.getAll() || null;
  const toolbar = await vacancyService.getToolbar() || null;
  const list = await pageService.getVacancyPage() || null;

  return { props: { data, toolbar, list } };
};

const Jobs = ({ data, toolbar, list }: { toolbar: VacancyDTO[]; data: VacancyDTO[], list: VacancyPageDTO }) => {

  return (
    <Layout title="Вакансии">
      <InfinityLine list={list?.attributes.list} speed={30} />
    </Layout>
  );
};

export default Jobs;
