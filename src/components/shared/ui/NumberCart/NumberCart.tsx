import styles from './styles.module.scss';
import { Typography } from '@ui/Typography';

export const NumberCart = ({ count, name }: { count: string; name: string }) => {
  return (
    <div className={styles.number_item}>
      <Typography component="h2" type="headlines" variant="mega" color="gradient">
        {count}
      </Typography>
      <Typography component="p" type="body" variant="mega">
        {name}
      </Typography>
    </div>
  );
};
