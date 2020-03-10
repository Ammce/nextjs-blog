import Layout from '../components/Layout';
import Link from 'next/link';

const PostLink = ({ title }) => {
  return (
    <li>
      <Link href={`/post?title=${title}`}>
        <a>{title} post</a>
      </Link>
    </li>
  );
};

const blog = () => {
  return (
    <Layout title='Blog Page'>
      <div>Welcome to the Home Page</div>
      <ul>
        <PostLink title='React' />
        <PostLink title='Angular' />
        <PostLink title='Vue' />
      </ul>
    </Layout>
  );
};

export default blog;
