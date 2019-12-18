import React, { FunctionComponent } from 'react';
import './ScreenContainer.scss';

interface IProps {
  style?: any;
}

const ScreenContainer: FunctionComponent<IProps> = props => {
  return (
    <div id="container--screen" style={props.style ? props.style : {}}>
      {props.children}
    </div>
  );
};

export default ScreenContainer;
