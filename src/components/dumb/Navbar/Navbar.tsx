import React, { FunctionComponent } from 'react';
import './Navbar.scss';
import image from './../../../assets/menu-navbar.svg';
import myavatar from './../../../assets/user.svg';
import Avatar from '../Avatar/Avatar';

interface IProps {
  title: string;
}

export const Navbar: FunctionComponent<IProps> = props => {
  const { title } = props;

  return (
    <div className="temporalcontainer">
      <div id="navbar">
        <div className="menu-icon">
          <img src={image} alt="menu button" className="image" />
          <span className="title">{title}</span>
        </div>
        <div className="menu-avatar">
          <Avatar image={myavatar} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
