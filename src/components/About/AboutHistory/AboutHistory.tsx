import { Container } from "@ui/Container";
import { AboutCart } from "./ui/AboutCart";
import styles from "./styles.module.scss";
import { history } from "@constants/about/historyData";
import { useCallback, useState } from "react";
import { useMediaQuery } from "@src/hook/useMediaQuery";
import { Typography } from "@ui/Typography";

export const AboutHistory = () => {
  const mobile = useMediaQuery(800);
  const [index, setIndex] = useState(0);
  const hancleClick = useCallback((i: number) => {
    setIndex(i);
  }, []);

  return (
    <Container>
      {!mobile && (
        <div
          className={styles.about_history}
          style={{ padding: `${history.length * 25}px  65px 0` }}
        >
          {history.map((cart, i) => (
            <AboutCart
              onClick={() => hancleClick(i)}
              year={cart.year}
              title={cart.title}
              description={cart.description}
              active={index === i}
            />
          ))}
        </div>
      )}

      {mobile && (
        <>
          <div
            className={styles.about_history}
            style={{ padding: `${history.length * 25}px  65px 0` }}
          >
            {history.map((cart, i) => (
              <AboutCart
                onClick={() => hancleClick(i)}
                year={cart.year}
                title={cart.title}
                description={cart.description}
                active={index === i}
              />
            ))}
          </div>
          <div className={styles.content}>
            <Typography
              className={styles.content_title}
              component="p"
              type="headlines"
              variant="big"
            >
              {history[index].title}
            </Typography>
            <Typography
              className={styles.content_description}
              component="p"
              type="body"
              variant="mega"
            >
              {history[index].description}
            </Typography>
          </div>
        </>
      )}
    </Container>
  );
};
