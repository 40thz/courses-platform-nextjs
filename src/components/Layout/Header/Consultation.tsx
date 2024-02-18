
import { SecondFeedback } from '@components/shared/containers/SecondFeedback';
import { form_2 } from '@constants/formTemplates/form_2';
import { Button } from '@ui/Button';
import { Modal } from '@ui/Modal';
import { useState } from 'react';

export const Consultation = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Button onClick={() => setShowModal(true)}>Консультация</Button>
      <Modal show={showModal} onClose={() => setShowModal(false)}>
        <SecondFeedback
          formTemplate={form_2}
          title="Записаться на консультацию"
          description="
              <p>Оставьте свои контакты - мы перезвоним и ответим на все вопросы или поможем подобрать курс</p>
              <br />
              <p>Или позвоните нам <a href='tel:89621250318'>+7 (962) 125-03-18</a></p>
            "
          column={true}
        />
      </Modal>
    </>
  );
};
