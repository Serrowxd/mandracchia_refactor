import React, { Component } from 'react';

import { NavContainer, NavImage, NavCall } from '../styles/styles';

import img from '../assets/manlawhead.png';

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
        <NavImage>
          <img src={img} alt="manlaw" />
        </NavImage>
        <h1> Home </h1>
        <h1> About Us </h1>
        <h1> Attorney Profiles </h1>
        <h1> Areas of Practice </h1>
        <h1> Contact </h1>
        <NavCall>
          <h2>
            {' '}
            Call for Consultation <br /> 610-584-0700{' '}
          </h2>
        </NavCall>
      </NavContainer>
    );
  }
}

export default Navigation;
