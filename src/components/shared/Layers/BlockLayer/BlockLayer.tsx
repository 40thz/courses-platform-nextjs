import styles from './styles.module.scss';
import { Title } from '@ui/Title';
import { Panel } from '@ui/Panel';
type Props = {
  children: React.ReactNode;
  column: boolean;
  title: string;
};
export const BlockLayer = ({ children, column = false, title }: Props) => {
  return (
    <Panel>
      <Title>{title}</Title>

      <div className={`${styles.layer} ${column ? styles.column : ''}`}>{children}</div>
    </Panel>
  );
};
