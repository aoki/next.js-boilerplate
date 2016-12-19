import React, {Component, PropTypes} from 'react';

import Head from '../components/head';
import Header from '../components/header';

class Index extends Component {
  static getInitialProps(ctx) {
    console.log('Get Initial Props.');
    console.log('Server side code.');
    console.log(`Path: ${ctx.pathname}`);
    return {
      currentUrl: ctx.pathname
    };
  }

  static propTypes() {
    return {currentUrl: PropTypes.string.isRequired};
  }

  render() {
    return (
      <div>
        <Head title="Next.js Boiler Plate"/>
        <Header currentUrl={this.props.currentUrl}/>
        <h1>Hello Next.js</h1>
        <p><code>{this.props.currentUrl}</code> main contents.</p>
      </div>
    );
  }
}

export default Index;
