import React, {Component, PropTypes} from 'react';
import Head from 'next/head';

export default class extends Component {

  static propTypes() {
    return {title: PropTypes.string};
  }

  render() {
    return (
      <Head>
        <title>{this.props.title}</title>
        <link rel="stylesheet" href="/static/main.css"/>
      </Head>
    );
  }
}
