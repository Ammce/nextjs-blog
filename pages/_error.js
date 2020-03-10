import Layout from '../components/Layout';

export default ({ statusCode }) => {
  return (
    <Layout title='Error'>
      {statusCode ? (
        `Could not load your data, status code is ${statusCode}`
      ) : (
        <p>Could not get that page, sorry bro</p>
      )}
    </Layout>
  );
};
