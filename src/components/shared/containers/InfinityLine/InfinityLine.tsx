import { Typography } from '@ui/Typography';
import styles from './styles.module.scss';
import { Tag } from '@src/services/article.service/types';

export const InfinityLine = ({ list, speed }: { list: Tag[], speed: number }) => {
  if (list && list.length === 0) {
    return null;
  }

  return (
    <section>
      <div className={styles.marquee}>
        <ul style={{animation: `scroll ${speed}s linear infinite`}} className={styles.marquee__content}>
          {list && list.map((item) => (
            <li>
              <Typography
                key={item.id}
                component="div"
                type="headlines"
                variant="big"
                dangerouslySetInnerHTML={{ __html: item.title }}
              />
            </li>
          ))}
        </ul>

        <ul style={{animation: `scroll ${speed}s linear infinite`}} aria-hidden="true" className={styles.marquee__content}>
          {list && list.map((item) => (
            <li>
              <Typography
                key={item.id}
                component="div"
                type="headlines"
                variant="big"
                dangerouslySetInnerHTML={{ __html: item.title }}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
