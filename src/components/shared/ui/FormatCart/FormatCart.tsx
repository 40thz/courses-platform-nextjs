import { Typography } from '@ui/Typography';
import styles from './styles.module.scss';
import Image from 'next/image';
import line from '@assets/img/line.svg';
import { Panel } from '@ui/Panel';

type Props = {
  titleSize: 'small' | 'medium';
  showBg?: boolean;
  title?: string;
  description?: string;
  item?: {
    name?: string;
    list?: string[];
  };
};

export const FormatCart = ({ item, title, description, showBg = true, titleSize = 'medium' }: Props) => (
  <Panel type="medium" className={styles.formatCart}>
    {showBg && (
      <div className={styles.line}>
        <Image src={line} alt="line" />
      </div>
    )}

    {item && item.name && (
      <Typography component="h1" type="headlines" variant={titleSize} color="black">
        {item.name}
      </Typography>
    )}

    {title && (
      <Typography component="h1" type="headlines" variant={titleSize} color="black">
        {title}
      </Typography>
    )}

    {item && item.list && (
      <>
        {item.list.length <= 3 &&
          item.list.map((item) => (
            <Typography key={item} className={styles.marker} component="h2" type="body" variant="mega" color="black">
              {item}
            </Typography>
          ))}

        {item.list.length > 3 && (
          <div className={styles.content}>
            {item.list.map((item) => (
              <Typography key={item} className={styles.marker} component="h2" type="body" variant="mega" color="black">
                {item}
              </Typography>
            ))}
          </div>
        )}
      </>
    )}

    {description && (
      <Typography component="h2" type="body" variant="mega" color="black">
        {description}
      </Typography>
    )}
  </Panel>
);
