import { FieldError } from 'react-hook-form';
import styles from './styles.module.scss';
import cn from 'classnames';
import { Typography } from '@ui/Typography';

interface InputProps extends React.HTMLProps<HTMLInputElement> {
  error?: FieldError;
  label?: string;
}

export const Input = ({ label, error, ...props }: InputProps) => {
  if (!label) {
    return <input className={cn(`${styles.input} typography body medium`, { [styles.error]: error })} {...props} />;
  }

  if (label) {
    return (
      <label className={styles.label}>
        <Typography component="p" type="body" variant="mega" color='black'>
          {label}
        </Typography>
        <input className={cn(`${styles.input} typography body medium`, { [styles.error]: error })} {...props} />
      </label>
    );
  }
};
