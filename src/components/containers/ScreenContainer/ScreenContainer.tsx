import React, { FunctionComponent } from 'react';
import './ScreenContainer.scss';

const ScreenContainer: FunctionComponent = props => {
  return <div id="container--screen">{props.children}</div>;
};

export default ScreenContainer;
