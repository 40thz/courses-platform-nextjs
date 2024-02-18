import styles from './styles.module.scss';
import React from 'react';
import Link from 'next/link';
import { Typography } from '@ui/Typography';

type Props = { items: { name: string; href: string }[]; className?: string };

const Breadcrumbs = ({ items, className = '' }: Props) => {
  const arr = [
    {
      name: 'Главная',
      href: '/',
    },
    ...items,
  ];

  return (
    <div className={`${className} ${styles.breadcrumbs}`}>
      {arr.map((item, i) => (
        <div key={i} className={styles.breadcrumb}>
          <Link href={item.href}>
            <Typography component="p" variant="small" type="body" color="gray">
              {item.name}
            </Typography>
          </Link>
          {i !== arr.length - 1 && (
            <Typography component="p" variant="small" type="body" color="gray">
              /
            </Typography>
          )}
        </div>
      ))}
    </div>
  );
};
export default Breadcrumbs;
