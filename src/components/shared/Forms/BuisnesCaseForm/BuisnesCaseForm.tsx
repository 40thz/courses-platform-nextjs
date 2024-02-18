import styles from './styles.module.scss';
import { Form } from '@components/shared/Form';
import { FormTempate } from '@constants/formTemplates/form_1';
import { SendEmailData, sendEmailService } from '@src/services/sendemail.service';
import { uploadService } from '@src/services/upload.service/upload.service';
import { Button } from '@ui/Button';
import { FileUpload } from '@ui/FileUpload';
import { Input } from '@ui/Input';
import { InputCheckbox } from '@ui/InputCheckbox';
import { Textarea } from '@ui/Textarea';
import { useState } from 'react';
import { Controller } from 'react-hook-form';
import InputMask from 'react-input-mask';
const rules = {
  required: true,
};

export const BuisnesCaseForm = ({ formTemplate }: { formTemplate: FormTempate }) => {
  const [file, setFile] = useState<FormData>();
  const { tmp, options } = formTemplate;

  const onSubmit = async (data: SendEmailData) => {
    let fileUrl: string | null = null;
    let fileID: number | null = null;

    if (file) {
      const fileData = (await uploadService.upload(file)) as { url: string; id: number }[];
      fileUrl = fileData[0].url;
      fileID = fileData[0].id;
    }
    if (fileUrl) await sendEmailService.send({ file: fileUrl, ...data }, options.subject);
    if (!fileUrl) await sendEmailService.send(data, options.subject);

    setTimeout(() => uploadService.destroy(fileID || 0), 3000);
  };

  const uploadFile = async (file: File) => {
    const data = new FormData();
    data.append('files', file);
    setFile(data);
  };

  return (
    <Form<any> onSubmit={onSubmit} className={styles.form}>
      {({ control, formState: { errors } }) => (
        <>
          <div className={styles.form_left}>
            <Controller
              control={control}
              name={tmp[0].name}
              rules={rules}
              render={({ field }) => (
                <Textarea error={errors[tmp[0].name] as any} placeholder={tmp[0].placeholder} {...field} />
              )}
            />
            <FileUpload onChange={uploadFile} />
          </div>
          <div className={styles.form_right}>
            <Controller
              control={control}
              name={tmp[1].name}
              rules={rules}
              render={({ field }) => (
                <Input error={errors[tmp[1].name] as any} placeholder={tmp[1].placeholder} {...field} />
              )}
            />
            <Controller
              control={control}
              name="phone"
              render={({ field }) => (
                <InputMask mask="+7 (999) 999 99-99" maskChar="" value={field.value} onChange={field.onChange}>
                  {/* @ts-ignore */}
                  {(inputProps) => (
                    <Input error={errors[tmp[2].name] as any} placeholder={tmp[2].placeholder} {...inputProps} />
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
            <Button>{options.btn}</Button>
          </div>
        </>
      )}
    </Form>
  );
};
