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

import { Container } from '@ui/Container';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { ToolbarButton } from '@components/shared/containers/CategorySection/ui/ToolbarButton';

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const slug = query.category;

  const categoris = await categoryService.getAll();
  const directions = await directionService.getBySlug(slug as string);

  return { props: { categoris, directions } };
};

type Props = {
  categoris: CategoryDTO[];
  directions: DirectionDTO[];
};

const EducationCategory = ({ categoris, directions }: Props) => {
  const { query } = useRouter();

  const currentCrumbs = categoris.find((item) => item.attributes.slug === query.category);

  const breadcrumbs = [
    { name: 'Направления обучения', href: '/education' },
    { name: currentCrumbs?.attributes.title as string, href: '#' },
  ];

  return (
    <Layout title="Направления обучения">
      <div>
        <Container>
          <Breadcrumbs items={breadcrumbs} />
        </Container>
        <CategorySection body={directions} searchable={true}>
          <>
            <ToolbarButton href="/education" title="Все направления" />
            {categoris.map((category) => (
              <ToolbarButton active={query.category === category.attributes.slug} href={`/education/${category.attributes.slug}`} title={category.attributes.title} />
            ))}
          </>
        </CategorySection>
      </div>
      <EducationQuestion />
    </Layout>
  );
};

export default EducationCategory;
