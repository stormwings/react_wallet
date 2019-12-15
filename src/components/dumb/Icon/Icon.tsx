import React, { FunctionComponent } from 'react';
import './Icon.scss';

// example
/* <Icon copy="Mariano" image={addIcon} onClick={() => console.log('Mariano')} /> */

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
  onClick: () => console.log('onClick empty')
};

export default Icon;
