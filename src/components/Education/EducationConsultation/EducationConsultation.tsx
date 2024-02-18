import { Typography } from '@ui/Typography';
import styles from './styles.module.scss';
import { Container } from '@ui/Container';
import { Image } from '@ui/Image';
import { FormConsultation } from '@components/shared/Forms/FormConsultation';
import { DirectionMoreDTO } from '@src/services/directions.service/types';

export const EducationConsultation = ({ data }: { data: DirectionMoreDTO['attributes']['form'] }) => {
  if (!data) {
    return;
  }
  return (
    <section id='form_consulting'>
      <Container>
        <div className={styles.consultation}>
          <div className={styles.left}>
            <Typography component="h1" type="headlines" variant="big">
              {data.title}
            </Typography>
            <div className={styles.consultation_image}>
              <Image
                src={data?.image?.data?.attributes?.url}
                alt=" Вашу квалификацию подтвердят документы"
                width={600}
                height={300}
              />
            </div>
            <Typography
              component="div"
              type="body"
              variant="mega"
              color="black"
              dangerouslySetInnerHTML={{ __html: data.description }}
            />
          </div>
          <div className={styles.right}>
            <Typography component="h1" type="headlines" variant="big">
              {data.formTitle}
            </Typography>

            <Typography
              className={styles.consultation_subtitle}
              component="div"
              type="headlines"
              variant="small"
              color="black"
              dangerouslySetInnerHTML={{ __html: data.formDescription }}
            />

            <FormConsultation />
          </div>
        </div>
      </Container>
    </section>
  );
};
