import styles from './styles.module.scss';
import { Typography } from '../Typography';
import cn from 'classnames';
import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  variant?: string;
}

export const Button = ({ children, className = '', variant = 'default', ...props }: ButtonProps) => {
  return (
    <button {...props} className={cn(`${styles.button} ${className}`, { [styles[variant]]: variant })}>
      <Typography color="white" component="p" type="all" variant="btn">
        {children}
      </Typography>
    </button>
  );
};
