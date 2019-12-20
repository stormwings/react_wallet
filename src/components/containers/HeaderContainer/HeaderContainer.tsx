import React, { FunctionComponent } from 'react';
import './HeaderContainer.scss';
import Navbar from '../../dumb/Navbar/Navbar';

const HeaderContainer: FunctionComponent = () => {
  return (
    <div id="container--header">
      <Navbar title="Wallet" />
    </div>
  );
};

export default HeaderContainer;
