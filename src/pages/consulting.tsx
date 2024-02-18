import dynamic from 'next/dynamic';

import Layout from '@components/Layout';

const Breadcrumbs = dynamic(() => import('@components/shared/Breadcrumbs/Breadcrumbs'), {
  ssr: false,
});

const Intro = dynamic(() => import('@components/shared/containers/Intro').then((module) => module.Intro));

const ConsultingServices = dynamic(() =>
  import('@components/Consulting/ConsultingServices').then((module) => module.ConsultingServices),
);

const ConsultingStandarts = dynamic(() =>
  import('@components/Consulting/ConsultingStandarts').then((module) => module.ConsultingStandarts),
);

const ConsultingAdvantages = dynamic(() =>
  import('@components/Consulting/ConsultingAdvantages').then((module) => module.ConsultingAdvantages),
);

const SecondFeedback = dynamic(() =>
  import('@components/shared/containers/SecondFeedback').then((module) => module.SecondFeedback),
);

const FactPanel = dynamic(() => import('@components/shared/containers/FactPanel').then((module) => module.FactPanel));

const ConsultingQuestions = dynamic(() =>
  import('@components/Consulting/ConsultingQuestions').then((module) => module.ConsultingQuestions),
);

const ConsultingSpeakers = dynamic(() =>
  import('@components/Consulting/ConsultingSpeakers').then((module) => module.ConsultingSpeakers),
);

const ConsultingWhy = dynamic(() =>
  import('@components/Consulting/ConsultingWhy').then((module) => module.ConsultingWhy),
);

const FeedBack = dynamic(() => import('@components/shared/containers/FeedBack').then((module) => module.FeedBack));

const ConsultingMoreServices = dynamic(() =>
  import('@components/Consulting/ConsultingMoreServices').then((module) => module.ConsultingMoreServices),
);

const ConsultingSteps = dynamic(() =>
  import('@components/Consulting/ConsultingSteps').then((module) => module.ConsultingSteps),
);

import introImage from '@assets/img/consulting/bg.png';
import { form_1 } from '@constants/formTemplates/form_1';
import { Container } from '@ui/Container';
import { GetServerSideProps } from 'next';
import { pageService } from '@src/services/page.service/page.service';
import { ConsaltingDTO } from '@src/services/page.service/types';
import { form_3 } from '@constants/formTemplates/form_3';

export const getServerSideProps: GetServerSideProps = async () => {
  const consalting = await pageService.getConsaltingPage();

  return { props: { consalting: consalting || null } };
};

const breadcrumbs = [{ name: 'Консалтинг', href: '/сonsulting' }];

const Consulting = ({ consalting }: { consalting: ConsaltingDTO }) => {
  return (
    <Layout
      title={consalting?.attributes?.HeaderMeta?.title}
      description={consalting?.attributes?.HeaderMeta?.metaDescription}
    >
      {consalting?.attributes.header && (
        <Intro
          image={
            consalting?.attributes?.header?.image?.data?.attributes.url
              ? consalting.attributes.header.image.data.attributes.url
              : introImage
          }
          title={consalting?.attributes?.header?.title}
          subTitle={consalting?.attributes?.header?.subtitle}
          description={consalting?.attributes?.header?.description}
          btn={{
            value: 'Типографика',
            href: '#form_feedback',
          }}
        >
          <Breadcrumbs items={breadcrumbs} />
        </Intro>
      )}
      <ConsultingStandarts elements={consalting?.attributes?.Standarts} />
      <ConsultingServices />
      <ConsultingAdvantages />
      <SecondFeedback
        title="Типографика"
        description={`Типографика`}
        formTemplate={form_1}
      />
      <ConsultingSpeakers />
      <Container>
        <FactPanel />
      </Container>
      <ConsultingSteps />
      <ConsultingQuestions />
      <ConsultingWhy />
      <FeedBack
        title="Типографика"
        descirptionTop="Типографика"
        descirptionBottom="Типографика"
        formTemplate={form_3}
      />
      <ConsultingMoreServices />
    </Layout>
  );
};

export default Consulting;
