import { Typography } from '@ui/Typography';
import styles from './styles.module.scss';
import { useMediaQuery } from '@src/hook/useMediaQuery';

type Props = {
  year: string;
  active?: boolean;
  title?: string;
  description: string;
  onClick: () => void;
};

export const AboutCart = ({ year, title, description, active, onClick }: Props) => {
  const mobile = useMediaQuery(800);

  return (
    <div className={`${styles.cart} ${active ? styles.active : ''}`}>
      <div onClick={onClick} className={styles.button}>
        <Typography
          className={styles.button_year}
          component="p"
          type="headlines"
          variant="big"
          color={active ? '' : 'gray'}
        >
          {year}
        </Typography>
        <div className={styles.button_figure} />
      </div>
      {!mobile && (
        <div className={styles.content}>
          {title &&
            <Typography className={styles.content_title} component="p" type="headlines" variant="big">
              {title}
            </Typography>}
          <Typography className={styles.content_description} component="p" type="body" variant="mega">
            {description}
          </Typography>
        </div>
      )}
    </div>
  );
};
