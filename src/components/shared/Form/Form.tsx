import styles from './styles.module.scss';
import { Modal } from '@ui/Modal';
import { useState } from 'react';
import { FieldValues, SubmitHandler, UseFormProps, UseFormReturn, useForm } from 'react-hook-form';
import { Checkbox } from '../Icons/Checkbox';
import { Typography } from '@ui/Typography';
import { Button } from '@ui/Button';
import Link from 'next/link';
import { SendEmailData } from '@src/services/sendemail.service';

type FormProps<TFormValues extends FieldValues> = {
  className?: string;
  onSubmit: SubmitHandler<TFormValues>;
  children: (methods: UseFormReturn<TFormValues>) => React.ReactNode;
  options?: UseFormProps<TFormValues>;
  id?: string;
};

export const Form = function <T extends FieldValues>({ onSubmit, children, options, id, className }: FormProps<T>) {
  const methods = useForm<T>({ ...options });
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <form
        className={className}
        onSubmit={methods.handleSubmit((data) => {
          onSubmit(data);
          setShowModal(true);

          methods.reset({
            //@ts-ignore
            name: '',
            phone: '',
            descirption: '',
            lastname: '',
            email: '',
            role: '',
            company: ''
          });
        })}
        id={id}
      >
        {children(methods)}
      </form>
      <Modal className={styles.modal} show={showModal} onClose={() => setShowModal(false)}>
        <div className={styles.header}>
          <div className={styles.header_logo}>
            <Checkbox />
          </div>
          <div className={styles.header_title}>
            <Typography component="p" type="headlines" variant="big" color="black">
              Спасибо
            </Typography>
            <Typography component="p" type="body" variant="mega" color="black">
              Ваши данные успешно отправлены
            </Typography>
          </div>
        </div>
        <div className={styles.footer}>
          <Link href='/' onClick={() => setShowModal(false)}>
            <Button variant="white">На главную</Button>
          </Link>
          <Button onClick={() => setShowModal(false)}>Закрыть</Button>
        </div>
      </Modal>
    </>
  );
};
