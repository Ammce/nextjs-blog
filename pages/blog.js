import Layout from '../components/Layout';
import Link from 'next/link';

const PostLink = ({ title, slug }) => {
  return (
    <li>
      <Link as={slug} href={`/post?title=${title}`}>
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
        <PostLink slug='react-post' title='React' />
        <PostLink slug='angular-post' title='Angular' />
        <PostLink slug='vue-post' title='Vue' />
      </ul>
    </Layout>
  );
};

export default blog;
