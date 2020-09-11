import Head from 'next/head';
import Layout from '../../components/layout';

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>post page</title>
      </Head>
      <h1>포스트 페이지</h1>
    </Layout>
  );
}
