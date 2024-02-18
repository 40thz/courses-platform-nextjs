import styles from './styles.module.scss';
import { Container } from '@ui/Container/Container';
import { Panel } from '@ui/Panel';
import { Typography } from '@ui/Typography';
import { useMediaQuery } from '@src/hook/useMediaQuery';
import { Title } from '@ui/Title';
import { FeedBackForm } from '@components/shared/Forms/FeedBackForm';
import { FormTempate } from '@constants/formTemplates/form_1';

type Props = {
  title: string
  descirptionTop: string
  descirptionBottom?: string
  formTemplate: FormTempate
}

export const FeedBack = ({ title, descirptionTop, descirptionBottom, formTemplate }: Props) => {

  const mobile = useMediaQuery(600);

  return (
    <section id='form_feedback'>
      <Container padding={!mobile}>
        <Panel>
          <Title>{title}</Title>
          <div className={styles.feedback}>
            <div className={styles.feedback_inner}>
              <Typography component="p" type="body" variant="mega" color="black">
                {descirptionTop}
              </Typography>
              {descirptionBottom && (
                <Typography className={styles.descirptionBottom} component="div" type="body" variant="mega" color="black" dangerouslySetInnerHTML={{__html:   descirptionBottom}} />
              )}
            </div>
            <FeedBackForm formTemplate={formTemplate} />
          </div>
        </Panel>
      </Container>
    </section>
  );
};
