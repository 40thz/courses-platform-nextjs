import { StaticImageData } from 'next/image';
import { Image } from '@ui/Image';
import styles from './styles.module.scss';
import img from '@assets/img/article/bg.jpg';
import { Play } from '@components/shared/Icons/Play';
import { Modal } from '@ui/Modal';
import { useState } from 'react';
import { YoutubeEmbed } from '@components/shared/YoutubeEmbed';

type Props = {
  videoUrl?: string;
  image?: StaticImageData | string;
};

export const SliderCart = ({ videoUrl, image }: Props) => {
  const [modalActive, setModalActive] = useState(false);

  if (!videoUrl) {
    return (
      <div className={styles.cart}>
        <Image src={image ? image : img} alt="Картинка" width={512} height={350} />
      </div>
    );
  }

  if (videoUrl) {
    return (
      <>
        <div className={styles.cart}>
          <Image src={image ? image : img} alt="Картинка" width={512} height={350} />
          <div onClick={() => setModalActive(true)} className={styles.cart_play}>
            <Play />
          </div>
        </div>

        <Modal className={styles.modal_video} show={modalActive} onClose={() => setModalActive(false)}>
          <YoutubeEmbed embedId={videoUrl} />
        </Modal>
      </>
    );
  }

  return null
};
