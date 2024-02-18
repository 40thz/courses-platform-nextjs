import dynamic from 'next/dynamic';
import Layout from '@components/Layout';

const Breadcrumbs = dynamic(() => import('@components/shared/Breadcrumbs/Breadcrumbs'), {
  ssr: false,
});

const EducationQuestion = dynamic(() =>
  import('@components/Education/EducationQuestion').then((module) => module.EducationQuestion),
);

const CategorySection = dynamic(() =>
  import('@components/shared/containers/CategorySection').then((module) => module.CategorySection),
);

import { categoryService } from '@src/services/category.service/category.service';
import { CategoryDTO } from '@src/services/category.service/types';
import { directionService } from '@src/services/directions.service/directions.service';
import { DirectionDTO } from '@src/services/directions.service/types';

import { Container } from '@ui/Container/Container';
import { GetServerSideProps } from 'next';
import { ToolbarButton } from '@components/shared/containers/CategorySection/ui/ToolbarButton';

const breadcrumbs = [{ name: 'Направления обучения', href: '/education' }];

export const getServerSideProps: GetServerSideProps = async () => {
  const categoris = await categoryService.getAll();
  const directions = await directionService.getAll();

  return { props: { categoris: categoris || null, directions: directions || null } };
};

type Props = {
  categoris: CategoryDTO[];
  directions: DirectionDTO[];
};

const Education = ({ categoris, directions }: Props) => (
  <Layout title="Направления обучения">
    <div>
      <Container>
        <Breadcrumbs items={breadcrumbs} />
      </Container>
      <CategorySection body={directions} searchable={true}>
        <>
          <ToolbarButton active={true} href="/education" title="Все направления" />
          {categoris && categoris.map((category) => (
            <ToolbarButton href={`/education/${category.attributes.slug}`} title={category.attributes.title} />
          ))}
        </>
      </CategorySection>
    </div>
    <EducationQuestion />
  </Layout>
);

export default Education;
