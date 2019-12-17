import React, { FunctionComponent } from 'react';
import './HeaderContainer.scss';

const HeaderContainer: FunctionComponent = props => {
  return <div id="container--header">{props.children}</div>;
};

export default HeaderContainer;
