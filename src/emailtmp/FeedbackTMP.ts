import { SendEmailData } from '@src/services/sendemail.service';
type Props = {
  subject: string;
} & SendEmailData;

export const FeedBackTMP = (data: Props) => `
    <div>
        <h1>${data.subject}</h1>
        <li>Имя - ${data.name},   ${data.type ? `${data.type}` : ''}</li>
        ${data.lastname ? `<li>Фамилия - ${data.lastname}</li>` : ''}
        <li>Телефон - ${data.phone}</li>
        ${data.email ? `<li>Почта - ${data.email}</li>` : ''}
        ${data.descirption ? `<li>Описание - ${data.descirption}</li>` : ''}
        ${data.user ? `<li>Специалист - ${data.user}</li>` : ''}
    </div>
`;
