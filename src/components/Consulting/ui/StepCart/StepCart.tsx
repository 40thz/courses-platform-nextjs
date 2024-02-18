import styles from './styles.module.scss';
import { Typography } from '@ui/Typography';
import Image from 'next/image';
import { DetailedHTMLProps, HTMLAttributes } from 'react';
import line from '@assets/img/consulting/line.svg';

type Props = { bg?: React.ReactNode; description: string; count: string } & DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

export const StepCart = ({ bg, title, description, count, ...props }: Props) => {
  return (
    <div {...props} className={styles.cart}>
      <div className={styles.header}>
        <Typography component="h1" type="headlines" variant="small" color="black">
          {title}
        </Typography>

        <Typography component="h2" type="headlines" variant="mega" color="gradient">
          {count}
        </Typography>
      </div>
      <Typography component="p" type="body" variant="mega" color="black">
        {description}
      </Typography>
      <div className={styles.line}>
        <Image src={line} alt={title as string} />
      </div>
    </div>
  );
};
