import { Container } from '@ui/Container/Container';
import styles from './styles.module.scss'
import { useMediaQuery } from '@src/hook/useMediaQuery';
import { BuisnesCaseForm } from '@components/shared/Forms/BuisnesCaseForm';
import { BlockLayer } from '@components/shared/Layers/BlockLayer';
import { FormTempate } from '@constants/formTemplates/form_1';

export type FormSectionProps = {
  title: string;
  description: string;
  column?: boolean;
  formTemplate: FormTempate;
};

export const SecondFeedback = ({ column = false, description, title, formTemplate }: FormSectionProps) => {
  const mobile = useMediaQuery(600);

  return (
    <Container padding={!mobile}>
      <BlockLayer title={title} column={column}>
        <div className={styles.desc}>
          <div className="typography color-black body mega" dangerouslySetInnerHTML={{ __html: description }}></div>
        </div>
        <BuisnesCaseForm formTemplate={formTemplate} />
      </BlockLayer>
    </Container>
  );
};
