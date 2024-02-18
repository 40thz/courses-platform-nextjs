import { Typography } from '@ui/Typography';
import styles from './styles.module.scss';
import { User } from '@components/shared/Icons/User';
import { Computer } from '@components/shared/Icons/Computer';
import { Panel } from '@ui/Panel';
import { declOfNum } from '@utils/declOfNum';
import { useState } from 'react';

export type ProgramCartProps = {
  title: string;
  fulltime: boolean;
  remotely: boolean;
  fulltimeremotely: boolean;
  hours: string;
};

export const ProgramCart = ({ item }: { item: ProgramCartProps }) => {
  const [hover, setHover] = useState(false);
  const prefix = declOfNum(parseInt(item.hours));
  return (
    <Panel
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      type="medium"
      className={styles.cart}
    >
      <div className={styles.cart_left}>
        <Typography component="h1" type="headlines" variant="small" color="black">
          {item.title}
        </Typography>

        <div className={styles.cart_tags}>
          {item.fulltime && (
            <div className={styles.cart_tag}>
              <User />
              <Typography component="h1" type="body" variant="mega" color="black">
                Очно
              </Typography>
            </div>
          )}
          {item.remotely && (
            <div className={styles.cart_tag}>
              <Computer />
              <Typography component="h1" type="body" variant="mega" color="black">
                Дистанционно
              </Typography>
            </div>
          )}
          {item.fulltimeremotely && (
            <div className={styles.cart_tag}>
              <Computer />
              <Typography component="h1" type="body" variant="mega" color="black">
                Очно-заочно
              </Typography>
            </div>
          )}
        </div>
      </div>
      <div className={styles.cart_right}>
        <Typography
          className={styles.cart_typography}
          component="p"
          type="headlines"
          variant="mega"
          color={hover ? 'gradient' : 'gray'}
        >
          {item.hours} {prefix}
        </Typography>
      </div>
    </Panel>
  );
};
