import { Title } from '@ui/Title';
import { Container } from '@ui/Container/Container';
import { QuestionCart } from '@ui/QuestionCart';

export const EducationQuestion = () => (
  <section>
    <Container>
      <Title>Часто задаваемые вопросы</Title>
      <div className="educationQuestion">
        <div className="educationQuestion-column">
          <QuestionCart
            title="Типографика"
            description="Типографика"
          />
          <QuestionCart
            title="Типографика"
            description="Типографика"
          />
          <QuestionCart
            title="Типографика"
            description="Типографика"
          />
        </div>
        <div className="educationQuestion-column">
          <QuestionCart
            title="Типографика"
            description="Типографика"
          />
          <QuestionCart
            title="Типографика"
            description="Типографика"
          />

          <QuestionCart
            title="Типографика"
            description="Типографика"
          />
        </div>
      </div>
    </Container>
  </section>
);
