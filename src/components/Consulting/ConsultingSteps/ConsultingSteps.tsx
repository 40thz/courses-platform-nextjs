import styles from './styles.module.scss';
import { Container } from '@ui/Container';
import { Title } from '@ui/Title';
import { StepCart } from '../ui/StepCart';
import { Figure1 } from './ui/Figure1';
import { useMediaQuery } from '@src/hook/useMediaQuery';

export const ConsultingSteps = () => {
  const tablet = useMediaQuery(1200);
  return (
    <section>
      <Container>
        <Title>Этапы работы</Title>
        <div className={styles.steps}>
          {tablet ? (
            <>
              <StepCart
                title="Диагностика"
                count="1"
                description="Диагностика (аудит) существующей системы менеджмента, определение сильных и слабых сторон организации и поиск решений для оптимизации существующих процессов. "
              />
              <StepCart
                title="Структурирование"
                count="2"
                description="Структурирование действующей системы управления Компании, обучение персонала, совместная разработка документов."
              />
              <StepCart
                title="Согласование"
                count="3"
                description="Согласование и утверждение документов, обучение персонала, анализ ошибок и корректировка разработанной документации."
              />
              <StepCart
                title="Сбор данных"
                count="4"
                description="Анализ системы, контроль соблюдения регламентов, обучение статистическому анализу."
              />
              <StepCart
                title="Анализ системы"
                count="5"
                description="Сбор данных о функционировании системы, обучение внутренним аудитам, проведение внутренних аудитов, анализ результативности системы менеджмента. "
              />
            </>
          ) : (
            <>
              <div className={styles.header}>
                <StepCart
                  title="Диагностика"
                  count="1"
                  description="Диагностика (аудит) существующей системы менеджмента, определение сильных и слабых сторон организации и поиск решений для оптимизации существующих процессов. "
                />
                <StepCart
                  title="Структурирование"
                  count="2"
                  description="Структурирование действующей системы управления Компании, обучение персонала, совместная разработка документов."
                />
              </div>
              <div className={styles.footer}>
                <StepCart
                  title="Согласование"
                  count="3"
                  description="Согласование и утверждение документов, обучение персонала, анализ ошибок и корректировка разработанной документации."
                />
                <StepCart
                  title="Сбор данных"
                  count="4"
                  description="Анализ системы, контроль соблюдения регламентов, обучение статистическому анализу."
                />
                <StepCart
                  title="Анализ системы"
                  count="5"
                  description="Сбор данных о функционировании системы, обучение внутренним аудитам, проведение внутренних аудитов, анализ результативности системы менеджмента. "
                />
              </div>
            </>
          )}
        </div>
      </Container>
    </section>
  );
};
