import styles from './styles.module.scss';
import { Typography } from '@ui/Typography';
import Image, { StaticImageData } from 'next/image';

type Props = {
  icon?: StaticImageData;
  text: string;
};

export const ConsultingCart = ({ icon, text }: Props) => (
  <div className={styles.cart}>
    {icon && (
      <div className={styles.cart_icon}>
        <Image src={icon} alt={text} />
      </div>
    )}
    <div className={styles.cart_text}>
      <Typography component="p" type="body" variant="mega">
        {text}
      </Typography>
    </div>
  </div>
);
