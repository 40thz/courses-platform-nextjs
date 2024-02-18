import styles from './styles.module.scss';
import { Typography } from '@ui/Typography';
import Link from 'next/link';

type Props = {
  href: string;
  title: string;
  active?: boolean;
};

export const ToolbarButton = ({ href, title, active = false }: Props) => (
  <Link href={href} className={`${styles.toolbar_item} ${active ? styles.active: ''}`}>
    <Typography component="p" type="body" variant="medium" color="black">
      {title}
    </Typography>
  </Link>
);
