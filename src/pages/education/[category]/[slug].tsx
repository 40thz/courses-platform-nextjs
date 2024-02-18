import dynamic from 'next/dynamic';
import Layout from '@components/Layout';

const Breadcrumbs = dynamic(() => import('@components/shared/Breadcrumbs/Breadcrumbs'), {
  ssr: false,
});

const Intro = dynamic(() => import('@components/shared/containers/Intro').then((module) => module.Intro));

const EducationAbout = dynamic(() =>
  import('@components/Education/EducationAbout').then((module) => module.EducationAbout),
);

const EducationAdvanages = dynamic(() =>
  import('@components/Education/EducationAdvanages').then((module) => module.EducationAdvanages),
);

const EducationConsultation = dynamic(() =>
  import('@components/Education/EducationConsultation').then((module) => module.EducationConsultation),
);

const EducationFormats = dynamic(() =>
  import('@components/Education/EducationFormats').then((module) => module.EducationFormats),
);

const EducationProgram = dynamic(() =>
  import('@components/Education/EducationProgram').then((module) => module.EducationProgram),
);

const EducationSpeakers = dynamic(() =>
  import('@components/Education/EducationSpeakers').then((module) => module.EducationSpeakers),
);

const EducationList = dynamic(() =>
  import('@components/shared/containers/EducationList').then((module) => module.EducationList),
);

const FactPanel = dynamic(() => import('@components/shared/containers/FactPanel').then((module) => module.FactPanel));

const InfinityLine = dynamic(() =>
  import('@components/shared/containers/InfinityLine').then((module) => module.InfinityLine),
);

import { useMediaQuery } from '@src/hook/useMediaQuery';
import { Container } from '@ui/Container';
import IntroImage from '@assets/img/education/bg.png';
import { GetServerSideProps } from 'next';
import { directionService } from '@src/services/directions.service/directions.service';
import { DirectionMoreDTO } from '@src/services/directions.service/types';
import { clearHTMLTags } from '@utils/clearHTMLTags';

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const slug = query.slug;
  const data = await directionService.getByDirectionSlug(slug as string);

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

  return { props: { data } };
};

const EducationSlug = ({ data }: { data: DirectionMoreDTO[] }) => {
  const mobile = useMediaQuery(600);
  const page = data[0].attributes;
  const image = page.moreImage?.data?.attributes.url;
  const metaDesc = clearHTMLTags(page.description);
  const breadcrumbs = [
    { name: 'Направления обучения', href: '/education' },
    { name: page.title, href: `#` },
  ];

  return (
    <Layout title={page.title} description={metaDesc}>
      <Intro
        image={image ? image : IntroImage}
        title={page.title}
        subTitle={page.subtitle}
        description={page.description}
        btn={{
          value: 'Записаться',
          href: '#form_consulting',
        }}
      >
        <Breadcrumbs items={breadcrumbs} />
      </Intro>
      <InfinityLine list={page.infinityline} speed={page.infinityline.length / 0.2} />
      <EducationAbout data={page.cartlist} />
      <EducationSpeakers data={page.spakerlist} description={page.speakerdesc} />
      <EducationAdvanages />
      <Container padding={!mobile}>
        <FactPanel />
      </Container>
      <EducationProgram data={page.programs} />
      <EducationFormats data={page.formats} />
      <EducationConsultation data={page.form} />
      <EducationList data={page.educations.data} />
    </Layout>
  );
};

export default EducationSlug;
