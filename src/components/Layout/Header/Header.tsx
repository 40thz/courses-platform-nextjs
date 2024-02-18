import styles from './styles.module.scss';
import { Typography } from '@ui/Typography';
import { menu } from '@src/constants/menu';
import Link from 'next/link';
import { Logo } from '@components/shared/Icons/Logo';
import { useMediaQuery } from '@src/hook/useMediaQuery';
import { Hamburger } from '@components/shared/Icons/Hamburger';
import { contacts } from '@constants/contacts';
import { formatPhone } from '@utils/formatPhone';
import { Container } from '@ui/Container/Container';
import { Consultation } from './Consultation';
import { VisuallyImpairedBtn } from './VisuallyImpairedBtn';
import { HamburgerMenu } from './HamburgerMenu';

const Header = () => {
  const tablet = useMediaQuery(1200);
  const mobile = useMediaQuery(600);

  return (
    <header className={styles.header}>
      <Container padding={!mobile}>
        <div className={styles.inner}>
          <Link href="/" className={styles.logo}>
            <Logo type={tablet ? 'mobile' : 'desktop'} />
          </Link>
          <div className={styles.nav}>
            {menu
              .filter((item) => !item.scope)
              .map((item, i) => (
                <Link className={styles.link} href={item.href} key={i}>
                  <Typography component="p" type="all" variant="header">
                    {item.name}
                  </Typography>
                </Link>
              ))}
          </div>
          <div className={styles.side}>
            {!tablet && (
              <div className={styles.contacts}>
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
              </div>
            )}
            {!tablet && <Consultation />}

            {mobile && (
              <Typography component="p" type="body" variant="mega">
                {contacts.phone}
              </Typography>
            )}
            <VisuallyImpairedBtn />
            <HamburgerMenu />
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
