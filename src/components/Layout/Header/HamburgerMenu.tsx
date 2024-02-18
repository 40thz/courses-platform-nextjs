import { menu } from '@constants/menu';
import styles from './styles.module.scss';

import { Hamburger } from '@components/shared/Icons/Hamburger';
import Link from 'next/link';
import { Typography } from '@ui/Typography';
import { Consultation } from './Consultation';
import { useState } from 'react';
import { HamburgerClose } from '@components/shared/Icons/HamburgerClose';

export const HamburgerMenu = () => {
  const [active, setActive] = useState(false);
  return (
    <div style={{ position: 'relative' }}>
      <div onClick={() => setActive(!active)}>
        {!active && <Hamburger className={styles.hamburger} />}
        {active && <HamburgerClose className={styles.hamburger_close} />}
      </div>

      {active && (
        <div className={styles.hamburger_menu}>
          {menu
            .filter((item) => !item.scope)
            .map((item, i) => (
              <Link className={styles.link} href={item.href} key={i}>
                <Typography component="p" type="all" variant="header">
                  {item.name}
                </Typography>
              </Link>
            ))}

        
            <Consultation />
 
        </div>
      )}
    </div>
  );
};
