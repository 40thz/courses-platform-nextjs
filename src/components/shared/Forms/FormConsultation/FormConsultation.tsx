import styles from './styles.module.scss';
import { Form } from '@components/shared/Form';
import { SendEmailData, sendEmailService } from '@src/services/sendemail.service';
import { Button } from '@ui/Button';
import { Input } from '@ui/Input';
import { InputCheckbox } from '@ui/InputCheckbox';
import { useState } from 'react';
import { Controller } from 'react-hook-form';
import InputMask from 'react-input-mask';

const types = {
  fiz_lico: 'Физ.лицо',
  ur_lico: 'Юр.лицо',
};

export const FormConsultation = () => {
  const [type, setType] = useState<'fiz_lico' | 'ur_lico'>('fiz_lico');
  const [subject, setSubject] = useState('Получить консультацию');
  const onSubmit = (data: SendEmailData) => sendEmailService.send({ type: types[type], ...data }, subject);

  return (
    <Form<SendEmailData> onSubmit={onSubmit} className={styles.consultation_form}>
      {({ control, formState: { errors } }) => (
        <>
          <Controller
            control={control}
            name="name"
            rules={{ required: true }}
            render={({ field }) => <Input error={errors['name']} label="Имя" placeholder="Ваше имя?" {...field} />}
          />
          <Controller
            control={control}
            name="lastname"
            rules={{ required: true }}
            render={({ field }) => (
              <Input error={errors['lastname']} label="Фамилия" placeholder="Ваша фамилия?" {...field} />
            )}
          />
          <Controller
            control={control}
            name="phone"
            render={({ field }) => (
              <InputMask mask="+7 (999) 999 99-99" maskChar="" value={field.value} onChange={field.onChange}>
                {/* @ts-ignore */}
                {(inputProps) => (
                  <Input error={errors['phone']} label="Телефон" placeholder={'+7 (999) 999-99-99'} {...inputProps} />
                )}
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
            name="email"
            rules={{ required: true }}
            render={({ field }) => (
              <Input error={errors['email']} label="Почта" placeholder="example@mail.ru" {...field} />
            )}
          />
          <Controller
            control={control}
            name="agreement"
            rules={{ required: true }}
            render={({ field }) => (
              <InputCheckbox
                error={errors['agreement']}
                text={`Согласен с условиями <br /> <a href="/polytic.pdf" target="__blank">Политики конфиденциальности</a>`}
                {...field}
              />
            )}
          />
          <div className={styles.input_row}>
            <InputCheckbox
              variant="radio"
              text="Физ лицо"
              checked={type === 'fiz_lico'}
              onChange={() => setType('fiz_lico')}
            />
            <InputCheckbox
              variant="radio"
              text="Юр лицо"
              checked={type === 'ur_lico'}
              onChange={() => setType('ur_lico')}
            />
          </div>
          <Button onClick={() => setSubject('Записаться на обучение')} variant="white">
            Записаться на обучение
          </Button>
          <Button onClick={() => setSubject('Получить консультацию')}>Получить консультацию</Button>
        </>
      )}
    </Form>
  );
};
