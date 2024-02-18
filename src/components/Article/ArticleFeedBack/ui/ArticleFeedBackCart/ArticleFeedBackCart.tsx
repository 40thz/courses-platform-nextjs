import { formatDate } from '@utils/formatDate';
import styles from './styles.module.scss';
import { Typography } from '@ui/Typography';
import { useEffect, useState } from 'react';

type Props = {
  name: string;
  role: string;
  description: string;
  publishedAt: string;
};

export const ArticleFeedBackCart = ({ name, role, description, publishedAt }: Props) => {
  const [hydrated, setHydrated] = useState(false);
  const date = formatDate(publishedAt);

  useEffect(() => {
    setHydrated(true);
  }, []);
  return (
    <div className={styles.cart}>
      <div className={styles.cart_header}>
        <Typography component="h1" type="headlines" variant="medium" color="black">
          {name}
        </Typography>
        <Typography component="h2" type="body" variant="medium" color="gray">
          {role}
        </Typography>
      </div>

      <div className={styles.cart_footer}>
        <Typography component="h1" type="body" variant="mega" color="black">
          {description}
        </Typography>
        {hydrated && (
          <Typography component="h2" type="body" variant="medium" color="gray">
            {date}
          </Typography>
        )}
      </div>
    </div>
  );
};
