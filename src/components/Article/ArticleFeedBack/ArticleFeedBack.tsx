import { Container } from '@ui/Container';
import styles from './styles.module.scss';
import { Title } from '@ui/Title';
import Slider, { Settings } from 'react-slick';
import { settings } from '@constants/sliderSettings';
import { ArticleFeedBackCart } from './ui/ArticleFeedBackCart';
import { Review } from '@src/services/article.service/types';

export const ArticleFeedBack = ({ data }: { data: Review[] }) => {
  if(!data.length) {
    return
  }
  const options: Settings = {
    ...settings,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2.3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1.3,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Container>
      <Title>Отзывы о событии</Title>
      <div className={styles.feedback}>
        <Slider {...options} className="standarts">
          {data.map((review) => (
            <div key={review.id}>
              <ArticleFeedBackCart
                publishedAt={review.attributes.publishedAt}
                name={review.attributes.title}
                role={review.attributes.role}
                description={review.attributes.description}
              />
            </div>
          ))}
        </Slider>
      </div>
    </Container>
  );
};
