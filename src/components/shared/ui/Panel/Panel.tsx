import styles from './styles.module.scss';
import cn from 'classnames';
import { DetailedHTMLProps, HTMLAttributes } from 'react';

type PanelProps = {
  children: any;
  className?: string;
  type?: 'big' | 'small' | 'medium';
} & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export const Panel = ({ className = '', children, ...props }: PanelProps) => {
  return (
    <div
      {...props}
      className={cn(`${styles.panel} ${className}`, {
        [styles.small]: props.type === 'small',
        [styles.medium]: props.type === 'medium',
      })}
    >
      {children}
    </div>
  );
};
