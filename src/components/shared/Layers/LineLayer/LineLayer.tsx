import styles from './styles.module.scss';
import { DetailedHTMLProps, HTMLAttributes } from 'react';
import Image from 'next/image';
import line from '@assets/img/layer_line.svg';

export const LineLayer = (props: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>) => {
  return (
    <div {...props} className={`${styles.layer} ${props.className}`}>
      <div className={styles.layer_line}>
        <Image src={line} alt="line" />
      </div>

      {props.children}
    </div>
  );
};
