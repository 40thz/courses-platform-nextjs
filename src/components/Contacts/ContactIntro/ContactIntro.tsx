import styles from './styles.module.scss';
import Breadcrumbs from '@components/shared/Breadcrumbs/Breadcrumbs';
import { Container } from '@ui/Container';
import { Typography } from '@ui/Typography';
import { ContactCart } from '../ui/ContactCart';
import { contacts } from '@constants/contacts';
import { formatPhone } from '@utils/formatPhone';
import { YandexMap } from '../ui/YandexMap';

export const ContactIntro = () => {
  const items = [{ name: 'Контакты', href: '#' }];
  return (
    <Container>
      <div className={styles.intro}>
        <Breadcrumbs className={styles.breadcrumbss} items={items} />
        <Typography component="h1" type="headlines" variant="big">
          Контакты
        </Typography>
        <div className={styles.intro_inner}>
          <div className={styles.intro_side}>
            <ContactCart title="Офис">
              <Typography component="p" type="body" variant="mega" color="black">
                Типографика
              </Typography>
            </ContactCart>
            <ContactCart title="Пишите">
              <a href={`mailto:${contacts.email}`}>
                <Typography component="p" type="body" variant="mega" color="black">
                  {contacts.email}
                </Typography>
              </a>
            </ContactCart>
            <ContactCart title="Звоните">
              <a href={`tel:${formatPhone(contacts.phone)}`}>
                <Typography component="p" type="body" variant="mega" color="black">
                  {contacts.phone}
                </Typography>
              </a>
              <Typography component="p" type="body" variant="mega" color="gray">
                Типографика
              </Typography>
            </ContactCart>
            <ContactCart title="Социальные сети">
              <div className={styles.social}>
                {contacts.socail.map((soc, i) => (
                  <a key={i} href={soc.href} target="__blank">
                    {soc.icon}
                  </a>
                ))}
              </div>
            </ContactCart>
          </div>
          <div className={styles.map}>
            <YandexMap />
          </div>
        </div>
      </div>
    </Container>
  );
};
