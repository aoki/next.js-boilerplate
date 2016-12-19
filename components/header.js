import React, {PropTypes, Component} from 'react';
import Link from 'next/link';
import css from 'next/css';

const styles = {
  header: css({
    display: 'flex',
    marginBottom: 20
  }),

  link: isActive => css({
    // marginRight: 20,
    fontSize: '0.8rem',
    color: isActive ? '#d00' : '#aaa',
    textDecoration: 'none',
    paddingTop: 2,
    paddingBottom: 2,
    paddingLeft: 10,
    paddingRight: 10,
    borderBottom: `1px solid ${isActive ? '#aaa' : 'transparent'}`,
    transition: 'color .25s',
    fontWeight: isActive ? '300' : '100',
    ':hover': {
      color: 'black'
    }
  })
};

const links = [
  {href: '/', text: 'Home'},
  {href: '/about', text: 'About'}
];

class Header extends Component {
  static propTypes() {
    return {
      currentUrl: PropTypes.string.isRequired
    };
  }

  render() {
    const linkDoms = links.map(l => (
      <Link key={l.href} href={l.href}>
        <a className={styles.link(this.props.currentUrl === l.href)}>{l.text}</a>
      </Link>
    ));
    return (
      <div className={styles.header}>
        {linkDoms}
      </div>
    );
  }
}

export default Header;
