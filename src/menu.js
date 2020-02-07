import React, { Component } from 'react';
import './menu.css';
import Icon from './images/logo.png';

const MenuLogo = () => {
  return (
    <div className="logo">
        <div className="logo-icon">
            <img className="logo-icon-image" src={Icon} alt=""/>
        </div>
        <div className="logo-tasks">Tasks</div>
    </div>
  )
}

class Menu extends Component {
  render() {
    return (
      <div className="menu">
        <div className="background">
          <MenuLogo />
        </div>
      </div>
    )
  }
}

export default Menu;