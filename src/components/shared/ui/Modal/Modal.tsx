import React from 'react';
import ReactDOM from 'react-dom';
import styles from './styles.module.scss';
import { Panel } from '@ui/Panel';

interface IModal {
  show: boolean;
  onClose: any;
  children: React.ReactNode;
  itsForm?: boolean;
  className?: string;
}

export const Modal = ({ show, onClose, children, className = '' }: IModal) => {
  const [isBrowser, setIsBrowser] = React.useState(false);

  const close = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    onClose();
  };

  React.useEffect(() => {
    setIsBrowser(true);
  }, [show, onClose]);

  const modalContent = show ? (
    <>
      <div
        onClick={close}
        className={styles.modal}
      >
        <Panel onClick={(e) => e.stopPropagation()} className={`${className} ${styles.body}`}>
          {children}
        </Panel>
      </div>
    </>
  ) : null;

  if (isBrowser) {
    const modalRoot = document.getElementById('modal-root') as HTMLElement;
    return ReactDOM.createPortal(modalContent, modalRoot);
  } else {
    return null;
  }
};
