import Layout from '../components/Layout';
import { withRouter } from 'next/router';

const post = props => {
  const { router } = props;
  return (
    <Layout title={router.query.title}>
      <div>Welcome to the post page</div>
      <p>HELELJDAISJD ISJA DOAJSIO DJAIOSJ DOASOI DJOASJ ODAJSOD s</p>
    </Layout>
  );
};

export default withRouter(post);
