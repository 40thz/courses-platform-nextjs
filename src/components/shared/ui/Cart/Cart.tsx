import styles from './styles.module.scss';
import { Typography } from '@ui/Typography';
import { StaticImageData } from 'next/image';

import cn from 'classnames';
import { useRef, useState } from 'react';
import { useOutsideClick } from '@src/hook/useOutsideClick';
import { Modal } from '@ui/Modal';
import { VacancyModal } from '@components/shared/Modals/VacancyModal';
import { VacancyDTO } from '@src/services/vacancy.service/types';
import { Image } from '@ui/Image';

type CartProps = {
  opened?: boolean;
  image: StaticImageData | string;
  title: string;
  description?: string;
  className?: string;
  modal?: VacancyDTO;
};

export const Cart = ({ title, image, opened = false, description, className = '', modal }: CartProps) => {
  const [isActive, setActive] = useState(false);
  const [modalIsActive, setModalIsActive] = useState(false);
  const descRef = useRef<HTMLDivElement>(null);

  const ref = useOutsideClick(() => {
    if (!opened) return;
    setActive(false);
  });

  const handleClick = () => {
    if (modal) {
      setModalIsActive(true);
      return;
    }
    if (!opened) return;
    setActive(!isActive);
  };

  return (
    <>
      <div
        ref={ref}
        onClick={handleClick}
        className={cn(`${styles.cart} ${className}`, { [styles.opened]: opened, [styles.active]: isActive })}
      >
        <Image src={image} alt={title} fill />
        <div className={styles.cart_title}>
          <Typography component="h1" type="headlines" variant="small">
            {title}
          </Typography>

          {opened && description && (
            <div style={{ height: isActive ? descRef.current?.clientHeight : 0 }} className={styles.cart_description}>
              <div ref={descRef}>
                <Typography
                  className={styles.cart_typography}
                  component="div"
                  type="body"
                  variant="mega"
                  dangerouslySetInnerHTML={{ __html: description }}
                />
              </div>
            </div>
          )}
        </div>
      </div>

      {modal && (
        <Modal onClose={() => setModalIsActive(false)} show={modalIsActive}>
          <VacancyModal data={modal} />
        </Modal>
      )}
    </>
  );
};
