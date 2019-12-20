import React, { FunctionComponent } from 'react';
import './ScreenContainer.scss';

interface IProps {
  style?: any;
  className?: string;
}

const ScreenContainer: FunctionComponent<IProps> = props => {
  return (
    <div id="container--screen" className={props.className ? props.className : ''} style={props.style ? props.style : {}}>
      {props.children}
    </div>
  );
};

export default ScreenContainer;
