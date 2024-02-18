import { FieldError } from 'react-hook-form';
import styles from './styles.module.scss';
import { Typography } from '@ui/Typography';
import cn from 'classnames';

interface InputProps extends React.HTMLProps<HTMLInputElement> {
  error?: FieldError | any;
  text: string;
  variant?: 'default' | 'radio';
}

export const InputCheckbox = ({ error, text, variant = 'default', ...props }: InputProps) => {
  if (variant === 'default') {
    return (
      <label className={cn(styles.checkbox, { [styles.error]: error })}>
        <input type="checkbox" {...props} />
        <span className={styles.checkmark}></span>
        <Typography
          style={{ maxWidth: '230px' }}
          component="div"
          type="body"
          variant="small"
          color="black"
          dangerouslySetInnerHTML={{ __html: text }}
        />
      </label>
    );
  }

  if (variant === 'radio') {
    return (
      <label className={cn(styles.checkbox, { [styles.error]: error })}>
        <input type="checkbox" {...props} />
        <span className={`${styles.checkmark} ${styles.rounded}`}></span>
        <Typography
          component="div"
          type="body"
          variant="mega"
          color="black"
          dangerouslySetInnerHTML={{ __html: text }}
        />
      </label>
    );
  }
};
