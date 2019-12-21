import React, { FunctionComponent } from 'react';
import './Navbar.scss';
import ImageMenuIcon from './../../../assets/image/menu.png';
import SvgUser from './../../../assets/components/SvgUser';

interface IProps {
  title: string;
}

export const Navbar: FunctionComponent<IProps> = props => {
  const { title } = props;

  return (
    <div id="navbar">
      <div className="menu-icon">
        <img src={ImageMenuIcon} alt="menu-icon" className="image" />
        <span className="title">{title}</span>
      </div>
      <div className="menu-avatar">
        <SvgUser className="image" />
      </div>
    </div>
  );
};

export default Navbar;
