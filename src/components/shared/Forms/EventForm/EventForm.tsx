import { Form } from '@components/shared/Form';
import styles from './styles.module.scss';
import { SendEmailData, sendEmailService } from '@src/services/sendemail.service';
import { Button } from '@ui/Button';
import { Input } from '@ui/Input';
import { InputCheckbox } from '@ui/InputCheckbox';
import { Textarea } from '@ui/Textarea';

import { Controller, useForm } from 'react-hook-form';
import { reviewService } from '@src/services/review.service/review.service';
import InputMask from 'react-input-mask';

const rules = {
  required: true,
};

type FormData = {
  role: string;
  company: string;
} & SendEmailData;

export const EventForm = () => {
  const onSubmit = (data: FormData) => {
    reviewService.createReview({
      title: data.name,
      description: data.descirption || '',
      phone: data.phone,
      role: data.role,
      company: data.company,
    });
  };

  return (
    <Form<FormData> onSubmit={onSubmit}>
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
                <Textarea error={errors['descirption']} placeholder="Напишите свой отзыв здесь*" {...field} />
              )}
            />
            <Controller
              control={control}
              name="role"
              render={({ field }) => <Input error={errors['role']} placeholder="Ваша должность?" {...field} />}
            />
            <Controller
              control={control}
              name="company"
              render={({ field }) => <Input error={errors['company']} placeholder="Ваша компания?" {...field} />}
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
              <Button>Отправить форму</Button>
            </div>
          </div>
        </>
      )}
    </Form>
  );
};
