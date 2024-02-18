import { Button } from '@ui/Button';
import styles from './styles.module.scss';
import { Form } from '@components/shared/Form';
import { Input } from '@ui/Input';
import { InputCheckbox } from '@ui/InputCheckbox';
import { Textarea } from '@ui/Textarea';
import { Controller } from 'react-hook-form';
import InputMask from 'react-input-mask';
import { SendEmailData, sendEmailService } from '@src/services/sendemail.service';

export const ContactFeedbackForm = ({ currentUser }: { currentUser: string }) => {
  const rules = {
    required: true,
  };

  const onSubmit = (data: SendEmailData) => {
    sendEmailService.send({ ...data, user: currentUser }, 'Форма контактов');
  };

  return (
    <Form<SendEmailData> onSubmit={onSubmit}>
      {({ control, formState: { errors } }) => (
        <>
          <div className={styles.form}>
            <Controller
              control={control}
              name="name"
              rules={rules}
              render={({ field }) => <Input error={errors['name']} placeholder="Ваше имя*" {...field} />}
            />
            <Controller
              control={control}
              name="phone"
              render={({ field }) => (
                <InputMask mask="+7 (999) 999 99-99" maskChar="" value={field.value} onChange={field.onChange}>
                  {/* @ts-ignore */}
                  {(inputProps) => <Input placeholder="+7 (999) 999-99-99" error={errors['phone']} {...inputProps} />}
                </InputMask>
              )}
              rules={{
                required: {
                  value: true,
                  message: "Поле 'Телефон' обязателен для заполнения",
                },
                minLength: {
                  value: 18,
                  message: 'Некорректное заполнение',
                },
              }}
            />

            <Controller
              control={control}
              name="descirption"
              rules={rules}
              render={({ field }) => (
                <Textarea error={errors['descirption']} placeholder="Поле для комментария*" {...field} />
              )}
            />
            <Controller
              control={control}
              name="agreement"
              rules={rules}
              render={({ field }) => (
                <InputCheckbox
                  error={errors['agreement']}
                  text={`Согласен с условиями <br /> <a href="/polytic.pdf" target="__blank">Политики конфиденциальности</a>`}
                  {...field}
                />
              )}
            />
            <div>
              <Button>Записаться</Button>
            </div>
          </div>
        </>
      )}
    </Form>
  );
};
