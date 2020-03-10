import Layout from '../components/Layout';
import { Component } from 'react';
import fetch from 'isomorphic-unfetch';
export default class About extends Component {
  static async getInitialProps() {
    const response = await fetch(`https://api.github.com/users/ammce`);
    const data = await response.json();
    return {
      user: data,
    };
  }

  render() {
    const { user } = this.props;
    console.log(this.props);
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
