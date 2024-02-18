import { Typography } from '@ui/Typography';
import styles from './styles.module.scss';
import { Container } from '@ui/Container';
import { Panel } from '@ui/Panel';
import { ContactFeedbackForm } from '@components/shared/Forms/ContactFeedbackForm';
import { ContactSlider } from '../ContactSlider';
import { useState } from 'react';
import { formCarts } from '@constants/contacts/formCarts';
import { Teammate } from '@src/types';
import line from '@assets/img/contacts/bg.svg';
import Image from 'next/image';
import { useMediaQuery } from '@src/hook/useMediaQuery';

export const ContactFeedback = ({ list }: { list: Teammate[] }) => {
  if (!list) {
    return;
  }
  
  const mobile = useMediaQuery(600);
  const [currentUser, setCurrentUser] = useState(list[0].attributes.title);

  const onChange = (index: number) => {
    setCurrentUser(list[index].attributes.title);
  };

  return (
    <Container padding={!mobile}>
      <div className={styles.contactFeedback}>
        <Typography component="h1" type="headlines" variant="big" color="white">
          Получите консультацию специалиста
        </Typography>
        <div className={styles.contactFeedback_inner}>
          <Panel className={styles.contactFeedback_left}>
            <div className={styles.carts}>
              {formCarts.map((cart) => (
                <div key={cart.text} className={styles.cart}>
                  <Typography component="h1" type="headlines" variant="mega" color="gradient">
                    {cart.count}
                  </Typography>
                  <Typography component="p" type="body" variant="mega" color="black">
                    {cart.text}
                  </Typography>
                </div>
              ))}
            </div>
            <ContactFeedbackForm currentUser={currentUser} />
            <div className={styles.line}>
              <Image src={line} alt="Паттерн" />
            </div>
          </Panel>
          <div className={styles.contactFeedback_right}>
            <ContactSlider list={list} onChange={onChange} />
          </div>
        </div>
      </div>
    </Container>
  );
};
