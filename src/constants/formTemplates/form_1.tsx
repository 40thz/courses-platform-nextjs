export type FormTempate = {
  tmp: {
    name: string;
    placeholder: string;
  }[];
  options: {
    subject: string;
    btn: string;
  };
};

export const form_1 = {
  tmp: [
    {
      name: 'descirption',
      placeholder: 'Типографика',
    },
    {
      name: 'name',
      placeholder: 'Типографика',
    },
    {
      name: 'phone',
      placeholder: 'Типографика',
    },
  ],
  options: {
    subject: 'Типографика',
    btn: 'Заказать звонок',
  },
} as FormTempate;