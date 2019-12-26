import React, { FunctionComponent } from 'react';
import './Icon.scss';

interface IProps {
  copy: string;
  image: string;
  onClick: Function;
}

const Icon: FunctionComponent<IProps> = props => {
  const { copy, onClick, image } = props;
  return (
    <div id="icon--container" onClick={() => (onClick ? onClick() : defaultProps.onClick())}>
      <img className="icon__image" src={image} alt="icon" />
      <div className="icon__title">{copy}</div>
    </div>
  );
};

const defaultProps = {
  onClick: () => {
    return;
  }
};

export default Icon;
