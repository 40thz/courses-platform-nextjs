import { EventForm } from '@components/shared/Forms/EventForm';
import styles from './styles.module.scss';
import { Container } from '@ui/Container';
import { Panel } from '@ui/Panel';
import { Title } from '@ui/Title';
import { Typography } from '@ui/Typography';

export const EventFeedBackForm = () => {
  return (
    <section id='form_event'>
      <Container>
        <Panel>
          <Title>Оставьте ваш отзыв</Title>
          <div className={styles.feedback}>
            <div className={styles.feedback_inner}>
              <Typography component="p" type="body" variant="mega" color="black">
                Мы очень ценим ваше мнение и хотели бы услышать ваш отзыв о нашем событии.
                <br /> <br />
                Пожалуйста, поделитесь своими мыслями и впечатлениями с нами, чтобы мы могли улучшить наши мероприятия в
                будущем.
                <br /> <br />
                Спасибо за вашу поддержку и участие в нашем сообществе!
              </Typography>
            </div>
            <EventForm />
          </div>
        </Panel>
      </Container>
    </section>
  );
};
