import React, { Component } from 'react';

import { NavContainer } from '../../reducer/styles';

class Navigation extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      scrolled: false,
      isTop: true,
    };
    this.navScroll = this.navScroll.bind(this);
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  componentDidMount() {
    window.addEventListener('scroll', () => {
      const isTop = window.scrollY < 100;
      if (isTop !== this.state.isTop) {
        this.navScroll();
      } else {
        this.setState({ scrolled: false });
      }
    });
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.navScroll);
  }

  navScroll() {
    this.setState({ scrolled: true });
  }

  render() {
    const scrolled = this.state.scrolled;
    return (
      <NavContainer>
        <h1> OwO </h1>
        <h1> OwO </h1>
        <h1> OwO </h1>
        <h1> OwO </h1>
      </NavContainer>
    );
  }
}

export default Navigation;
