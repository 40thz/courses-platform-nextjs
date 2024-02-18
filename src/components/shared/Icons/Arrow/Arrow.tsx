import { SVGProps } from 'react';
import classes from './styles.module.scss';
import cn from 'classnames';

type ArrowIconProps = {
  type: 'top' | 'left' | 'right' | 'bottom';
  color?: string;
} & SVGProps<SVGSVGElement>;

export const Arrow = ({ type, color = '#011022', ...props }: ArrowIconProps) => {
  const styles = {
    [classes.top]: type === 'top',
    [classes.left]: type === 'left',
    [classes.right]: type === 'right',
    [classes.bottom]: type === 'bottom',
  };

  return (
    <svg
      className={cn(classes.arrow, { ...styles })}
      width="18"
      height="9"
      viewBox="0 0 18 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M1 1L8.24528 7L17 1" stroke={color} strokeWidth="2" />
    </svg>
  );
};
