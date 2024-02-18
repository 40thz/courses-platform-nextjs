import { FieldError } from 'react-hook-form';
import styles from '../Input/styles.module.scss';
import cn from 'classnames';
interface TextareaProps extends React.HTMLProps<HTMLTextAreaElement> {
  error?: FieldError;
}

export const Textarea = (props: TextareaProps) => (
  <textarea
    className={cn(`${styles.input} ${styles.textarea}  typography body medium`, { [styles.error]: props.error })}
    {...props}
  />
);
