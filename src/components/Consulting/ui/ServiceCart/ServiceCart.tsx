import styles from './styles.module.scss';
import Image, { StaticImageData } from 'next/image';
import { Typography } from '@ui/Typography';

export const ServiceCart = ({
  image,
  title,
  description,
}: {
  image: StaticImageData | string;
  title: string;
  description: string;
}) => (
  <div className={styles.cart}>
    <div className={styles.cart_image}>
      <Image src={image} alt="" />
    </div>
    <div className={styles.cart_side}>
      <Typography component="h1" type="headlines" variant="medium" color="black">
        {title}
      </Typography>
      <Typography component="p" type="body" variant="mega" color="black">
        {description}
      </Typography>
    </div>
  </div>
);
