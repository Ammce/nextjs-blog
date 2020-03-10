import Link from 'next/link';

import Layout from '../components/Layout';

const index = () => {
  return (
    <Layout title='Home Page'>
      <div>Welcome to the Home Page</div>
      <Link href='/about'>
        <a>Go to about</a>
      </Link>
    </Layout>
  );
};

export default index;
