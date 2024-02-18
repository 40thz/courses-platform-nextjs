import { FeedBackForm } from '@components/shared/Forms/FeedBackForm';
import styles from './styles.module.scss';
import { Gang } from '@components/shared/Icons/Gang';
import { Logo } from '@components/shared/Icons/Logo';
import { contacts } from '@constants/contacts';
import { menu } from '@constants/menu';
import { useMediaQuery } from '@src/hook/useMediaQuery';
import { Container } from '@ui/Container/Container';
import { Typography } from '@ui/Typography';
import { formatPhone } from '@utils/formatPhone';
import Link from 'next/link';
import { form_4 } from '@constants/formTemplates/form_4';

const Footer = () => {
  const tablet = useMediaQuery(1200);

  return (
    <footer>
      <Container>
        <div className={styles.footer}>
          <div className={`${styles.footer_col} ${styles.left}`}>
            <div className={styles.footer_logo}>
              <Link href="/">
                <Logo />
              </Link>
            </div>
            <div className={styles.footer_inner}>
              <a href={`tel:${formatPhone(contacts.phone)}`}>
                <Typography component="p" type="body" variant="medium">
                  {contacts.phone}
                </Typography>
              </a>
              <a href={`mailto:${contacts.email}`}>
                <Typography component="p" type="body" variant="medium">
                  {contacts.email}
                </Typography>
              </a>
              <div className={styles.footer_social}>
                {contacts.socail.map((soc, i) => (
                  <a key={i} href={soc.href} target="__blank">
                    {soc.icon}
                  </a>
                ))}
              </div>
              <div className={styles.footer_info}>
                <Typography component="div" type="body" variant="small" color="gray">
                  <p>Типографика</p>
                  <p>Типографика</p>
                  <p>Типографика</p>
                  <p>Типографика</p>
                  <p>Типографика</p>
                </Typography>
              </div>
            </div>
          </div>

          <div className={`${styles.footer_col} ${styles.center}`}>
            <div className={styles.footer_inner}>
              <div className={styles.footer_nav}>
                {menu.map((item, i) => (
                  <Link key={i} href={item.href}>
                    <Typography component="p" type="body" variant="medium" color="black">
                      {item.name}
                    </Typography>
                  </Link>
                ))}
              </div>
              {!tablet && (
                <a href="https://mygang.ru/" target="__blank" className={styles.footer_gang}>
                  <Typography component="p" type="body" variant="mega" color="gray">
                    Разработано
                  </Typography>
                  <div className={styles.gang}>
                    <Gang />
                  </div>
                </a>
              )}
            </div>
          </div>

          <div className={`${styles.footer_col} ${styles.right}`}>
            <Typography component="h3" type="headlines" variant="big">
              Обратный звонок
            </Typography>
            <div className={styles.footer_inner}>
              <FeedBackForm formTemplate={form_4} />
            </div>
          </div>
          {tablet && (
            <div className={`${styles.footer_col} ${styles.bottom}`}>
              <a href="https://mygang.ru/" target="__blank" className={styles.footer_gang}>
                <Typography component="p" type="body" variant="mega" color="gray">
                  Разработано
                </Typography>
                <div className={styles.gang}>
                  <Gang />
                </div>
              </a>
            </div>
          )}
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
