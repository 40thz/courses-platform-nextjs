import { VisuallyImpaired } from '@components/shared/Icons/VisuallyImpaired';
import { VisuallyImpairedContext } from '@src/pages/_app';
import { useContext, useState } from 'react';

import styles from './styles.module.scss';
import { Typography } from '@ui/Typography';

export const VisuallyImpairedBtn = () => {
  const setVisuallyImpaired = useContext(VisuallyImpairedContext);
  const [active, setActive] = useState(false);

  return (
    <div
      style={{ position: 'relative', cursor: 'pointer' }}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      onClick={() => setVisuallyImpaired((prev) => !prev)}
    >
      <VisuallyImpaired className={styles.visuallyImpaired} />
      {active && (
        <div className={styles.tooltip}>
          <Typography component="p" type="body" variant="medium" color="black">
            Версия для слабовидящих
          </Typography>
        </div>
      )}
    </div>
  );
};
