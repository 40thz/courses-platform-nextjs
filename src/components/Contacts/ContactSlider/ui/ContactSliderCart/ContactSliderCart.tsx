import pattern from '@assets/img/about/team/cart_bg.svg';
import styles from './styles.module.scss';
import  { StaticImageData } from 'next/image';
import { Typography } from '@ui/Typography';
import teammate from '@assets/img/about/team/teammate.png';
import { Image } from '@ui/Image';

type Props = {
  image?: StaticImageData | string;
  title: string;
  role: string;

  className?: string;
};

export const ContactSliderCart = ({ image, title, role, className }: Props) => (
  <div className={`${className} ${styles.cart}`}>
    <div className={styles.cart_image}>
      <Image withUrl={false} className={styles.cart_image_pattern} src={pattern} alt="Паттерн" />
      <Image
        className={styles.cart_image_teammate}
        src={image ? image : teammate}
        alt={title}
        width={330}
        height={340}
      />
    </div>

    <Typography component="h1" type="headlines" variant="small" color="white">
      {title}
    </Typography>
    <Typography component="h1" type="body" variant="mega" color="white">
      {role}
    </Typography>
  </div>
);
