import Layout from '../components/Layout';
import { Component } from 'react';
import fetch from 'isomorphic-unfetch';
import Error from './_error';
export default class About extends Component {
  static async getInitialProps() {
    const response = await fetch(`https://api.github.com/users/ammce`);
    const data = await response.json();
    const statusCode = response.status > 200 ? response.status : false;
    return {
      user: data,
      statusCode,
    };
  }

  render() {
    const { user, statusCode } = this.props;
    if (statusCode) {
      return <Error statusCode={statusCode} />;
    }
    return (
      <Layout title='About Page'>
        <p>{user.name}</p>
        <img src={user.avatar_url} height='200px' />
        <p>{user.bio}</p>
        <img src='/static/jslogo.png' alt='fullstack-js' height='200px' />
      </Layout>
    );
  }
}
