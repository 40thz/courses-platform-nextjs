import { DetailedHTMLProps, HTMLAttributes } from 'react';
import styles from './styles.module.scss';
import { Typography } from '@ui/Typography';

export const Title = ({
  children,
  className,
  ...props
}: DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>) => (
  <Typography {...props} className={`${styles.title} ${className}`} component="h1" type="headlines" variant="big">
    {children}
  </Typography>
);
