import Head from 'next/head';
import Header from './Header';
import Footer from './Footer/Footer';
import styles from './styles.module.scss';

type LayoutProps = {
  title?: string;
  description?: string;
  keywords?: string;
  children: any;
};

const Layout = (props: LayoutProps) => {
  return (
    <>
      <Head>
        <title>{`Прагмат - ${props.title}`}</title>
        <meta name="description" content={props.description} />
        <meta property="og:description" content={props.description} />
        <meta name="keywords" content={props.keywords} />
      </Head>
      <div className={styles.wrapper}>
        <Header />
        <div className={styles.content}>{props.children}</div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
