import styles from './style.module.scss';
import { Arrow } from '@components/shared/Icons/Arrow';
import cn from 'classnames';
export const SliderArrow = ({ type, ...props }: { type: 'prev' | 'next' }) => {
  return (
    <div {...props} className={cn(styles.sliderArrow, styles[type])}>
      <Arrow type={type === 'prev' ? 'left' : 'right'} />
    </div>
  );
};
