// Components
import Head from 'next/head';

// Custom components
import Layout, { siteTitle } from '../components/layout';
import PizzaCard from '../components/pizza-card';

// Utils
import { fetchAPI } from './api/fetch';
import { API_ENDPOINT } from '../utils/constants';

export async function getStaticProps() {
  const pizzas = await fetchAPI(API_ENDPOINT.PIZZAS);

  return {
    props: {
      postData: pizzas.data,
    },
  };
}

export default function Home({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{siteTitle} | home</title>
      </Head>
      <>
        {postData.map((pizza) => {
          return <PizzaCard key={pizza.id} pizza={pizza} />;
        })}
      </>
    </Layout>
  );
}
