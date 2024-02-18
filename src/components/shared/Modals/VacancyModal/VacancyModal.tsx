import { Typography } from '@ui/Typography';
import styles from './styles.module.scss';
import { Button } from '@ui/Button';
import { useState } from 'react';
import { Modal } from '@ui/Modal';
import { SecondFeedback } from '@components/shared/containers/SecondFeedback';
import { form_2 } from '@constants/formTemplates/form_2';
import { VacancyDTO } from '@src/services/vacancy.service/types';

export const VacancyModal = ({ data }: { data: VacancyDTO }) => {
  const [show, setShow] = useState(false);

  return (
    <div className={styles.vacancy}>
      <Typography component="h1" type="headlines" variant="big" color="black">
        Вакансия - {data.attributes.title}
      </Typography>
      <Typography component="h1" type="headlines" variant="big" color="black">
        {data.attributes.partner.data.attributes.title}
      </Typography>
      <Typography className={styles.title} component="h1" type="body" variant="mega" color="black">
        Требования:
      </Typography>
      <Typography
        component="div"
        type="body"
        variant="mega"
        color="black"
        dangerouslySetInnerHTML={{ __html: data.attributes.description }}
      />
      <Typography className={styles.title} component="h1" type="body" variant="mega" color="black">
        Академия предлагает:
      </Typography>
      <div className={styles.vacancy_list}>
        {data.attributes.list &&
          data.attributes.list.map((item) => (
            <Typography
              key={item.id}
              className={styles.vacancy_list_item}
              component="div"
              type="body"
              variant="mega"
              color="black"
              dangerouslySetInnerHTML={{ __html: item.title }}
            />
          ))}
      </div>

      <Button onClick={() => setShow(true)}>Откликнуться</Button>
      <Modal show={show} onClose={() => setShow(false)}>
        <SecondFeedback
          formTemplate={{
            ...form_2,
            options: {
              subject: `Отклик на вакансию ${data.attributes.title} - ${data.attributes.partner.data.attributes.title}`,
              btn: 'Откликнуться',
            },
          }}
          title="Откликнуться на вакансию"
          description="Заполните форму или отправьте нам резюме на электронную почту info@abk-pragmat.ru"
          column={true}
        />
      </Modal>
    </div>
  );
};
