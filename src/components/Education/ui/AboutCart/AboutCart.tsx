import { Typography } from '@ui/Typography';
import styles from './styles.module.scss';
import Image from 'next/image';

type Props = {
  icon: string;
  title: string;
};

export const AboutCart = ({ icon, title }: Props) => {
  return (
    <div className={styles.cart}>
      <div className={styles.cart_icon}>
        <Image src={icon} alt={title} width={80} height={80} />
      </div>
      <Typography component="p" variant="mega" type="body" color='black'>
        {title}
      </Typography>
    </div>
  );
};
