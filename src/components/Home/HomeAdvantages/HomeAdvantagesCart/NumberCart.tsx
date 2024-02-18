import styles from './styles.module.scss';
import { Typography } from '@ui/Typography';

type HomeAdvantagesCartProps = {
  text: string;
  type: 'big' | 'small';
};

export const HomeAdvantagesCart = ({ text, type }: HomeAdvantagesCartProps) => (
  <div className={`${styles.advantage_cart} ${styles[type]}`}>
    <Typography component="h3" type="body" variant={type === 'small' ? 'medium' : 'mega'}>
      {text}
    </Typography>
  </div>
);
