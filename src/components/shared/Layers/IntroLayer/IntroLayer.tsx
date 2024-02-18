import styles from './styles.module.scss';
import { Panel } from '@ui/Panel';
import { StaticImageData } from 'next/image';
import cn from 'classnames';
import { Image } from '@ui/Image';


type IntroLayerProps = {
  children: React.ReactNode;
  src?: StaticImageData | string | any;
  alt?: string;
  className?: string;
  component?: React.ReactNode;
};

export const IntroLayer = ({ children, src, alt, className = '', component }: IntroLayerProps) => (
  <Panel className={cn(styles.introLayer, className)}>
    {children}
    {src && alt && (
      <div className={styles.image}>
        <Image src={src} alt={alt} priority width={575} height={420} />
      </div>
    )}
    {component && component}
  </Panel>
);
