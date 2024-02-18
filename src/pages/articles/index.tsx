import { GetServerSideProps } from "next";


export const getServerSideProps: GetServerSideProps = async () => {
  return { notFound: true, props: {} };
};

const Articles = () => null;

export default Articles;
