import { Typography } from '@ui/Typography';
import styles from './styles.module.scss';

export const ContactCart = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className={styles.cart}>
    <Typography component="h1" type="headlines" variant="big">
      {title}
    </Typography>
    <div className={styles.content}>{children}</div>
  </div>
);
